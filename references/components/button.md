# YkButton / 按钮

版本：0.1.0-beta。该文件由 registry/components.json 同步维护；修改组件必须更新规格和测试。

## 用途
清晰的操作层级，从主要动作到安静的辅助操作。

## 来源与取舍
- [Ant Design](https://ant.design/components/button/) — reviewed
- [HeroUI v3](https://heroui.com/en/docs/react/components/button) — reference

`reviewed` 表示已读取相关官方文档或源码；`reference` 表示后续复核入口，不表示已逐项复刻。所有 YuanKit CSS 与组件代码为本次独立编写，不包含这两家的运行时或 Pro 资产。

## 视觉
primary/secondary/outline/ghost/danger × sm/md/lg；default、hover、active、focus-visible、disabled、loading。

YuanKit 不是任何一家的像素级拷贝：soft 使用柔和色面与较大圆角，precise 使用较小圆角和描边；具体参数由 `packages/tokens/src/tokens.json` 定义。

## 结构
button → loading/leading + label + trailing；加载文案为读屏辅助节点。

## 交互与无障碍
- Enter 与 Space 由原生 button 激活。
- loading 和 disabled 均阻止 click；type 默认为 button。
- 文字允许换行；纯图标按钮必须指定可访问名称。

## Props
| 参数 | 类型 | 默认值 | 用途 |
| --- | --- | --- | --- |
| `variant` | `'primary'  /  'secondary'  /  'outline'  /  'ghost'  /  'danger'` | `primary` | 操作外观；一个操作区域建议只有一个主要动作。 |
| `size` | `Size` | `继承 ConfigProvider.size` | 单个组件尺寸，优先于全局默认。 |
| `type` | `'button'  /  'submit'  /  'reset'` | `button` | 原生按钮类型；不会意外提交表单。 |
| `loading` | `boolean` | `false` | 加载时禁用点击，并提供忙碌语义。 |
| `disabled` | `boolean` | `false` | 禁用鼠标及键盘激活。 |
| `block` | `boolean` | `false` | 铺满可用宽度。 |
| `iconOnly` | `boolean` | `false` | 方形图标按钮；调用方必须提供 aria-label。 |

## Slots
default, leading, trailing

## Events
- `click` → `MouseEvent`

## 修改入口
行为：`packages/vue/src/components/button/index.js`。样式：`packages/vue/src/components/button/style.css`。类型：`packages/vue/src/components/button/index.d.ts`。
整体尺寸、品牌与颜色：`packages/tokens/src/tokens.json`。演示：`apps/docs/src/demos.js`。

## 已知范围边界
- 不实现 antd 的 href、波纹、中文自动空格、延迟加载；链接请使用原生 a。
