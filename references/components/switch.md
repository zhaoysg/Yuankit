# YkSwitch / 开关

版本：0.1.0-beta。该文件由 registry/components.json 同步维护；修改组件必须更新规格和测试。

## 用途
立即生效的设置项，强调开与关的状态。

## 来源与取舍
- [Ant Design](https://ant.design/components/switch/) — reference
- [HeroUI v3](https://heroui.com/en/docs/react/components/switch) — reference

`reviewed` 表示已读取相关官方文档或源码；`reference` 表示后续复核入口，不表示已逐项复刻。所有 YuanKit CSS 与组件代码为本次独立编写，不包含这两家的运行时或 Pro 资产。

## 视觉
关闭、开启、聚焦、禁用；提供减少动效模式。

YuanKit 不是任何一家的像素级拷贝：soft 使用柔和色面与较大圆角，precise 使用较小圆角和描边；具体参数由 `packages/tokens/src/tokens.json` 定义。

## 结构
label → 原生 checkbox[role=switch] + track/thumb + 文案。

## 交互与无障碍
- Space 切换；保持原生输入焦点和表单语义。
- 仅视觉轨道隐藏输入外观，不将真实 input 从可访问树移除。

## Props
| 参数 | 类型 | 默认值 | 用途 |
| --- | --- | --- | --- |
| `modelValue` | `boolean` | `undefined` | 受控开关值。 |
| `defaultValue` | `boolean` | `false` | 非受控初始值。 |
| `disabled` | `boolean` | `false` | 禁用。 |
| `label` | `string` | `undefined` | 标签文字。 |
| `description` | `string` | `undefined` | 状态说明。 |
| `id` | `string` | `自动生成` | 控件 ID。 |
| `name` | `string` | `undefined` | 原生表单字段名。 |
| `value` | `string` | `on` | FormData 提交值。 |

## Slots
default

## Events
- `update:modelValue` → `boolean`
- `change` → `boolean`

## 修改入口
行为：`packages/vue/src/components/switch/index.js`。样式：`packages/vue/src/components/switch/style.css`。类型：`packages/vue/src/components/switch/index.d.ts`。
整体尺寸、品牌与颜色：`packages/tokens/src/tokens.json`。演示：`apps/docs/src/demos.js`。

## 已知范围边界
- 没有内置异步 loading；业务通过 disabled 防止重复操作。
