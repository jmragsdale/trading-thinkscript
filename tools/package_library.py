#!/usr/bin/env python3
"""Build and verify the current-only public library ZIP without network access."""
from __future__ import annotations
import hashlib,json,subprocess,sys,tempfile,zipfile
from pathlib import Path

ROOT=Path(__file__).resolve().parents[1]
PUBLIC_DIRS=('docs','tools','studies','scanners','strategies','imported-studies','private-imports','watchlist-columns','references')
ROOT_FILES=('.gitattributes','.gitignore','README.md','inventory.json','tos-inventory.json','performance.json','source-consolidation.json')


def main():
    subprocess.run([sys.executable,str(ROOT/'tools/verify_library.py')],check=True,cwd=ROOT)
    inv=json.loads((ROOT/'inventory.json').read_text())
    private={f['path'] for f in inv['files'] if not f.get('publish',True)}
    paths=set(ROOT_FILES)
    for name in PUBLIC_DIRS:
        for p in (ROOT/name).rglob('*'):
            if not p.is_file() or any(x in {'.git','.local','__pycache__','.DS_Store'} for x in p.relative_to(ROOT).parts):
                continue
            if p.suffix=='.pyc' or p.name=='.env' or p.name.startswith('.env.'):
                continue
            rel=str(p.relative_to(ROOT))
            if rel not in private:paths.add(rel)
    paths=sorted(paths)
    assert private.isdisjoint(paths)
    assert not any('versions' in Path(p).parts for p in paths)
    target=ROOT/'dist'/f"thinkscript-library-{inv['organized_on']}.zip"
    target.parent.mkdir(exist_ok=True)
    with zipfile.ZipFile(target,'w',compression=zipfile.ZIP_DEFLATED) as z:
        for p in paths:z.write(ROOT/p,'thinkscript-library/'+p)
    with zipfile.ZipFile(target) as z:
        assert z.testzip() is None
        for f in inv['files']:
            name='thinkscript-library/'+f['path']
            if f['path'] in private:assert name not in z.namelist()
            else:assert hashlib.sha256(z.read(name)).hexdigest()==f['sha256']
        with tempfile.TemporaryDirectory(prefix='thinkscript-current-public-') as folder:
            z.extractall(folder)
            result=subprocess.run([sys.executable,str(Path(folder)/'thinkscript-library/tools/verify_library.py')],capture_output=True,text=True,check=True)
            print('Fresh public extraction:\n'+result.stdout)
    report={'archive':target.name,'bytes':target.stat().st_size,'sha256':hashlib.sha256(target.read_bytes()).hexdigest(),'files':len(paths),'public_source_reference_files':len(inv['files'])-len(private),'private_sources_omitted':len(private),'older_source_versions_in_current_package':0,'fresh_public_verifier_passed':True}
    print(json.dumps(report,indent=2))
    local=ROOT/'.local'
    if local.is_dir():(local/'current-package-verification.json').write_text(json.dumps(report,indent=2)+'\n')

if __name__=='__main__':main()
