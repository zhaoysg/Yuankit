# 模型选择 · YkAIModelSelect

## 视觉
共用主题 Token；尺寸、圆角、前景/背景与边框按参数面板映射。保留可见焦点，明暗主题不复制独立实现。

## 结构
YkAIModelSelect → 原生语义容器 / 内容 / 状态 / 可用操作

## 交互与规则
- 应用提供模型目录；组件负责选择与禁用态。
- 受控参数通过对应 update 事件回传，由调用方维护应用状态。
- 用户文本作为文本节点渲染，不注入 HTML 或执行代码。

## 当前边界
只是原生选择器，不内置提供商、API 密钥、模型可用性或路由。

## 参数与事件
公共类型：`packages/vue/src/ai/ai-model-select/index.d.ts`；参数面板：`registry/inspector.json`。
- `options` (AIModelOption[])：应用可用的模型目录。默认 []。
- `modelValue` (string)：选中的模型 ID。默认 空字符串。
- `disabled` (boolean)：禁止切换模型。默认 false。

## 来源
独立实现，仅采用功能分层与交互规范作为参考，没有复制第三方源码或素材。
- AI Elements Vue · Conversation: https://www.ai-elements-vue.com/components/chatbot/conversation
- AI Elements · Tool: https://elements.ai-sdk.dev/components/tool
- shadcn/vue · Message Scroller: https://www.shadcn-vue.com/docs/components/message-scroller
