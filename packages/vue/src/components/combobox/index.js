import {defineComponent,h,ref,computed,watch,nextTick,useId} from 'vue';
export const YkCombobox=defineComponent({name:'YkCombobox',props:{modelValue:{type:String,default:''},options:{type:Array,default:()=>[]},label:{type:String,default:'选择项目'},placeholder:{type:String,default:'搜索...'},disabled:Boolean},emits:['update:modelValue'],setup(p,{emit}){
 const q=ref(''),open=ref(false),active=ref(-1),input=ref(null),root=ref(null),id=useId();
 const filtered=computed(()=>p.options.filter(o=>o.label.toLowerCase().includes(q.value.toLowerCase()))),enabled=computed(()=>filtered.value.filter(o=>!o.disabled));
 const selectedLabel=()=>p.options.find(o=>o.value===p.modelValue)?.label||'';
 function close(){open.value=false;q.value='';active.value=-1;}
 function show(){if(p.disabled)return;open.value=true;active.value=0;}
 watch(()=>[p.modelValue,p.disabled],()=>{if(p.disabled)close();});watch(q,()=>active.value=0);
 async function select(option){if(!option||option.disabled||p.disabled)return;emit('update:modelValue',option.value);close();await nextTick();input.value?.focus();open.value=false;}
 async function key(e){if(p.disabled||e.isComposing||e.keyCode===229)return;
  if(e.key==='Escape'){e.preventDefault();e.stopPropagation();close();return;}
  if(e.key==='Tab'){close();return;}
  if(e.key==='Enter'&&open.value){e.preventDefault();select(enabled.value[active.value]);return;}
  if(['ArrowDown','ArrowUp','Home','End'].includes(e.key)){
   e.preventDefault();if(!open.value){show();active.value=e.key==='ArrowUp'?enabled.value.length-1:0;}
   else if(e.key==='ArrowDown')active.value=Math.min(active.value+1,enabled.value.length-1);
   else if(e.key==='ArrowUp')active.value=Math.max(active.value-1,0);
   else if(e.key==='Home')active.value=0;else active.value=enabled.value.length-1;
   await nextTick();root.value?.querySelector('[data-active=true]')?.scrollIntoView({block:'nearest'});
  }
 }
 return()=>h('div',{class:'yk-combobox',ref:root,onFocusout:e=>{if(!root.value?.contains(e.relatedTarget))close();}},[
  h('label',{for:id,class:'yk-combobox__label'},p.label),
  h('input',{id,ref:input,value:open.value?q.value:selectedLabel(),placeholder:p.placeholder,disabled:p.disabled,role:'combobox',autocomplete:'off','aria-autocomplete':'list','aria-expanded':open.value,'aria-controls':id+'-list','aria-activedescendant':open.value&&enabled.value[active.value]?id+'-opt-'+filtered.value.indexOf(enabled.value[active.value]):undefined,onInput:e=>{q.value=e.target.value;show();},onClick:show,onKeydown:key}),
  open.value?h('div',{id:id+'-list',class:'yk-combobox__list',role:'listbox','aria-label':p.label},filtered.value.length?filtered.value.map((o,i)=>h('div',{id:id+'-opt-'+i,key:o.value,role:'option','aria-selected':p.modelValue===o.value,'aria-disabled':o.disabled||undefined,'data-active':enabled.value[active.value]===o,onMousedown:e=>e.preventDefault(),onPointermove:()=>{if(!o.disabled)active.value=enabled.value.indexOf(o);},onClick:()=>select(o)},o.label)):h('span',{class:'yk-combobox__empty',role:'status'},'没有匹配项')):null]);
}});
