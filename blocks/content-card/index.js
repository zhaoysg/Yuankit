import { defineComponent, h } from 'vue';
import { YkCard, YkBadge, YkAvatar, YkButton, YkSeparator } from '../../packages/vue/src/index.js';
export const ContentCard = defineComponent({
  name: 'ContentCard',
  props: {
    title: { type: String, default: '让每一次设计，都成为下一次的起点' },
    excerpt: { type: String, default: '从组件、主题到页面方案，把经过验证的设计保留在同一个地方。' },
    author: { type: String, default: '设计团队' }
  }, emits: ['open'],
  setup(props, { emit }) {
    return () => h(YkCard, { as: 'article', variant: 'outlined' }, {
      header: () => h('div', { class: 'yk-pattern-row' }, [h(YkBadge, { tone: 'primary' }, () => '设计笔记'), h(YkBadge, () => '方案资产')]),
      default: () => [
        h('h3', { class: 'yk-pattern-title' }, props.title),
        h('p', { class: 'yk-pattern-muted' }, props.excerpt), h(YkSeparator),
        h('div', { class: 'yk-pattern-between' }, [
          h('div', { class: 'yk-pattern-row' }, [h(YkAvatar, { name: props.author, size: 'sm' }), h('span', {}, props.author)]),
          h(YkButton, { variant: 'ghost', size: 'sm', onClick: () => emit('open') }, () => '阅读内容 →')
        ])
      ]
    });
  }
});
