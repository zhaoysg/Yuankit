# 轻提示 · YkToast

## 视觉
共用主题 Token；尺寸、圆角、前景/背景与边框按参数面板映射。保留可见焦点，明暗主题不复制独立实现。

## 结构
YkToast → 原生语义容器 / 内容 / 状态 / 可用操作

## 交互与规则
- 状态反馈、定时关闭、焦点与悬停暂停计时。
- 受控参数通过对应 update 事件回传，由调用方维护应用状态。
- 用户文本作为文本节点渲染，不注入 HTML 或执行代码。

## 当前边界
受控提示；多提示队列、全局堆叠与跨路由持久化由业务端管理。duration=0 保持显示。

## 参数与事件
公共类型：`packages/vue/src/components/toast/index.d.ts`；参数面板：`registry/inspector.json`。
- `open` (boolean)：受控显示状态。默认 true。
- `title / description` (string)：提示内容。默认 已保存 / undefined。
- `duration` (number)：毫秒；0 不自动关闭。默认 5000。
- `tone` (string)：success/danger/warning/primary/neutral。默认 success。

## 来源
独立实现，仅采用功能分层与交互规范作为参考，没有复制第三方源码或素材。
- Reka UI · Accessibility: https://www.reka-ui.com/docs/overview/accessibility
