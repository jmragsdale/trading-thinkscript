#!/usr/bin/env python3
"""Normalize saved research only. No strategy execution or market-data downloads.

--write creates deterministic run records and Markdown. --check verifies all
outputs against the same saved evidence and checks observation-level arithmetic.
"""
from __future__ import annotations
import argparse,collections,csv,gzip,hashlib,io,json,math,os,re,shutil
from pathlib import Path

ROOT=Path(__file__).resolve().parents[1]
BASE='docs/performance'
DATE='2026-10-29'
VERSION='1.0.0'
UNITS={
 'signals':'count','completed_trades':'count','trading_days':'count','wins':'count','losses':'count','breakevens':'count',
 'win_rate_pct':'percent','profit_factor_gross':'ratio','profit_factor_net':'ratio','profit_factor_unspecified':'ratio',
 'net_profit_usd':'USD','net_profit_usd_low':'USD','net_profit_usd_high':'USD','gross_profit_usd':'USD','net_return_pct':'percent',
 'mean_net_points':'points','mean_gross_points':'points','mean_points_unspecified':'points','mean_net_usd':'USD',
 'mean_r_unspecified':'R','mean_net_r':'R','mean_win_usd':'USD','mean_loss_usd':'USD',
 'closed_trade_max_drawdown_usd':'USD','marked_max_drawdown_usd':'USD','marked_max_drawdown_pct':'percent',
 'longest_losing_streak':'trades','matched_excess_points':'points','excess_ci_low_points':'points','excess_ci_high_points':'points',
 'mean_mfe_points':'points','mean_mae_points':'points','positive_endpoint_fraction':'fraction',
 'monthly_mean_usd':'USD','monthly_median_usd':'USD','losing_months':'count','months':'count',
 'touch_hold_pct':'percent','expiry_hold_swing_pct':'percent','expiry_hold_1pct_cushion_pct':'percent'}

def dump(x):return json.dumps(x,indent=2,ensure_ascii=False,allow_nan=False)+'\n'
def digest(b):return hashlib.sha256(b).hexdigest()
def data_bytes(rows):
 if not rows:return b''
 s=io.StringIO(newline='');w=csv.DictWriter(s,fieldnames=list(rows[0]),lineterminator='\n');w.writeheader();w.writerows(rows);return s.getvalue().encode()
def read_json(p):return json.loads((ROOT/p).read_text())
def near(a,b,tol=1e-8):return math.isclose(a,b,rel_tol=tol,abs_tol=tol)
def ledger_stats(rows,field):
 v=[float(r[field]) for r in rows];positive=[x for x in v if x>0];negative=[x for x in v if x<0]
 return {'n':len(v),'wins':len(positive),'losses':len(negative),'breakevens':len(v)-len(positive)-len(negative),
         'mean':sum(v)/len(v),'net':sum(v),'pf':sum(positive)/-sum(negative) if negative else None}

def run_fingerprint(run):
 """Hash the historical test specification; exclude targets, dates of migration and outputs."""
 identity={k:run[k] for k in ['schema_version','family','label','record_type','reported_on','test_environment','dataset','execution','costs','sample']}
 identity['script_identity']={k:v for k,v in run['script_identity'].items() if k!='library_targets'}
 identity['evidence']={k:v['evidence_sha256'] for k,v in run['evidence']['source_records'].items()}
 return digest(json.dumps(identity,sort_keys=True,separators=(',',':'),ensure_ascii=False).encode())

def normalize(check=False):
 legacy=read_json(BASE+'/legacy/performance-v1.json');sources=read_json(BASE+'/source-catalog.json');inv=read_json('inventory.json')
 outputs={};runs=[];checks=[];profile_runs=collections.defaultdict(list)
 def emit(path,value):outputs[path]=value if isinstance(value,bytes) else value.encode()
 def source_rows(key):
  p=ROOT/sources[key]['evidence'];b=p.read_bytes()
  assert digest(b)==sources[key]['evidence_sha256'],f'Evidence hash: {key}'
  if p.suffix=='.gz':
   b=gzip.decompress(b);assert digest(b)==sources[key]['original_sha256'],f'Decompressed original hash: {key}'
  return list(csv.DictReader(io.StringIO(b.decode('utf-8-sig'))))
 for key,s in sources.items():assert digest((ROOT/s['evidence']).read_bytes())==s['evidence_sha256'],key
 project_groups={key:[p['project'] for p in legacy['projects'] if p['profile']==key] for key in legacy['profiles']}
 files={f['path']:f for f in inv['files']};projects={p['path']:p for p in inv['projects']}
 consolidation=read_json('source-consolidation.json')
 removed_files={f['path']:f for f in consolidation['removed_sources']}
 historical_files=files|removed_files
 frozen={m['sha256'] for m in legacy['source_hash_matches_for_offline_study']}
 null_reason='Not supplied by the saved evidence; no new test was run.'
 def row(dim,source,method='reported',missing=null_reason,**values):
  assert set(values)<=set(UNITS),set(values)-set(UNITS)
  return {'dimensions':dim,'metrics':{k:{'value':values.get(k),'unit':unit,'method':method if values.get(k) is not None else None,'source_id':source if values.get(k) is not None else None,'missing_reason':None if values.get(k) is not None else missing} for k,unit in UNITS.items()}}
 def new(family,label,instrument,reported,config,source_ids,kind='strategy',status='reported',bar=1,start=None,end=None,period=None,match='related-model',engine='python',cost=None,warnings=None,dataset=None,execution=None,sample=None):
  targets=[]
  for project in project_groups[family]:
   p=projects[project]['primary'];sha=files[p]['sha256']
   relationship='exact-frozen-source' if match=='frozen' and sha in frozen else ('related-version' if match=='frozen' else match)
   targets.append({'project':project,'source_path':p,'source_sha256':sha,'relationship':relationship})
  spec={'family':family,'label':label,'instrument':instrument,'reported_on':reported,'configuration':config,
        'engine':engine,'aggregation_minutes':bar,'dataset':{'start':start,'end':end,'period':period,**(dataset or {})},
        'execution':execution,'costs':cost,'sample':sample,'evidence_sha256':{k:sources[k]['evidence_sha256'] for k in source_ids}}
  fingerprint=digest(json.dumps(spec,sort_keys=True,separators=(',',':')).encode())
  slug=re.sub('[^a-z0-9]+','-',f'{family}-{reported or "undated"}-{instrument}-{label}'.lower()).strip('-')
  rid=slug+'-'+fingerprint[:12];folder=f'{BASE}/runs/{rid}'
  costs=cost or {'currency':'USD','commission_round_trip_usd':None,'slippage_points_each_side':None,'total_round_trip_usd':None,'total_round_trip_points':None,'pnl_basis':'unspecified','description':'Realistic cost deduction not established by retrieved report.'}
  r={'schema_version':VERSION,'run_id':rid,'family':family,'label':label,'record_type':kind,'reported_on':reported,'normalized_on':DATE,'configuration_sha256':fingerprint,
     'script_identity':{'library_targets':targets,'tested_model_source_sha256':None,'tested_source_hashes':sorted({m['sha256'] for m in legacy['source_hash_matches_for_offline_study'] if any(historical_files[p]['project'] in project_groups[family] for p in m['library_matches'])}) if match=='frozen' else [],'tested_model_version':None,'inputs':config},
     'test_environment':{'engine':engine,'engine_version':None,'instrument':instrument,'aggregation_minutes':bar,'session':None,'timezone':'America/New_York','chart_type':'time bars','native_thinkorswim_performance_verified':False},
     'dataset':{'provider':None,'start':start,'end':end,'reported_period':period,'missing_data_treatment':None,'rollover_treatment':None,'raw_data_hash':None,**(dataset or {})},
     'execution':{'entry_rule':None,'exit_rule':None,'position_sizing':None,'same_bar_stop_target':None,'initial_capital_usd':None,'overlap_rule':None,**(execution or {})},
     'costs':costs,'sample':{'development_period':None,'test_period':None,'test_used_in_selection':None,'independent_holdout_verified':False,**(sample or {})},
     'evidence':{'source_ids':source_ids,'source_records':{k:sources[k] for k in source_ids}},
     'validation':{'status':status,'source_relationship':match,'native_parity':'not-verified','lookahead_audit':None,'warnings':warnings or [],'unavailable_fields':{}},
     'artifacts':{'run':folder+'/run.json','summary':folder+'/summary.json','markdown':folder+'/PERFORMANCE.md','observations':{'path':None,'kind':'events' if kind=='signal-event' else 'trades','sha256':None,'row_count':None,'reason':'Observation-level ledger not available in the retrieved evidence; aggregate report only.'}},
     '_rows':[]}
  runs.append(r);profile_runs[family].append(rid);return r
 def observation(r,rows,name):
  path=r['artifacts']['run'].rsplit('/',1)[0]+'/'+name;b=data_bytes(rows);emit(path,b)
  r['artifacts']['observations']={'path':path,'kind':'events' if name=='events.csv' else 'trades','sha256':digest(b),'row_count':len(rows),'reason':None}
 def share_observation(r,base):r['artifacts']['observations']=dict(base['artifacts']['observations'])|{'shared_with_run_id':base['run_id']}
 def report_metrics(r,rows):r['_rows']=rows
 # Existing offline signal study: one run per instrument/family/cost assumption.
 offline=source_rows('offline-summary');events=source_rows('offline-events')
 offline_keys=['offline-summary','offline-events','offline-protocol','offline-parity','offline-readme','offline-hashes','offline-provenance','offline-costs','offline-validation']
 for family,prefix,bar in [('macdv','MACDV',1),('nshape-spy','NShape',1),('displacement-wick','Wick',15)]:
  for instrument in ['MNQ','SPY']:
   selected=[x for x in offline if x['instrument']==instrument and x['signal'].startswith(prefix)]
   obs=[x for x in events if x['instrument']==instrument and x['signal'].startswith(prefix)]
   assert len({(x['signal'],x['signal_time'],x['horizon']) for x in obs})==len(obs)
   point_value=2 if instrument=='MNQ' else 1
   variants=[('corrected-base','corrected_net_points',1.45 if instrument=='MNQ' else .02),('double-total-cost','corrected_double_cost_points',2.9 if instrument=='MNQ' else .04)]
   if instrument=='MNQ':variants += [('original-lower-cost','net_points',1.24),('original-double-cost','double_cost_points',2.48)]
   base=None
   for scenario,column,total_points in variants:
    cost={'currency':'USD','commission_round_trip_usd':1.9 if scenario=='corrected-base' and instrument=='MNQ' else None,'slippage_points_each_side':.25 if scenario=='corrected-base' and instrument=='MNQ' else None,'total_round_trip_usd':total_points*point_value,'total_round_trip_points':total_points,'pnl_basis':'net','description':'Historical October 1 cost scenario; doubled cases double total fee+slippage, not just fees. SPY is per one share; MNQ per one contract.'}
    warning=['Endpoint measurements do not execute stop/target rules or define a tradeable strategy.','Source hashes match frozen ThinkScript text; native runtime equivalence remains unverified.','Horizon, year and regime slices overlap and must not be summed.','95% intervals are reported day-block bootstrap, 500 fixed-seed resamples; multiple comparisons uncorrected.']
    if scenario.startswith('original'):warning+=['Legacy lower-cost assumption retained separately; corrected-base is the primary cost case.']
    if family=='macdv':warning+=['Index-futures study removes scanner $2–$20 price gate; exit alerts are not executed.']
    if family=='nshape-spy':warning+=['MNQ transfer is experimental. Scanner persistence is counted once per raw event.','Does not reproduce the selected 222-trade fixed-R model.']
    if family=='displacement-wick':warning+=['Frozen scanner hash identifies a removed older multi-plot scanner; its hash remains in consolidation metadata. It does not match the corrected current scanner. Recursive TOS initialization unresolved.']
    config={'cost_scenario':scenario,'direction':'both' if family!='nshape-spy' else 'long','horizon_bars':[1,3,5,10],'de_overlap_bars':10,'default_detector':True}
    if family=='nshape-spy':config|={'time_start':'13:30','time_end_exclusive':'15:30','ema_length':20,'ema_filter':True,'calendar_vwap_filter':True,'range_filter':True}
    if family=='displacement-wick':config|={'strength':1,'fvg':False,'zone_age_min':1,'zone_age_max':49}
    ds={'provider':'Owned Databento OHLCV files listed in offline-provenance; provider inferred from feed filenames, not a fresh download.','missing_data_treatment':'Reject horizons crossing a missing elapsed minute, calendar date or selected-contract change.','rollover_treatment':'MNQ previous available ET-date volume front outright contract; reset on change.' if instrument=='MNQ' else 'Not applicable to SPY.','raw_data_hash':read_json(sources['offline-provenance']['evidence'])[instrument]['sha256']}
    r=new(family,scenario,instrument,'2026-10-01',config,offline_keys,kind='signal-event',bar=bar,start='2021-06-10' if instrument=='MNQ' else '2021-07-12',end='2026-06-09' if instrument=='MNQ' else '2026-07-10',match='frozen',cost=cost,warnings=warning,dataset=ds,execution={'entry_rule':'Next bar open after confirmed signal close.','exit_rule':'Directional terminal close at declared horizon, not strategy exits.','position_sizing':'One MNQ contract or one SPY share for dollar conversion only.','overlap_rule':'Within family/side require >10 signal bars between retained events; opposite sides/families can overlap.'})
    r['test_environment']['session']='RTH signal/entry/endpoints; full-session detector history; SPY includes extended hours for calendar VWAP.'
    if base is None:
     normalized=[]
     for x in obs:
      normalized.append({'observation_id':digest(f"{family}|{instrument}|{x['signal']}|{x['signal_time']}|{x['horizon']}".encode())[:24],'instrument':instrument,'side':x['signal'].rsplit('_',1)[-1],'signal':x['signal'],'aggregation_minutes':bar,'horizon_bars':x['horizon'],'horizon_minutes':int(x['horizon'])*bar,'signal_time':x['signal_time'],'entry_time':x['entry_time'],'terminal_time':x['terminal_time'],'entry_price':x['entry_price'],'terminal_price':x['terminal_close'],'contract':x['symbol'],'day':x['day'],'year':x['year'],'regime':x['regime'],'gross_points':x['gross_forward_points'],'corrected_net_points':x['corrected_net_points'],'corrected_double_cost_points':x['corrected_double_cost_points'],'original_net_points':x['net_points'],'original_double_cost_points':x['double_cost_points'],'matched_excess_points':x['excess_points'],'mfe_points':x['mfe_points'],'mae_points':x['mae_points']})
     observation(r,normalized,'events.csv');base=r
    else:share_observation(r,base)
    table=[]
    for x in selected:
     matches=[e for e in obs if e['signal']==x['signal'] and e['horizon']==x['horizon'] and (x['dimension']=='all' or e[x['dimension']]==x['group'])]
     assert len(matches)==int(x['n'])
     avg=sum(float(e[column]) for e in matches)/len(matches)
     assert near(avg,float(x[column])),(family,instrument,column,x['dimension'],x['group'],avg,x[column])
     days=len({e['day'] for e in matches});assert days==int(x['days'])
     factor=2 if instrument=='MNQ' else 1
     dim={'split':'full' if x['dimension']=='all' else x['dimension'],'group':x['group'],'side':x['signal'].rsplit('_',1)[-1],'horizon_bars':int(x['horizon']),'horizon_minutes':int(x['horizon'])*bar,'cost_scenario':scenario,'net_column':column}
     table.append(row(dim,'offline-summary',signals=len(matches),trading_days=days,mean_net_points=float(x[column]),mean_net_usd=float(x[column])*factor,mean_gross_points=float(x['gross_forward_points']),matched_excess_points=float(x['matched_excess_points']),excess_ci_low_points=float(x['ci_low']),excess_ci_high_points=float(x['ci_high']),mean_mfe_points=float(x['mfe_points']),mean_mae_points=float(x['mae_points']),positive_endpoint_fraction=sum(float(e[column])>0 for e in matches)/len(matches)))
     table[-1]['metrics']['positive_endpoint_fraction']['method']='recomputed-from-saved-events';table[-1]['metrics']['positive_endpoint_fraction']['source_id']='offline-events'
    report_metrics(r,table);checks.append({'run_id':r['run_id'],'check':'all event slice counts, days and scenario means match saved summary','rows_checked':len(table),'passed':True})
 # Simple NShape: separate target/hold configurations; same signals can overlap.
 simple=source_rows('nshape-simple-summary');trades=source_rows('nshape-simple-trades')
 for target,hold in sorted({(float(x['target_r']),int(x['max_hold_bars'])) for x in simple}):
  rr=[x for x in simple if float(x['target_r'])==target and int(x['max_hold_bars'])==hold];tt=[x for x in trades if float(x['target_r'])==target and int(x['max_hold_bars'])==hold]
  r=new('nshape-simple',f'target-{target:g}r-hold-{hold}', 'SPY','2026-07-16',{'target_r':target,'maximum_hold_bars':hold,'stop':'candle-2 extreme','sides':['long','short']},['nshape-simple-report','nshape-simple-summary','nshape-simple-trades'],bar=2,start='2021-07-12',end='2026-07-10',execution={'entry_rule':'Next 2-minute bar open.','exit_rule':'Candle-2 stop, fixed-R target or maximum hold.','same_bar_stop_target':'stop-first','position_sizing':None,'overlap_rule':'Per-signal hypothetical outcomes; overlapping signals are not a single-position portfolio.'},warnings=['No native ThinkScript execution parity.','Saved P&L columns do not establish realistic fee/slippage deduction; basis remains unspecified.','All/long/short slices overlap; do not sum them.'])
  r['test_environment']['session']='RTH 09:35–15:30 ET signal window'
  normalized=[]
  for x in tt:normalized.append({'observation_id':digest(f"{x['side']}|{x['signal_time']}|{target}|{hold}".encode())[:24],'instrument':'SPY','side':x['side'],'signal_time':x['signal_time'],'entry_time':x['entry_time'],'exit_time':x['exit_time'],'entry_price':x['entry'],'stop_price':x['stop'],'target_price':x['target'],'initial_risk_points':x['risk'],'target_r':target,'maximum_hold_bars':hold,'exit_reason':x['result'],'pnl_points_unspecified_cost_basis':x['pnl_points'],'pnl_r_unspecified_cost_basis':x['pnl_r']})
  observation(r,normalized,'trades.csv');table=[]
  for x in rr:
   sub=[e for e in tt if x['side']=='all' or e['side']==x['side']];stats=ledger_stats(sub,'pnl_points');avg_r=sum(float(e['pnl_r']) for e in sub)/len(sub)
   assert stats['n']==int(x['trades']) and near(stats['mean'],float(x['avg_pnl_points']),1e-4) and near(stats['pf'],float(x['profit_factor']),1e-4) and near(avg_r,float(x['avg_pnl_r']),1e-4)
   # Preserve reported 4-decimal figures; exact arithmetic remains in observations.
   table.append(row({'split':'full','side':x['side'],'target_r':target,'maximum_hold_bars':hold},'nshape-simple-summary',completed_trades=int(x['trades']),signals=int(x['signals']),win_rate_pct=float(x['win_rate'])*100,mean_points_unspecified=float(x['avg_pnl_points']),mean_r_unspecified=float(x['avg_pnl_r']),profit_factor_unspecified=float(x['profit_factor'])))
  report_metrics(r,table);checks.append({'run_id':r['run_id'],'check':'all three side slices reconcile to saved hypothetical trades within report rounding','rows_checked':len(table),'passed':True})
 # Selected filtered SPY: full sample backed by sweep, development/test by report.
 s=legacy['profiles']['nshape-spy']['selected_fixed_r_model']
 r=new('nshape-spy','selected-fixed-r','SPY','2026-07-16',{'direction':'long','signal_window':'13:30–before 15:30 ET','ema_length':20,'ema_filter':True,'vwap_filter':True,'range_filter':True,'target_r':1.5,'maximum_hold_bars':10,'stop':'candle-2 low'},['nshape-selected-report','nshape-filter-sweep'],start='2021-07-12',end='2026-07-10',sample={'development_period':'2021–2024','test_period':'2025–2026 partial','test_used_in_selection':True},execution={'entry_rule':'Next bar open.','exit_rule':'1.5R target, candle-2 stop, or 10-bar maximum hold.','same_bar_stop_target':'stop-first as reported research convention'},warnings=['Holdout PF was a selection criterion; this is not an untouched independent test.','ThinkScript displays references and does not execute the 10-bar maximum-hold rule.','No options P&L or realistic execution friction established.'])
 r['test_environment']['session']='13:30–before 15:30 ET'
 selected=[x for x in source_rows('nshape-filter-sweep') if (x['barmin'],x['tod'],x['filter'],x['side'],x['target'],x['hold'])==('1','1330_1530','ema20_vwap_range1x','long','1.5','10')];assert len(selected)==1
 assert int(selected[0]['trades'])==s['trades'] and near(float(selected[0]['pf']),s['profit_factor'])
 table=[row({'split':'full','side':'long'},'nshape-filter-sweep',completed_trades=s['trades'],win_rate_pct=s['win_rate_pct'],mean_points_unspecified=s['mean_points'],mean_r_unspecified=s['mean_r'],profit_factor_unspecified=s['profit_factor']),row({'split':'development','period':'2021–2024','side':'long'},'nshape-selected-report',completed_trades=167,win_rate_pct=44.31,mean_points_unspecified=.0713,mean_r_unspecified=.05,profit_factor_unspecified=1.5194),row({'split':'report-labeled-holdout-used-in-selection','period':'2025–2026 partial','side':'long'},'nshape-selected-report',completed_trades=55,win_rate_pct=49.09,mean_points_unspecified=.1129,mean_r_unspecified=.0996,profit_factor_unspecified=1.8821)]
 for year,n,pf in [(2021,33,1.2365),(2022,57,2.5110),(2023,44,.7345),(2024,33,1.132),(2025,38,1.377),(2026,17,3.1201)]:table.append(row({'split':'year','year':year,'side':'long'},'nshape-selected-report',completed_trades=n,profit_factor_unspecified=pf))
 report_metrics(r,table)
 # Native Pine ORB: paired entry/exit rows, 19 trades per mode.
 for mode,key in [('Original','orb-original-trades'),('StopCap100','orb-capped-trades')]:
  cost={'currency':'USD','commission_round_trip_usd':1.9,'slippage_points_each_side':.25,'total_round_trip_usd':None,'total_round_trip_points':None,'pnl_basis':'net','description':'$0.95/contract/side, one tick adverse market/stop slippage; limits differ. No second cost deduction from exported net P&L.'}
  r=new('orb15-mnq',mode,'MNQ','2026-10-01',{'mode':mode,'quantity':1,'cap_points':48.75 if mode=='StopCap100' else None,'target_r':5},['orb-native-report',key,'orb-research-guide'],engine='pine',start='2026-09-07',end='2026-10-01',cost=cost,execution={'entry_rule':'Staged after 09:45 close, earliest next eligible fill 09:46; one entry/day.','exit_rule':'5R target, opposite-range or capped stop, next-available-open EOD close.','position_sizing':'One MNQ contract.','initial_capital_usd':50000,'same_bar_stop_target':'Native Pine emulator priority; TOS parity unresolved.','overlap_rule':'One entry per date; two modes share the same 19 entries.'},warnings=['Short native Pine simulation, not a verified ThinkScript result.','Closed-trade drawdown excludes intratrade marked excursions.','Native bar export omits opening/fill bars; gaps, holidays and activation ordering not reconciled.','Planned $100 cap is not a hard loss guarantee.'])
  r['test_environment']['session']='Electronic trading hours; standard 1m candles; back-adjustment off; chart display UTC-4.'
  raw=source_rows(key);group=collections.defaultdict(list)
  for x in raw:group[x['Trade number']].append(x)
  tt=[]
  for trade_id,pair in sorted(group.items(),key=lambda x:int(x[0])):
   entry=[x for x in pair if x['Type'].startswith('Entry')];exit=[x for x in pair if x['Type'].startswith('Exit')];assert len(entry)==len(exit)==1
   a,b=entry[0],exit[0];assert float(a['Net PnL USD'])==float(b['Net PnL USD'])
   tt.append({'trade_id':int(trade_id),'instrument':'MNQ','side':a['Type'].split()[-1],'entry_time':a['Date and time'],'exit_time':b['Date and time'],'timestamp_timezone':'UTC-04:00 as exported; no DST conversion inferred','entry_price':a['Price USD'],'exit_price':b['Price USD'],'quantity':b['Size (qty)'],'exit_reason':b['Signal'],'net_pnl_usd':b['Net PnL USD'],'commission_usd_included':b['Commission USD'],'reported_favorable_excursion_usd':b['Favorable excursion USD'],'reported_adverse_excursion_usd':b['Adverse excursion USD'],'duration_bars':b['Duration (bars)']})
  observation(r,tt,'trades.csv');stats=ledger_stats(tt,'net_pnl_usd');equity=peak=dd=0.;streak=longest=0
  for x in tt:
   value=float(x['net_pnl_usd']);equity+=value;peak=max(peak,equity);dd=max(dd,peak-equity);streak=streak+1 if value<0 else 0;longest=max(longest,streak)
  assert stats['n']==19 and near(stats['net'],98.4 if mode=='Original' else 250.9)
  report_metrics(r,[row({'split':'full','mode':mode},key,method='recomputed-from-saved-trades',completed_trades=19,trading_days=len({x['entry_time'][:10] for x in tt}),wins=stats['wins'],losses=stats['losses'],breakevens=stats['breakevens'],win_rate_pct=100*stats['wins']/19,profit_factor_net=stats['pf'],net_profit_usd=round(stats['net'],2),mean_net_usd=stats['mean'],mean_win_usd=sum(float(x['net_pnl_usd']) for x in tt if float(x['net_pnl_usd'])>0)/stats['wins'],mean_loss_usd=sum(float(x['net_pnl_usd']) for x in tt if float(x['net_pnl_usd'])<0)/stats['losses'],closed_trade_max_drawdown_usd=round(dd,2),longest_losing_streak=longest)])
  checks.append({'run_id':r['run_id'],'check':'entry/exit pairing, 19 exits, saved net/wins, PF and closed-trade drawdown','rows_checked':19,'passed':True})
 # Historical ORB scenarios: ranges explicitly retained as ranges, not fake precise runs.
 for mode,low,high in [('Original',20628,20908),('StopCap100',11930,12210)]:
  r=new('orb15-mnq','historical-'+mode,'MNQ','2026-10-01',{'mode':mode,'quantity':1,'target_r':5,'ohlc_path_scenarios':'high-first / low-first historical range'},['orb-research-guide'],status='historical-unrevalidated',period='Five-year historical study; exact dates not established by the guide excerpt.',execution={'position_sizing':'One MNQ contract.','entry_rule':'Earlier causal research baseline; queued activation rebound semantics incomplete.','exit_rule':'Earlier OHLC-path model; not rerun after later fixture corrections.'},warnings=['Older model totals not rerun after queued-activation rebound fixes.','Reported ranges are historical path scenarios, not rigorous bounds or current-file results.','No untouched holdout established.'])
  report_metrics(r,[row({'split':'full','mode':mode,'precision':'approximate guide rounding'},'orb-research-guide',completed_trades=1203,net_profit_usd_low=low,net_profit_usd_high=high,marked_max_drawdown_usd=2883 if mode=='StopCap100' else None)])
 # Revised displacement-wick model. Earlier optimistic result stays withdrawn.
 for lookback,cooldown,pause,n,wr,avg in [(100,3,True,39,35.9,-.23),(100,0,False,56,46.4,-.04),(20,3,True,44,45.5,0.),(20,0,False,61,47.5,.07)]:
  r=new('displacement-wick',f'market-lb{lookback}-cd{cooldown}-pause{int(pause)}','NQ','2026-06-21',{'lookback':lookback,'cooldown_bars':cooldown,'loss_pause_enabled':pause,'loss_pause_bars':20 if pause else 0,'target_r':1.5,'breakeven':False,'trend_gate':False},['wick-verification-update'],bar=5,start='2026-04-20',end='2026-05-11',execution={'entry_rule':'Market next bar in related Pine/Python port.','exit_rule':'Related model ATR stop and 1.5R target; not the current TOS sweep detector.'},warnings=['16-session NQ input; report describes roughly one month.','Default-throttle verification update supersedes optimistic sandbox/pass-rate claims.','Not the current TOS wick sweep detector; execution costs not established.'])
  report_metrics(r,[row({'split':'full'},'wick-verification-update',completed_trades=n,win_rate_pct=wr,mean_r_unspecified=avg)])
 r=new('displacement-wick','withdrawn-sandbox','NQ','2026-06-21',{'target_r':1.5,'lookback':20,'throttles':'omitted'},['wick-verification-update'],status='withdrawn',bar=5,start='2026-04-20',end='2026-05-11',warnings=['Optimistic sandbox omitted real throttles; its +0.20R and ~84% pass claim were explicitly withdrawn.','Retained only for provenance; never eligible for comparison/ranking.'])
 report_metrics(r,[row({'split':'withdrawn-sandbox'},'wick-verification-update',completed_trades=72,win_rate_pct=54.2,mean_r_unspecified=.20)])
 # Clean MTF legs and distinct package cost scenarios.
 for m in legacy['profiles']['mtf-ote']['metrics']:
  symbol=m['instrument'];r=new('mtf-ote','clean-15m-1m',symbol,'2026-07-27',{'higher_timeframe_minutes':15,'chart_minutes':1,'entry_fib':.705,'atr_stop_multiplier':.1,'target_fib':0.,'bias_lookback':20},['mtf-clean-rescore','mtf-cost-rebaseline'],period='June 2021–June 2026; MGC starts July 12, 2021.',cost={'currency':'USD','commission_round_trip_usd':None,'slippage_points_each_side':None,'total_round_trip_usd':2.5,'total_round_trip_points':None,'pnl_basis':'net','description':'Related engine_v3 per-contract RT cost on actual quantity; component split not established.'},execution={'entry_rule':'No arm-bar fill; order must already be resting.','exit_rule':'Clean Python engine_v3 model.','same_bar_stop_target':'stop-first'},warnings=['Related execution model, not a native backtest of the TOS chart study.','Older leak-derived generator results explicitly voided.'])
  r['script_identity']['tested_model_version']='engine_v3';r['test_environment']['session']='03:00–05:00 / 09:30–12:00 / 14:00–15:55 ET'
  report_metrics(r,[row({'split':'full'},'mtf-clean-rescore',completed_trades=m['trades'],win_rate_pct=m['win_rate_pct'],profit_factor_gross=m['gross_profit_factor'],profit_factor_net=m['net_profit_factor'])])
 for label,net,mean,median,losing,trailing,trailing_losses in [('incumbent-fixed-r',43302,710,688,24,-9607,8),('per-contract-cost',-104692,-1716,-1505,41,-34694,11)]:
  cost={'currency':'USD','commission_round_trip_usd':None,'slippage_points_each_side':None,'total_round_trip_usd':2.5 if label=='per-contract-cost' else None,'total_round_trip_points':None,'pnl_basis':'net','description':'$2.50 RT per actual contract' if label=='per-contract-cost' else 'Incumbent fixed R cost: MNQ 0.060R, MYM 0.149R; 1R=$200.'}
  r=new('mtf-ote','package-'+label,'MNQ+MYM','2026-07-30',{'higher_timeframe_minutes':15,'chart_minutes':1,'risk_usd_per_r':200,'max_entries_daily':5,'daily_loss_r':-2.5,'daily_profit_r':4.5,'cost_scenario':label},['mtf-cost-rebaseline','mtf-clean-rescore'],period='61 calendar months, June 2021–June 2026; endpoint months partial.',cost=cost,execution={'position_sizing':'Related package uses risk-sized actual quantities, 1R=$200.','same_bar_stop_target':'stop-first'},warnings=['Package-level modeled dollars; not standalone-study or account returns.','Month/trailing slices overlap; do not sum.','Older leak-derived live-ready claims voided.'])
  r['script_identity']['tested_model_version']='engine_v3'
  report_metrics(r,[row({'split':'full'},'mtf-cost-rebaseline',net_profit_usd=net,monthly_mean_usd=mean,monthly_median_usd=median,losing_months=losing,months=61),row({'split':'trailing-12-months','period':'2025-07 through 2026-06'},'mtf-cost-rebaseline',net_profit_usd=trailing,losing_months=trailing_losses,months=12)])
 # Daily OTE: unresolved lineage; do not infer a common date calendar or option P&L.
 for m in legacy['profiles']['ote-wheel']['metrics']:
  pool=m['population'];r=new('ote-wheel','historical-'+('equity-futures' if pool.startswith('13') else 'fx'),pool,'2026-07-15',{'aggregation':'daily','pooled_symbols':13 if pool.startswith('13') else 8},['daily-ote-historical','mtf-clean-rescore','mtf-cost-rebaseline'],kind='historical-aggregate',status='historical-unrevalidated',bar=1440,period='Approximate five-year source histories; one common exact calendar not established.',dataset={'provider':'Owned equity/futures bars plus yfinance five-year equity histories; FX coverage as historical report.'},warnings=['Predates OTE lookahead remediation; no clean daily rerun found.','Not exact current v4 or installed v3 performance; no option premium/assignment execution.','Symbol pools are not a capital-weighted portfolio.'])
  report_metrics(r,[row({'split':'full','population':pool},'daily-ote-historical',signals=m['setups'],win_rate_pct=m['win_rate_pct'],mean_r_unspecified=m['mean_r'])])
  if pool.startswith('13'):
   for days,touch,expiry,cushion in [(7,26.6,62.1,74.4),(14,18.3,56.2,65.9),(21,15.8,52.2,59.5)]:r['_rows'].append(row({'split':'bullish-hold-frequency','horizon_trading_days':days},'daily-ote-historical',touch_hold_pct=touch,expiry_hold_swing_pct=expiry,expiry_hold_1pct_cushion_pct=cushion))
 # Different wash model, explicitly context only.
 m=legacy['profiles']['wash-rinse-v2']['metrics'];r=new('wash-rinse-v2','different-python-default','MNQ','2026-10-01',{'lookback_bars':20,'confirmation_bars':3,'atr_length':14,'atr_average':'simple','stop_atr':1.,'target_atr':.6,'flatten_time':'15:55'},['wash-python-audit','wash-research-report'],match='different-model',start='2021-06-10',end='2026-06-09',cost={'currency':'USD','commission_round_trip_usd':1.9,'slippage_points_each_side':.25,'total_round_trip_usd':2.9,'total_round_trip_points':1.45,'pnl_basis':'net','description':'Historical benchmark, one MNQ.'},execution={'entry_rule':'Next open 09:35–15:30 ET, reversal candle confirmation.','exit_rule':'1ATR stop / 0.6ATR target, 15:55 flatten.','position_sizing':'One MNQ contract.','same_bar_stop_target':'stop-first','overlap_rule':'One active position.'},warnings=['Original TOS source absent from prior census; this is a different Python model.','Current WashRinse v2 has different swing/state rules and default 2R target.','Concatenated RTH slices affect ATR through overnight gaps; gap stops idealized.'])
 r['test_environment']['session']='MNQ RTH'
 report_metrics(r,[row({'split':'full'},'wash-python-audit',completed_trades=m['trades'],net_profit_usd=m['net_usd'],profit_factor_net=m['profit_factor'],closed_trade_max_drawdown_usd=m['closed_equity_drawdown_usd'])])
 # Final IDs fingerprint complete historical specifications after context is filled.
 renamed={}
 for r in runs:
  old=r['run_id'];fingerprint=run_fingerprint(r);new_id=old[:-12]+fingerprint[:12]
  renamed[old]=new_id;r['run_id']=new_id;r['configuration_sha256']=fingerprint
 def rename_path(path):
  for old,new_id in renamed.items():
   prefix=f'{BASE}/runs/{old}/'
   if path.startswith(prefix):return path.replace(prefix,f'{BASE}/runs/{new_id}/',1)
  return path
 outputs={rename_path(p):b for p,b in outputs.items()}
 for r in runs:
  for k in ['run','summary','markdown']:r['artifacts'][k]=rename_path(r['artifacts'][k])
  observation_artifact=r['artifacts']['observations']
  if observation_artifact['path']:observation_artifact['path']=rename_path(observation_artifact['path'])
  if 'shared_with_run_id' in observation_artifact:observation_artifact['shared_with_run_id']=renamed[observation_artifact['shared_with_run_id']]
 profile_runs={key:[renamed[rid] for rid in ids] for key,ids in profile_runs.items()}
 # Materialize standard contracts and generated summaries/Markdown.
 for r in runs:
  if r['validation']['source_relationship']=='frozen':
   r['validation']['lookahead_audit']='Offline prefix/source checks reported; not native TOS parity.'
  elif r['family']=='mtf-ote':
   r['validation']['lookahead_audit']='Clean engine audit reported in saved sources; no new independent rerun.'
  elif r['family']=='ote-wheel':
   r['validation']['lookahead_audit']='Historical generator lineage unresolved after later leak findings.'
  def nulls(x,path=''):
   if isinstance(x,dict):
    for k,v in x.items():
     if k.startswith('_') or k in ['unavailable_fields','artifacts']:continue
     yield from nulls(v,path+'.'+k if path else k)
   elif x is None:yield path
  r['validation']['unavailable_fields']={p:'Not established by the retrieved evidence; not inferred from current library defaults.' for p in nulls({k:r[k] for k in ['script_identity','test_environment','dataset','execution','sample']})}
  for key,value in r['costs'].items():
   if value is None:r['validation']['unavailable_fields']['costs.'+key]='Cost component not separately established; see costs.description and pnl_basis.'
  table=r.pop('_rows');summary={'schema_version':VERSION,'run_id':r['run_id'],'record_type':r['record_type'],'row_grain':'One reported slice of this fixed configuration/cost scenario. Side/year/regime/horizon/split rows can overlap.','metric_definitions':'docs/performance/FORMAT.md','rows':table}
  emit(r['artifacts']['summary'],dump(summary));r['artifacts']['summary_sha256']=digest(outputs[r['artifacts']['summary']]);emit(r['artifacts']['run'],dump(r))
  def fmt(v):
   if v is None:return 'Unknown'
   if isinstance(v,float):return f'{v:.6g}'
   return str(v)
  folder=r['artifacts']['run'].rsplit('/',1)[0]
  md=f"# {r['family']} — {r['label']}\n\nGenerated from saved evidence; no new backtest. Run `{r['run_id']}`.\n\n| Context | Recorded value |\n| --- | --- |\n| Instrument / aggregation | {r['test_environment']['instrument']} / {fmt(r['test_environment']['aggregation_minutes'])} minutes |\n| Engine | {r['test_environment']['engine']} (version: {fmt(r['test_environment']['engine_version'])}) |\n| Report date | {fmt(r['reported_on'])} |\n| Dataset period | {r['dataset']['reported_period'] or str(r['dataset']['start'])+' through '+str(r['dataset']['end'])} |\n| Session | {r['test_environment']['session'] or 'Unknown'} |\n| P&L basis | {r['costs']['pnl_basis']} |\n| Cost convention | {r['costs']['description']} |\n| Source relationship | {r['validation']['source_relationship']} |\n| Evidence status | {r['validation']['status']} |\n| Native Thinkorswim performance | Unverified |\n\n"
  md+='## Metrics\n\nAll figures retain their original basis. Unknown means unavailable, not zero. Exact values, units, methods and missing reasons for every field are in [summary.json](summary.json).\n\n| Slice | Metric | Value | Unit | Method |\n| --- | --- | ---: | --- | --- |\n'
  shown=[x for x in table if x['dimensions'].get('split') not in ['year','regime']]
  for x in shown:
   label=', '.join(f'{k}={v}' for k,v in x['dimensions'].items() if k not in ['net_column','cost_scenario'])
   for name,m in x['metrics'].items():
    if m['value'] is not None:md+=f"| {label} | `{name}` | {fmt(m['value'])} | {m['unit']} | {m['method']} |\n"
  md+='\n## Validation and limits\n\n'+'\n'.join('- '+x for x in r['validation']['warnings'])+'\n\nNative TOS compilation, runtime parity and broker execution are unverified. Missing source hashes, engine versions, calendars and cost components are listed in `validation.unavailable_fields` in [run.json](run.json). Year/regime slices, when present, remain in the JSON summary. No absent event or trade rows were fabricated.\n\n## Files\n\n- [Configuration and provenance](run.json)\n- [Standardized summary](summary.json)\n'
  obs=r['artifacts']['observations']
  if obs['path']:md+=f"- [{obs['kind']}.csv]({os.path.relpath(obs['path'],folder)}) — {obs['row_count']:,} rows; horizons/scenarios may reuse observations.\n"
  else:md+='- Observation ledger: unavailable. '+obs['reason']+'\n'
  md+='\n## Evidence\n\n'+ '\n'.join(f"- [{key}]({os.path.relpath(sources[key]['evidence'],folder)})" for key in r['evidence']['source_ids'])+'\n'
  emit(r['artifacts']['markdown'],md)
 # Preserve v1 data unchanged as provenance; v2 registry is an index rather than heterogeneous metric objects.
 registry={k:v for k,v in legacy.items() if k not in ['schema_version','profiles','projects','definitions','sources']}
 registry|={'schema_version':2,'result_schema_version':VERSION,'normalized_on':DATE,'legacy_registry':BASE+'/legacy/performance-v1.json','format_document':BASE+'/FORMAT.md','sources':sources,'definitions':{'missing':'value=null plus missing_reason; never use zero for missing.','percent':'0–100; fractions explicitly named.','R':'P&L / modeled initial trade risk, only when risk is defined.','profit_factor':'Winning P&L / absolute losing P&L; gross/net/unspecified are separate fields.','closed_trade_drawdown':'Peak-to-trough cumulative completed-trade net P&L, starting at zero; excludes unrealized excursions.','native_thinkorswim_performance_verified':False},'profiles':{},'projects':[],'runs':[]}
 registry['source_hash_matches_for_offline_study']=[]
 for original in legacy['source_hash_matches_for_offline_study']:
  match=dict(original)
  match['library_matches']=[p for p in original['library_matches'] if p in files]
  match['removed_library_matches']=[p for p in original['library_matches'] if p in removed_files]
  if match['removed_library_matches']:
   match['retired_source_manifest']='source-consolidation.json'
   match['note']='Historical tested source hash retained; retired implementation removed from current distribution. Canonical replacement is a different source version.'
  registry['source_hash_matches_for_offline_study'].append(match)
 for key,profile in legacy['profiles'].items():registry['profiles'][key]={k:v for k,v in profile.items() if k not in ['metrics','selected_fixed_r_model']}|{'run_ids':profile_runs[key]}
 for p in legacy['projects']:
  entry=p|{'run_ids':profile_runs[p['profile']] if p['profile'] else []};registry['projects'].append(entry)
  projects[p['project']]['performance']={k:v for k,v in entry.items() if k!='project'}
 for r in runs:
  registry['runs'].append({'run_id':r['run_id'],'family':r['family'],'label':r['label'],'instrument':r['test_environment']['instrument'],'record_type':r['record_type'],'status':r['validation']['status'],'source_relationship':r['validation']['source_relationship'],'run':r['artifacts']['run'],'run_sha256':digest(outputs[r['artifacts']['run']]),'summary':r['artifacts']['summary'],'summary_sha256':r['artifacts']['summary_sha256'],'markdown':r['artifacts']['markdown'],'markdown_sha256':digest(outputs[r['artifacts']['markdown']])})
 def marked(text,body):
  begin='<!-- STANDARDIZED PERFORMANCE: START -->';end='<!-- STANDARDIZED PERFORMANCE: END -->'
  block=begin+'\n'+body.strip()+'\n'+end
  if begin in text:
   a=text.index(begin);b=text.index(end,a)+len(end);return text[:a]+block+text[b:]
  return text.rstrip()+'\n\n'+block+'\n'
 index='# Standardized performance runs\n\n'+f'{len(runs)} saved configurations across 13 projects in 8 families. These are historical records, not {len(runs)} independent trials or new backtests. The 39 other projects remain without matched quantitative evidence.\n\n'
 index+='Each run has `run.json`, `summary.json` and generated `PERFORMANCE.md`. Available observation CSVs are linked from each run; missing ledgers stay unavailable. Shared event files contain multiple horizons and cost columns. Never sum counts across scenarios or overlapping slices.\n\nSee the [format and metric definitions](FORMAT.md), [normalization checks](NORMALIZATION_CHECKS.json) and [registry](../../performance.json).\n\n| Family | Instrument | Configuration | Type | Status | Record |\n| --- | --- | --- | --- | --- | --- |\n'
 for r in registry['runs']:
  index+=f"| {r['family']} | {r['instrument']} | {r['label']} | {r['record_type']} | {r['status']} | [Performance]({os.path.relpath(r['markdown'],BASE)}) |\n"
 emit(BASE+'/RUNS.md',index)
 for family,profile in registry['profiles'].items():
  family_runs=[r for r in registry['runs'] if r['family']==family];doc=profile['document'];folder=doc.rsplit('/',1)[0]
  block='## Standardized records\n\n'+f'{len(family_runs)} saved configurations use the [common format]({os.path.relpath(BASE+"/FORMAT.md",folder)}). Records retain their platform, costs, exact-source relationship, evidence status and missing-field reasons. No new backtest was run.\n\n| Instrument | Configuration | Type | Status | Files |\n| --- | --- | --- | --- | --- |\n'
  for r in family_runs:
   block+=f"| {r['instrument']} | {r['label']} | {r['record_type']} | {r['status']} | [Summary]({os.path.relpath(r['markdown'],folder)}) · [Run JSON]({os.path.relpath(r['run'],folder)}) · [Metrics JSON]({os.path.relpath(r['summary'],folder)}) |\n"
  emit(doc,marked((ROOT/doc).read_text(),block))
 for project in registry['projects']:
  if not project['run_ids']:continue
  p=project['project'];path=p+'/README.md';text=(ROOT/path).read_text();start=text.index('## Performance evidence')
  body=f"## Performance evidence\n\n{len(project['run_ids'])} historical test configurations are linked in the [performance notes]({os.path.relpath(project['document'],p)}). Each has a standardized run configuration, summary, source provenance and explicit missing values; observation CSVs are included where available. These records are shared by related chart/scanner projects, so counts are not additional independent tests. Native Thinkorswim profitability remains unverified. See the [format]({os.path.relpath(BASE+'/FORMAT.md',p)}) and [all runs]({os.path.relpath(BASE+'/RUNS.md',p)}).\n"
  emit(path,text[:start]+body)
 root_body=f'## Standardized performance records\n\nThe existing evidence is normalized into **{len(runs)} historical configurations across 13 projects**, with `run.json`, `summary.json`, generated Markdown and available event/trade CSVs. See the [run index](docs/performance/RUNS.md) and [format](docs/performance/FORMAT.md). Unknown values remain null with reasons; related models, withdrawn results and historical cost scenarios stay distinguishable. No new backtests were run.\n'
 emit('README.md',marked((ROOT/'README.md').read_text(),root_body))
 emit('docs/PERFORMANCE.md',marked((ROOT/'docs/PERFORMANCE.md').read_text(),'## Standardized data\n\nThe existing evidence now uses the [common format](performance/FORMAT.md). Browse the [historical run index](performance/RUNS.md) for run configurations, generated summaries and available observation CSVs. Results retain their original assumptions; standardization does not make unrelated tests comparable or establish native TOS performance.\n'))
 emit('inventory.json',dump(inv));emit('performance.json',dump(registry))
 emit(BASE+'/NORMALIZATION_CHECKS.json',dump({'schema_version':VERSION,'checked_on':DATE,'new_backtests_run':False,'projects_with_runs':sum(bool(p['run_ids']) for p in registry['projects']),'runs':len(runs),'unique_observation_files':len({r['artifacts']['observations']['path'] for r in runs if r['artifacts']['observations']['path']}),'sources':len(sources),'checks':checks,'limitations':['Report-only rows cannot be reconciled to observations; original reported values and their uncertainty are retained.','Only existing saved scenarios were normalized; no parameters optimized.']}))
 expected_folders={str(Path(r['artifacts']['run']).parent) for r in runs}
 actual_folders={str(p.relative_to(ROOT)) for p in (ROOT/BASE/'runs').glob('*') if p.is_dir()}
 if check:
  assert actual_folders==expected_folders,'Unindexed or missing performance run folders'
  bad=[p for p,b in outputs.items() if not (ROOT/p).is_file() or (ROOT/p).read_bytes()!=b]
  assert not bad,'Standardized outputs differ; run --write: '+', '.join(bad[:8])
 else:
  # Retain obsolete generated candidates locally, excluded from the GitHub ZIP.
  for folder in actual_folders-expected_folders:
   source=ROOT/folder;archive=ROOT/'.local/retired-performance-runs'/source.name
   archive.parent.mkdir(parents=True,exist_ok=True)
   if archive.exists():raise ValueError(f'Archive already exists: {archive}')
   shutil.move(source,archive)
  for p,b in outputs.items():(ROOT/p).parent.mkdir(parents=True,exist_ok=True);(ROOT/p).write_bytes(b)
 return registry,outputs


def main():
 p=argparse.ArgumentParser(description=__doc__);g=p.add_mutually_exclusive_group(required=True);g.add_argument('--write',action='store_true');g.add_argument('--check',action='store_true');a=p.parse_args()
 registry,outputs=normalize(check=a.check)
 print(f"PASS: {len(registry['runs'])} standardized runs across {sum(bool(p['run_ids']) for p in registry['projects'])} projects; {len(outputs)} deterministic artifacts; evidence/observation arithmetic checked; no backtests run.")
if __name__=='__main__':main()
