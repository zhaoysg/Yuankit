# AI 消息 · YkAIMessage

## 视觉
共用主题 Token；尺寸、圆角、前景/背景与边框按参数面板映射。保留可见焦点，明暗主题不复制独立实现。

## 结构
YkAIMessage → 原生语义容器 / 内容 / 状态 / 可用操作

## 交互与规则
- 用户/助手消息、流式状态、复制与反馈。
- 受控参数通过对应 update 事件回传，由调用方维护应用状态。
- 用户文本作为文本节点渲染，不注入 HTML 或执行代码。

## 当前边界
模型内容按纯文本显示；反馈只发事件、不写数据库；复制被浏览器拒绝时显示真实失败提示。

## 参数与事件
公共类型：`packages/vue/src/ai/ai-message/index.d.ts`；参数面板：`registry/inspector.json`。
- `role` ('user' | 'assistant' | 'system')：消息发送者。默认 assistant。
- `content` (string)：只按纯文本渲染。默认 空字符串。
- `status` ('idle' | 'streaming' | 'success' | 'error')：状态由应用提供。默认 idle。
- `appearance` ('bubble' | 'plain' | 'card')：展示形式。默认 bubble。
- `showAvatar / showActions` (boolean)：显示头像、复制与反馈入口。默认 true。

## 来源
独立实现，仅采用功能分层与交互规范作为参考，没有复制第三方源码或素材。
- AI Elements Vue · Conversation: https://www.ai-elements-vue.com/components/chatbot/conversation
- AI Elements · Tool: https://elements.ai-sdk.dev/components/tool
- shadcn/vue · Message Scroller: https://www.shadcn-vue.com/docs/components/message-scroller
