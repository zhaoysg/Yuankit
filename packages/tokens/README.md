# @zhaoysg/yuankit-tokens

YuanKit v0.1.0 token CSS and pure helpers. Local tarball; not yet published to a registry.

```js
import '@zhaoysg/yuankit-tokens/style.css'
import { contrastRatio, foregroundFor } from '@zhaoysg/yuankit-tokens'
```

For CSS-only consumers, use class="yk-theme" with data-yk-mode="light", data-yk-skin="soft", and data-yk-density="comfortable". This supplies variables, not components.

The Vue package's style.css already contains these variables, so installing both is unnecessary unless using the pure helpers separately. contrastRatio accepts six-digit hexadecimal colors only and is not a full accessibility audit.


本版说明、AI 接入与迁移见完整源码 docs/。组件仍是 beta；没有真实模型、自动上传或工具执行。
