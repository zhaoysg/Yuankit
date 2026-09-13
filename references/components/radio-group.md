# YkRadioGroup / 单选组

版本：0.1.0-beta。该文件由 registry/components.json 同步维护；修改组件必须更新规格和测试。

## 用途
同组互斥选择，自动关联名称与选项。

## 来源与取舍
- [Ant Design](https://ant.design/components/radio/) — reference
- [HeroUI v3](https://heroui.com/en/docs/react/components/radio-group) — reference

`reviewed` 表示已读取相关官方文档或源码；`reference` 表示后续复核入口，不表示已逐项复刻。所有 YuanKit CSS 与组件代码为本次独立编写，不包含这两家的运行时或 Pro 资产。

## 视觉
未选、选中、禁用；横向与纵向。

YuanKit 不是任何一家的像素级拷贝：soft 使用柔和色面与较大圆角，precise 使用较小圆角和描边；具体参数由 `packages/tokens/src/tokens.json` 定义。

## 结构
fieldset → legend + 多个 label/input[type=radio]。

## 交互与无障碍
- 同组键盘方向键切换由浏览器处理。
- 使用 name 保证表单和互斥行为；不同实例的自动 name 不冲突。

## Props
| 参数 | 类型 | 默认值 | 用途 |
| --- | --- | --- | --- |
| `modelValue` | `string` | `undefined` | 受控值。 |
| `defaultValue` | `string` | `''` | 非受控初始值。 |
| `label` | `string` | `required` | fieldset 的 legend。 |
| `name` | `string` | `自动生成` | 一组原生 radio 的共享 name。 |
| `options` | `Option[]` | `[]` | 唯一非空字符串 value、label、disabled。 |
| `disabled` | `boolean` | `false` | 禁用整组。 |
| `required` | `boolean` | `false` | 至少选择一个。 |
| `orientation` | `'horizontal'  /  'vertical'` | `horizontal` | 布局方向，不改原生键盘行为。 |

## Slots
无

## Events
- `update:modelValue` → `string`
- `change` → `string`

## 修改入口
行为：`packages/vue/src/components/radio-group/index.js`。样式：`packages/vue/src/components/radio-group/style.css`。类型：`packages/vue/src/components/radio-group/index.d.ts`。
整体尺寸、品牌与颜色：`packages/tokens/src/tokens.json`。演示：`apps/docs/src/demos.js`。

## 已知范围边界
- 不含按钮式 Radio 和自定义 HTML 选项。
