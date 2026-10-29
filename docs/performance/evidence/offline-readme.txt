# Reproduce TOS offline signal validation

Run using an existing Python environment with pandas and numpy:

```bash
python test_parity.py
python research.py
```

No originals or market data are modified. Outputs: events.csv (one row per detector event/horizon), summary.csv (pooled/year/regime statistics), provenance.json (raw input paths, SHA256, coverage and quality). protocol.md was written before outcomes; parity_mapping.md identifies original source lines and deliberate research adaptations; original_hashes.json freezes originals. Research averages and forward returns are not a simulated execution strategy or prop-account pass rate.

Runtime used: `[LOCAL_HOME]/Downloads/Trading/Strategies & Tools/trading strategies/Projects/Futures_Scalp_Bot/venv/bin/python`, pandas 2.3.3. No bot code was imported or executed.

Costs: MNQ net_points subtracts 1.24 points ($2.48 per one-contract round trip). Dollar conversion = points × 2. SPY subtracts $0.02/share, an assumed underlying execution proxy, never an options model. MFE/MAE are gross reachable price excursions, not realized exits.

Primary signal de-overlap requires >10 signal bars between retained events within each family/side; opposite sides/families can overlap. Bootstrap clusters on signal calendar date; matched baselines are descriptive full-sample year/time/regime means. No parameter fitting, but multiple comparisons remain exploratory. 2021/2026 are partial years. EMA prefetch runtime, live scan compilation and recursive wick initialization cannot be certified without TOS exports.

Corrected MFFU cost scenario: $1.90 round-trip fees + $1.00 assumed slippage = $2.90/contract = 1.45 points. Original 1.24-point case preserved in net_points; corrected fields explicitly named. research.py automatically calls cost_scenarios.apply(). Protocol cost amendment records when this changed; signals unchanged. Source spotchecks independently verify 30 raw entry/terminal endpoints and corrected cost arithmetic. Full tables include SPY annual/regime cuts; SPY NShape 3-bar annual means vary (2021, 2024 and 2025 negative). This is not reproduction of the older selected 222-trade report: ETH VWAP, explicit endpoint eligibility and event de-overlap differ, and event horizons do not execute its fixed-R stops/targets.
