import { defineComponent, h, ref } from 'vue';
import { YkCard, YkInput, YkSelect, YkSwitch, YkButton, YkAlert } from '../../packages/vue/src/index.js';
export const SettingsPanel = defineComponent({
  name: 'SettingsPanel', emits: ['save'],
  setup(_, { emit }) {
    const name = ref('我的工作空间'), email = ref('hello@example.com'), role = ref('editor');
    const notifications = ref(true), submitted = ref(false), saved = ref(false);
    const error = () => submitted.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value) ? '请输入有效的邮箱地址' : '';
    const submit = event => {
      event.preventDefault(); submitted.value = true; saved.value = false;
      if (!name.value.trim() || error()) return;
      emit('save', { name: name.value, email: email.value, role: role.value, notifications: notifications.value });
      saved.value = true;
    };
    return () => h(YkCard, { title: '工作空间设置', description: '由基础组件组合，业务校验保留在方案层。' }, {
      default: () => h('form', { onSubmit: submit, novalidate: true, class: 'yk-pattern-stack' }, [
        h(YkInput, { label: '空间名称', modelValue: name.value, 'onUpdate:modelValue': v => { name.value = v; saved.value = false; }, error: submitted.value && !name.value.trim() ? '请输入空间名称' : undefined, required: true }),
        h(YkInput, { label: '工作邮箱', type: 'email', modelValue: email.value, 'onUpdate:modelValue': v => { email.value = v; saved.value = false; }, error: error(), required: true }),
        h(YkSelect, { label: '默认角色', options: [{ value: 'reader', label: '阅读者' }, { value: 'editor', label: '编辑者' }, { value: 'admin', label: '管理员' }], modelValue: role.value, 'onUpdate:modelValue': v => { role.value = v; saved.value = false; } }),
        h(YkSwitch, { label: '接收更新通知', description: '这一开关只控制演示状态。', modelValue: notifications.value, 'onUpdate:modelValue': v => { notifications.value = v; saved.value = false; } }),
        h(YkButton, { type: 'submit' }, () => '保存设置'),
        saved.value ? h(YkAlert, { tone: 'success' }, () => '演示设置已在本页更新；未写入服务端。') : null
      ])
    });
  }
});
