# YuanKit v0.5.0 本地验收报告

日期：2026-09-12。基于本会话提供的真实 v0.4.0 ZIP 修改、构建和运行。此报告是本地证据，不是远程 CI、npm 发布或线上验收。

## 结果

| 检查 | 实际结果 | 原始证据 |
| --- | --- | --- |
| 构建 | 通过；55 个登记组件，ESM/CSS/类型文件、离线工作台 | v05-build-final.txt、build.json |
| Node 契约测试 | 41/41，失败 0 | v05-unit-final.txt |
| 原组件浏览器回归 | 29/29，失败 0 | v05-final-original.txt、browser-results.json |
| Studio 浏览器回归 | 21/21，失败 0 | v05-final-studio.txt、studio-browser-results.json |
| v0.5 行为专项 | 33/33，失败 0 | v05-final-v05.txt、v05-browser-results.json |
| 浏览器主套件合计 | 83 个分组用例全部通过 | v05-pipeline.json |
| 103 个可编辑资产逐项渲染 | 通过，属于 Studio 分组用例，不重复计为 103 个测试 | studio-browser-results.json |
| 48 套预设解析 / 文件与登记清单一致 | 通过，属于契约测试 | v05-unit-final.txt |
| AI 首屏入口额外冒烟 | 内存载入通过，默认定位 ai-chat-page，无 HTTP(S) 请求 | v05-entry-check.json |
| Vue / Tokens 安装包审计 | 通过；UI 250 个相对导入目标校验，无 Vue 内嵌、node_modules、vendor 或 .env | package-audit.json |

主套件顺序运行，退出码均为 0。最终正常 preview.html 的 SHA256 与浏览器套件测试的版本相同，见 v05-tested-preview.sha256 与 DELIVERY-v0.5.json。后续构建仅增加 AI 首屏文件及类型辅助接口，没有改变已测试的组件运行代码。

## 环境与复现

Node 22.16.0；TypeScript 5.8.3；Vue 演示运行时 3.5.13；Python Playwright 1.57.0；Chromium 144.0.7559.96。

本环境 npm ci 遇到 DNS/registry 网络不可达，未完成干净安装。本地构建使用预装、与锁文件相同的 TypeScript 5.8.3；不能把它描述为已通过全新依赖环境安装。交付 ZIP 不包含 node_modules 或该环境的符号链接。

```bash
npm ci
npm run build
npm test
# 安装 tests/browser/requirements.txt，配置 Chromium 后：
npm run test:browser
python tests/browser/entry.py
npm run pack:ui
npm run pack:tokens
npm run audit:packages
```

## 重点覆盖

组合选择器的外部值同步、禁用、键盘与 Esc；多个 Popover 的点击隔离和焦点返回；日历闰年/月份切换/范围；原生日期 FormData；文件筛选/拒绝/移除且不上传；树键盘；手动轮播边界；Toast 的鼠标和键盘焦点暂停；Command 搜索与选择；侧栏收起；基础图表负值与数据表；标签输入法。

AI 消息文本转义、复制反馈、重试事件；输入法与修饰键发送、Shift 换行、附件元信息、停止；上翻阅读时不抢滚动；工具确认事件；HTTP(S) 来源限制；产物仅文本和 .txt 下载；用量上限；本地资料筛选；带标识的模拟回复/停止/失败重试/会话切换；参数映射、48 套样式应用、旧版 JSON 导入与新版导出、条目 URL 修改；动效重播和减少动态效果。

截图来自真实 Vue 页面：screenshots/v05-ai-chat.png、v05-ai-workspace.png、v05-preset-gallery.png、v05-mobile-ai.png。它们不是第三方网站截图，也不是上游逐像素对比基线。

## 本轮发现与修正

初次新增测试为 25/33。最重要的实际问题是超宽屏旧文档侧栏覆盖 Studio 资产区，点击会跳到错误组件页；已调整布局并将测试中的 force click 改为正常点击，避免掩盖遮挡。还修复未被构建读取的 Gallery CSS、工作台资产默认宽度超出参数上限、Combobox 禁用参数漏传等。两项断言采用了不匹配的按钮名或中文提示词，按实际契约修正后保留用例、整套重新运行。

最终结果为 41 项契约测试和 83 项浏览器分组测试全部通过，不用第一次失败结果替代最终结果，也不通过删除用例凑通过率。

## 尚未验证与边界

file:// 浏览器导航被本环境策略拦截（ERR_BLOCKED_BY_ADMINISTRATOR）。没有绕过该策略；只能确认内存加载相同 HTML 的行为，不能宣称已通过本环境直接打开本地文件。预览自包含，没有外部运行资源依赖。浏览器本地存储跨刷新与多设备同步未实测，跨设备应导出 JSON；导出不等于自动保存到源码仓库。

未验证完整 Vue SFC + vue-tsc 消费端、SSR/hydration、Safari/Firefox、屏幕阅读器和完整 WCAG、完整边界组合及性能矩阵。组件自带 .d.ts 不等于完整类型矩阵通过。

复杂浮层仍为 beta 自实现，未迁移 Reka UI；Calendar 不含范围和时间；FileUpload 仅本地选择，Chart 仅基础单系列，Tree 无虚拟化或多选，Carousel 不自动播放。

AI 界面不含真实模型、工具执行、上传服务器、RAG、会话数据库或计费。Artifact 不执行 HTML/JS；Activity 只接收公开任务状态。页面模板不是任意拖拽页面生成器。GitHub 推送、远程 CI 和 npm registry 发布本轮均未执行。
