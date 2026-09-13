import {defineComponent,h,computed,watch,useId} from 'vue';
import {useControllable} from '../../shared/control.js';
export const YkCarousel=defineComponent({name:'YkCarousel',props:{items:{type:Array,default:()=>[]},modelValue:{type:Number,default:undefined},defaultValue:{type:Number,default:0},label:{type:String,default:'内容轮播'},loop:Boolean},emits:['update:modelValue'],setup(p,{slots,emit}){
 const model=useControllable(p,emit,'modelValue',0),id=useId(),index=computed(()=>Math.max(0,Math.min(Number.isFinite(model.value.value)?model.value.value:0,p.items.length-1)));
 function move(delta){if(!p.items.length)return;const next=p.loop?(index.value+delta+p.items.length)%p.items.length:Math.max(0,Math.min(index.value+delta,p.items.length-1));model.set(next);}
 return()=>h('section',{class:'yk-carousel',role:'region','aria-roledescription':'轮播','aria-label':p.label},[
  h('div',{class:'yk-carousel__slide',id,role:'group','aria-roledescription':'幻灯片','aria-label':`${index.value+1} / ${p.items.length}`,'aria-live':'polite'},p.items.length?(slots.slide?.({item:p.items[index.value],index:index.value})||[h('span',{class:'yk-carousel__number'},String(index.value+1).padStart(2,'0')),h('h3',{},p.items[index.value].label),h('p',{},p.items[index.value].content)]):'暂无内容'),
  h('div',{class:'yk-carousel__controls'},[h('button',{type:'button','aria-label':'上一张','aria-controls':id,disabled:!p.items.length||(!p.loop&&index.value===0),onClick:()=>move(-1)},'←'),h('span',{},`${p.items.length?index.value+1:0} / ${p.items.length}`),h('button',{type:'button','aria-label':'下一张','aria-controls':id,disabled:!p.items.length||(!p.loop&&index.value===p.items.length-1),onClick:()=>move(1)},'→')])]);
}});
