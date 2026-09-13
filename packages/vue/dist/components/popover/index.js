import {defineComponent,h,ref,onMounted,onBeforeUnmount,watch,nextTick,useId} from 'vue';
export const YkPopover=defineComponent({name:'YkPopover',props:{open:{type:Boolean,default:undefined},placement:{type:String,default:'bottom'},label:{type:String,default:'补充信息'}},emits:['update:open'],setup(p,{slots,emit}){
 const inner=ref(false),root=ref(null),panel=ref(null),id=useId();let opener=null,restore=false,disposed=false;
 const isOpen=()=>p.open===undefined?inner.value:p.open;
 const set=(v,returnFocus=false)=>{restore=returnFocus;inner.value=v;emit('update:open',v);};
 const onDoc=e=>{if(isOpen()&&!root.value?.contains(e.target))set(false);};
 watch(isOpen,async value=>{if(value)opener=document.activeElement;await nextTick();if(disposed)return;if(value){const focusable=panel.value?.querySelector('button:not(:disabled),input:not(:disabled),a[href],[tabindex="0"]');(focusable||panel.value)?.focus();}else if(restore&&opener?.isConnected)opener.focus();});
 onMounted(()=>document.addEventListener('pointerdown',onDoc));onBeforeUnmount(()=>{disposed=true;if(typeof document!=='undefined')document.removeEventListener('pointerdown',onDoc);});
 return()=>h('div',{class:'yk-popover',ref:root,onKeydown:e=>{if(e.key==='Escape'&&isOpen()){e.preventDefault();e.stopPropagation();set(false,true);}}},[
  slots.trigger?.({open:isOpen(),toggle:()=>set(!isOpen(),isOpen()),attrs:{'aria-expanded':isOpen(),'aria-controls':id,'aria-haspopup':'dialog'}}),
  isOpen()?h('div',{id,ref:panel,class:['yk-popover__panel','is-'+p.placement],role:'dialog','aria-label':p.label,tabindex:-1},slots.default?.()):null]);
}});
