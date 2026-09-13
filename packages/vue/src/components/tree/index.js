import {defineComponent,h,ref,computed,nextTick} from 'vue';
import {useControllable} from '../../shared/control.js';
export const YkTree=defineComponent({name:'YkTree',props:{items:{type:Array,default:()=>[]},modelValue:{type:String,default:undefined},defaultValue:String,label:{type:String,default:'资源目录'},disabled:Boolean},emits:['update:modelValue'],setup(p,{emit}){
 const model=useControllable(p,emit),expanded=ref(new Set()),focusId=ref(''),root=ref(null);
 const visible=computed(()=>{const result=[];function visit(nodes,level=1,parent=null){nodes.forEach((n,i)=>{result.push({...n,level,parent,pos:i+1,setsize:nodes.length});if(expanded.value.has(n.value))visit(n.children||[],level+1,n.value);});}visit(p.items);return result;});
 const enabled=computed(()=>visible.value.filter(n=>!n.disabled&&!p.disabled));
 const focused=computed(()=>enabled.value.some(n=>n.value===focusId.value)?focusId.value:enabled.value[0]?.value);
 const toggle=n=>{const next=new Set(expanded.value);next.has(n.value)?next.delete(n.value):next.add(n.value);expanded.value=next;};
 async function focus(n){if(!n)return;focusId.value=n.value;await nextTick();[...root.value.querySelectorAll('[role=treeitem]')].find(e=>e.dataset.value===n.value)?.focus();}
 function key(e,n){const index=enabled.value.findIndex(x=>x.value===n.value);if(['ArrowDown','ArrowUp','ArrowRight','ArrowLeft','Home','End','Enter',' '].includes(e.key))e.preventDefault();
 if(e.key==='ArrowDown')focus(enabled.value[Math.min(index+1,enabled.value.length-1)]);if(e.key==='ArrowUp')focus(enabled.value[Math.max(index-1,0)]);if(e.key==='Home')focus(enabled.value[0]);if(e.key==='End')focus(enabled.value.at(-1));
 if(e.key==='ArrowRight'&&n.children?.length){if(!expanded.value.has(n.value))toggle(n);else focus(enabled.value[index+1]);}
 if(e.key==='ArrowLeft'){if(expanded.value.has(n.value))toggle(n);else focus(enabled.value.find(x=>x.value===n.parent));}
 if(e.key==='Enter'||e.key===' ')model.set(n.value);
 }
 return()=>h('div',{class:'yk-tree',role:'tree','aria-label':p.label,ref:root},visible.value.map(n=>h('div',{role:'treeitem',key:n.value,'data-value':n.value,'aria-level':n.level,'aria-posinset':n.pos,'aria-setsize':n.setsize,'aria-selected':model.value.value===n.value,'aria-expanded':n.children?.length?expanded.value.has(n.value):undefined,'aria-disabled':n.disabled||p.disabled||undefined,tabindex:!p.disabled&&!n.disabled&&focused.value===n.value?0:-1,class:'yk-tree__item',style:{paddingInlineStart:(n.level-1)*20+10+'px'},onFocus:()=>focusId.value=n.value,onKeydown:e=>{if(!n.disabled&&!p.disabled)key(e,n);},onClick:()=>{if(!n.disabled&&!p.disabled){model.set(n.value);if(n.children?.length)toggle(n);}}},[h('span',{'aria-hidden':'true',class:'yk-tree__chevron'},n.children?.length?(expanded.value.has(n.value)?'⌄':'›'):'·'),n.label])));
}});
