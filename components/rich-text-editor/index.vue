<template>
  <div>
    <AppHeader :title="'富文本编辑器'" :desc="'富文本编辑器，使用ckeditor5'"></AppHeader>

    <div class="p-4">
      <tgx-button @click="insertText">插入文本</tgx-button>
      <ClientOnly>
        <ck-editor ref="ckEditorRef" />
      </ClientOnly>
    </div>
  </div>
</template>

<script lang="ts" setup>
const ckEditorRef = useTemplateRef('ckEditorRef');

const insertText = () => {
  ckEditorRef.value?.insertText();
};

useHead({
  title: 'ckeditor5 富文本编辑器测试',
  meta: [{ name: 'description', content: 'ckeditor5 富文本编辑器测试' }],
});
</script>

<style lang="less" scoped></style>
