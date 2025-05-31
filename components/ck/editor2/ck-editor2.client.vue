<template>
  <component :is="tagName" ref="editorRef" />
</template>

<script setup lang="ts">
import MyClassicEditor, { type EditorConfig, type EventInfo } from './ckeditor2';
import { debounce } from 'lodash-es';

defineOptions({
  name: 'CkEditor2',
});

type PropsType = {
  tagName?: string; // 标签名
  disabled?: boolean; // 是否禁用(禁用后, 不能编辑)
  disableTwoWayDataBinding?: boolean; // 是否禁用双向数据绑定(出于性能考虑, 默认禁用)
  config?: () => {}; // 配置项)
};
const props = withDefaults(defineProps<PropsType>(), {
  tagName: 'div',
  disabled: false,
  disableTwoWayDataBinding: true,
  config: () => ({}),
});
const emit = defineEmits<{
  ready: [editor: MyClassicEditor];
  destroy: [];
  blur: [event: EventInfo, editor: MyClassicEditor];
  focus: [event: EventInfo, editor: MyClassicEditor];
  input: [data: string, event: EventInfo, editor: MyClassicEditor];
  'update:modelValue': [data: string, event: EventInfo, editor: MyClassicEditor];
}>();

const model = defineModel('modelValue', { type: String, default: '' });
// lockId 只读模式锁
const VUE_INTEGRATION_READ_ONLY_LOCK_ID = Symbol('vue-integration-read-only-lock-id');
const editorRef = useTemplateRef('editorRef');
// 编辑器实例
let instance: MyClassicEditor | null = null;
// 上一次的编辑器数据
const lastEditorData = ref('');

// 监听 disabled 变化, 设置只读模式
watch(
  () => props.disabled,
  () => {
    if (props.disabled) {
      instance?.enableReadOnlyMode(VUE_INTEGRATION_READ_ONLY_LOCK_ID);
    } else {
      instance?.disableReadOnlyMode(VUE_INTEGRATION_READ_ONLY_LOCK_ID);
    }
  },
);

// 监听 modelValue 变化, 同步数据
watch(model, (newModel) => {
  if (instance && newModel !== lastEditorData.value) {
    instance.data.set(newModel);
  }
});

/**
 * 初始化编辑器
 */
async function initEditor() {
  try {
    if (!editorRef.value) {
      return;
    }
    // 合并配置对象
    const config: EditorConfig = Object.assign({}, MyClassicEditor.defaultConfig, props.config);
    // 如果 model 有值, 则设置初始数据
    if (model.value) {
      config.initialData = model.value;
    }

    // 创建编辑器实例
    instance = await MyClassicEditor.create(editorRef.value as HTMLElement, config);

    // 设置编辑器事件
    setUpEditorEvents(instance);

    // 同步内容, 如果创建实例期间 modelValue 被改变的话
    if (model.value !== config.initialData) {
      instance.data.set(model.value);
    }

    // 设置禁用状态
    if (props.disabled) {
      instance.enableReadOnlyMode(VUE_INTEGRATION_READ_ONLY_LOCK_ID);
    }

    // 触发 ready 事件
    emit('ready', instance);
  } catch (error: any) {
    console.log('error :>> ', error.stack);
  }
}

/**
 * 设置编辑器事件
 * @param editor 编辑器实例, 自带了一些方法和属性, 可以打印看一看
 *   editor.model: 编辑器模型
 *   editor.model.document.on('change:data', emitDebouncedInputEvent); 表示监听编辑器文档数据变化事件
 *   editor.data.get(): 获取编辑器数据
 *   editor.data.set(): 设置编辑器数据
 *   editor.editing.view.document: 编辑器视图, 也可以监听事件
 *   editor.data.on(): 监听编辑器数据变化
 *   editor.data.off(): 移除编辑器数据变化监听
 *   editor.data.destroy(): 销毁编辑器数据
 *   editor.enableReadOnlyMode(): 设置只读模式
 */
function setUpEditorEvents(editor: MyClassicEditor) {
  // 延迟 300ms 触发更新
  const emitDebouncedInputEvent = debounce(
    (evt: EventInfo) => {
      // 如果禁用双向数据绑定, 则不触发更新
      if (props.disableTwoWayDataBinding) {
        return;
      }
      lastEditorData.value = editor.data.get();
      const data = lastEditorData.value;
      emit('update:modelValue', data, evt, editor);
      emit('input', data, evt, editor);
    },
    300,
    { leading: true },
  );

  // 监听编辑器数据变化, 触发 update:modelValue 和 input 事件
  editor.model.document.on('change:data', emitDebouncedInputEvent);
  editor.editing.view.document.on('focus', (evt: EventInfo) => {
    emit('focus', evt, editor);
  });
  editor.editing.view.document.on('blur', (evt: EventInfo) => {
    emit('blur', evt, editor);
  });
}

// 暴露编辑器实例和上一次的编辑器数据
defineExpose({ instance, lastEditorData });

onMounted(() => {
  nextTick(() => {
    initEditor();
  });
});

onBeforeUnmount(() => {
  if (instance) {
    instance.destroy();
    instance = null;
  }
  emit('destroy');
});
</script>
