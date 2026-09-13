import {defineComponent,h,ref,watch,onMounted,onBeforeUnmount,nextTick} from 'vue';
import {YkAIMessage} from '../ai-message/index.js';
export const YkAIConversation=defineComponent({name:'YkAIConversation',props:{messages:{type:Array,default:()=>[]},height:{type:Number,default:400},streaming:Boolean,appearance:{type:String,default:'bubble'},showAvatar:{type:Boolean,default:true},emptyTitle:{type:String,default:'从一个问题开始'}},emits:['feedback','retry'],setup(p,{emit,slots,expose}){
 const viewport=ref(null),content=ref(null),following=ref(true);let observer,disposed=false;
 const track=()=>{const e=viewport.value;if(e)following.value=e.scrollHeight-e.scrollTop-e.clientHeight<48;};
 const latest=()=>{const e=viewport.value;if(e){e.scrollTop=e.scrollHeight;following.value=true;}};
 watch(()=>p.messages,async()=>{const follow=following.value;await nextTick();if(!disposed&&follow)latest();},{deep:true});
 onMounted(()=>{latest();if(typeof ResizeObserver!=='undefined'){observer=new ResizeObserver(()=>{if(following.value)latest();});if(content.value)observer.observe(content.value);}});onBeforeUnmount(()=>{disposed=true;observer?.disconnect();});expose({scrollToLatest:latest});
 return()=>h('section',{class:'yk-ai-conversation'},[
  h('div',{ref:viewport,class:'yk-ai-conversation__viewport',style:{height:Math.max(160,Math.min(1200,p.height))+'px'},role:'log','aria-label':'对话消息','aria-live':p.streaming?'off':'polite','aria-relevant':'additions',tabindex:0,onScroll:track},h('div',{ref:content,class:'yk-ai-conversation__content'},p.messages.length?p.messages.map(m=>h(YkAIMessage,{key:m.id,role:m.role,content:m.content,name:m.name,status:m.status||'idle',appearance:p.appearance,showAvatar:p.showAvatar,onFeedback:rating=>emit('feedback',{id:m.id,rating}),onRetry:()=>emit('retry',m.id)})):slots.empty?.()||h('div',{class:'yk-ai-conversation__empty'},[h('span',{'aria-hidden':'true'},'✦'),h('h3',{},p.emptyTitle),h('p',{},'消息与模型连接，由你的应用掌控。')]))),
  !following.value?h('button',{type:'button',class:'yk-ai-conversation__latest',onClick:latest},'↓ 回到最新'):null]);
}});
