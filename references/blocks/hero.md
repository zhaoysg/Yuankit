# YkHero 四维规格

## 视觉
使用 YuanKit tokens；颜色、圆角、边框、字号、间距由 schema 约束，状态需包含焦点/悬停/禁用及窄屏。

## 结构
真实 Vue 结构见 `packages/vue/src/blocks/hero/index.js`。不注入 HTML 字符串。

## 交互
按钮有原生语义与 action 事件；导航折叠菜单通过 aria-expanded/aria-controls 关联。不提供业务路由、登录或接口。

## 规范
样式差异尽量用 preset；公共 Props 见 `packages/vue/src/blocks/index.d.ts`。本轮是自有实现，来源网站只核对了入口和类别。配置范围与限制见 `registry/inspector.json`。
