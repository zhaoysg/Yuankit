import {defineComponent,h,ref,useId} from 'vue';
import {useControllable} from '../../shared/control.js';
import {validateFiles,formatBytes} from '../../shared/safety.js';
export const YkFileUpload=defineComponent({name:'YkFileUpload',props:{modelValue:{type:Array,default:undefined},defaultValue:{type:Array,default:()=>[]},label:{type:String,default:'添加文件'},accept:{type:String,default:''},maxSize:{type:Number,default:10485760},maxFiles:{type:Number,default:5},disabled:Boolean},emits:['update:modelValue','reject'],setup(p,{emit}){
 const id=useId(),input=ref(null),drag=ref(false),errors=ref([]),model=useControllable(p,emit,'modelValue',[]);
 function add(files){if(p.disabled)return;const result=validateFiles(Array.from(files||[]),{accept:p.accept,maxSize:p.maxSize,maxFiles:p.maxFiles,existing:model.value.value});errors.value=result.rejected.map(x=>`${x.file.name}：${x.reason}`);if(result.accepted.length)model.set([...model.value.value,...result.accepted]);if(result.rejected.length)emit('reject',result.rejected);}
 return()=>h('section',{class:'yk-upload','aria-label':p.label},[
  h('input',{ref:input,id,type:'file',accept:p.accept,multiple:p.maxFiles>1,disabled:p.disabled,class:'yk-sr-only',tabindex:-1,onChange:e=>{add(e.target.files);e.target.value='';}}),
  h('button',{type:'button',class:['yk-upload__drop',{'is-drag':drag.value}],disabled:p.disabled,onClick:()=>input.value?.click(),onDragover:e=>{e.preventDefault();if(!p.disabled)drag.value=true;},onDragleave:()=>drag.value=false,onDrop:e=>{e.preventDefault();drag.value=false;add(e.dataTransfer.files);}},[h('span',{class:'yk-upload__icon','aria-hidden':'true'},'↑'),h('strong',{},p.label),h('span',{},`点击选择或拖入 · 每个 ≤ ${formatBytes(p.maxSize)} · 最多 ${p.maxFiles} 个`)]),
  h('ul',{class:'yk-upload__files'},model.value.value.map((file,i)=>h('li',{key:file.name+'-'+i},[h('span',{},file.name),h('small',{},formatBytes(file.size)),h('button',{type:'button',disabled:p.disabled,'aria-label':'移除 '+file.name,onClick:()=>model.set(model.value.value.filter((_,j)=>j!==i))},'×')]))),
  errors.value.length?h('div',{role:'alert',class:'yk-upload__error'},errors.value.join('；')):null,
  h('small',{class:'yk-upload__note'},'仅在本地选择；不会自动上传文件。')]);
}});
