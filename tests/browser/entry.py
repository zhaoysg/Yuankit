"""Smoke-check the AI-first standalone entry without changing browser policy."""
import json, os, shutil
from datetime import datetime, timezone
from pathlib import Path
from playwright.sync_api import sync_playwright, expect
ROOT=Path(__file__).resolve().parents[2]
result={'version':'0.5.0','date':datetime.now(timezone.utc).isoformat(),'checks':[]}
with sync_playwright() as pw:
    browser=pw.chromium.launch(headless=True,executable_path=os.getenv('CHROMIUM_PATH') or shutil.which('chromium'),args=['--no-sandbox'] if os.geteuid()==0 else [])
    result['browser']=browser.version
    for mode in ('in-memory','file-origin'):
        ctx=browser.new_context(viewport={'width':1760,'height':1120})
        p=ctx.new_page();p.set_default_timeout(3000);errors=[];requests=[]
        p.on('pageerror',lambda e: errors.append(str(e)))
        p.on('request',lambda r: requests.append(r.url))
        item={'mode':mode}
        try:
            if mode=='in-memory': p.set_content((ROOT/'preview-ai.html').read_text())
            else: p.goto((ROOT/'preview-ai.html').as_uri(),wait_until='domcontentloaded',timeout=6000)
            expect(p.locator('.studio-stage .yk-asset')).to_have_attribute('data-asset','ai-chat-page')
            assert p.evaluate('location.hash')=='#studio/ai-chat-page'
            assert not errors, errors
            external=[u for u in requests if u.startswith(('http:','https:'))]
            assert not external,external
            item.update(status='passed',externalRequests=external,pageErrors=errors)
        except Exception as exc:
            item.update(status='not-verified' if mode=='file-origin' else 'failed',error=str(exc),pageErrors=errors)
        result['checks'].append(item);ctx.close()
    browser.close()
(ROOT/'reports/v05-entry-check.json').write_text(json.dumps(result,ensure_ascii=False,indent=2)+'\n')
print(json.dumps(result,ensure_ascii=False,indent=2))
raise SystemExit(any(c['status']=='failed' for c in result['checks']))
