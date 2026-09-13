import { defineComponent,h,useId,ref,mergeProps,nextTick } from 'vue';
import { useControllable } from '../../shared/control.js';
export const YkTabs=defineComponent({
 name:'YkTabs',inheritAttrs:false,
 props:{modelValue:String,defaultValue:String,items:{type:Array,default:()=>[]},label:{type:String,default:'选项卡'},activation:{type:String,default:'automatic'},variant:{type:String,default:'soft'}},
 emits:['update:modelValue','change'],
 setup(props,{slots,attrs,emit}){
  const uid=useId(),model=useControllable(props,emit),focused=ref(null);const buttons=new Map();
  const selected=()=>props.items.some(i=>i.value===model.value.value&&!i.disabled)?model.value.value:props.items.find(i=>!i.disabled)?.value;
  const tabStop=()=>props.items.some(i=>i.value===focused.value&&!i.disabled)?focused.value:selected();
  const choose=value=>{if(value!==selected()){model.set(value);emit('change',value);}};
  const keydown=(e,index)=>{
   const enabled=props.items.map((x,i)=>x.disabled?-1:i).filter(i=>i!==-1);let target;
   if(e.key==='ArrowRight')target=enabled[(enabled.indexOf(index)+1)%enabled.length];
   else if(e.key==='ArrowLeft')target=enabled[(enabled.indexOf(index)-1+enabled.length)%enabled.length];
   else if(e.key==='Home')target=enabled[0];else if(e.key==='End')target=enabled.at(-1);else return;
   e.preventDefault();if(target===undefined)return;const value=props.items[target].value;focused.value=value;buttons.get(value)?.focus();if(props.activation==='automatic')choose(value);
  };
  return ()=>h('div',mergeProps(attrs,{class:['yk-tabs',`yk-tabs--${props.variant}`]}),[
   h('div',{role:'tablist','aria-label':props.label,class:'yk-tabs__list'},props.items.map((item,index)=>h('button',{
    key:item.value,ref:el=>{if(el)buttons.set(item.value,el);else buttons.delete(item.value);},type:'button',role:'tab',id:`yk-tab-${uid}-${index}`,'aria-controls':`yk-panel-${uid}-${index}`,'aria-selected':item.value===selected(),disabled:item.disabled,tabindex:!item.disabled&&item.value===tabStop()?0:-1,class:'yk-tabs__trigger',onClick:()=>{focused.value=item.value;choose(item.value);},onKeydown:e=>keydown(e,index)
   },item.label))),
   ...props.items.map((item,index)=>h('div',{key:item.value,role:'tabpanel',id:`yk-panel-${uid}-${index}`,'aria-labelledby':`yk-tab-${uid}-${index}`,hidden:item.value!==selected(),tabindex:0,class:'yk-tabs__panel'},slots[item.value]?.()||item.content||null))
  ]);
 }
});
