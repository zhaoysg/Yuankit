# 流式文本 · YkAIStreamingText

## 视觉
共用主题 Token；尺寸、圆角、前景/背景与边框按参数面板映射。保留可见焦点，明暗主题不复制独立实现。

## 结构
YkAIStreamingText → 原生语义容器 / 内容 / 状态 / 可用操作

## 交互与规则
- 接收逐步累积的文本，显示可关闭的流式光标。
- 值由调用方传入；不在展示组件中请求业务服务。
- 用户文本作为文本节点渲染，不注入 HTML 或执行代码。

## 当前边界
不会自动请求模型；本身不生成假字符；只渲染纯文本，不执行 Markdown 中的 HTML。

## 参数与事件
公共类型：`packages/vue/src/ai/ai-streaming-text/index.d.ts`；参数面板：`registry/inspector.json`。
- `content` (string)：应用累计传入的文本。默认 空字符串。
- `streaming` (boolean)：生成进行中标记。默认 false。
- `cursor` (boolean)：是否显示流式光标。默认 true。

## 来源
独立实现，仅采用功能分层与交互规范作为参考，没有复制第三方源码或素材。
- AI Elements Vue · Conversation: https://www.ai-elements-vue.com/components/chatbot/conversation
- AI Elements · Tool: https://elements.ai-sdk.dev/components/tool
- shadcn/vue · Message Scroller: https://www.shadcn-vue.com/docs/components/message-scroller
