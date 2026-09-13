# AI 附件 · YkAIAttachments

## 视觉
共用主题 Token；尺寸、圆角、前景/背景与边框按参数面板映射。保留可见焦点，明暗主题不复制独立实现。

## 结构
YkAIAttachments → 原生语义容器 / 内容 / 状态 / 可用操作

## 交互与规则
- 展示附件元信息与移除操作。
- 受控参数通过对应 update 事件回传，由调用方维护应用状态。
- 用户文本作为文本节点渲染，不注入 HTML 或执行代码。

## 当前边界
不读取或上传文件，不渲染不可信缩略图，不代表模型已收到附件。

## 参数与事件
公共类型：`packages/vue/src/ai/ai-attachments/index.d.ts`；参数面板：`registry/inspector.json`。
- `items` (AIAttachment[])：附件元数据，不是上传结果。默认 []。
- `removable` (boolean)：显示移除按钮。默认 true。
- `disabled` (boolean)：禁止移除。默认 false。

## 来源
独立实现，仅采用功能分层与交互规范作为参考，没有复制第三方源码或素材。
- AI Elements Vue · Conversation: https://www.ai-elements-vue.com/components/chatbot/conversation
- AI Elements · Tool: https://elements.ai-sdk.dev/components/tool
- shadcn/vue · Message Scroller: https://www.shadcn-vue.com/docs/components/message-scroller
