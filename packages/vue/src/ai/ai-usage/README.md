# 上下文用量 · YkAIUsage

## 视觉
共用主题 Token；尺寸、圆角、前景/背景与边框按参数面板映射。保留可见焦点，明暗主题不复制独立实现。

## 结构
YkAIUsage → 原生语义容器 / 内容 / 状态 / 可用操作

## 交互与规则
- 显示应用提供的 token 计数与上下文容量。
- 值由调用方传入；不在展示组件中请求业务服务。
- 用户文本作为文本节点渲染，不注入 HTML 或执行代码。

## 当前边界
不计算真实 token、不推算费用；计数应来自后端可信元数据。

## 参数与事件
公共类型：`packages/vue/src/ai/ai-usage/index.d.ts`；参数面板：`registry/inspector.json`。
- `used / limit` (number)：应用提供的使用量与上限。默认 0 / 32000。
- `label` (string)：指标标题。默认 上下文使用量。

## 来源
独立实现，仅采用功能分层与交互规范作为参考，没有复制第三方源码或素材。
- AI Elements Vue · Conversation: https://www.ai-elements-vue.com/components/chatbot/conversation
- AI Elements · Tool: https://elements.ai-sdk.dev/components/tool
- shadcn/vue · Message Scroller: https://www.shadcn-vue.com/docs/components/message-scroller
