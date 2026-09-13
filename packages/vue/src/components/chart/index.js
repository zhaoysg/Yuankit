import {defineComponent,h,computed,useId} from 'vue';
export const YkChart=defineComponent({name:'YkChart',props:{data:{type:Array,default:()=>[]},kind:{type:String,default:'bar'},label:{type:String,default:'数据趋势'},showTable:{type:Boolean,default:true}},setup(p){
 const id=useId(),clean=computed(()=>p.data.filter(d=>typeof d.value==='number'&&Number.isFinite(d.value)).slice(0,30));
 return()=>{const values=clean.value,high=Math.max(0,...values.map(d=>d.value))||1,low=Math.min(0,...values.map(d=>d.value)),scale=high-low||1,y=v=>164-(v-low)/scale*140,base=y(0),slot=440/(values.length||1),x=i=>40+slot*(i+.5);return h('figure',{class:'yk-chart','aria-labelledby':id},[
  h('figcaption',{id},p.label),!values.length?h('p',{},'暂无有效数据'):h('svg',{viewBox:'0 0 520 220',role:'img','aria-label':p.label+'，详细数值见下方数据表'},[
   h('line',{x1:30,x2:490,y1:base,y2:base,stroke:'var(--yk-border)'}),h('text',{x:8,y:30,fill:'var(--yk-text-muted)','font-size':11},high),h('text',{x:8,y:166,fill:'var(--yk-text-muted)','font-size':11},low),
   ...(p.kind==='line'?[h('polyline',{points:values.map((d,i)=>`${x(i)},${y(d.value)}`).join(' '),fill:'none',stroke:'var(--yk-primary)','stroke-width':3}),...values.map((d,i)=>h('circle',{cx:x(i),cy:y(d.value),r:4,fill:'var(--yk-primary)'},h('title',{},`${d.label}: ${d.value}`)))]:values.map((d,i)=>h('rect',{x:x(i)-slot*.29,y:Math.min(base,y(d.value)),width:slot*.58,height:Math.max(1,Math.abs(base-y(d.value))),rx:3,fill:'var(--yk-primary)'},h('title',{},`${d.label}: ${d.value}`)))),
   ...values.map((d,i)=>h('text',{x:x(i),y:194,'text-anchor':'middle','font-size':10,fill:'var(--yk-text-muted)'},d.label.length>6?d.label.slice(0,6)+'…':d.label))]),
  h('table',{class:p.showTable?'yk-chart__table':'yk-sr-only'},[h('caption',{class:'yk-sr-only'},p.label+'数据'),h('thead',{},h('tr',{},[h('th',{scope:'col'},'项目'),h('th',{scope:'col'},'数值')])),h('tbody',{},values.map(d=>h('tr',{},[h('th',{scope:'row'},d.label),h('td',{},d.value)])))])]);};
}});
