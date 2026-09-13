"""Audit only our built npm tarballs; no file extraction or untrusted execution."""
from pathlib import Path
import hashlib
import json
import posixpath
import re
import tarfile
import subprocess
ROOT = Path(__file__).resolve().parents[1]
artifacts = []
for package_path in sorted((ROOT/'releases').glob('*.tgz')):
    with tarfile.open(package_path) as archive:
        for member in archive.getmembers():
            assert not member.issym() and not member.islnk(), member.name
            assert not member.name.startswith('/') and '..' not in Path(member.name).parts, member.name
        files = {m.name: archive.extractfile(m).read() for m in archive.getmembers() if m.isfile()}
        assert not any('node_modules/' in n or '/vendor/' in n or '/.env' in n for n in files)
        package = json.loads(files['package/package.json'])
        for key in ['main', 'types']:
            assert posixpath.normpath('package/'+package[key]) in files, (package_path.name, key)
        assert 'package/dist/style.css' in files
        imports = 0
        parsed = subprocess.run(['node', 'scripts/static-imports.mjs'], cwd=ROOT,
                                input=json.dumps({name: data.decode() for name, data in files.items() if name.endswith('.js')}),
                                text=True, capture_output=True, check=True)
        for name, specs in json.loads(parsed.stdout).items():
            assert 'vue v3.5.13' not in files[name].decode()
            for spec in specs:
                if spec.startswith('.'):
                    target = posixpath.normpath(posixpath.join(posixpath.dirname(name), spec))
                    assert target in files, (name, spec)
                    imports += 1
                else:
                    assert spec == 'vue', (name, spec)
        def targets(value):
            if isinstance(value, str): return [value]
            if isinstance(value, dict): return [x for v in value.values() for x in targets(v)]
            return []
        for target in targets(package.get('exports', {})):
            if '*' not in target:
                assert posixpath.normpath('package/'+target) in files, (package_path.name, target)
        artifacts.append({'file': str(package_path.relative_to(ROOT)), 'bytes': package_path.stat().st_size,
                          'sha256': hashlib.sha256(package_path.read_bytes()).hexdigest(), 'entries': len(files),
                          'relativeImportsVerified': imports, 'noBundledVue': True,
                          'noNodeModulesOrVendorOrDotEnv': True})
assert len(artifacts) == 2, 'Expected both UI and tokens tarballs. Build and pack before auditing.'
(ROOT/'reports/package-audit.json').write_text(json.dumps(artifacts, indent=2)+'\n')
print(json.dumps(artifacts, indent=2))
