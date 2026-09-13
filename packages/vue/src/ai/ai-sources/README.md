# 引用来源 · YkAISources

## 视觉
共用主题 Token；尺寸、圆角、前景/背景与边框按参数面板映射。保留可见焦点，明暗主题不复制独立实现。

## 结构
YkAISources → 原生语义容器 / 内容 / 状态 / 可用操作

## 交互与规则
- 编号引用、域名与摘要，可折叠并访问安全链接。
- 值由调用方传入；不在展示组件中请求业务服务。
- 用户文本作为文本节点渲染，不注入 HTML 或执行代码。

## 当前边界
不声称引用已经被检索验证。仅允许 http/https；禁止 javascript/data/file 链接。

## 参数与事件
公共类型：`packages/vue/src/ai/ai-sources/index.d.ts`；参数面板：`registry/inspector.json`。
- `items` (AISource[])：id,title,url,description?。默认 []。
- `label` (string)：来源列表标题。默认 参考来源。
- `defaultOpen` (boolean)：初始展开。默认 true。

## 来源
独立实现，仅采用功能分层与交互规范作为参考，没有复制第三方源码或素材。
- AI Elements Vue · Conversation: https://www.ai-elements-vue.com/components/chatbot/conversation
- AI Elements · Tool: https://elements.ai-sdk.dev/components/tool
- shadcn/vue · Message Scroller: https://www.shadcn-vue.com/docs/components/message-scroller
