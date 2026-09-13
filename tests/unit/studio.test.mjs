import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {assets,fieldDefinitions,sharedKeys,getAsset,resolveSettings,validateSettings,validateDesignSystem,createPreset,parsePreset,toVueSFC,settingsToTheme} from '../../packages/vue/src/studio/config.js';

test('Inspector: 103 real assets across primitives, blocks, templates and motion recipes',()=>{
 assert.equal(assets.length,103);assert.equal(new Set(assets.map(a=>a.id)).size,103);
 assert.equal(assets.filter(a=>a.group==='基础组件').length,42);
 assert.equal(assets.filter(a=>a.group==='页面区块').length,17);
 assert.equal(assets.filter(a=>a.group==='页面模板').length,15);
 assert.equal(assets.filter(a=>a.group==='动效方案').length,16);
 assert.equal(assets.filter(a=>a.group==='AI 界面').length,12);
 for(const a of assets){assert.ok(fs.existsSync(a.source),a.id+' source missing');assert.equal(new Set(a.fields).size,a.fields.length);for(const key of a.fields)assert.ok(fieldDefinitions[key]);}
});
test('Inspector: every resolved default matches range, type and step definitions',()=>{
 for(const a of assets){const s=resolveSettings(a.id);assert.doesNotThrow(()=>validateSettings(a.id,Object.fromEntries(a.fields.map(k=>[k,s[k]]))),a.id);}
});
test('Preset: all assets round-trip as valid versioned JSON',()=>{for(const a of assets){const p=createPreset(a.id);assert.deepEqual(parsePreset(JSON.stringify(p)),p);}});
test('Configuration: library/global/type/instance precedence and sibling isolation',()=>{
 const sys={global:{radius:6},components:{button:{radius:12,primary:'#123456'}}};
 assert.equal(resolveSettings('button',{radius:0},sys).radius,0);
 assert.equal(resolveSettings('button',{},sys).radius,12);
 assert.equal(resolveSettings('input',{},sys).radius,6);
 assert.equal(resolveSettings('button',{motion:false},sys).motion,false);
 assert.deepEqual(sys,{global:{radius:6},components:{button:{radius:12,primary:'#123456'}}});
});
test('Configuration: a copied preset never mutates its caller',()=>{
 const src={items:[{value:'x',label:'X'}]};const p=createPreset('tabs',src);p.settings.items[0].label='Y';assert.equal(src.items[0].label,'X');
});
test('Validation: rejects unknown fields, unsupported controls and malformed values',()=>{
 for(const value of [NaN,Infinity,-1,61,'12'])assert.throws(()=>validateSettings('button',{radius:value}));
 for(const value of ['red','#fff','#123456;display:none','url(x)','<script>'])assert.throws(()=>validateSettings('button',{primary:value}));
 assert.throws(()=>validateSettings('button',{disabled:'false'}));
 assert.throws(()=>validateSettings('button',{variant:'invented'}));
 assert.throws(()=>validateSettings('button',{duration:25}));
 assert.throws(()=>validateSettings('checkbox',{radius:4}));
 assert.throws(()=>validateSettings('button',{label:'x'.repeat(501)}));
});
test('Validation: protects against unknown top-level and prototype keys',()=>{
 const good=createPreset('button');assert.throws(()=>parsePreset({...good,html:'<b>x</b>'}));
 assert.throws(()=>parsePreset({...good,settings:JSON.parse('{"__proto__":{"polluted":true}}')}));
 assert.throws(()=>validateDesignSystem(JSON.parse('{"components":{"__proto__":{}}}')));
 assert.equal({}.polluted,undefined);
 assert.throws(()=>validateDesignSystem({global:{width:400}}));assert.throws(()=>validateDesignSystem({other:1}));
});
test('Validation: item keys unique, bounded arrays and safe primitive fields',()=>{
 assert.throws(()=>validateSettings('tabs',{items:[]}));
 assert.throws(()=>validateSettings('tabs',{items:[{value:'a',label:'A'},{value:'a',label:'B'}]}));
 assert.throws(()=>validateSettings('tabs',{items:[{value:'a',label:'A',html:'<b>A</b>'}]}));
 assert.throws(()=>validateSettings('tabs',{items:Array.from({length:13},(_,i)=>({value:'a'+i,label:'A'}))}));
});
test('Preset: size and exact format/version checks',()=>{
 assert.throws(()=>parsePreset(' '.repeat(262145)));assert.throws(()=>parsePreset('{bad'));
 assert.throws(()=>parsePreset({...createPreset('button'),schemaVersion:2}));
 assert.throws(()=>parsePreset({...createPreset('button'),libraryVersion:'9.9.9'}));assert.throws(()=>getAsset('not-real'));
});
test('Theme mapping: zero radius and disabled motion retained; skin and dark defaults actual',()=>{
 const s=resolveSettings('button',{radius:0,motion:false});assert.equal(settingsToTheme(s).tokens['radius-control'],'0px');assert.equal(settingsToTheme(s).motion,false);
 assert.equal(resolveSettings('button',{skin:'precise'}).radius,4);
 assert.notEqual(resolveSettings('button',{mode:'dark'}).surface,resolveSettings('button').surface);
 assert.ok(!sharedKeys.includes('width'));assert.ok(sharedKeys.includes('radius'));
});
test('Vue export: exact same preset and package entry; script delimiters are escaped',()=>{
 const p=createPreset('button',{label:'</script><img src=x onerror=alert(1)>'});const code=toVueSFC(p);
 assert.ok(code.includes("@zhaoysg/yuankit-vue/studio"));assert.ok(code.includes(':settings="preset.settings"'));
 assert.equal((code.match(/<\/script>/g)||[]).length,1);assert.ok(!code.includes('<img'));
});
