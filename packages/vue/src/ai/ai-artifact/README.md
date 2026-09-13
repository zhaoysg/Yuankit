# 产物面板 · YkAIArtifact

## 视觉
共用主题 Token；尺寸、圆角、前景/背景与边框按参数面板映射。保留可见焦点，明暗主题不复制独立实现。

## 结构
YkAIArtifact → 原生语义容器 / 内容 / 状态 / 可用操作

## 交互与规则
- 代码/文本产物与说明切换、复制、文本导出。
- 受控参数通过对应 update 事件回传，由调用方维护应用状态。
- 用户文本作为文本节点渲染，不注入 HTML 或执行代码。

## 当前边界
没有执行沙箱，不渲染原始 HTML；产物导出为 .txt，运行或部署由应用单独审查。

## 参数与事件
公共类型：`packages/vue/src/ai/ai-artifact/index.d.ts`；参数面板：`registry/inspector.json`。
- `title / content / summary` (string)：文本内容与说明。默认 设计产物 / 空字符串 / 审阅提示。
- `language` (string)：展示语言标记，不触发执行。默认 text。
- `downloadable` (boolean)：允许导出安全 .txt 文本。默认 true。

## 来源
独立实现，仅采用功能分层与交互规范作为参考，没有复制第三方源码或素材。
- AI Elements Vue · Conversation: https://www.ai-elements-vue.com/components/chatbot/conversation
- AI Elements · Tool: https://elements.ai-sdk.dev/components/tool
- shadcn/vue · Message Scroller: https://www.shadcn-vue.com/docs/components/message-scroller
