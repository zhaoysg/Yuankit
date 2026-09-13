# 基础图表 · YkChart

## 视觉
共用主题 Token；尺寸、圆角、前景/背景与边框按参数面板映射。保留可见焦点，明暗主题不复制独立实现。

## 结构
YkChart → 原生语义容器 / 内容 / 状态 / 可用操作

## 交互与规则
- SVG 柱状/折线图，正负数与等价数值表。
- 值由调用方传入；不在展示组件中请求业务服务。
- 用户文本作为文本节点渲染，不注入 HTML 或执行代码。

## 当前边界
单序列、最多 30 点；不是完整图表库，不含缩放、多轴、实时海量数据。

## 参数与事件
公共类型：`packages/vue/src/components/chart/index.d.ts`；参数面板：`registry/inspector.json`。
- `data` ({label,value:number}[])：有效有限数值，最多 30 个点。默认 []。
- `kind` ('bar' | 'line')：柱状或折线。默认 bar。
- `showTable` (boolean)：显示数据表；关闭时仍保留屏幕阅读器文本。默认 true。

## 来源
独立实现，仅采用功能分层与交互规范作为参考，没有复制第三方源码或素材。
- Reka UI · Accessibility: https://www.reka-ui.com/docs/overview/accessibility
