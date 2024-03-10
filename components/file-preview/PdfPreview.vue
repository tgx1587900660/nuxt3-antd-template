<template>
  <div class="pdf-preview">pdf-preview</div>
</template>

<script setup lang="ts">
type PropsType = {
  src: string;
};
const props = withDefaults(defineProps<PropsType>(), {});
console.log(props);
</script>

<style lang="less" scoped></style>
