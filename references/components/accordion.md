# YkAccordion · 折叠面板

## 视觉
使用统一品牌、前景、圆角和间距变量；工作台按实际能力暴露可调参数。

## 结构
section → h3/button + hidden panel

## 交互规则
按钮 Enter/Space 展开与收起；aria-expanded 和 aria-controls 与面板关联。

## 规范与边界
固定 h3 标题层级；不提供拖拽排序。

## 来源
原生 HTML 行为 + 独立 Vue 实现。参考入口不表示抄录第三方组件源码。
