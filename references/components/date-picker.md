# 日期输入 · YkDatePicker

## 视觉
共用主题 Token；尺寸、圆角、前景/背景与边框按参数面板映射。保留可见焦点，明暗主题不复制独立实现。

## 结构
YkDatePicker → 原生语义容器 / 内容 / 状态 / 可用操作

## 交互与规则
- 原生 date 输入，支持表单与日期边界。
- 受控参数通过对应 update 事件回传，由调用方维护应用状态。
- 用户文本作为文本节点渲染，不注入 HTML 或执行代码。

## 当前边界
系统弹出的日期面板样式由浏览器决定。自定义网格请使用 YkCalendar；不是范围选择器。

## 参数与事件
公共类型：`packages/vue/src/components/date-picker/index.d.ts`；参数面板：`registry/inspector.json`。
- `modelValue` (string)：ISO 日期字符串；可用 v-model。默认 undefined。
- `min / max` (string)：原生输入约束。默认 undefined。
- `name` (string)：原生表单字段名。默认 undefined。
- `required / disabled` (boolean)：原生表单与禁用状态。默认 false。

## 来源
独立实现，仅采用功能分层与交互规范作为参考，没有复制第三方源码或素材。
- Reka UI · Accessibility: https://www.reka-ui.com/docs/overview/accessibility
