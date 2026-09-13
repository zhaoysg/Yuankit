import {defineComponent,h,ref,computed,useId} from 'vue';
import {YkButton} from '../../components/button/index.js';
import {YkAIModelSelect} from '../ai-model-select/index.js';
import {YkAIAttachments} from '../ai-attachments/index.js';
import {validateFiles} from '../../shared/safety.js';
export const YkAIPromptInput=defineComponent({name:'YkAIPromptInput',props:{modelValue:{type:String,default:''},model:{type:String,default:''},models:{type:Array,default:()=>[]},placeholder:{type:String,default:'描述你想完成的事情…'},label:{type:String,default:'消息内容'},busy:Boolean,disabled:Boolean,rows:{type:Number,default:3},maxLength:{type:Number,default:8000},sendKey:{type:String,default:'enter'},attachments:{type:Boolean,default:true},accept:{type:String,default:'.txt,.md,.pdf,.png,.jpg,.jpeg'},maxFiles:{type:Number,default:3}},emits:['update:modelValue','update:model','submit','stop','reject'],setup(p,{emit,expose}){
 const id=useId(),fileInput=ref(null),textInput=ref(null),files=ref([]),error=ref(''),composing=ref(false);
 const canSend=computed(()=>!p.busy&&!p.disabled&&p.modelValue.length<=p.maxLength&&!!(p.modelValue.trim()||files.value.length));
 function send(){if(!canSend.value)return;emit('submit',{text:p.modelValue.trim(),files:[...files.value],model:p.model});}
 function add(list){if(p.busy||p.disabled||!p.attachments)return;const result=validateFiles(Array.from(list||[]),{existing:files.value,maxFiles:p.maxFiles,accept:p.accept});files.value=[...files.value,...result.accepted];error.value=result.rejected.map(x=>`${x.file.name}：${x.reason}`).join('；');if(result.rejected.length)emit('reject',result.rejected);}
 function key(e){if(e.isComposing||composing.value||e.keyCode===229)return;if(e.key==='Enter'&&!e.shiftKey&&(p.sendKey==='enter'||e.ctrlKey||e.metaKey)){e.preventDefault();send();}}
 expose({clearAttachments:()=>files.value=[],focus:()=>textInput.value?.focus()});
 return()=>h('div',{class:['yk-ai-prompt',{'is-busy':p.busy}],'aria-label':p.label},[
  files.value.length?h(YkAIAttachments,{items:files.value.map((f,i)=>({id:String(i),name:f.name,size:f.size})),disabled:p.busy||p.disabled,onRemove:id=>files.value=files.value.filter((_,i)=>String(i)!==id)}):null,
  h('label',{for:id,class:'yk-sr-only'},p.label),h('textarea',{id,ref:textInput,value:p.modelValue,rows:p.rows,maxlength:p.maxLength,disabled:p.disabled,readonly:p.busy,placeholder:p.placeholder,'aria-describedby':id+'-hint',onInput:e=>emit('update:modelValue',e.target.value),onKeydown:key,onCompositionstart:()=>composing.value=true,onCompositionend:()=>composing.value=false,onDragover:e=>{if(p.attachments)e.preventDefault();},onDrop:e=>{if(p.attachments){e.preventDefault();add(e.dataTransfer.files);}}}),
  h('div',{class:'yk-ai-prompt__toolbar'},[h('div',{class:'yk-ai-prompt__tools'},[
   p.attachments?h('button',{type:'button',class:'yk-ai-prompt__attach',disabled:p.busy||p.disabled,'aria-label':'添加附件',onClick:()=>fileInput.value?.click()},'+'):null,
   p.models.length?h(YkAIModelSelect,{options:p.models,modelValue:p.model,disabled:p.busy||p.disabled,'onUpdate:modelValue':v=>emit('update:model',v)}):null]),
   p.busy?h(YkButton,{size:'sm',variant:'outline',disabled:p.disabled,onClick:()=>emit('stop')},()=> '停止生成'):h(YkButton,{size:'sm',disabled:!canSend.value,onClick:send},()=> '发送 ↑')]),
  h('input',{ref:fileInput,type:'file',accept:p.accept,multiple:p.maxFiles>1,class:'yk-sr-only',tabindex:-1,disabled:p.disabled||p.busy,'aria-label':'选择 AI 附件',onChange:e=>{add(e.target.files);e.target.value='';}}),
  h('small',{id:id+'-hint',class:'yk-ai-prompt__hint'},`${p.sendKey==='enter'?'Enter':'Ctrl / ⌘ + Enter'} 发送 · Shift + Enter 换行 · ${p.modelValue.length}/${p.maxLength}`),
  error.value?h('div',{class:'yk-ai-prompt__error',role:'alert'},error.value):null]);
}});
