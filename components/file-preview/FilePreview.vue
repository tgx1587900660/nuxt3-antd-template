<template>
  <div class="file-preview">
    <PdfPreview :src="src" />
  </div>
</template>

<script setup lang="ts">
import PdfPreview from './PdfPreview.vue';
import { FileType } from './types';

type FilePreviewProps = {
  type: FileType;
  src: string;
};
withDefaults(defineProps<FilePreviewProps>(), {
  type: FileType.pdf,
  src: '',
});
</script>

<style lang="less" scoped></style>
