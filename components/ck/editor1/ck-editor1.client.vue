<template>
  <div id="editor" ref="editorRef"></div>
</template>

<script setup lang="ts">
import MyClassicEditor from './ckeditor1';

const editorRef = useTemplateRef('editorRef');

async function initEditor() {
  try {
    if (!editorRef.value) {
      return;
    }

    const editor = await MyClassicEditor.create(editorRef.value);
    // console.log('editor :>> ', editor);
  } catch (error: any) {
    console.log('error :>> ', error.stack);
  }
}

onMounted(() => {
  nextTick(() => {
    initEditor();
  });
});
</script>
