# YkCard / 卡片

版本：0.1.0-beta。该文件由 registry/components.json 同步维护；修改组件必须更新规格和测试。

## 用途
统一内容、页眉与操作区的组合容器。

## 来源与取舍
- [Ant Design](https://ant.design/components/card/) — reference
- [HeroUI v3](https://heroui.com/en/docs/react/components/card) — reference

`reviewed` 表示已读取相关官方文档或源码；`reference` 表示后续复核入口，不表示已逐项复刻。所有 YuanKit CSS 与组件代码为本次独立编写，不包含这两家的运行时或 Pro 资产。

## 视觉
柔和/紧凑圆角；outlined/elevated。

YuanKit 不是任何一家的像素级拷贝：soft 使用柔和色面与较大圆角，precise 使用较小圆角和描边；具体参数由 `packages/tokens/src/tokens.json` 定义。

## 结构
section/article/div → header + body + footer。

## 交互与无障碍
- Card 本身不模拟 button；跳转使用内部 a 或按钮。
- 使用 header 插槽时由业务负责正确的标题层级。

## Props
| 参数 | 类型 | 默认值 | 用途 |
| --- | --- | --- | --- |
| `title` | `string` | `undefined` | 默认 h3 标题；复杂标题通过 header 插槽控制层级。 |
| `description` | `string` | `undefined` | 说明文字。 |
| `as` | `'section'  /  'article'  /  'div'` | `section` | 根节点语义。 |
| `variant` | `'outlined'  /  'elevated'` | `outlined` | 描边或阴影。 |

## Slots
header, default, footer

## Events


## 修改入口
行为：`packages/vue/src/components/card/index.js`。样式：`packages/vue/src/components/card/style.css`。类型：`packages/vue/src/components/card/index.d.ts`。
整体尺寸、品牌与颜色：`packages/tokens/src/tokens.json`。演示：`apps/docs/src/demos.js`。

## 已知范围边界
- 不含内置整卡点击、加载骨架、选择状态。
