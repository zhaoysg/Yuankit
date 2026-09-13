# 建议提示词 · YkAISuggestions

## 视觉
共用主题 Token；尺寸、圆角、前景/背景与边框按参数面板映射。保留可见焦点，明暗主题不复制独立实现。

## 结构
YkAISuggestions → 原生语义容器 / 内容 / 状态 / 可用操作

## 交互与规则
- 建议问题，可呈现为标签或信息卡片。
- 受控参数通过对应 update 事件回传，由调用方维护应用状态。
- 用户文本作为文本节点渲染，不注入 HTML 或执行代码。

## 当前边界
仅触发 select；是否填入输入框还是直接发送由应用决定。

## 参数与事件
公共类型：`packages/vue/src/ai/ai-suggestions/index.d.ts`；参数面板：`registry/inspector.json`。
- `items` ({value,label,content?,disabled?}[])：建议问题数据。默认 []。
- `layout` ('chips' | 'cards')：标签或卡片。默认 chips。
- `disabled` (boolean)：禁止选择。默认 false。

## 来源
独立实现，仅采用功能分层与交互规范作为参考，没有复制第三方源码或素材。
- AI Elements Vue · Conversation: https://www.ai-elements-vue.com/components/chatbot/conversation
- AI Elements · Tool: https://elements.ai-sdk.dev/components/tool
- shadcn/vue · Message Scroller: https://www.shadcn-vue.com/docs/components/message-scroller
