# 文件选择 · YkFileUpload

## 视觉
共用主题 Token；尺寸、圆角、前景/背景与边框按参数面板映射。保留可见焦点，明暗主题不复制独立实现。

## 结构
YkFileUpload → 原生语义容器 / 内容 / 状态 / 可用操作

## 交互与规则
- 本地文件选择、拖入、体积与数量校验、移除。
- 受控参数通过对应 update 事件回传，由调用方维护应用状态。
- 用户文本作为文本节点渲染，不注入 HTML 或执行代码。

## 当前边界
不上传、不扫描病毒；accept 是前端提示，真实上传必须由服务端再次验证。

## 参数与事件
公共类型：`packages/vue/src/components/file-upload/index.d.ts`；参数面板：`registry/inspector.json`。
- `modelValue` (File[])：受控本地文件数组。默认 undefined。
- `maxSize` (number)：单文件上限，单位 byte。默认 10485760。
- `maxFiles` (number)：累计数量限制。默认 5。
- `accept` (string)：原生文件类型/扩展名提示。默认 空字符串。
- `disabled` (boolean)：禁止选择、拖入及移除。默认 false。

## 来源
独立实现，仅采用功能分层与交互规范作为参考，没有复制第三方源码或素材。
- Reka UI · Accessibility: https://www.reka-ui.com/docs/overview/accessibility
