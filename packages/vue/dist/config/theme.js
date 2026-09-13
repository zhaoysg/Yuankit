import { tokenKeys } from './token-keys.js';
export { tokenKeys } from './token-keys.js';

/** Reject accidental unknown tokens and CSS declaration injection. Never accept untrusted styles. */
export function toCssVariables(tokens = {}) {
  const out = {};
  for (const [key, value] of Object.entries(tokens)) {
    if (!tokenKeys.includes(key)) throw new TypeError(`Unknown YuanKit token: ${key}`);
    if (typeof value !== 'string' || /[;{}<>]/.test(value)) throw new TypeError(`Invalid token value: ${key}`);
    out[`--yk-${key}`] = value;
  }
  return out;
}
export function mergeConfig(parent, options = {}) {
  const result = { ...parent };
  for (const key of ['skin', 'mode', 'density', 'size', 'motion', 'locale']) {
    if (options[key] !== undefined) result[key] = options[key];
  }
  for (const [key, choices] of Object.entries({skin:['soft','precise'],mode:['light','dark'],density:['comfortable','compact'],size:['sm','md','lg'],locale:['zh-CN','en-US']})) {
    if (!choices.includes(result[key])) throw new TypeError(`Invalid YuanKit ${key}: ${result[key]}`);
  }
  if (typeof result.motion !== 'boolean') throw new TypeError('YuanKit motion must be a boolean.');
  result.tokens = { ...parent.tokens, ...options.tokens };
  toCssVariables(result.tokens);
  return result;
}
export function themeAttrs(config) {
  return {
    class: 'yk-theme', 'data-yk-skin': config.skin, 'data-yk-mode': config.mode,
    'data-yk-density': config.density, 'data-yk-motion': String(config.motion),
    style: { ...toCssVariables(config.tokens), ...(config.motion ? {} : {'--yk-duration': '0ms'}) }
  };
}
