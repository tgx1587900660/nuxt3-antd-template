<template>
  <div ref="editorRef"></div>
</template>

<script setup lang="ts">
import MyClassicEditor from './ckeditor7';

defineOptions({ name: 'CkEditor7' });

type EmitsType = {
  ready: [editor: MyClassicEditor];
  destroy: [];
};
const emit = defineEmits<EmitsType>();

const editorRef = useTemplateRef('editorRef');
let instance: MyClassicEditor | null = null;

async function initEditor() {
  try {
    if (!editorRef.value) {
      return;
    }
    instance = await MyClassicEditor.create(editorRef.value, {
      // removePlugins: ['List', 'BlockQuote', 'Link'],
    });
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
  emit('destroy');
});
</script>
