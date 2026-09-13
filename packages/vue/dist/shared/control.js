import { computed, ref } from 'vue';
/** Undefined means uncontrolled. False, zero and empty-string are valid controlled values. */
export function useControllable(props, emit, key = 'modelValue', fallback = '') {
  const local = ref(props.defaultValue ?? fallback);
  const value = computed(() => props[key] !== undefined ? props[key] : local.value);
  const set = (next) => {
    if (Object.is(value.value, next)) return;
    if (props[key] === undefined) local.value = next;
    emit(`update:${key}`, next);
  };
  return { value, set };
}
export function describedBy(attrs, ...ids) {
  return [attrs['aria-describedby'], ...ids].filter(Boolean).join(' ') || undefined;
}
