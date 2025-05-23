<template>
  <div class="ck-editor">
    <div id="editor" ref="editorRef"></div>
  </div>
</template>

<script setup lang="ts">
import { Bold, Italic } from '@ckeditor/ckeditor5-basic-styles';
import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic';
import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';

let instance = null;
const editorRef = useTemplateRef('editorRef');

const initEditor = () => {
  if (!editorRef.value) {
    return;
  }
  console.log(editorRef.value);
  // console.log('ClassicEditor :>> ', ClassicEditor);

  ClassicEditor.create(editorRef.value, {
    plugins: [Essentials, Paragraph, Bold, Italic],
    toolbar: ['bold', 'italic'],
  })
    .then((editor) => {
      console.log('Editor was initialized', editor);
      instance = editor;
    })
    .catch((error) => {
      console.error(error.stack);
    });
};

onMounted(() => {
  initEditor();
  // console.log(editorRef.value); // 使用ClientOnly时，editorRef.value为null
});
</script>

<style lang="less" scoped></style>
