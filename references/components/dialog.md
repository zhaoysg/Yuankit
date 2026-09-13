# YkDialog / 对话框

版本：0.1.0-beta。该文件由 registry/components.json 同步维护；修改组件必须更新规格和测试。

## 用途
基于原生顶层弹窗的受控交互与焦点管理。

## 来源与取舍
- [Ant Design](https://ant.design/components/modal/) — reviewed
- [HeroUI v3](https://heroui.com/en/docs/react/components/modal) — reference

`reviewed` 表示已读取相关官方文档或源码；`reference` 表示后续复核入口，不表示已逐项复刻。所有 YuanKit CSS 与组件代码为本次独立编写，不包含这两家的运行时或 Pro 资产。

## 视觉
隐藏、打开、小/中/大、长内容滚动；原生 top-layer 遮罩。

YuanKit 不是任何一家的像素级拷贝：soft 使用柔和色面与较大圆角，precise 使用较小圆角和描边；具体参数由 `packages/tokens/src/tokens.json` 定义。

## 结构
trigger slot + dialog → header(title/description/close) + scrollable body + footer。

## 交互与无障碍
- 使用 showModal，而不是仅设置 open 属性；背景变为不可交互。
- Esc/遮罩先发出关闭请求，受控模式由父组件更新 open。
- 关闭恢复触发前焦点；长内容只滚动弹窗 body。
- 禁止没有 title 的无名弹窗；原生 dialog 支持是运行前提。

## Props
| 参数 | 类型 | 默认值 | 用途 |
| --- | --- | --- | --- |
| `open` | `boolean` | `undefined` | v-model:open；undefined 使用内部状态。 |
| `defaultValue` | `boolean` | `false` | 非受控初始打开状态。 |
| `title` | `string` | `required` | 对话框可访问名称。 |
| `description` | `string` | `undefined` | 补充描述。 |
| `size` | `'sm'  /  'md'  /  'lg'` | `md` | 最大宽度 400/520/760px；手机自动收缩。 |
| `closeOnEscape` | `boolean` | `true` | Esc 是否请求关闭。 |
| `closeOnBackdrop` | `boolean` | `true` | 点击遮罩是否请求关闭。 |
| `showClose` | `boolean` | `true` | 显示标题区关闭按钮。 |

## Slots
trigger({ open }), default({ close }), footer({ close })

## Events
- `update:open` → `boolean`
- `afterOpen` → `void`
- `afterClose` → `void`

## 修改入口
行为：`packages/vue/src/components/dialog/index.js`。样式：`packages/vue/src/components/dialog/style.css`。类型：`packages/vue/src/components/dialog/index.d.ts`。
整体尺寸、品牌与颜色：`packages/tokens/src/tokens.json`。演示：`apps/docs/src/demos.js`。

## 已知范围边界
- 不含拖动、静态方法和自定义 overlay portal；不使用兼容老浏览器的 polyfill。
- dialog 同一实例不同时混用 DOM showModal 与组件 open API。
