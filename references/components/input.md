# YkInput / 输入框

版本：0.1.0-beta。该文件由 registry/components.json 同步维护；修改组件必须更新规格和测试。

## 用途
稳定的文本绑定、前后缀和清晰的校验反馈。

## 来源与取舍
- [Ant Design](https://ant.design/components/input/) — reviewed
- [HeroUI v3](https://heroui.com/en/docs/react/components/text-field) — reviewed

`reviewed` 表示已读取相关官方文档或源码；`reference` 表示后续复核入口，不表示已逐项复刻。所有 YuanKit CSS 与组件代码为本次独立编写，不包含这两家的运行时或 Pro 资产。

## 视觉
默认、聚焦、已填、清空、错误、禁用、只读；三种尺寸。

YuanKit 不是任何一家的像素级拷贝：soft 使用柔和色面与较大圆角，precise 使用较小圆角和描边；具体参数由 `packages/tokens/src/tokens.json` 定义。

## 结构
field → label + input-wrap(leading/input/clear/trailing) + description + error。

## 交互与无障碍
- placeholder/name/autocomplete/aria-* 透传到真实 input。
- 中文输入法组合期间不向 model 提交半成品，compositionend 后提交。
- error 不替代 description；两者同时关联到输入控件。

## Props
| 参数 | 类型 | 默认值 | 用途 |
| --- | --- | --- | --- |
| `modelValue` | `string` | `undefined` | 受控值，通过 v-model 双向绑定。 |
| `defaultValue` | `string` | `''` | 非受控初始值；只在初始化时读取。 |
| `id` | `string` | `自动生成` | 输入元素 ID；不放到外层容器。 |
| `label` | `string` | `undefined` | 可见标签；缺省时必须传 aria-label。 |
| `description` | `string` | `undefined` | 辅助说明，加入 aria-describedby。 |
| `error` | `string` | `undefined` | 错误内容；展示错误样式和 aria-invalid。 |
| `size` | `Size` | `继承 ConfigProvider.size` | 单个组件尺寸，优先于全局默认。 |
| `disabled` | `boolean` | `false` | 禁用。 |
| `readonly` | `boolean` | `false` | 只读，不显示清空操作。 |
| `required` | `boolean` | `false` | 原生必填约束。 |
| `clearable` | `boolean` | `false` | 允许清空并将焦点返回输入框。 |
| `type` | `string` | `text` | 原生 input 类型；值保持字符串，不做数字解析。 |

## Slots
leading, trailing

## Events
- `update:modelValue` → `string`
- `change` → `string`
- `clear` → `void`

## 修改入口
行为：`packages/vue/src/components/input/index.js`。样式：`packages/vue/src/components/input/style.css`。类型：`packages/vue/src/components/input/index.d.ts`。
整体尺寸、品牌与颜色：`packages/tokens/src/tokens.json`。演示：`apps/docs/src/demos.js`。

## 已知范围边界
- 不含 OTP、密码眼睛、远程搜索和自动校验引擎。
- 数字输入仍返回 string；业务自行解析和验证。
