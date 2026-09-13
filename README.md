# YuanKit Studio · 元件库

Vue 组件、页面区块、页面模板、动效方案与 AI 界面，共享一个设计系统。**v0.5.0 beta**。

本轮以实际 v0.4 源码为基础继续开发，不是仅更新预览图片。新增 AI 组件、常用控件、样式预设与兼容修复；组件无 React 依赖。样式预设、底层组件和组合页面分别计数，不把一套换色配置当作一个新组件。

## 启动与体验

直接用浏览器打开 `preview.html`（组件工作台）或 `preview-ai.html`（AI 对话页入口），无需网络或安装依赖。进入顶部「✦ AI 界面」，或选择左侧 AI 界面分类；「样式库」支持当前资产与全部 48 套方案。手机聊天软件内置文件预览可能不执行 JavaScript。

```bash
# Node 22 推荐；锁定 TypeScript 5.8.3
npm ci
npm run build
npm run dev
# http://127.0.0.1:5173
```

开发服务器只监听本机。修改代码需要重新 build；当前不提供 HMR。下载的预览是预构建版本，首次体验不需要安装依赖。

## 本版资产

| 类型 | 入口数量 | 范围 |
|---|---:|---|
| 基础组件 | 42 | v0.4 的 32 项，增加 Calendar、DatePicker、FileUpload、Tree、Carousel、Toast、Command、Sidebar、Chart、TagsInput |
| AI 组件 | 12 | Message、StreamingText、Conversation、PromptInput、ModelSelect、Attachments、ToolCall、Sources、Activity、Suggestions、Artifact、Usage |
| 页面区块 | 17 | 15 个既有区块，加知识资料面板、页面助手 |
| 页面模板 | 15 | 13 个既有模板，加 AI 对话页、AI 创作工作台 |
| 动效方案 | 16 | 沿用既有方案；修复重播事件引用 |
| 配置容器 | 1 | ConfigProvider |
| **可编辑资产合计** | **103** | 每个入口有真实 renderer |
| 样式预设 | **48** | 独立参数 JSON；不计入上方 103 |

全局注册器注册 55 个组件（42 基础 + 12 AI + 1 Provider），区块和模板通过对应入口显式导入。页面模板可能共用底层实现，不等于 15 个互不相关的独立实现。

## 工作台

选择资产 → 实时画布 → 内容/布局/字体/外观/行为/动效 → 保存或导出。样式库预览真实组件，应用预设只替换该实例，不覆盖项目主题或其他实例；手动导入完整 JSON 则会载入其中的全局/同类配置。接口页说明原生组件 Props；Vue 页导出 YkAsset 的配置调用。

配置优先级：库默认 → designSystem.global → designSystem.components[asset] → 实例 settings。原生 Select/DatePicker 的系统弹出面板受浏览器控制。

旧 schemaVersion=1 的 v0.2 / v0.3 / v0.4 配置自动规范化为 v0.5；仍校验字段，不接受任意 HTML/CSS/脚本。v0.1 主题 JSON 是不同结构，不自动当作资产预设读取。详见 `docs/MIGRATION-v0.5.md`。

## 在其他 Vue 项目使用

尚未发布到 npm registry；安装 `releases/` 的本地包：

```bash
npm install /你的路径/yuankit/releases/zhaoysg-yuankit-vue-0.5.0.tgz
```

```vue
<script setup>
import { YkConfigProvider } from '@zhaoysg/yuankit-vue'
import { YkAIMessage } from '@zhaoysg/yuankit-vue/ai'
import '@zhaoysg/yuankit-vue/style.css'
</script>
<template>
  <YkConfigProvider>
    <YkAIMessage content="这段内容来自你的应用。" appearance="bubble" />
  </YkConfigProvider>
</template>
```

也可导入 `@zhaoysg/yuankit-vue/studio` 的 `YkAsset`，传入导出的 `preset.asset / settings / designSystem`。**AI 对话页在 YkAsset 工作台层是显式本地演示**；生产接入请导入 `/templates` 的 `YkAIChatPage` 或 `/ai` 的组件，用自己的数据和事件接入后端，不能把本地定时器当作真实模型。

## AI 的边界

组件只展示和发出事件。无模型请求、无 API key、无真实工具执行、无文件自动上传、无 token 自动计费。附件留在本地；资料来源链接不代表已读取或已验证。Activity 展示公开任务状态，不是模型隐藏推理。Artifact 只渲染安全文本、导出 .txt，不执行 HTML/JS。Markdown 富文本、代码高亮、服务端鉴权、会话数据库和 RAG 不在此版范围内。

## 维护入口

| 内容 | 文件 |
|---|---|
| 主题基础变量 | `packages/tokens/src/tokens.json` |
| 全局默认值 | `packages/vue/src/config/defaults.js` |
| 基础组件 / AI 组件 | `packages/vue/src/components/` / `packages/vue/src/ai/` |
| 页面区块 / 模板 | `packages/vue/src/blocks/` / `packages/vue/src/templates/` |
| 滑块范围、默认值、参数分组 | `registry/inspector.json` |
| 参数与真实渲染绑定 | `packages/vue/src/studio/asset.js`、`v05-asset.js` |
| 组件注册、API 文档 | `registry/components.json` |
| 样式库清单与方案 JSON | `registry/presets.json`、`presets/gallery/` |
| AI 本地演示（非生产传输层） | `packages/vue/src/studio/ai-demo.js` |
| 文章来源与取舍 | `references/inspiration-sources.json`、`references/components/` |

## 验证与发布

```bash
npm run build
npm test
# 需安装 tests/browser/requirements.txt 以及 Playwright Chromium
npm run test:browser
npm run pack:ui
npm run pack:tokens
npm run audit:packages
```

本轮实际结果和未覆盖范围见 `reports/VALIDATION-v0.5.md`。浏览器测试依赖 Python Playwright；没有远程 GitHub CI 或 npm 发布记录。复杂浮层仍为 beta 自实现，并未迁移到 Reka UI。SSR、Safari/Firefox、完整屏幕阅读器/WCAG、真实 Vue SFC + vue-tsc 消费端矩阵仍需验证。

## 来源与许可

参考公开的官方文档和交互规范，独立编写本项目 Vue 实现。没有搬运整站、第三方图片/视频/字体/付费源码，没有把 React 组件直接伪装成 Vue。来源与许可见 `references/`、`THIRD_PARTY_NOTICES.md`。本项目独立源码采用 MIT；打包预览内的 Vue 保留原许可证。
