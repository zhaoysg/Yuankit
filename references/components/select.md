# YkSelect / 选择器

版本：0.1.0-beta。该文件由 registry/components.json 同步维护；修改组件必须更新规格和测试。

## 用途
单选列表，保留系统级键盘与移动端选择体验。

## 来源与取舍
- [Ant Design](https://ant.design/components/select/) — reference
- [HeroUI v3](https://heroui.com/en/docs/react/components/select) — reference

`reviewed` 表示已读取相关官方文档或源码；`reference` 表示后续复核入口，不表示已逐项复刻。所有 YuanKit CSS 与组件代码为本次独立编写，不包含这两家的运行时或 Pro 资产。

## 视觉
选择框外观统一；弹出的选项菜单使用操作系统原生外观。

YuanKit 不是任何一家的像素级拷贝：soft 使用柔和色面与较大圆角，precise 使用较小圆角和描边；具体参数由 `packages/tokens/src/tokens.json` 定义。

## 结构
field → label + select-wrap(select/option + 装饰箭头) + description/error。

## 交互与无障碍
- 方向键、字符查找、Enter 与移动端选择由原生 select 处理。
- 不把系统选项面板说成可像素级换肤。
- name、autocomplete、aria-* 透传到 select。

## Props
| 参数 | 类型 | 默认值 | 用途 |
| --- | --- | --- | --- |
| `modelValue` | `string` | `undefined` | 受控选中值。 |
| `defaultValue` | `string` | `''` | 非受控初始值。 |
| `id` | `string` | `自动生成` | 控件 ID。 |
| `label` | `string` | `undefined` | 可见标签，否则传 aria-label。 |
| `description` | `string` | `undefined` | 辅助说明。 |
| `error` | `string` | `undefined` | 错误说明。 |
| `placeholder` | `string` | `按 locale` | 未选择时提示。 |
| `size` | `Size` | `继承 ConfigProvider.size` | 单个组件尺寸，优先于全局默认。 |
| `options` | `Option[]` | `[]` | 唯一非空 string value；空字符串保留给未选状态。 |
| `disabled` | `boolean` | `false` | 禁用。 |
| `required` | `boolean` | `false` | 原生必选约束。 |
| `clearable` | `boolean` | `false` | 允许重新选择空占位选项。 |

## Slots
无

## Events
- `update:modelValue` → `string`
- `change` → `string`

## 修改入口
行为：`packages/vue/src/components/select/index.js`。样式：`packages/vue/src/components/select/style.css`。类型：`packages/vue/src/components/select/index.d.ts`。
整体尺寸、品牌与颜色：`packages/tokens/src/tokens.json`。演示：`apps/docs/src/demos.js`。

## 已知范围边界
- 只支持单选字符串；不含搜索、多选、远程分页、虚拟列表。
- 不是 antd/HeroUI 自定义 listbox 的完整重写。
