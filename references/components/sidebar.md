# 侧边导航 · YkSidebar

## 视觉
共用主题 Token；尺寸、圆角、前景/背景与边框按参数面板映射。保留可见焦点，明暗主题不复制独立实现。

## 结构
YkSidebar → 原生语义容器 / 内容 / 状态 / 可用操作

## 交互与规则
- 可收起的业务导航，当前项与禁用态。
- 受控参数通过对应 update 事件回传，由调用方维护应用状态。
- 用户文本作为文本节点渲染，不注入 HTML 或执行代码。

## 当前边界
单层导航；不内置路由、权限过滤或移动端抽屉。

## 参数与事件
公共类型：`packages/vue/src/components/sidebar/index.d.ts`；参数面板：`registry/inspector.json`。
- `items` ({value,label,disabled?}[])：单层导航数据。默认 []。
- `modelValue` (string)：当前导航项。默认 undefined。
- `brand` (string)：侧栏名称。默认 工作空间。
- `collapsed` (boolean)：受控收起；不传时组件自行管理。默认 undefined。

## 来源
独立实现，仅采用功能分层与交互规范作为参考，没有复制第三方源码或素材。
- Reka UI · Accessibility: https://www.reka-ui.com/docs/overview/accessibility
