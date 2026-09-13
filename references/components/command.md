# 命令面板 · YkCommand

## 视觉
共用主题 Token；尺寸、圆角、前景/背景与边框按参数面板映射。保留可见焦点，明暗主题不复制独立实现。

## 结构
YkCommand → 原生语义容器 / 内容 / 状态 / 可用操作

## 交互与规则
- 可搜索的快捷操作弹窗，支持键盘选中。
- 受控参数通过对应 update 事件回传，由调用方维护应用状态。
- 用户文本作为文本节点渲染，不注入 HTML 或执行代码。

## 当前边界
仅触发 select 事件，不执行代码；不注册抢占浏览器的全局快捷键；不含模糊排序与远程加载。

## 参数与事件
公共类型：`packages/vue/src/components/command/index.d.ts`；参数面板：`registry/inspector.json`。
- `open` (boolean)：受控弹窗开关。默认 false。
- `items` (CommandItem[])：含 value,label,disabled?,shortcut?。默认 []。
- `label` (string)：可访问名称与窗口标题。默认 快捷命令。

## 来源
独立实现，仅采用功能分层与交互规范作为参考，没有复制第三方源码或素材。
- Reka UI · Accessibility: https://www.reka-ui.com/docs/overview/accessibility
