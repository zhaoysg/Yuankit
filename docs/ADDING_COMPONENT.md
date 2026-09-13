# 新增组件与样式

## 标准路径

```bash
npm run new:component -- rating
```

命令只生成草稿：`packages/vue/src/components/rating/` 下 index.js、index.d.ts、style.css、README.md；同时写入 `references/components/rating.md` 和 registry 的 draft 记录。不覆盖已有组件，不接受路径穿越名称。

draft 不进入公共索引和构建出的组件目录；不能仅把状态改成 beta 就算完成开发。

## 定义顺序

先写“做什么/不做什么”及来源版本，再列视觉状态、结构和键盘行为，然后统一参数、事件和插槽。涉及异步状态时区分 loading、disabled、error、empty；涉及表单时定义 value 类型和 controlled/uncontrolled 规则。

命名示例：`YkRating`、`rating/`、`.yk-rating`、`.yk-rating__description`。基础控件不得出现业务权限、登录态或接口地址。

## 一个组件要同时交付的文件

| 文件 | 内容 |
| --- | --- |
| index.js | defineComponent、Props、状态、事件、插槽与必要清理 |
| index.d.ts | Props、事件回调与公开类型；不得拿 any 隐藏设计缺失 |
| style.css | 组件选择器、尺寸、状态、响应式及减少动效；复用 Token |
| README.md | 用途和规格入口 |
| references/components/<slug>.md | 视觉、结构、交互、规范、来源与取舍 |
| registry/components.json | 可机器读取的 API、目录、证据状态 |
| apps/docs/src/demos.js | 正常/错误/禁用/键盘等可交互演示、调用示例 |
| tests/unit 或 tests/browser | 对行为或契约的真实断言 |

补齐 `packages/vue/src/index.js`、`index.d.ts` 的导出。全局注册器由组件 registry 生成，不另外手写名单。随后将 registry.status 从 draft 改成 beta，执行完整测试和打包检查。

## 调整已有风格

品牌值进 Token；只有组件特有、无法抽象的结构进本组件 CSS。跨组件重复三次以上的视觉值，评估是否新增 Token。新增 skin 应提供完整 Token 组，同时更新配置校验 choices、公共类型、registry 参数表、主题工坊选项及测试，不能只添加 CSS 文件。

新增组件默认延续已有 Soft/Precise 规则，不做第三套“临时样式”。聚焦环、禁用对比度、错误关联、长文本与 390px 宽度都需验收。

## 新增方案

将组合代码放 `blocks/<name>/index.js`，说明 Props、事件、是否持久化、依赖组件、必需样式。登记到 `registry/patterns.json`，工作台加演示和测试。API 请求与权限检查由业务项目提供，不把 mock 返回伪装成真实成功。

复制现有方案到其他项目时，将它对 `../../packages/vue/src/index.js` 的仓库内导入替换成 `@zhaoysg/yuankit-vue`，并带上 `blocks/style.css`。方案尚未作为独立 npm 包发布。

## 合并门槛

`npm run check`、浏览器测试、文档/示例一致性、许可证和来源记录、手机与暗色截图审查。兼容修改进 patch/minor；删除或改变既有接口需迁移说明和 breaking-change 标记。beta 不能免除影响分析。

## 可视化编辑接入（v0.2）

新增基础组件后按 `docs/ADDING_ASSET.md` 接入 inspector schema、YkAsset renderer、演示与实际效果测试。生成草稿不会自动提供可调控件。
