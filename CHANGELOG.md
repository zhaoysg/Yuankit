# 更新记录

## 0.5.0 — 2026-09-12

- 103 个资产（新增 10 个基础、12 个 AI、2 个 AI 区块、2 个 AI 页面），另有 48 套真实参数预设。
- Studio 增加 AI 分类与直达入口、样式库、接口页及项目内容编辑。
- 旧 v0.2–v0.4 资产配置迁移；补齐根类型导出和所有 55 个组件的全局注册。
- Combobox、Popover、动效重播修复；新 Toast 焦点/悬停暂停。
- 安全文本 AI 展示、URL 过滤、附件元信息；本地演示与真实模型/上传/工具明确分离。
- 具体用例结果与当前限制见 reports/VALIDATION-v0.5.md。

# Changelog

## 0.4.0 — 2026-09-12

- 资产入口由 39 扩展到 77：32 基础组件、15 页面区块、13 页面模板、16 动效方案、1 配置容器。
- 新增 Spinner、Toggle、ButtonGroup、Table、Popover、Drawer、DropdownMenu、Combobox、ScrollArea、Stepper。
- 新增 Feature Grid、Stats、Logo Cloud、Pricing、FAQ、Testimonials、Newsletter、Contact、Steps、Bento Grid。
- 新增登录、注册、仪表盘、文章、设置、新手引导、成功结果、定价页面模板。
- 新增 Reveal、Stagger、Spring、Float、Bounce、Rotate、Blur、Gradient、Parallax、Marquee 动效配方。
- 外部参考新增 shadcn/vue、Reka UI、shadcn/ui Blocks 与 2026 组件更新，用于分层和后续 backlog。

## 0.4.0 — 2026-09-12

重构设计工作台为“资产库 / 真实画布 / 属性检查器”三栏结构；补充字体、密度、透明度、边框、动效曲线等参数组。新增公告栏、落地页组合与 6 个独立动效方案，并把 Storybook Controls、shadcn 主题和 Park UI Token 结构作为工作台/主题体系参考。

# Changelog

## 0.2.0 — 2026-09-12

新增 Slider、Accordion、Breadcrumb、Pagination、Skeleton、EmptyState；增加 Navbar、Hero、CTA、Footer 和统一 StatusPage（四个状态预设）。保留已有组件、规范、主题工坊和业务示例。

增加 31 个编辑资产、schema 参数面板、三层覆盖、原生实时预览、响应式视口、对照、撤销重做、命名方案、本地 JSON 导入导出、Vue 调用导出、渐变与可关闭动效。

新增参考站点清单、文章接入模板与资产开发规约、契约/浏览器测试。导出配置版本固定为 schema=1/library=0.2.0；旧主题工坊 JSON 不是新资产 preset，不混用。

新增 Studio/Blocks/Templates 为独立包子路径；保持原有根组件导入。修复新开发服务器根路径相对资源错误；限制静态服务可访问路径。工作台局部设置只作用于 YkAsset，不污染旧组件样式。

## 0.1.0

初始 16 个原生 Vue 组件、ConfigProvider、主题、文档工作台与两个业务组合示例。
