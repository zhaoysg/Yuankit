# YkTabs / 选项卡

版本：0.1.0-beta。该文件由 registry/components.json 同步维护；修改组件必须更新规格和测试。

## 用途
可键盘切换的局部内容分组。

## 来源与取舍
- [Ant Design](https://ant.design/components/tabs/) — reference
- [HeroUI v3](https://heroui.com/en/docs/react/components/tabs) — reference

`reviewed` 表示已读取相关官方文档或源码；`reference` 表示后续复核入口，不表示已逐项复刻。所有 YuanKit CSS 与组件代码为本次独立编写，不包含这两家的运行时或 Pro 资产。

## 视觉
默认、激活、焦点、禁用；soft/line。

YuanKit 不是任何一家的像素级拷贝：soft 使用柔和色面与较大圆角，precise 使用较小圆角和描边；具体参数由 `packages/tokens/src/tokens.json` 定义。

## 结构
tablist → tabs；同级多个 tabpanel，非活动面板 hidden。

## 交互与无障碍
- 左右方向键循环跳过禁用项；Home/End 到首尾。
- manual 时方向键不切内容；Enter/Space 激活。
- tab 与 panel 使用生成 ID 相互关联；面板保留挂载以保存内部状态。

## Props
| 参数 | 类型 | 默认值 | 用途 |
| --- | --- | --- | --- |
| `modelValue` | `string` | `undefined` | 受控激活 value。 |
| `defaultValue` | `string` | `''` | 非受控初始项；未指定时使用第一个可用项。 |
| `items` | `TabItem[]` | `[]` | 唯一 value、label、disabled、可选纯文本 content。 |
| `label` | `string` | `选项卡` | tablist 的可访问名称。 |
| `activation` | `'automatic'  /  'manual'` | `automatic` | 方向键自动激活或仅移动焦点。 |
| `variant` | `'soft'  /  'line'` | `soft` | 分段背景或线条外观。 |

## Slots
[item.value]

## Events
- `update:modelValue` → `string`
- `change` → `string`

## 修改入口
行为：`packages/vue/src/components/tabs/index.js`。样式：`packages/vue/src/components/tabs/style.css`。类型：`packages/vue/src/components/tabs/index.d.ts`。
整体尺寸、品牌与颜色：`packages/tokens/src/tokens.json`。演示：`apps/docs/src/demos.js`。

## 已知范围边界
- 首版只实现水平键盘导航；不含拖动排序和可关闭标签。
