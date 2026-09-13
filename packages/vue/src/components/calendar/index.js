import {defineComponent,h,ref,computed,watch,nextTick} from 'vue';
import {useControllable} from '../../shared/control.js';
import {parseDate,todayISO,shiftDate,dateAllowed,monthGrid} from '../../shared/dates.js';
export const YkCalendar=defineComponent({name:'YkCalendar',props:{modelValue:{type:String,default:undefined},defaultValue:String,min:String,max:String,disabled:Boolean,weekStartsOn:{type:Number,default:1},label:{type:String,default:'选择日期'}},emits:['update:modelValue'],setup(p,{emit}){
 const model=useControllable(p,emit),root=ref(null);
 const initial=()=>parseDate(model.value.value)?model.value.value:dateAllowed(todayISO(),p.min,p.max)?todayISO():parseDate(p.min)?p.min:parseDate(p.max)?p.max:todayISO();
 const focused=ref(initial()),month=ref(focused.value);
 const allowed=d=>!p.disabled&&dateAllowed(d,p.min,p.max);
 watch(()=>[model.value.value,p.min,p.max],()=>{focused.value=initial();month.value=focused.value;});
 const grid=computed(()=>monthGrid(month.value,p.weekStartsOn===0?0:1));
 const title=computed(()=>new Intl.DateTimeFormat('zh-CN',{year:'numeric',month:'long',timeZone:'UTC'}).format(parseDate(month.value)));
 async function focusDate(d){if(!allowed(d))return;focused.value=d;month.value=d;await nextTick();root.value?.querySelector(`[data-date="${d}"]`)?.focus();}
 function key(e,d){let target;if(e.key==='ArrowRight')target=shiftDate(d,1);if(e.key==='ArrowLeft')target=shiftDate(d,-1);if(e.key==='ArrowDown')target=shiftDate(d,7);if(e.key==='ArrowUp')target=shiftDate(d,-7);
  const weekday=(parseDate(d).getUTCDay()-(p.weekStartsOn===0?0:1)+7)%7;
  if(e.key==='Home')target=shiftDate(d,-weekday);if(e.key==='End')target=shiftDate(d,6-weekday);if(e.key==='PageUp')target=shiftDate(d,0,e.shiftKey?-12:-1);if(e.key==='PageDown')target=shiftDate(d,0,e.shiftKey?12:1);
  if(target){e.preventDefault();if(p.min&&target<p.min)target=p.min;if(p.max&&target>p.max)target=p.max;focusDate(target);}
 }
 const canMove=n=>{const d=shiftDate(month.value,0,n);return !p.disabled&&parseDate(d)&&(!p.min||d.slice(0,7)>=p.min.slice(0,7))&&(!p.max||d.slice(0,7)<=p.max.slice(0,7));};
 function move(n){let d=shiftDate(month.value,0,n);if(p.min&&d<p.min)d=p.min;if(p.max&&d>p.max)d=p.max;month.value=d;focused.value=d;}
 return()=>h('section',{class:'yk-calendar',ref:root,'aria-label':p.label},[
  h('div',{class:'yk-calendar__header'},[h('button',{type:'button',disabled:!canMove(-1),'aria-label':'上个月',onClick:()=>move(-1)},'‹'),h('strong',{'aria-live':'polite'},title.value),h('button',{type:'button',disabled:!canMove(1),'aria-label':'下个月',onClick:()=>move(1)},'›')]),
  h('table',{role:'grid','aria-label':title.value},[h('thead',{},h('tr',{},(p.weekStartsOn===0?['日','一','二','三','四','五','六']:['一','二','三','四','五','六','日']).map(x=>h('th',{scope:'col'},x)))),h('tbody',{},Array.from({length:6},(_,row)=>h('tr',{},grid.value.slice(row*7,row*7+7).map(d=>h('td',{'aria-selected':model.value.value===d.date},h('button',{type:'button',tabindex:focused.value===d.date?0:-1,'data-date':d.date,'aria-label':d.date,'aria-current':d.date===todayISO()?'date':undefined,disabled:!allowed(d.date),class:{'is-outside':d.outside,'is-selected':model.value.value===d.date},onKeydown:e=>key(e,d.date),onFocus:()=>focused.value=d.date,onClick:()=>{model.set(d.date);month.value=d.date;focused.value=d.date;}},d.day))))))]),
  h('p',{class:'yk-calendar__hint'},model.value.value||'方向键切换日期 · Enter 选择')]);
}});
