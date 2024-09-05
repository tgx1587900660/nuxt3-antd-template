<template>
  <div
    class="inline-block cursor-pointer rounded-lg border px-4 py-2 hover:bg-[#ed64a6] hover:text-[#fff]"
    :title="getDefault()">
    <slot>button</slot>
  </div>
</template>

<script setup lang="ts">
type SlotType = {
  default(props: {}): any;
};
const slots = defineSlots<SlotType>();
// console.log('slots :>> ', slots);

// 获取默认插槽的方法
const getDefault = () => {
  const defaultSlot = slots.default({});
  return defaultSlot[0]?.children || '';
};
</script>

<style lang="less" scoped></style>
