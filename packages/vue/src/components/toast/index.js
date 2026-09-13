import {defineComponent,h,watch,onBeforeUnmount} from 'vue';
export const YkToast=defineComponent({name:'YkToast',props:{open:{type:Boolean,default:true},title:{type:String,default:'已保存'},description:String,duration:{type:Number,default:5000},tone:{type:String,default:'success'}},emits:['update:open'],setup(p,{emit}){
 let timer,started=0,remaining=p.duration,hovered=false,focused=false;const stop=()=>{clearTimeout(timer);timer=undefined;};
 const close=()=>{stop();emit('update:open',false);};
 const resume=()=>{stop();if(p.open&&p.duration>0&&!hovered&&!focused){started=Date.now();timer=setTimeout(close,Math.max(0,remaining));}};
 const pause=()=>{if(timer){remaining=Math.max(0,remaining-(Date.now()-started));stop();}};
 watch(()=>[p.open,p.duration],()=>{stop();remaining=p.duration;resume();},{immediate:true});onBeforeUnmount(stop);
 return()=>p.open?h('section',{class:['yk-toast','yk-tone--'+p.tone],role:p.tone==='danger'?'alert':'status','aria-atomic':'true',onPointerenter:()=>{hovered=true;pause();},onPointerleave:()=>{hovered=false;resume();},onFocusin:()=>{focused=true;pause();},onFocusout:e=>{if(!e.currentTarget.contains(e.relatedTarget)){focused=false;resume();}}},[h('span',{class:'yk-toast__dot','aria-hidden':'true'}),h('div',{},[h('strong',{},p.title),p.description?h('p',{},p.description):null]),h('button',{type:'button','aria-label':'关闭轻提示',onClick:close},'×')]):null;
}});
