# YkSeparator / 分隔线

版本：0.1.0-beta。该文件由 registry/components.json 同步维护；修改组件必须更新规格和测试。

## 用途
克制地区分内容层次。

## 来源与取舍
- [Ant Design](https://ant.design/components/divider/) — reference
- [HeroUI v3](https://heroui.com/en/docs/react/components/separator) — reference

`reviewed` 表示已读取相关官方文档或源码；`reference` 表示后续复核入口，不表示已逐项复刻。所有 YuanKit CSS 与组件代码为本次独立编写，不包含这两家的运行时或 Pro 资产。

## 视觉
单像素线条，水平留白或垂直间距。

YuanKit 不是任何一家的像素级拷贝：soft 使用柔和色面与较大圆角，precise 使用较小圆角和描边；具体参数由 `packages/tokens/src/tokens.json` 定义。

## 结构
单个 div 分隔元素。

## 交互与无障碍
- 纯装饰线不制造多余读屏噪音。
- 非装饰时提供方向语义。

## Props
| 参数 | 类型 | 默认值 | 用途 |
| --- | --- | --- | --- |
| `orientation` | `'horizontal'  /  'vertical'` | `horizontal` | 水平或垂直。 |
| `decorative` | `boolean` | `true` | true 使用 role=none；false 提供 separator 语义。 |

## Slots
无

## Events


## 修改入口
行为：`packages/vue/src/components/separator/index.js`。样式：`packages/vue/src/components/separator/style.css`。类型：`packages/vue/src/components/separator/index.d.ts`。
整体尺寸、品牌与颜色：`packages/tokens/src/tokens.json`。演示：`apps/docs/src/demos.js`。

## 已知范围边界
- 不含可拖动分割布局或分隔线标题。
