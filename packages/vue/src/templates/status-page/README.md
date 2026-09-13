# YkStatusPage

统一状态页结构，自有 CSS 数字图形。404/403/500/maintenance 是四个文案与状态预设，共用这个组件。

使用 ConfigProvider，或 YkAsset asset="error-404" 进行参数驱动。action 事件为 primary / secondary；业务项目负责跳转、重试、权限和 HTTP 状态码。
