<template>
  <div class="ck-editor-preview" v-html="contentText"></div>
</template>

<script lang="ts" setup>
// import '@/assets/style/ckeditor.css';

type PropsType = {
  contentText: string;
};
withDefaults(defineProps<PropsType>(), {
  contentText: '',
});
</script>

<style lang="less" scoped>
.ck-editor-preview {
  font-size: 16px;
  // color: #2d3541;
}
</style>
