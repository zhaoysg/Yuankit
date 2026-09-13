# YuanKit Studio v0.2.0 本地验收报告

日期：2026-09-12。测试针对当前交付源码和预构建产物；不是 GitHub CI、npm 发布、完整设计体系或生产上线验收。

## 结果

| 检查 | 实际结果 |
| --- | --- |
| npm run build | 成功；23 个根组件导出，31 个可编辑资产；生成 ESM/CSS/全局包和离线工作台 |
| Node 契约测试 | 26/26 通过 |
| 原有 Chromium 回归 | 29/29 通过（组件目录测试已包含新增组件） |
| 新增 Studio / primitives Chromium 测试 | 21/21 通过 |
| 合计 Chromium 分组测试 | 50/50 通过；不是每个参数组合的穷尽测试 |
| npm 本地 tarball | 两个包生成；Vue 包 105 个文件、96 处静态相对导入与公开入口检查通过 |
| 本地开发服务 HTTP 冒烟 | 6/6 路径符合预期，根预览可读、样式/运行时可读、非发布文件禁止访问 |
| GitHub 建仓、推送、远程 CI | 未执行 |
| npm registry 发布 | 未执行 |

环境：Node 22.16.0，TypeScript 5.8.3，Vue 3.5.13，Playwright/Chromium（确切版本见两份 browser-results JSON）。npm ci 在当前网络环境未完成；本地使用环境已安装的同版本 TypeScript 5.8.3 执行构建。交付不带 node_modules，包含锁文件，正常网络环境按 npm ci 安装。

## 新增覆盖

Slider 键盘与受控值；Accordion 展开/收起/单开；Breadcrumb 和 Pagination 事件及边界；Skeleton 与 EmptyState；31 个真实资产渲染无 JS 异常；宽度、高度、圆角0、字体、颜色、皮肤、阴影、渐变的实际计算样式变化；全局/同类/实例隔离；低层面板值不被高层覆盖“弹回”；撤销/重做/重置；输入文字不作为 HTML 执行；items 增删命名；JSON 导出回灌及不合法导入不污染当前状态；Vue 导出与预设一致；命名方案当前会话保存/载入/删除；状态页真实 action；小屏导航展开/收起；Dialog 局部主题、关闭与焦点恢复；OS/显式减少动效；390px 页宽；来源说明和旧文档入口。

## 存储、浏览器与验证边界

测试用 Chromium `set_content` 内存加载相同离线 HTML。受本环境浏览器导航策略限制，没有成功导航 HTTP/file URL，不绕过浏览器策略。上述 HTTP 冒烟通过 Node 开发服务及普通 HTTP 客户端完成，不是实际浏览器访问。

localStorage 不可用时已验证当前会话仍可保存/载入/删除并提示降级；**正常 origin 下原生 localStorage 跨刷新持久化、真实浏览器文件打开、剪贴板权限允许路径未验证**。JSON 下载/导入和 Vue 下载已测试。

其他尚未验证：真实 Vue SFC 消费项目构建、vue-tsc 完整校验、SSR/hydration、Safari/Firefox、触屏真机、屏幕阅读器与完整 WCAG、上游逐像素比较、部署/远程 CI。自定义颜色/极端尺寸不等于自动通过可用性标准。

## 问题修正记录

开发阶段修正了生成的 Studio 字符串语法错误、Slider 非有限边界、皮肤被默认值完全覆盖、按钮阴影参数无基础映射、进度/选项卡字号映射、较低编辑层显示被实例覆盖而跳回的问题，以及开发服务根路径相对资源地址问题。

新增测试初次失败包含测试选择器错误（Skeleton span、参数分组定位）与阴影 transition 等待不足；修正测试后完整重跑 21/21。最初合并命令被执行时限中断出现管道 EPIPE，随后给足时限完整重跑两套共50/50；中断日志不作为通过证据。

## 原始证据

- node-check.txt
- browser-check.txt
- browser-results.json
- studio-browser-results.json
- build.json
- package-audit.json / pack-audit.txt
- server-check.json
- screenshots/studio-button.png、studio-404.png、studio-dark-card.png、studio-mobile-404.png、studio-code.png

截图来自真实源码渲染，用于人工检查，不是上游像素比对基线。404/403/500/维护页面共享一个模板，不把四个页面预设包装成四个独立底层组件。
