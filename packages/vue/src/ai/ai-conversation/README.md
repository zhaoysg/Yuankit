# 对话列表 · YkAIConversation

## 视觉
共用主题 Token；尺寸、圆角、前景/背景与边框按参数面板映射。保留可见焦点，明暗主题不复制独立实现。

## 结构
YkAIConversation → 原生语义容器 / 内容 / 状态 / 可用操作

## 交互与规则
- 跟随最新消息；用户向上阅读时不强制拉回底部。
- 受控参数通过对应 update 事件回传，由调用方维护应用状态。
- 用户文本作为文本节点渲染，不注入 HTML 或执行代码。

## 当前边界
不含虚拟列表、分页历史锚定或消息持久化；流式期间避免逐字符播报。

## 参数与事件
公共类型：`packages/vue/src/ai/ai-conversation/index.d.ts`；参数面板：`registry/inspector.json`。
- `messages` (AIMessageData[])：id 稳定且唯一；内容更新不会更换 id。默认 []。
- `height` (number)：可滚动内容高度，160–1200px。默认 400。
- `streaming` (boolean)：控制流式期间的播报。默认 false。
- `appearance` (string)：消息外观。默认 bubble。
- `showAvatar` (boolean)：显示每条消息头像。默认 true。

## 来源
独立实现，仅采用功能分层与交互规范作为参考，没有复制第三方源码或素材。
- AI Elements Vue · Conversation: https://www.ai-elements-vue.com/components/chatbot/conversation
- AI Elements · Tool: https://elements.ai-sdk.dev/components/tool
- shadcn/vue · Message Scroller: https://www.shadcn-vue.com/docs/components/message-scroller
