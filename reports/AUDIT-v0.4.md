# YuanKit v0.4.0 扩展审查

日期：2026-09-12

## 结论

v0.3 的方向正确，但资产覆盖不足，尤其缺少数据展示、浮层、导航组合、营销区块、常见页面骨架和动效配方。v0.4 将可编辑资产入口由 39 扩展为 77，并保持同一套 Token、三级配置、实时预览、JSON/Vue 导出机制。

## 当前资产

| 类型 | v0.3 | v0.4 |
| --- | ---: | ---: |
| 基础组件 | 22 | 32 |
| 页面区块 | 5 | 15 |
| 页面模板 | 5 | 13 |
| 动效方案 | 6 | 16 |
| 配置容器 | 1 | 1 |
| 合计 | 39 | 77 |

新增基础组件：Spinner、Toggle、ButtonGroup、Table、Popover、Drawer、DropdownMenu、Combobox、ScrollArea、Stepper。

新增页面区块：Feature Grid、Stats、Logo Cloud、Pricing、FAQ、Testimonials、Newsletter、Contact、Steps、Bento Grid。

新增页面模板：登录、注册、仪表盘、文章、设置、新手引导、成功结果、定价。

新增动效：Reveal、Stagger、Spring、Float、Bounce、Rotate、Blur In、Gradient Shift、Parallax、Marquee。

## 外部资源复核

本轮继续把外部站点当作“分类、交互和设计原则来源”，不整站复制第三方代码或视觉资产。新增调研入口包括 shadcn/vue、Reka UI、shadcn/ui Blocks、Origin UI Vue、The Component Gallery、Motion Primitives、registry.directory 和 VLLNT UI。详细来源见 `references/inspiration-sources.json`。

## 尚未完成

“完整组件库”不是一个有限终点。当前仍缺 Calendar/DatePicker、Range Calendar、File Upload、Tree View、Carousel、Toast/Sonner、Command Palette、Context Menu、Number Field、Tags Input、Toggle Group、Navigation Menu、Sidebar、Timeline、Rating、Hover Card、Menubar、Resizable、PIN/OTP、Chart、增强 Data Table 等。

复杂浮层（Popover / Dropdown / Combobox / Drawer）v0.4 是 beta 自实现，已能用于工作台和普通业务场景，但尚未达到成熟 headless primitive 在避让定位、roving focus、嵌套、屏幕阅读器矩阵方面的覆盖度。后续应优先评估用 Reka UI 作为底层行为层，而维持 YuanKit 对外 API 与 Token 不变。

高成本 WebGL / Three.js / canvas 动效不建议成为基础包默认依赖，应该继续作为可选 effect adapter。

## 验证

- Node 契约测试：26/26 通过。
- 原组件/工作台 Chromium 回归：29/29 通过。
- v0.4 Studio 专项：21/21 通过，其中包含 77 个资产逐一真实渲染检查。
- npm 包审计：UI 与 Tokens tarball 均无内嵌 Vue、无 node_modules/vendor/.env；UI 包 119 个相对导入目标已校验。
- 尚未完成：Safari / Firefox、完整 WCAG/屏幕阅读器审计、SSR/hydration、真实 Vue SFC + vue-tsc 消费端矩阵、GitHub 远程 CI。
