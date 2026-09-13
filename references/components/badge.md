# YkBadge / 状态标签

版本：0.1.0-beta。该文件由 registry/components.json 同步维护；修改组件必须更新规格和测试。

## 用途
文字、颜色与可选状态点共同表达状态。

## 来源与取舍
- [Ant Design](https://ant.design/components/tag/) — reference
- [HeroUI v3](https://heroui.com/en/docs/react/components/chip) — reference

`reviewed` 表示已读取相关官方文档或源码；`reference` 表示后续复核入口，不表示已逐项复刻。所有 YuanKit CSS 与组件代码为本次独立编写，不包含这两家的运行时或 Pro 资产。

## 视觉
五个语义色 × 两种外观；胶囊形态。

YuanKit 不是任何一家的像素级拷贝：soft 使用柔和色面与较大圆角，precise 使用较小圆角和描边；具体参数由 `packages/tokens/src/tokens.json` 定义。

## 结构
span → 可选装饰点 + 文字内容。

## 交互与无障碍
- 不能仅依赖颜色区分状态；必须给出可读文本。
- 状态点对读屏隐藏，避免重复播报。

## Props
| 参数 | 类型 | 默认值 | 用途 |
| --- | --- | --- | --- |
| `tone` | `'neutral'  /  'primary'  /  'success'  /  'warning'  /  'danger'` | `neutral` | 语义色。 |
| `variant` | `'soft'  /  'outline'` | `soft` | 浅色背景或描边。 |
| `dot` | `boolean` | `false` | 增加装饰性状态点。 |

## Slots
default

## Events


## 修改入口
行为：`packages/vue/src/components/badge/index.js`。样式：`packages/vue/src/components/badge/style.css`。类型：`packages/vue/src/components/badge/index.d.ts`。
整体尺寸、品牌与颜色：`packages/tokens/src/tokens.json`。演示：`apps/docs/src/demos.js`。

## 已知范围边界
- 这是 Tag/Chip 类标签，不含数量角标和可删除标签。
