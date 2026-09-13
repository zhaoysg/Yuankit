# v0.2 可视化资产配置补充

新增参数面板看 `docs/STUDIO.md`。三个范围用 global/components/settings 合并，入口定义在 `registry/inspector.json`。YkAsset 导出 preset 与原有 ConfigProvider theme JSON 是两种格式，不可直接混导。

---

# 配置参数手册

## 四类修改不要混淆

| 需求 | 修改入口 | 是否需要重新打包组件库 |
| --- | --- | --- |
| 当前项目改品牌、亮暗、圆角、密度 | 项目自己的 theme JSON / ConfigProvider | 否 |
| 全部新项目采用新的默认样式 | packages/tokens/src/tokens.json | 是 |
| 改控件默认 size/locale/motion | packages/vue/src/config/defaults.js | 是 |
| 新增某组件能力、布局或参数 | 组件 index.js/style.css/index.d.ts 与 registry | 是 |

参数可在工作台“主题工坊”调整并导出 JSON。导出不写回源码；需将 JSON 放在业务项目中维护。

## Provider API

| 参数 | 范围 | 默认 |
| --- | --- | --- |
| skin | soft / precise | soft |
| mode | light / dark | light |
| density | comfortable / compact | comfortable |
| size | sm / md / lg | md |
| motion | boolean | true |
| locale | zh-CN / en-US | zh-CN |
| tokens | Record<TokenName, string> | {} |

locale 只影响库内关闭、清空、选择等少量提示，不负责业务文本翻译。mode 不自动监听系统，也不自动持久化；应用应自行绑定 prefers-color-scheme 或用户偏好。motion=false 关闭组件动效；同时尊重系统减少动态效果设置。

## 业务项目配置示例

```vue
<script setup>
import { YkConfigProvider, YkButton } from '@zhaoysg/yuankit-vue'
import '@zhaoysg/yuankit-vue/style.css'
const theme = {
  skin: 'precise', mode: 'light', density: 'compact', size: 'md',
  motion: true, locale: 'zh-CN',
  tokens: {
    primary: '#196844', 'primary-hover': '#135337',
    'on-primary': '#ffffff', 'primary-soft': '#edf5f0',
    'radius-control': '8px', 'radius-panel': '14px'
  }
}
</script>
<template>
  <YkConfigProvider v-bind="theme">
    <YkButton>统一主题</YkButton>
    <YkConfigProvider mode="dark" size="sm">
      <YkButton>继承品牌，小尺寸深色区域</YkButton>
      <YkButton size="lg">单组件尺寸优先</YkButton>
    </YkConfigProvider>
  </YkConfigProvider>
</template>
```

## 优先级

行为参数：库级默认值 → 外层 Provider → 内层 Provider → 显式组件 Prop。

视觉值：基础/模式/风格/密度 CSS 变量 → Provider 继承及本层 tokens → 项目明确的局部 CSS 覆盖。Provider tokens 通过行内 CSS 变量应用，普通的低优先级样式规则不能覆盖同一个行内变量。

所有主题 CSS 都基于 `.yk-theme` 与 `data-yk-*`。不要只使用组件而忘记根 ConfigProvider。可选 createYuanKit 全局注册仍不能代替这个视觉容器。Dialog/Tooltip 渲染的浮层会独立取得 Provider 配置。

## Token 组织

`tokens.json` 包含 base、modes、skins、densities 四组。新增变量必须写入此处，构建会更新 `config/token-keys.js`。不同模式和风格中的同类 Token 应对齐；不要只在 light 中定义关键变量却忘记 dark。

常用 Token：primary、primary-hover、on-primary、primary-soft、background、surface、text、text-muted、border、radius-control、radius-panel、height-sm/md/lg、panel-padding、font、font-size、duration。

Token 键不带 `--yk-`；值为 CSS 字符串：例如 `{'radius-control': '8px'}`。未知键及包含 `; { } < >` 的值会抛错。这个检查用于减少配置错误，**不是处理不可信 CSS 的安全沙箱**；不得直接把匿名用户输入的 CSS 配置用于页面。

品牌色改变后同时检查前景色与浅底色。`foregroundFor` 只能帮助选择按钮文字的候选颜色，不能证明整个主题通过 WCAG。主题工坊的圆角 0 表示恢复风格预设；需要真正的直角可在 JSON 中设置 `'radius-control': '0px'`。

## 修改某组件

以按钮为例：默认 variant 在 `button/index.js` 的 props；公开类型在 `button/index.d.ts`；padding/状态选择器在 `button/style.css`；参数表在 registry；演示在 demos.js。

单次传 `variant="outline"` 属于调用配置；增加一个新的 variant 则需同步上述文件及测试。不要只改登记表而没有实现。

## v0.5：新增参数与兼容

AI 的文本/角色/状态/头像/气泡宽度、对话高度、发送键、附件开关、工具输入输出/确认状态、引用、产物、示例上下文计数都定义在 registry/inspector.json。共有 103 个资产和 48 套样式预设。调节范围和默认值必须一起在这里修改，并重新 build。不要把 AI 接口密钥写进配置；模型由后端或应用提供。

v0.2–v0.4 的 schema=1 预设校验后可迁移为 v0.5；v0.1 theme JSON 是另一种格式。新增完整迁移说明见 MIGRATION-v0.5.md。
