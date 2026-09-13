# YkProgress / 进度条

版本：0.1.0-beta。该文件由 registry/components.json 同步维护；修改组件必须更新规格和测试。

## 用途
确定与不确定进度的统一反馈。

## 来源与取舍
- [Ant Design](https://ant.design/components/progress/) — reference
- [HeroUI v3](https://heroui.com/en/docs/react/components/progress-bar) — reference

`reviewed` 表示已读取相关官方文档或源码；`reference` 表示后续复核入口，不表示已逐项复刻。所有 YuanKit CSS 与组件代码为本次独立编写，不包含这两家的运行时或 Pro 资产。

## 视觉
0–100%、超界夹取、不确定动效、减少动效。

YuanKit 不是任何一家的像素级拷贝：soft 使用柔和色面与较大圆角，precise 使用较小圆角和描边；具体参数由 `packages/tokens/src/tokens.json` 定义。

## 结构
heading(label/percentage) + track[role=progressbar] → bar。

## 交互与无障碍
- value 被夹取到 [0,max]；无穷和 NaN 回退到0。
- 不确定进度不设置 aria-valuenow，避免假精确。

## Props
| 参数 | 类型 | 默认值 | 用途 |
| --- | --- | --- | --- |
| `value` | `number` | `undefined` | 进度值；undefined 为不确定进度。 |
| `max` | `number` | `100` | 最大值；非正/非有限值回退为100。 |
| `label` | `string` | `required` | 可见名称和 progressbar 的 accessible name。 |
| `showValue` | `boolean` | `true` | 展示百分比。 |

## Slots
无

## Events


## 修改入口
行为：`packages/vue/src/components/progress/index.js`。样式：`packages/vue/src/components/progress/style.css`。类型：`packages/vue/src/components/progress/index.d.ts`。
整体尺寸、品牌与颜色：`packages/tokens/src/tokens.json`。演示：`apps/docs/src/demos.js`。

## 已知范围边界
- 不含环形、步骤分段和自定义渐变。
