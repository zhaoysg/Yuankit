# 树形导航 · YkTree

## 视觉
共用主题 Token；尺寸、圆角、前景/背景与边框按参数面板映射。保留可见焦点，明暗主题不复制独立实现。

## 结构
YkTree → 原生语义容器 / 内容 / 状态 / 可用操作

## 交互与规则
- 展开收起、层级语义、单选与方向键导航。
- 受控参数通过对应 update 事件回传，由调用方维护应用状态。
- 用户文本作为文本节点渲染，不注入 HTML 或执行代码。

## 当前边界
不含多选、拖拽排序、懒加载或虚拟化；节点 value 必须全树唯一。

## 参数与事件
公共类型：`packages/vue/src/components/tree/index.d.ts`；参数面板：`registry/inspector.json`。
- `items` (TreeNode[])：value 全树唯一；children 可递归。默认 []。
- `modelValue` (string)：当前选中节点。默认 undefined。
- `disabled` (boolean)：禁用所有节点。默认 false。

## 来源
独立实现，仅采用功能分层与交互规范作为参考，没有复制第三方源码或素材。
- Reka UI · Accessibility: https://www.reka-ui.com/docs/overview/accessibility
