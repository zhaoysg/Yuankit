# 轮播 · YkCarousel

## 视觉
共用主题 Token；尺寸、圆角、前景/背景与边框按参数面板映射。保留可见焦点，明暗主题不复制独立实现。

## 结构
YkCarousel → 原生语义容器 / 内容 / 状态 / 可用操作

## 交互与规则
- 可手动切换与循环的内容轮播。
- 受控参数通过对应 update 事件回传，由调用方维护应用状态。
- 用户文本作为文本节点渲染，不注入 HTML 或执行代码。

## 当前边界
默认不自动播放，不含触摸手势或无限虚拟列表。

## 参数与事件
公共类型：`packages/vue/src/components/carousel/index.d.ts`；参数面板：`registry/inspector.json`。
- `items` ({value,label,content?}[])：按顺序展示的内容。默认 []。
- `modelValue` (number)：当前索引，0 起始。默认 undefined。
- `loop` (boolean)：手动切换是否首尾循环。默认 false。

## 来源
独立实现，仅采用功能分层与交互规范作为参考，没有复制第三方源码或素材。
- Reka UI · Accessibility: https://www.reka-ui.com/docs/overview/accessibility
