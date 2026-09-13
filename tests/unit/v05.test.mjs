import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {parseDate,shiftDate,monthGrid,dateAllowed} from '../../packages/vue/src/shared/dates.js';
import {safeWebUrl,validateFiles,safeFilename} from '../../packages/vue/src/shared/safety.js';
import {assets,createPreset,parsePreset,validateSettings,resolveSettings} from '../../packages/vue/src/studio/config.js';
const read=p=>JSON.parse(fs.readFileSync(p,'utf8'));
const reg=read('registry/components.json'),gallery=read('registry/presets.json');
test('v0.5: 55 public components have concrete sources, types and explicit exports',()=>{
 assert.equal(reg.length,55); const code=fs.readFileSync('packages/vue/src/index.js','utf8'),types=fs.readFileSync('packages/vue/src/index.d.ts','utf8'),generated=fs.readFileSync('packages/vue/src/components.generated.js','utf8');
 for(const c of reg){assert.ok(fs.existsSync(c.source));assert.ok(fs.existsSync(c.types));assert.ok(code.includes(c.name),c.name);assert.ok(types.includes(c.name),c.name+' type');assert.ok(generated.includes(c.name));}
 assert.ok(fs.readFileSync('packages/vue/src/plugin.js','utf8').includes('publicComponents'));
});
test('v0.5: AI, blocks and templates are a partition, not duplicate inflated counts',()=>{
 assert.equal(assets.length,103);assert.equal(assets.filter(a=>a.group==='AI 界面').length,12);
 for(const [group,file] of [['页面区块','blocks'],['页面模板','templates']])assert.deepEqual(read(`registry/${file}.json`).map(a=>a.id),assets.filter(a=>a.group===group).map(a=>a.id));
});
test('Gallery: 48 unique presets point to real JSON and supported asset fields',()=>{
 assert.equal(gallery.length,48);assert.equal(new Set(gallery.map(g=>g.id)).size,48);
 for(const g of gallery){const stored=read(g.file);assert.deepEqual(stored,g.preset,g.id);assert.deepEqual(parsePreset(stored),stored);assert.doesNotThrow(()=>validateSettings(g.asset,g.preset.settings));}
});
test('Migration: schema1 versions 0.2 / 0.3 / 0.4 normalize without losing fields',()=>{
 for(const version of ['0.2.0','0.3.0','0.4.0']){const p={...createPreset('button',{radius:0,disabled:true},{global:{primary:'#112233'}}),libraryVersion:version};const snapshot=JSON.stringify(p),m= parsePreset(p);assert.equal(m.libraryVersion,'0.5.0');assert.equal(m.settings.radius,0);assert.equal(m.designSystem.global.primary,'#112233');assert.equal(JSON.stringify(p),snapshot);}
});
test('Migration: old and future schema/unknown version fail instead of quietly losing configuration',()=>{
 for(const version of ['0.1.0','0.6.0','latest',null])assert.throws(()=>parsePreset({...createPreset('button'),libraryVersion:version}));
});
test('AI payloads: markup remains data and bounded fields reject oversized input',()=>{
 const p=createPreset('ai-message',{contentText:'<script>alert(1)</script>'});assert.equal(parsePreset(p).settings.contentText,p.settings.contentText);
 assert.throws(()=>validateSettings('ai-message',{contentText:'x'.repeat(8001)}));
 assert.throws(()=>validateSettings('ai-message',{apiKey:'secret'}));
 assert.equal(resolveSettings('ai-message',{bubbleWidth:40}).bubbleWidth,40);
});
test('Dates: leap years, invalid values and supported Gregorian bounds',()=>{
 for(const s of ['2024-02-29','2000-02-29','1900-01-01','2100-12-31'])assert.ok(parseDate(s),s);
 for(const s of ['2023-02-29','1900-02-29','2100-02-29','2026-04-31','2026-00-01','2026-1-1','1899-12-31','2101-01-01','hello',null])assert.equal(parseDate(s),null,String(s));
});
test('Dates: month navigation clamps at month end and leap boundaries',()=>{
 assert.equal(shiftDate('2024-01-31',0,1),'2024-02-29');assert.equal(shiftDate('2023-01-31',0,1),'2023-02-28');assert.equal(shiftDate('2024-02-29',0,12),'2025-02-28');assert.equal(shiftDate('2026-12-31',1),'2027-01-01');
});
test('Dates: 42 unique contiguous cells and both week starts across 24 months',()=>{
 for(let month=1;month<=12;month++)for(const week of [0,1]){const g=monthGrid(`2024-${String(month).padStart(2,'0')}-15`,week);assert.equal(g.length,42);assert.equal(new Set(g.map(d=>d.date)).size,42);assert.equal(new Date(g[0].date+'T00:00:00Z').getUTCDay(),week);for(let i=1;i<42;i++)assert.equal(shiftDate(g[i-1].date,1),g[i].date);}
});
test('Dates: inspector ISO validation and inclusive min/max',()=>{
 assert.throws(()=>validateSettings('calendar',{dateValue:'2025-02-29'}));assert.doesNotThrow(()=>validateSettings('calendar',{dateValue:''}));
 assert.ok(dateAllowed('2026-09-12','2026-09-12','2026-09-14'));assert.ok(!dateAllowed('2026-09-15','2026-09-12','2026-09-14'));
});
test('Links: reject executable, relative, file and embedded credential URLs',()=>{
 for(const u of ['javascript:alert(1)','data:text/html,x','file:///etc/passwd','//example.org','/x','https://a:b@example.org','ftp://example.org','https://'])assert.equal(safeWebUrl(u),null,u);
 assert.equal(safeWebUrl('https://vuejs.org/guide/'),'https://vuejs.org/guide/');assert.equal(safeWebUrl(' http://example.org/path '),'http://example.org/path');
});
const file=(name,size=100,type='text/plain',lastModified=1)=>({name,size,type,lastModified});
test('Local file selection: extension, MIME wildcard, type rejection and size',()=>{
 const a=validateFiles([file('A.TXT'),file('p.png',100,'image/png'),file('x.exe',50),file('big.txt',101)],{accept:'.txt,image/*',maxSize:100});assert.equal(a.accepted.length,2);assert.equal(a.rejected.length,2);
});
test('Local file selection: count and duplicate checks consider existing entries',()=>{
 const a=file('a.txt'),b=file('b.txt');assert.equal(validateFiles([a],{existing:[a]}).rejected[0].reason,'重复文件');const out=validateFiles([b,file('c.txt')],{existing:[a],maxFiles:2});assert.equal(out.accepted.length,1);assert.equal(out.rejected.length,1);
});
test('Artifact filenames: strip path/control punctuation and force plain text extension',()=>{
 for(const s of ['../../test.html','<script>.js','x\u0000y','']){const v=safeFilename(s);assert.ok(v.endsWith('.txt'));assert.ok(!/[<>:"/\\|?*\x00-\x1f]/.test(v));assert.ok(v.length<=84);}
});
test('Pack API: explicit /ai export has types and JS paths; Vue stays a peer',()=>{
 const pkg=read('packages/vue/package.json');assert.ok(pkg.exports['./ai'].types);assert.ok(pkg.exports['./ai'].import);assert.ok(pkg.peerDependencies.vue);assert.ok(!pkg.dependencies?.react);assert.equal(pkg.version,'0.5.0');
});
