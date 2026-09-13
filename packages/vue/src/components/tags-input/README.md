# 标签输入 · YkTagsInput

## 视觉
共用主题 Token；尺寸、圆角、前景/背景与边框按参数面板映射。保留可见焦点，明暗主题不复制独立实现。

## 结构
YkTagsInput → 原生语义容器 / 内容 / 状态 / 可用操作

## 交互与规则
- 标签输入、去重、移除与中文输入法保护。
- 受控参数通过对应 update 事件回传，由调用方维护应用状态。
- 用户文本作为文本节点渲染，不注入 HTML 或执行代码。

## 当前边界
纯文本标签，无建议列表、异步搜索或复杂对象值。

## 参数与事件
公共类型：`packages/vue/src/components/tags-input/index.d.ts`；参数面板：`registry/inspector.json`。
- `modelValue` (string[])：受控标签数组。默认 undefined。
- `max` (number)：最多标签数。默认 8。
- `disabled` (boolean)：禁止新增和移除。默认 false。

## 来源
独立实现，仅采用功能分层与交互规范作为参考，没有复制第三方源码或素材。
- Reka UI · Accessibility: https://www.reka-ui.com/docs/overview/accessibility
