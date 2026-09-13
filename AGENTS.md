# YuanKit Agent Guide

进入本仓库开发前，读取 README.md、docs/CONFIGURATION.md 和 registry/components.json。维护现有组件时，还必须读取该组件的 index.js、index.d.ts、style.css 和 references/components/<slug>.md。

## 不可越过的边界

1. YuanKit 是 Vue Web 库，不是 React/React Native/uni-app 原生控件库。现有运行依赖仅 Vue；引入行为底层需单独 ADR、许可证核对、体积和回归评估。
2. 不从截图猜出完整功能；参考链接只有实际读取后才标记 reviewed。不得把“参考”写成“已逐像素复刻”。不导入商业 Pro 资产或未授权品牌素材。
3. 无业务含义的组件放 packages/vue/src/components；业务组合、数据校验、请求、权限判断放 blocks 或业务项目。基础组件不请求业务 API、不内置账号或权限。
4. 页面先搜索 registry，复用既有组件。不得编造 props/事件。draft 不可导出到公共入口，不得在正式示例中使用。
5. 只改源文件。dist、preview、global bundle、registry.generated.js、token-keys.js 由构建产生。vendor 运行时不手工修改。
6. 不关闭失败测试、不降级断言来掩盖缺陷。测试使用错误接口时应依据已确认契约修正测试，并记录原因。

## 每次新增或修改的同步清单

实现 → 类型 → 样式 → registry 参数与说明 → 组件规格 → 演示/示例 → 测试 → CHANGELOG。

常用规范：组件 `YkPascalCase`；目录 kebab-case；CSS `.yk-<component>__part` 和 `--yk-*`；状态属性优先原生 disabled/readonly/required。按钮默认 type=button；值使用 v-model，弹窗使用 v-model:open。受控值必须同步处理 update 事件，不将初始值当实时值。

## 验证与提交

执行 npm run check 和 python tests/browser/run.py；新增复杂交互补浏览器用例。核对 390px 布局、键盘操作、禁用、错误、聚焦、明暗主题。涉及依赖、SSR、SFC 类型时需针对性验证，不得用当前 Chromium 测试替代。

报告必须区分：已经运行的检查、未运行的检查、已知限制。没有真实结果，不声称 npm 发布、GitHub 上传、CI 通过或生产可用。上传脚本需显式 --execute；不得在没有用户授权时执行发布或删除操作。

## v0.2 设计资产强制约束

先阅读 docs/ADDING_ASSET.md、docs/STUDIO.md、docs/ARTICLE_INTAKE.md。基础组件/区块/模板/特效/参数预设分层维护。每个可编辑字段必须有范围校验、真实 Vue/CSS 绑定和导出重放测试。禁止伪造可操作滑块或用占位页面增加数量。

不得混淆 global、同类资产和当前实例；不通过全局 CSS 污染普通项目组件。新来源先登记阅读范围和素材授权。未实际阅读文章正文不得声称已蒸馏文章。参考站展示不代表自由再分发其作品。

完整检查：npm run check；npm run test:browser；两个 tarball 的入口和相对导入审计。语法转译不等于 vue-tsc 通过，截图审查不等于上游逐像素一致。

## v0.5 AI / Preset 约束

AI 界面与模型能力分离。任何定时假回复、模拟失败和假 token 计数只能放演示目录并有标识。禁止在组件中保存密钥、隐式上传文件、自动执行工具或原样执行模型产物 HTML。不要把公开任务步骤叫作隐藏推理。新增 AI 组件更新根 /ai 导出、类型、registry、renderer、文档与 tests；新增风格更新 presets/gallery 和 registry/presets.json，不重复算为组件。
