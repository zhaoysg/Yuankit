# 任务进展 · YkAIActivity

## 视觉
共用主题 Token；尺寸、圆角、前景/背景与边框按参数面板映射。保留可见焦点，明暗主题不复制独立实现。

## 结构
YkAIActivity → 原生语义容器 / 内容 / 状态 / 可用操作

## 交互与规则
- 展示应用公开的任务步骤及成功/失败状态。
- 值由调用方传入；不在展示组件中请求业务服务。
- 用户文本作为文本节点渲染，不注入 HTML 或执行代码。

## 当前边界
只显示公开任务摘要，不索取或展示模型隐藏思维链；进度由应用提供。

## 参数与事件
公共类型：`packages/vue/src/ai/ai-activity/index.d.ts`；参数面板：`registry/inspector.json`。
- `items` (AIActivityStep[])：公开步骤与状态，不是隐藏思维链。默认 []。
- `label` (string)：区域标题。默认 任务进展。

## 来源
独立实现，仅采用功能分层与交互规范作为参考，没有复制第三方源码或素材。
- AI Elements Vue · Conversation: https://www.ai-elements-vue.com/components/chatbot/conversation
- AI Elements · Tool: https://elements.ai-sdk.dev/components/tool
- shadcn/vue · Message Scroller: https://www.shadcn-vue.com/docs/components/message-scroller
