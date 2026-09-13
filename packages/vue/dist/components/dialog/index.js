import { defineComponent,h,ref,watch,onMounted,onBeforeUnmount,nextTick,useId,mergeProps } from 'vue';
import { useControllable } from '../../shared/control.js';
import { useYuanConfig,useMessages } from '../../config/context.js';
import { themeAttrs } from '../../config/theme.js';
import { icon } from '../../shared/icons.js';
import { acquireScrollLock } from '../../shared/scroll-lock.js';
export const YkDialog=defineComponent({
 name:'YkDialog',inheritAttrs:false,
 props:{open:{type:Boolean,default:undefined},defaultValue:Boolean,title:{type:String,required:true},description:String,size:{type:String,default:'md'},closeOnEscape:{type:Boolean,default:true},closeOnBackdrop:{type:Boolean,default:true},showClose:{type:Boolean,default:true}},
 emits:['update:open','afterOpen','afterClose'],
 setup(props,{slots,attrs,emit,expose}){
  const dialog=ref(null),uid=useId(),model=useControllable(props,emit,'open',false),config=useYuanConfig(),t=useMessages();
  let disposed=false, opener=null, pressedOutside=false, releaseLock=()=>{};
  const requestOpen=value=>model.set(value);
  const sync=async()=>{
   await nextTick(); const el=dialog.value;if(disposed||!el)return;
   if(model.value.value&&!el.open){opener=document.activeElement;el.showModal();releaseLock=acquireScrollLock();emit('afterOpen');}
   else if(!model.value.value&&el.open){el.close();releaseLock();}
  };
  const outside=e=>{const r=dialog.value?.getBoundingClientRect();return r&&(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom);};
  watch(model.value,sync);onMounted(sync);
  onBeforeUnmount(()=>{disposed=true;if(dialog.value?.open)dialog.value.close();releaseLock();});
  expose({open:()=>requestOpen(true),close:()=>requestOpen(false)});
  return ()=>h('div',{class:'yk-dialog-host'},[
   slots.trigger?.({open:()=>requestOpen(true)}),
   h('dialog',mergeProps(themeAttrs(config.value),attrs,{
    ref:dialog,class:['yk-dialog',`yk-dialog--${props.size}`],'aria-labelledby':`yk-dialog-title-${uid}`,'aria-describedby':props.description?`yk-dialog-description-${uid}`:undefined,
    onCancel:e=>{e.preventDefault();if(props.closeOnEscape)requestOpen(false);},
    onPointerdown:e=>{pressedOutside=e.target===dialog.value&&outside(e);},
    onClick:e=>{if(props.closeOnBackdrop&&pressedOutside&&e.target===dialog.value&&outside(e))requestOpen(false);pressedOutside=false;},
    onClose:()=>{if(disposed||dialog.value?.open)return;releaseLock();requestOpen(false);emit('afterClose');if(opener?.isConnected&&!opener.closest('[inert]'))opener.focus();}
   }),[
    h('div',{class:'yk-dialog__header'},[
     h('div',{},[h('h2',{id:`yk-dialog-title-${uid}`,class:'yk-dialog__title'},props.title),props.description?h('p',{id:`yk-dialog-description-${uid}`,class:'yk-dialog__description'},props.description):null]),
     props.showClose?h('button',{type:'button',class:'yk-icon-button','aria-label':t.value.close,onClick:()=>requestOpen(false)},icon('close')):null
    ]),
    h('div',{class:'yk-dialog__body'},slots.default?.({close:()=>requestOpen(false)})),
    slots.footer?h('div',{class:'yk-dialog__footer'},slots.footer({close:()=>requestOpen(false)})):null
   ])
  ]);
 }
});
