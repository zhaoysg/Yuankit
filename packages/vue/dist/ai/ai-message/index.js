import {defineComponent,h,ref} from 'vue';
import {YkAIStreamingText} from '../ai-streaming-text/index.js';
export const YkAIMessage=defineComponent({name:'YkAIMessage',props:{role:{type:String,default:'assistant'},content:{type:String,default:''},name:String,status:{type:String,default:'idle'},appearance:{type:String,default:'bubble'},showAvatar:{type:Boolean,default:true},showActions:{type:Boolean,default:true}},emits:['copy','feedback','retry'],setup(p,{emit,slots}){
 const copied=ref(''),feedback=ref('');
 async function copy(){try{await navigator.clipboard.writeText(p.content);copied.value='已复制';emit('copy',{ok:true});}catch{copied.value='复制未获许可，请选中文本复制';emit('copy',{ok:false});}}
 function rate(v){feedback.value=feedback.value===v?'':v;emit('feedback',feedback.value);}
 return()=>h('article',{class:['yk-ai-message',`is-${p.role}`,`is-${p.appearance}`],'aria-label':(p.name||({assistant:'助手',user:'你',system:'系统'}[p.role]||'消息'))},[
  p.showAvatar?h('div',{class:'yk-ai-message__avatar','aria-hidden':'true'},p.role==='user'?'你':p.role==='system'?'·':'✦'):null,
  h('div',{class:'yk-ai-message__main'},[h('div',{class:'yk-ai-message__meta'},[h('strong',{},p.name||(p.role==='user'?'你':p.role==='system'?'系统':'YuanKit 助手')),p.status==='streaming'?h('span',{},'正在生成'):null]),
   h('div',{class:'yk-ai-message__body'},slots.default?.()||h(YkAIStreamingText,{content:p.content,streaming:p.status==='streaming'})),
   p.status==='error'?h('div',{class:'yk-ai-message__error',role:'status'},['回复未完成 ',h('button',{type:'button',onClick:()=>emit('retry')},'重试')]):null,
   p.showActions&&p.status!=='streaming'?h('div',{class:'yk-ai-message__actions'},[h('button',{type:'button','aria-label':'复制消息',onClick:copy},'复制'),p.role==='assistant'?h('button',{type:'button','aria-label':'有帮助','aria-pressed':feedback.value==='positive',onClick:()=>rate('positive')},'赞'):null,p.role==='assistant'?h('button',{type:'button','aria-label':'需改进','aria-pressed':feedback.value==='negative',onClick:()=>rate('negative')},'需改进'):null,copied.value?h('span',{role:'status'},copied.value):null]):null])]);
}});
