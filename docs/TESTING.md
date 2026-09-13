# 验证

`npm run build` 生成 tokens、registry、原生组件/AI 公共导出、库 ESM/CSS 与离线 Studio。TS 仅用于工程打包的语法转译，不等于完整类型检查。

`npm test` 执行 tests/unit 的契约测试（旧组件、配置、资产、迁移、日期、文件元信息与 URL 安全、样式库完整性）。`npm run test:browser` 顺序执行 run.py、studio.py、v05.py；需 Python Playwright 与 Chromium。CHROMIUM_PATH 可指定安装位置。测试使用真实 Vue + Chromium，不依赖截图模型或伪 DOM。不要并行启动大量浏览器造成容器资源争用。

`npm run pack:ui` / `npm run pack:tokens` 后运行包审计，只读取 tarball，校验入口、相对导入、没有 Vue 内嵌或 node_modules/vendor/.env。

报告严格区分：本地浏览器用例通过、上游逐像素对比、真实后端连接、完整类型检查、远程 CI。后四项并未因组件可渲染而自动成立。

v0.5 的 AI 演示测试检查本地确定性生成、停止/错误/重试、IME、防止自动滚动干扰阅读、URL 过滤、HTML 作为文字、人工工具确认、附件元信息、本地源搜索；没有测试真实模型、真实工具或文件上传。

## v0.5 实际证据

最终 41 项契约测试与 83 项 Chromium 分组回归全部通过，详见 `reports/VALIDATION-v0.5.md`。额外 `python tests/browser/entry.py` 检查 AI 首屏默认入口；内存载入通过，本环境 file:// 导航被策略阻止，没有绕过该策略。
