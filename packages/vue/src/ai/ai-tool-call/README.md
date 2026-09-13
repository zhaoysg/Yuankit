# 工具调用卡片 · YkAIToolCall

## 视觉
共用主题 Token；尺寸、圆角、前景/背景与边框按参数面板映射。保留可见焦点，明暗主题不复制独立实现。

## 结构
YkAIToolCall → 原生语义容器 / 内容 / 状态 / 可用操作

## 交互与规则
- 可展开的工具参数、结果、错误与人工确认状态。
- 受控参数通过对应 update 事件回传，由调用方维护应用状态。
- 用户文本作为文本节点渲染，不注入 HTML 或执行代码。

## 当前边界
仅展示状态并发出审批意图。执行、权限验证、幂等和工具审计必须由后端负责。

## 参数与事件
公共类型：`packages/vue/src/ai/ai-tool-call/index.d.ts`；参数面板：`registry/inspector.json`。
- `name` (string)：工具显示名称。默认 search_documents。
- `status` ('idle'|'running'|'success'|'error'|'approval')：工具状态，不会自动执行。默认 success。
- `input / output` (string)：参数与结果文本。默认 空字符串。
- `defaultOpen` (boolean)：初始展开内容。默认 false。

## 来源
独立实现，仅采用功能分层与交互规范作为参考，没有复制第三方源码或素材。
- AI Elements Vue · Conversation: https://www.ai-elements-vue.com/components/chatbot/conversation
- AI Elements · Tool: https://elements.ai-sdk.dev/components/tool
- shadcn/vue · Message Scroller: https://www.shadcn-vue.com/docs/components/message-scroller
