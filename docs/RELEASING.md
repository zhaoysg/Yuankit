# 打包、接入与 GitHub

## 本地包

```bash
npm run check
npm run test:browser
npm run pack:ui
npm run pack:tokens
```

生成在 releases/ 下。Vue 包只带自有 dist、类型、CSS、说明和许可证，不带示例 Vue 运行时、测试数据或 node_modules。UI CSS 已含 Token，无须再安装 tokens 包；独立 Token 包供纯 CSS/品牌工具使用。

版本改动需同时更新根和两个 package.json、CHANGELOG、registry.since 与文档示例。更新根锁文件。当前 build.mjs 中预览版本也需同步；正式持续发布前可进一步抽到统一版本配置。

## GitHub 本次状态

命名目标 `zhaoysg/yuankit`，独立仓库。本轮没有执行远程建仓或推送。因此此次交付是**本地源码及构建包，不是已上传的 GitHub 项目**，也没有远程 CI 或 PR 链接。

## 准备好的上传助手

脚本仅调用本机已登录的 GitHub CLI，不索取、记录或把 Token 写进代码。运行环境需要已可使用 git 与 gh，并配置自己的 Git 提交身份。不要把令牌发到聊天中。

```bash
node scripts/publish-github.mjs            # 仅打印目标，不上传
node scripts/publish-github.mjs --execute  # 显式执行：创建 PRIVATE 仓库并推送
```

脚本验证登录账号为 zhaoysg、已有 origin/未提交的跟踪文件、构建和最近浏览器报告。默认 private；不会强推或覆盖已有 origin。GitHub 上名字冲突时命令会报错，不会覆盖远程。执行前检查所有将加入 Git 的文件；报告不能替代本次改动的测试。

如果新建仓库成功但网络在 push 时中断，保留本地目录和 origin，人工查看远程状态后继续正常 git push；不要通过删除仓库或 force push 来自动“修复”。此助手远程写入流程尚未在本次环境执行过。

## CI

`.github/workflows/ci.yml` 已配置构建、Node 契约、浏览器测试与结果上传。提交到 GitHub 后才有真实运行结果。首次上传可能需要仓库权限或 Actions 管理者批准，本交付不宣称已通过远程 CI。

npm 发布是另一个动作；没有授权与发布结果前，不执行 npm publish，不把包名当成已占有的 registry 名称。
