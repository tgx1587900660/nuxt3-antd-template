<template>
  <div ref="editorRef"></div>
</template>

<script setup lang="ts">
import MyClassicEditor from './ckeditor9';

defineOptions({ name: 'CkEditor9' });

type EmitsType = {
  ready: [editor: MyClassicEditor];
};
const emit = defineEmits<EmitsType>();
const editorRef = useTemplateRef('editorRef');
let instance: MyClassicEditor | null = null;

async function initEditor() {
  try {
    if (!editorRef.value) {
      return;
    }
    instance = await MyClassicEditor.create(editorRef.value);
    // console.log('instance :>> ', instance);
    emit('ready', instance); // 暴露编辑器实例，给父组件使用
  } catch (error: any) {
    console.log('error :>> ', error.stack);
  }
}

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
});
</script>
