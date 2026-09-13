# AI 组件：显示层、组合层和模型接入必须分开

## 分层

`/ai` 包含 12 个界面组件；`/blocks` 包含 YkAIKnowledgePanel 与 YkAIAssistantDock；`/templates` 提供 YkAIChatPage，variant 为 chat 或 workspace。后者由同一模板组合，不虚增底层实现数。

`/studio` 中 YkAIChatDemo 是有标识的本地定时演示，数据与会话只在内存中。不要把它用作生产模型接口。工作台里的“均衡模式 / 快速模式”都是假数据选择项，不是实际模型型号或付费档位。

## 组件职责

| 组件 | 输入与行为 | 不承担 |
|---|---|---|
| YkAIStreamingText | content、streaming；文本光标 | 不生成文字、不渲染任意 Markdown |
| YkAIMessage | role、content、status；复制/反馈/重试事件 | 不写入反馈数据库 |
| YkAIConversation | messages；底部跟随、用户上翻时暂停跟随、回到最新 | 不分页、不虚拟列表 |
| YkAIPromptInput | v-model；IME、Enter/修饰键发送、Shift 换行、停止、附件 | 不上传文件、不请求模型 |
| YkAIModelSelect | 应用传入 options/modelValue | 不获取供应商清单 |
| YkAIAttachments | 文件元信息与移除事件 | 不读取文件内容 |
| YkAIToolCall | 应用传入状态、输入/输出；人工确认/拒绝事件 | 不执行工具；确认不等于成功 |
| YkAISources | 安全 HTTP(S) 来源链接 | 不验证信息权威性、不绕过权限 |
| YkAIActivity | 公开任务步骤状态 | 不展示模型隐藏推理 |
| YkAISuggestions | 点击发出 select，由父层填入输入区 | 不自动提交模型 |
| YkAIArtifact | 安全文本、复制、说明页签、导出 .txt | 不运行 HTML/JS、不编译代码 |
| YkAIUsage | 外部 used/limit，超限提醒 | 不计算 token、账单或价格 |

## 消息模型

```ts
interface AIMessageData {
  id: string
  role: 'user' | 'assistant' | 'system'
  content: string
  name?: string
  status?: 'idle' | 'streaming' | 'success' | 'error'
}
```

id 在同一消息列表内必须唯一。流更新修改对应消息 content；开始设 streaming，结束设 success，失败设 error。用明确 requestId / AbortController 隔离并发请求；用户停止后不要让旧流继续写入新会话。

## PromptInput 合同

submit 的数据是 `{text, files: File[], model}`。父应用负责接受请求、清空 v-model，以及在接受附件后调用组件暴露的 `clearAttachments()`。不自动销毁 File，避免业务拒绝请求时丢失用户选中的附件。暴露的 `focus()` 可在操作结束后恢复输入焦点。busy 使输入只读并显示 stop 按钮。

文件扩展名、MIME、大小和数量只是客户端体验检查，不是安全边界。后端必须重新检查身份、权限、实际内容、病毒风险和大小限制。不要把模型密钥放入组件、浏览器配置或导出的 JSON。

## 业务接入示例（传输函数由应用提供）

```vue
<script setup lang="ts">
import { ref, onBeforeUnmount } from 'vue'
import { YkConfigProvider } from '@zhaoysg/yuankit-vue'
import { YkAIConversation, YkAIPromptInput } from '@zhaoysg/yuankit-vue/ai'
import type { AIMessageData, AIPromptInputHandle } from '@zhaoysg/yuankit-vue/ai'
import '@zhaoysg/yuankit-vue/style.css'

// transport 使用业务后端，不在 UI 中保存服务商密钥。
const props = defineProps<{
  transport: (request: { text: string; files: File[]; model: string; signal: AbortSignal }) => AsyncIterable<string>
}>()
const messages = ref<AIMessageData[]>([])
const input = ref('')
const busy = ref(false)
const prompt = ref<AIPromptInputHandle | null>(null)
let controller: AbortController | null = null
let sequence = 0

async function submit(payload: {text: string; files: File[]; model: string}) {
  if (busy.value) return
  const requestId = ++sequence
  controller = new AbortController()
  const currentController = controller
  const uid = crypto.randomUUID()
  messages.value.push({id: uid + '-user', role: 'user', content: payload.text})
  const replyId = uid + '-assistant'
  messages.value.push({id: replyId, role: 'assistant', content: '', status: 'streaming'})
  input.value = ''
  busy.value = true
  try {
    for await (const delta of props.transport({...payload, signal: currentController.signal})) {
      if (requestId !== sequence || currentController.signal.aborted) break
      const reply = messages.value.find(m => m.id === replyId)
      if (reply) reply.content += delta
    }
    if (requestId === sequence) {
      const reply = messages.value.find(m => m.id === replyId)
      if (reply) reply.status = currentController.signal.aborted ? 'idle' : 'success'
    }
  } catch (error) {
    if (requestId === sequence) {
      const reply = messages.value.find(m => m.id === replyId)
      if (reply) reply.status = currentController.signal.aborted ? 'idle' : 'error'
    }
  } finally {
    if (requestId === sequence) { busy.value = false; controller = null }
  }
}
function stop() { controller?.abort() }
onBeforeUnmount(() => { sequence++; controller?.abort() })
</script>
<template>
  <YkConfigProvider>
    <YkAIConversation :messages="messages" :streaming="busy" />
    <YkAIPromptInput ref="prompt" v-model="input" :busy="busy" @submit="submit" @stop="stop" />
  </YkConfigProvider>
</template>
```

这个示例说明接口连接关系，不附带真实 transport 或模型服务。附件清理应在后端接受请求后由调用方显式触发；会话、重试、上传进度与取消确认应由应用补齐。完整 SFC/类型矩阵尚未在本环境验证，不能将该示例视为已通过线上集成验收。

## 样式

组件共享 ConfigProvider 的 token。消息有 bubble / plain / card；工作台设置头像、气泡最大宽度、状态、字体、圆角、颜色与间距。普通 Props 与工作台 Settings 是两层接口：不要把 inspector 的 `contentText` 直接当作 YkAIMessage 的 `content` 属性名。

## 新增与采集

先记录原始链接和核对日期，再归类到 AI primitive / block / template / preset。只参考交互、结构与设计原则，独立实现 Vue；复制上游源码必须另行审查对应文件许可证并记录修改，不能因为展示站免费就默认可转载。
