# YkCheckbox / 复选框

版本：0.1.0-beta。该文件由 registry/components.json 同步维护；修改组件必须更新规格和测试。

## 用途
二元选择与半选状态，保留原生表单行为。

## 来源与取舍
- [Ant Design](https://ant.design/components/checkbox/) — reference
- [HeroUI v3](https://heroui.com/en/docs/react/components/checkbox) — reference

`reviewed` 表示已读取相关官方文档或源码；`reference` 表示后续复核入口，不表示已逐项复刻。所有 YuanKit CSS 与组件代码为本次独立编写，不包含这两家的运行时或 Pro 资产。

## 视觉
未选、选中、半选、聚焦、禁用。

YuanKit 不是任何一家的像素级拷贝：soft 使用柔和色面与较大圆角，precise 使用较小圆角和描边；具体参数由 `packages/tokens/src/tokens.json` 定义。

## 结构
label → input[type=checkbox] + 文案/说明。

## 交互与无障碍
- Space 切换；点击标签也会激活控件。
- 仅选中时参与原生 FormData。
- indeterminate 不代表业务三态值，选中值仍为 boolean。

## Props
| 参数 | 类型 | 默认值 | 用途 |
| --- | --- | --- | --- |
| `modelValue` | `boolean` | `undefined` | 受控选中状态。 |
| `defaultValue` | `boolean` | `false` | 非受控初始状态。 |
| `indeterminate` | `boolean` | `false` | 原生 DOM 半选状态；父组件负责联动。 |
| `disabled` | `boolean` | `false` | 禁用。 |
| `required` | `boolean` | `false` | 原生必填约束。 |
| `label` | `string` | `undefined` | 文字标签，也可使用 default 插槽。 |
| `description` | `string` | `undefined` | 辅助说明。 |
| `id` | `string` | `自动生成` | 控件 ID。 |
| `name` | `string` | `undefined` | 原生表单字段名。 |
| `value` | `string` | `on` | FormData 中选中时提交的值。 |

## Slots
default

## Events
- `update:modelValue` → `boolean`
- `change` → `boolean`

## 修改入口
行为：`packages/vue/src/components/checkbox/index.js`。样式：`packages/vue/src/components/checkbox/style.css`。类型：`packages/vue/src/components/checkbox/index.d.ts`。
整体尺寸、品牌与颜色：`packages/tokens/src/tokens.json`。演示：`apps/docs/src/demos.js`。

## 已知范围边界
- 首版不包含自动管理数组的 CheckboxGroup；用业务组合控制。
