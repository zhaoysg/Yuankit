# YkBreadcrumb · 面包屑

## 视觉
使用统一品牌、前景、圆角和间距变量；工作台按实际能力暴露可调参数。

## 结构
nav → ol → li / link or button / current span

## 交互规则
当前项声明 aria-current；无 href 的中间项发出 navigate 事件。

## 规范与边界
库不负责路由；URL 只允许 http(s)、站内相对地址与 hash。

## 来源
原生 HTML 行为 + 独立 Vue 实现。参考入口不表示抄录第三方组件源码。
