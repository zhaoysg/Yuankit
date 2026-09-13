# YkTooltip / 文字提示

版本：0.1.0-beta。该文件由 registry/components.json 同步维护；修改组件必须更新规格和测试。

## 用途
为已有标签补充简短说明，而不是承载交互表单。

## 来源与取舍
- [Ant Design](https://ant.design/components/tooltip/) — reference
- [HeroUI v3](https://heroui.com/en/docs/react/components/tooltip) — reference

`reviewed` 表示已读取相关官方文档或源码；`reference` 表示后续复核入口，不表示已逐项复刻。所有 YuanKit CSS 与组件代码为本次独立编写，不包含这两家的运行时或 Pro 资产。

## 视觉
隐藏、hover/focus 展示；靠近视口边缘时调整位置。

YuanKit 不是任何一家的像素级拷贝：soft 使用柔和色面与较大圆角，precise 使用较小圆角和描边；具体参数由 `packages/tokens/src/tokens.json` 定义。

## 结构
inline trigger wrapper + Portal 提示节点[role=tooltip]。

## 交互与无障碍
- 触发节点必须可聚焦，并绑定插槽提供的 attrs。
- 移入提示文字本身保持可见；Esc 关闭。
- 滚动/resize 后重定位；卸载清理计时器与事件。

## Props
| 参数 | 类型 | 默认值 | 用途 |
| --- | --- | --- | --- |
| `text` | `string` | `required` | 纯文本提示。 |
| `delay` | `number` | `300` | 显示延迟，单位毫秒。 |

## Slots
default({ attrs })

## Events


## 修改入口
行为：`packages/vue/src/components/tooltip/index.js`。样式：`packages/vue/src/components/tooltip/style.css`。类型：`packages/vue/src/components/tooltip/index.d.ts`。
整体尺寸、品牌与颜色：`packages/tokens/src/tokens.json`。演示：`apps/docs/src/demos.js`。

## 已知范围边界
- 只支持纯文本说明，不允许提示内按钮或表单。
- 不应依赖 tooltip 提供移动端唯一关键说明。
