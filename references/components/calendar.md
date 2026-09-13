# 日历 · YkCalendar

## 视觉
共用主题 Token；尺寸、圆角、前景/背景与边框按参数面板映射。保留可见焦点，明暗主题不复制独立实现。

## 结构
YkCalendar → 原生语义容器 / 内容 / 状态 / 可用操作

## 交互与规则
- 日期网格、月份切换与键盘导航。
- 受控参数通过对应 update 事件回传，由调用方维护应用状态。
- 用户文本作为文本节点渲染，不注入 HTML 或执行代码。

## 当前边界
1900–2100 年公历，单选；无农历、时间、日期范围、多选或远程禁用日期。

## 参数与事件
公共类型：`packages/vue/src/components/calendar/index.d.ts`；参数面板：`registry/inspector.json`。
- `modelValue` (string)：ISO 日期 YYYY-MM-DD，受控值。默认 undefined。
- `min / max` (string)：可选择日期的闭区间。默认 undefined。
- `weekStartsOn` (0 | 1)：每周起始日：周日/周一。默认 1。
- `disabled` (boolean)：禁用整个日期网格。默认 false。

## 来源
独立实现，仅采用功能分层与交互规范作为参考，没有复制第三方源码或素材。
- Reka UI · Accessibility: https://www.reka-ui.com/docs/overview/accessibility
