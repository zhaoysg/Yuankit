# 提示词输入 · YkAIPromptInput

## 视觉
共用主题 Token；尺寸、圆角、前景/背景与边框按参数面板映射。保留可见焦点，明暗主题不复制独立实现。

## 结构
YkAIPromptInput → 原生语义容器 / 内容 / 状态 / 可用操作

## 交互与规则
- 支持发送/停止、模型选择、附件选择与中文输入法。
- 受控参数通过对应 update 事件回传，由调用方维护应用状态。
- 用户文本作为文本节点渲染，不注入 HTML 或执行代码。

## 当前边界
只发 submit/stop 事件；由调用方清空文本、设 busy、取消请求与上传。附件默认只存在内存。

## 参数与事件
公共类型：`packages/vue/src/ai/ai-prompt-input/index.d.ts`；参数面板：`registry/inspector.json`。
- `modelValue` (string)：受控输入文本。默认 空字符串。
- `model / models` (string / AIModelOption[])：模型 ID 与可选目录。默认 空字符串 / []。
- `busy / disabled` (boolean)：生成中显示停止按钮；disabled 禁止操作。默认 false。
- `rows` (number)：初始行数。默认 3。
- `sendKey` ('enter' | 'modifier-enter')：发送快捷键；始终保护 IME。默认 enter。
- `attachments` (boolean)：启用本地文件选择。默认 true。
- `maxFiles / maxLength` (number)：文件数量、文本长度。默认 3 / 8000。
- `accept` (string)：允许文件类型。默认 .txt,.md,.pdf,.png,.jpg,.jpeg。

## 来源
独立实现，仅采用功能分层与交互规范作为参考，没有复制第三方源码或素材。
- AI Elements Vue · Conversation: https://www.ai-elements-vue.com/components/chatbot/conversation
- AI Elements · Tool: https://elements.ai-sdk.dev/components/tool
- shadcn/vue · Message Scroller: https://www.shadcn-vue.com/docs/components/message-scroller
