# 工作空间设置

本方案组合已存在的 YuanKit 基础组件，放在业务/方案层而不是库内部。

事件：save → {name,email,role,notifications}；仅演示校验，不自动请求服务端。

样式：导入组件库的 style.css 与本仓库 blocks/style.css。拷贝到外部项目时，将 index.js 中对 ../../packages/vue/src/index.js 的引用替换为 @zhaoysg/yuankit-vue。不要遗漏方案 CSS。

修改接口后同步 registry/patterns.json、工作台演示和浏览器用例。当前未提供持久化、账号权限或服务端。
