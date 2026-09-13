# YkTextarea / 文本域

版本：0.1.0-beta。该文件由 registry/components.json 同步维护；修改组件必须更新规格和测试。

## 用途
多行编辑、字数统计与说明信息。

## 来源与取舍
- [Ant Design](https://ant.design/components/input/) — reference
- [HeroUI v3](https://heroui.com/en/docs/react/components/text-area) — reference

`reviewed` 表示已读取相关官方文档或源码；`reference` 表示后续复核入口，不表示已逐项复刻。所有 YuanKit CSS 与组件代码为本次独立编写，不包含这两家的运行时或 Pro 资产。

## 视觉
正常、错误、禁用、只读、可拉伸；文本不溢出容器。

YuanKit 不是任何一家的像素级拷贝：soft 使用柔和色面与较大圆角，precise 使用较小圆角和描边；具体参数由 `packages/tokens/src/tokens.json` 定义。

## 结构
field → label + textarea + count + description + error。

## 交互与无障碍
- 遵守原生 textarea 的换行及键盘规则。
- 中文组合输入与 Input 一致。
- 计数与原生 maxlength 口径一致，emoji 可能占两个码元。

## Props
| 参数 | 类型 | 默认值 | 用途 |
| --- | --- | --- | --- |
| `modelValue` | `string` | `undefined` | 受控文本。 |
| `defaultValue` | `string` | `''` | 非受控初始文本。 |
| `id` | `string` | `自动生成` | 输入元素 ID。 |
| `label` | `string` | `undefined` | 可见标签；否则传 aria-label。 |
| `description` | `string` | `undefined` | 辅助说明。 |
| `error` | `string` | `undefined` | 错误内容。 |
| `disabled` | `boolean` | `false` | 禁用。 |
| `readonly` | `boolean` | `false` | 只读。 |
| `required` | `boolean` | `false` | 原生必填。 |
| `rows` | `number` | `4` | 初始行数。 |
| `maxlength` | `number` | `undefined` | 原生 UTF-16 码元长度上限。 |
| `showCount` | `boolean` | `false` | 展示与 maxlength 一致的 UTF-16 码元计数。 |

## Slots
无

## Events
- `update:modelValue` → `string`
- `change` → `string`

## 修改入口
行为：`packages/vue/src/components/textarea/index.js`。样式：`packages/vue/src/components/textarea/style.css`。类型：`packages/vue/src/components/textarea/index.d.ts`。
整体尺寸、品牌与颜色：`packages/tokens/src/tokens.json`。演示：`apps/docs/src/demos.js`。

## 已知范围边界
- 不含自动高度和富文本；允许用户垂直拖动调整高度。
