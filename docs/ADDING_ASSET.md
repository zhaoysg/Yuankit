# 新增资产：代码、样式、参数、文档必须一起交付

## 分层与目录

- `components/<slug>/`：无业务依赖的原子组件。例如 Slider、Tabs。
- `packages/vue/src/blocks/<slug>/`：公开可复用的页面区块。例如 Navbar、Hero、CTA、Footer。
- `packages/vue/src/templates/<slug>/`：页面模板实现。404/403/500/maintenance 共用 StatusPage，不复制四份逻辑。
- `packages/vue/src/effects/`：可选动效，必须能关闭并尊重 OS 偏好。
- `blocks/<slug>/`：业务场景示例，保留 SettingsPanel/ContentCard；目前不作为独立 npm 包导出。
- `presets/<slug>.json`：仅参数不同的样式方案，不再复制一份组件。
- `references/`：来源、视觉、结构、交互、规范与未实现项。

## 标准步骤

1. 来源登记：文章标题、URL、日期、适用范围、授权情况；决定引用规范还是改编代码。
2. 编写规格：默认/悬停/焦点/激活/禁用/加载/错误，DOM 层次、插槽、状态、事件、键盘、响应式、减少动效。
3. 确定复用方式：同组件新外观优先新 preset；结构不同才新组件/区块；业务权限不进入原子控件。
4. 实现 JS、类型、CSS。native/component 层只接收合适 Props，不直接依赖工作台状态。
5. `registry/inspector.json` 增加字段或资产条目。字段写 type/min/max/step/options/group/default；资产写 id/name/title/group/source/fields/defaults/limitations/status/since。
6. `studio/config.js` 增加必要映射/校验；`studio/asset.js` 接入真实组件。分配行为参数与样式参数，避免 CSS 模拟行为。
7. 发布公开导出和示例，生成文件由 `npm run build` 处理。新字段需考虑旧 preset 的兼容和迁移。
8. 增加测试：字段范围、默认/全局/类型/实例优先级、实际样式效果、事件、键盘、导出回灌、小屏、减少动效。

未实现的条目只能保留在 ROADMAP，不在可用资产目录充数。基础组件生成器输出 draft，不自动代表可视化工坊中可用。

## 按钮新外观示例

纯参数变化：使用 `createPreset('button', {gradient:true,primary:'#6750d8',gradientEnd:'#c250a6',radius:24})` 写入 presets。
需要新结构/效果：修改 button 或 effects，再扩展可选参数和测试。不要手动复制 class 后改一个名字，造成同类控件行为分裂。

## Schema 修改清单

字段定义 → 校验 → 层级合并 → Vue 绑定 → CSS → UI编辑器 → 导出重放 → 文档 → 回归测试。八九处中任一处缺失，都可能形成“面板可以拖，但页面不变”的假能力。


## v0.3 资产分层

不要为了收集灵感而创建另一个仓库。YuanKit 同一仓库维护 `components / blocks / templates / effects / studio`，但代码目录保持分层。这样页面资产复用基础组件和 Token，同时不会把案例代码塞进基础组件目录。独立动效应登记到 `动效方案`；组合页面只用于验证与示例，业务路由和数据仍由消费项目负责。

## v0.5：AI 与样式库

AI 组件放 `packages/vue/src/ai/<id>/`，同时维护 index.js / index.d.ts / style.css / README.md 与来源说明。公共导出同步 `/ai/index.*`、根 `index.*` 与组件 registry；全局注册代码由 build 生成，禁止另手写一个会遗漏的名单。

每个资产必须：inspector 字段有真实作用 → renderer 绑定 → API/限制说明 → 默认值契约测试 → 浏览器操作测试。AI 页面模型接入是应用职责；本地演示代码仅放 studio/ai-demo.js 并显式标注。

样式变体写 `presets/gallery/<asset>-<style>.json`，登记 `registry/presets.json`。修改 JSON 或清单后 build 会更新样式库；单纯改色不新增组件 id。48 套预设分别维护，不允许清单与文件漂移。AI 未提供 Markdown、模型或上传，不得只改文案冒充功能。
