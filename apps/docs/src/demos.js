import { YkAsset } from '../../../packages/vue/src/studio/index.js';
import { h,ref } from 'vue';
import * as UI from '../../../packages/vue/src/index.js';
import { icon } from '../../../packages/vue/src/shared/icons.js';
const {YkButton,YkInput,YkTextarea,YkSelect,YkCheckbox,YkSwitch,YkRadioGroup,YkDialog,YkTabs,YkTooltip,YkBadge,YkCard,YkAlert,YkAvatar,YkSeparator,YkProgress,YkConfigProvider}=UI;
const row=children=>h('div',{class:'demo-row'},children);
const stack=children=>h('div',{class:'demo-stack'},children);
const label=text=>h('p',{class:'demo-caption'},text);
export function useDemos(notify){
 const text=ref('YuanKit 组件库'),notes=ref('把你验证过的设计，留在自己的组件库里。'),choice=ref('vue'),check=ref(true),toggle=ref(true),radio=ref('comfortable'),open=ref(false),tab=ref('design');
 return {
  button:()=>stack([label('操作层级'),row(['primary','secondary','outline','ghost','danger'].map((v,i)=>h(YkButton,{variant:v,onClick:()=>notify(`已触发「${['主要操作','次要操作','描边操作','轻量操作','危险操作'][i]}」演示。`)},()=>['主要操作','次要操作','描边操作','轻量操作','危险操作'][i]))),label('尺寸与状态'),row([h(YkButton,{size:'sm'},()=> '小号按钮'),h(YkButton,{size:'md'},()=> '默认按钮'),h(YkButton,{size:'lg'},()=> '大号按钮'),h(YkButton,{disabled:true},()=> '不可操作'),h(YkButton,{loading:true},()=> '正在处理'),h(YkButton,{iconOnly:true,'aria-label':'新增组件',onClick:()=>notify('新增命令：npm run new:component -- empty-state')},()=>icon('plus'))])]),
  input:()=>h('div',{class:'demo-form-grid'},[h(YkInput,{label:'组件名称',modelValue:text.value,'onUpdate:modelValue':v=>text.value=v,clearable:true,description:`当前值：${text.value||'（空）'}`},{leading:()=>icon('search',16)}),h(YkInput,{label:'工作邮箱',defaultValue:'hello@example.com',type:'email',description:'说明与标签稳定关联。'}),h(YkInput,{label:'校验错误',defaultValue:'invalid',error:'请输入有效的邮箱地址。'}),h(YkInput,{label:'只读状态',defaultValue:'这是只读内容',readonly:true}),h(YkInput,{label:'禁用状态',defaultValue:'当前不可编辑',disabled:true})]),
  textarea:()=>stack([h(YkTextarea,{label:'设计说明',modelValue:notes.value,'onUpdate:modelValue':v=>notes.value=v,showCount:true,maxlength:240,description:'支持中文组合输入；字数口径与原生 maxlength 一致。'}),h(YkTextarea,{label:'只读文本域',defaultValue:'组件实现、视觉规则、交互规范与参数说明均保留在项目中。',readonly:true,rows:2})]),
  select:()=>h('div',{class:'demo-form-grid'},[h(YkSelect,{label:'选择技术方向',modelValue:choice.value,'onUpdate:modelValue':v=>choice.value=v,clearable:true,description:`选中值：${choice.value||'未选择'}`,options:[{value:'vue',label:'Vue 3 原生组件'},{value:'tokens',label:'统一主题变量'},{value:'native',label:'浏览器原生语义'},{value:'later',label:'复杂表格（尚未实现）',disabled:true}]}),h(YkSelect,{label:'禁用选择器',disabled:true,options:[{value:'vue',label:'Vue 3'}],defaultValue:'vue'}),h(YkAlert,{tone:'primary',title:'范围说明'},()=> '选择框可换肤；下拉选项面板保留操作系统原生样式，不是第三方自定义列表的完整复刻。')]),
  checkbox:()=>stack([h(YkCheckbox,{label:'启用阅读统计',description:`当前选中：${check.value}`,modelValue:check.value,'onUpdate:modelValue':v=>check.value=v}),h(YkCheckbox,{label:'部分项目已选择',indeterminate:true}),h(YkCheckbox,{label:'已禁用',defaultValue:true,disabled:true})]),
  switch:()=>stack([h(YkSwitch,{label:'接收组件更新',description:toggle.value?'当前已开启':'当前已关闭',modelValue:toggle.value,'onUpdate:modelValue':v=>toggle.value=v}),h(YkSwitch,{label:'默认关闭'}),h(YkSwitch,{label:'不可更改',defaultValue:true,disabled:true})]),
  'radio-group':()=>stack([h(YkRadioGroup,{label:'选择使用密度',modelValue:radio.value,'onUpdate:modelValue':v=>radio.value=v,options:[{value:'comfortable',label:'舒适'},{value:'compact',label:'紧凑'},{value:'custom',label:'自定义（禁用）',disabled:true}]}),h('p',{class:'muted'},`当前值：${radio.value}`)]),
  dialog:()=>stack([h(YkDialog,{title:'创建一个设计方案',description:'原生 dialog 管理顶层弹窗与焦点；Esc 关闭后焦点回到触发按钮。',open:open.value,'onUpdate:open':v=>open.value=v},{trigger:({open:show})=>h(YkButton,{onClick:show},()=> '打开对话框'),default:()=>stack([h(YkInput,{label:'方案名称',defaultValue:'内容发布表单'}),h(YkTextarea,{label:'方案说明',defaultValue:'说明适用场景、使用组件与业务校验规则。',rows:3})]),footer:({close})=>[h(YkButton,{variant:'outline',onClick:close},()=> '取消'),h(YkButton,{onClick:()=>{close();notify('演示方案已确认；当前没有连接后端。');}},()=> '确认方案')]}),h('p',{class:'muted'},'支持受控开关、遮罩关闭、焦点恢复、长内容滚动和嵌套滚动锁。')]),
  tabs:()=>h(YkTabs,{label:'组件文档分组',modelValue:tab.value,'onUpdate:modelValue':v=>tab.value=v,items:[{value:'design',label:'设计规范'},{value:'code',label:'代码实现'},{value:'testing',label:'验收测试'},{value:'later',label:'后续计划',disabled:true}]},{design:()=>h('div',{class:'sample-tab'},'定义视觉层级、状态与统一设计变量。'),code:()=>h('div',{class:'sample-tab'},'Vue 原生组件，命名、目录与参数保持一致。'),testing:()=>h('div',{class:'sample-tab'},'验证实际键盘行为、状态绑定和响应式布局。')}),
  tooltip:()=>row([h(YkTooltip,{text:'这是真实提示：键盘聚焦也可打开，Esc 可关闭。'},{default:({attrs})=>h(YkButton,{...attrs,variant:'outline'},()=> '悬停或键盘聚焦')}),h('span',{class:'muted'},'提示本身不承载按钮、链接或表单。')]),
  badge:()=>stack([label('语义色'),row(['neutral','primary','success','warning','danger'].map((tone,i)=>h(YkBadge,{tone,dot:true},()=>['未开始','进行中','已完成','待检查','有异常'][i]))),label('描边外观'),row(['neutral','primary','success','warning','danger'].map(tone=>h(YkBadge,{tone,variant:'outline'},()=>tone)))]),
  card:()=>h('div',{class:'demo-form-grid'},[h(YkCard,{title:'内容卡片',description:'页眉、正文与操作保持一致。'},{default:()=>h('p',{class:'muted'},'将展示信息组合起来，但不要在基础组件中加入业务接口。'),footer:()=>h(YkButton,{variant:'outline',onClick:()=>notify('该按钮由调用页面提供行为。')},()=> '查看示例')}),h(YkCard,{title:'轻量阴影',variant:'elevated',description:'不同页面，也共享同一个设计系统。'},{default:()=>h(YkProgress,{label:'组件规划进度（演示）',value:68})})]),
  alert:()=>stack(['primary','success','warning','danger'].map((tone,i)=>h(YkAlert,{key:tone,tone,title:['关于这个组件','配置已更新','请复核参数','保存失败示例'][i],dismissible:true},()=>['规范、实现与演示保存在同一项目。','这是一条成功反馈演示，不表示服务器已保存。','新增属性需要同步类型、文档与测试。','错误需要可读文本，而不只是颜色。'][i]))),
  avatar:()=>stack([row([h(YkAvatar,{name:'元件',size:'sm'}),h(YkAvatar,{name:'设计'}),h(YkAvatar,{name:'开发',size:'lg'}),h(YkAvatar,{name:'YK',src:'data:image/png;base64,broken'})]),h('p',{class:'muted'},'最后一个头像使用损坏图片，用于演示真实的错误降级。')]),
  separator:()=>stack([h('p',{},'第一部分内容'),h(YkSeparator),h('p',{},'第二部分内容'),row([h('span',{},'视觉'),h(YkSeparator,{orientation:'vertical',decorative:false}),h('span',{},'结构'),h(YkSeparator,{orientation:'vertical'}),h('span',{},'交互')])]),
  progress:()=>stack([h(YkProgress,{label:'设计规范（示例）',value:72}),h(YkProgress,{label:'组件实现（示例）',value:48}),h(YkProgress,{label:'等待反馈（不确定进度）'}),h(YkProgress,{label:'超界值自动归一',value:120})]),
  'slider':()=>h(YkAsset,{asset:'slider'}),
 'accordion':()=>h(YkAsset,{asset:'accordion'}),
 'breadcrumb':()=>h(YkAsset,{asset:'breadcrumb'}),
 'pagination':()=>h(YkAsset,{asset:'pagination'}),
 'skeleton':()=>h(YkAsset,{asset:'skeleton'}),
 'empty-state':()=>h(YkAsset,{asset:'empty-state'}),
 'config-provider':()=>h('div',{class:'demo-form-grid'},['soft','precise'].map(skin=>h(YkConfigProvider,{skin,density:skin==='precise'?'compact':'comfortable',class:'scope-sample'},()=>stack([h(YkBadge,{tone:'primary'},()=>skin==='soft'?'SOFT · 柔和':'PRECISE · 紧凑'),h(YkInput,{label:'局部配置',defaultValue:'两个容器互不影响'}),h(YkButton,()=> '相同的组件接口')]))))
 };
}
export const examples={
 slider:'<YkSlider v-model="value" label="字号" :min="10" :max="28" unit="px" />',
 accordion:'<YkAccordion v-model="opened" :items="items" multiple />',
 breadcrumb:'<YkBreadcrumb :items="items" @navigate="navigate" />',
 pagination:'<YkPagination v-model="page" :total="120" :page-size="10" />',
 skeleton:'<YkSkeleton :lines="3" avatar />',
 'empty-state':'<YkEmptyState title="还没有项目" @action="createProject" />',

 button:`<YkButton variant="primary" :loading="saving" @click="save">保存</YkButton>`,
 input:`<YkInput v-model="title" label="标题" clearable :error="titleError" />`,
 textarea:`<YkTextarea v-model="description" label="说明" :maxlength="240" show-count />`,
 checkbox:`<YkCheckbox v-model="checked" label="接收更新" />`,switch:`<YkSwitch v-model="enabled" label="开启通知" />`,
 'radio-group':`<YkRadioGroup v-model="density" label="使用密度" :options="options" />`,
 select:`<YkSelect v-model="value" label="技术方向" :options="options" clearable />`,
 dialog:`<YkDialog v-model:open="visible" title="编辑方案">\n  <template #trigger="{ open }">\n    <YkButton @click="open">打开</YkButton>\n  </template>\n  <YkInput v-model="name" label="方案名称" />\n  <template #footer="{ close }">\n    <YkButton variant="outline" @click="close">取消</YkButton>\n  </template>\n</YkDialog>`,
 tabs:`<YkTabs v-model="tab" label="内容分组" :items="items">\n  <template #design>设计规范</template>\n  <template #code>代码示例</template>\n</YkTabs>`,
 tooltip:`<YkTooltip text="补充说明">\n  <template #default="{ attrs }">\n    <YkButton v-bind="attrs" variant="outline">查看说明</YkButton>\n  </template>\n</YkTooltip>`,
 badge:`<YkBadge tone="success" dot>已完成</YkBadge>`,card:`<YkCard title="方案标题" description="简要说明">卡片内容</YkCard>`,
 alert:`<YkAlert tone="warning" title="请检查参数" dismissible>填写完整后再提交。</YkAlert>`,avatar:`<YkAvatar name="设计团队" size="md" />`,separator:`<YkSeparator />`,progress:`<YkProgress label="上传进度" :value="progress" />`,
 'config-provider':`<YkConfigProvider skin="soft" mode="light" density="comfortable"\n  :tokens="{ 'primary': '#5b45d6', 'radius-control': '12px' }">\n  <AppContent />\n</YkConfigProvider>`
};
