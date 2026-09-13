import {defineComponent,h,ref,computed,watch,nextTick,useId} from 'vue';
import {YkDialog} from '../dialog/index.js';
export const YkCommand=defineComponent({name:'YkCommand',props:{open:{type:Boolean,default:false},items:{type:Array,default:()=>[]},label:{type:String,default:'快捷命令'}},emits:['update:open','select'],setup(p,{emit}){
 const q=ref(''),active=ref(0),input=ref(null),id=useId(),list=computed(()=>p.items.filter(i=>i.label.toLowerCase().includes(q.value.toLowerCase()))),enabled=computed(()=>list.value.filter(i=>!i.disabled));
 watch(q,()=>active.value=0);watch(()=>p.open,async v=>{if(v){q.value='';active.value=0;await nextTick();input.value?.focus();}});
 const pick=item=>{if(!item||item.disabled)return;emit('select',item);emit('update:open',false);};
 function key(e){if(['ArrowDown','ArrowUp','Enter','Home','End'].includes(e.key)){e.preventDefault();if(e.key==='Enter')pick(enabled.value[active.value]);if(e.key==='ArrowDown')active.value=Math.min(active.value+1,enabled.value.length-1);if(e.key==='ArrowUp')active.value=Math.max(0,active.value-1);if(e.key==='Home')active.value=0;if(e.key==='End')active.value=enabled.value.length-1;}}
 return()=>h(YkDialog,{title:p.label,open:p.open,'onUpdate:open':v=>emit('update:open',v),class:'yk-command-dialog'},{default:()=>[
  h('input',{ref:input,class:'yk-command__input',placeholder:'搜索命令…','aria-label':'搜索命令',value:q.value,role:'combobox','aria-expanded':true,'aria-controls':id,'aria-activedescendant':enabled.value[active.value]?id+'-'+list.value.indexOf(enabled.value[active.value]):undefined,onInput:e=>q.value=e.target.value,onKeydown:key}),
  h('div',{id,role:'listbox','aria-label':p.label,class:'yk-command__list'},list.value.map((item,i)=>h('div',{id:id+'-'+i,role:'option','aria-selected':enabled.value[active.value]===item,'aria-disabled':item.disabled||undefined,class:'yk-command__item',onPointermove:()=>{if(!item.disabled)active.value=enabled.value.indexOf(item);},onMousedown:e=>e.preventDefault(),onClick:()=>pick(item)},[item.label,item.shortcut?h('kbd',{},item.shortcut):null]))),!list.value.length?h('p',{role:'status'},'没有匹配命令'):null,h('small',{class:'yk-command__hint'},'↑↓ 选择 · Enter 执行 · Esc 关闭')]
 });
}});
