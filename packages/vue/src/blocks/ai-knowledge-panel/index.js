import {defineComponent,h,ref,computed} from 'vue';
import {safeWebUrl} from '../../shared/safety.js';
export const YkAIKnowledgePanel=defineComponent({name:'YkAIKnowledgePanel',props:{items:{type:Array,default:()=>[]},selected:{type:Array,default:()=>[]},title:{type:String,default:'知识来源'}},emits:['update:selected'],setup(p,{emit}){
 const query=ref(''),filtered=computed(()=>p.items.filter(i=>`${i.title} ${i.description||''}`.toLowerCase().includes(query.value.toLowerCase())));
 function toggle(id){emit('update:selected',p.selected.includes(id)?p.selected.filter(x=>x!==id):[...p.selected,id]);}
 return()=>h('section',{class:'yk-ai-knowledge'},[h('header',{},[h('h3',{},p.title),h('span',{},p.selected.length+' 已选')]),h('input',{type:'search',value:query.value,placeholder:'搜索资料','aria-label':'搜索知识资料',onInput:e=>query.value=e.target.value}),h('div',{class:'yk-ai-knowledge__list'},filtered.value.length?filtered.value.map(item=>h('article',{key:item.id},[h('label',{},[h('input',{type:'checkbox',checked:p.selected.includes(item.id),onChange:()=>toggle(item.id)}),h('strong',{},item.title)]),h('p',{},item.description||'资料摘要'),safeWebUrl(item.url)?h('a',{href:safeWebUrl(item.url),target:'_blank',rel:'noopener noreferrer'},'访问来源 ↗'):null])):h('p',{},'没有匹配资料')),h('footer',{},'所选资料仅作为上下文意图；检索与读取由后端实现。')]);
}});
