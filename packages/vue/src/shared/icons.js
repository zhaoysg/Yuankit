import { h } from 'vue';
const paths = {
  close: 'M6 6l12 12M18 6L6 18', check: 'M5 12l4 4L19 6',
  arrow: 'M5 12h14M13 6l6 6-6 6', chevron: 'M6 9l6 6 6-6',
  info: 'M12 10v7M12 6.5v.5', search: 'm16 16 4 4',
  moon: 'M20 14a8 8 0 0 1-10-10 8 8 0 1 0 10 10Z',
  sun: 'M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1 1M18 18l1 1M5 19l1-1M18 6l1-1',
  plus: 'M12 5v14M5 12h14', code: 'm8 7-5 5 5 5m8-10 5 5-5 5m-3-13-2 16',
  grid: 'M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z'
};
export function icon(name, size = 18) {
  return h('svg', {width:size,height:size,viewBox:'0 0 24 24',fill:'none',stroke:'currentColor','stroke-width':1.7,'stroke-linecap':'round','stroke-linejoin':'round','aria-hidden':'true',focusable:'false'}, [
    name === 'info' ? h('circle',{cx:12,cy:12,r:9}) : null,
    name === 'search' ? h('circle',{cx:10.5,cy:10.5,r:6.5}) : null,
    name === 'sun' ? h('circle',{cx:12,cy:12,r:4}) : null,
    h('path',{d:paths[name] || paths.info})
  ]);
}
