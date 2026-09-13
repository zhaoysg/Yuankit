# YkCta

自有 Vue 区块；使用 ConfigProvider 主题。可由 YkAsset 包装获得参数调整。

实现：`index.js`；样式：`../style.css`；可编辑字段：`registry/inspector.json`。

对外通过 action 事件通知 primary、secondary 或 navigate（以本区块实际按钮为准），由业务项目接入路由和服务。Navbar 的 items 有 value/label/disabled，不生成虚假的 URL。

响应式使用容器查询和小屏回退；动效见 effects。未复制第三方截图和代码，不承诺某一参考站点逐像素一致。
