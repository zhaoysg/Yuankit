/** Local, opt-in interaction fixture. Not an AI provider, transport or token stream. */
import {defineComponent,h,ref,computed,onBeforeUnmount} from 'vue';
import {YkAIChatPage} from '../templates/ai-chat-page/index.js';
import {YkAIAssistantDock} from '../blocks/ai-assistant-dock/index.js';
import {YkAIToolCall} from '../ai/ai-tool-call/index.js';
import {YkAIArtifact} from '../ai/ai-artifact/index.js';
import {YkAIUsage} from '../ai/ai-usage/index.js';
export const demoModels=[{value:'demo-balanced',label:'均衡模式 · 演示'},{value:'demo-fast',label:'快速模式 · 演示'},{value:'demo-disabled',label:'未配置模型',disabled:true}];
const suggestions=[{value:'structure',label:'整理页面结构',content:'把一个想法拆成可复用区块。'},{value:'review',label:'检查设计规范',content:'核对颜色、圆角和交互状态。'},{value:'draft',label:'起草产品说明',content:'从清晰的结构开始表达。'},{value:'compare',label:'对比两套方案',content:'把差异放在一起查看。'}];
export const YkAIChatDemo=defineComponent({name:'YkAIChatDemo',props:{settings:{type:Object,default:()=>({})},variant:{type:String,default:'chat'}},emits:['action'],setup(p,{emit}){
 const text=ref(''),busy=ref(false),model=ref(demoModels[0].value),active=ref('session-1'),note=ref(''),toolStatus=ref('idle'),closed=ref(false);
 const sessions=ref([{id:'session-1',title:'开始一个新想法',messages:[]},{id:'session-2',title:'设计规范 · 示例',messages:[{id:'sample-1',role:'user',content:'如何维护同一套主题？'},{id:'sample-2',role:'assistant',content:'[本地演示内容]\n将品牌、字体与圆角集中在主题变量中维护。区块与页面共享变量，业务逻辑留在应用中。',status:'success'}]}]);
 const current=computed(()=>sessions.value.find(s=>s.id===active.value));
 let timer=null,sequence=0,generation=0;
 const event=(action,value)=>emit('action',{action,value});
 function cancel(){clearInterval(timer);timer=null;generation++;busy.value=false;}
 onBeforeUnmount(cancel);
 function stop(){if(!busy.value)return;const last=current.value.messages.at(-1);cancel();if(last){last.status='idle';last.content+='\n[演示已停止]';}toolStatus.value='idle';note.value='已停止本地演示，不会继续追加。';event('stop');}
 function fail(){if(!busy.value)return;const last=current.value.messages.at(-1);cancel();last.status='error';toolStatus.value='error';note.value='人为触发的本地失败场景；可点消息中的重试。';event('demo-error');}
 function send(payload){if(busy.value)return;const message=String(payload.text||'').trim();if(!message&&!payload.files?.length)return;
  const session=current.value,id='demo-'+(++sequence);session.messages.push({id:id+'-user',role:'user',content:message+(payload.files?.length?`\n[已选择 ${payload.files.length} 个本地文件，未上传]`:'')});session.title=message.slice(0,18)||'附件演示';
  const reply={id:id+'-assistant',role:'assistant',content:'',status:'streaming'};session.messages.push(reply);const bound=session.messages.at(-1);
  text.value='';busy.value=true;toolStatus.value='running';note.value='本地定时演示，未连接模型。';const request=++generation;
  const answer=`[本地演示回复，不是模型生成]\n\n你的问题是：${message||'查看附件'}\n\n可以把界面分成三个部分：\n1. 基础组件负责结构与交互。\n2. 页面区块组合具体的场景。\n3. 主题与参数方案决定视觉风格。\n\n这段文字用于演示流式呈现、停止、失败和重试。真实输出需要由你的后端返回。`;
  let pos=0;timer=setInterval(()=>{if(request!==generation)return;pos=Math.min(pos+4,answer.length);bound.content=answer.slice(0,pos);if(pos>=answer.length){clearInterval(timer);timer=null;busy.value=false;bound.status='success';toolStatus.value='success';note.value='本地演示已结束。';}},35);
  event('submit',{text:message,model:payload.model||model.value,fileCount:payload.files?.length||0,demo:true});
 }
 function retry(){if(busy.value)return;const user=[...current.value.messages].reverse().find(m=>m.role==='user');if(user)send({text:user.content,files:[],model:model.value});}
 function newChat(){if(busy.value)return;const id='session-'+Date.now();sessions.value.push({id,title:'新对话',messages:[]});active.value=id;text.value='';note.value='';toolStatus.value='idle';event('new-conversation');}
 function choose(id){if(busy.value)return;active.value=id;text.value='';toolStatus.value='idle';note.value='当前会话仅保存在内存。';}
 return()=>{const s=p.settings,artifact=s.artifactText||'# 界面设计草稿\n\n## 结构\n导航 → 首屏 → 特性区 → 行动引导\n\n## 配置\n- 品牌色：项目主题\n- 圆角：共享设计变量\n- 组件状态：由应用传入\n\n这是示例文本，不执行任何代码。';
  const dock=p.variant==='dock';return h('div',{class:'yk-ai-demo'},[
   h('p',{class:'yk-ai-demo__notice'},[h('b',{},'LOCAL DEMO'),'本地演示 · 无模型请求 · 无文件上传']),
   dock?(closed.value?h('button',{type:'button',onClick:()=>closed.value=false},'重新打开助手'):h(YkAIAssistantDock,{title:s.label||'页面助手',modelValue:text.value,messages:current.value.messages,busy:busy.value,height:s.chatHeight||300,'onUpdate:modelValue':v=>text.value=v,onSubmit:send,onStop:stop,onClose:()=>closed.value=true})):
   h(YkAIChatPage,{title:s.label,description:s.description,modelValue:text.value,messages:current.value.messages,busy:busy.value,model:model.value,models:demoModels,variant:p.variant,appearance:s.messageAppearance||'plain',showAvatar:s.showAvatar!==false,history:sessions.value,activeConversation:active.value,notice:'本地交互演示',suggestions,height:s.chatHeight||360,sendKey:s.sendKey||'enter','onUpdate:modelValue':v=>text.value=v,'onUpdate:model':v=>model.value=v,onSubmit:send,onStop:stop,onNew:newChat,onSelectConversation:choose,onSuggestion:item=>text.value=item.label,onFeedback:v=>event('feedback',v),onRetry:retry},{context:()=>toolStatus.value==='idle'?null:h('div',{class:'yk-ai-demo__context'},[h(YkAIToolCall,{name:'demo.compose_layout',status:toolStatus.value,input:'{"mode":"local-fixture"}',output:toolStatus.value==='success'?'示例结构已显示；没有执行外部工具。':toolStatus.value==='error'?'人为触发的演示错误。':''}),busy.value?h('div',{class:'yk-ai-demo__tools'},[h('span',{},'测试错误恢复：'),h('button',{type:'button',onClick:fail},'模拟失败')]):null]),artifact:()=>[h(YkAIArtifact,{title:s.artifactTitle||'页面方案.md',content:artifact,language:'markdown'}),h('div',{style:{marginTop:'12px'}},h(YkAIUsage,{used:1240,limit:32000,label:'上下文使用量 · 示例'}))]}),
   note.value?h('p',{class:'yk-ai-demo__status',role:'status'},note.value):null]);
 };
}});
