<template>
  <div class="border-0 border-b border-solid border-[#ccc] px-4 py-3">
    <div class="flex items-center text-2xl font-bold">
      <slot name="title">
        {{ title }}
      </slot>
    </div>
    <div class="mt-2 text-base">
      <span class="text-gray-500 text-[deeppink]" v-if="showPreText">实现方式：</span>
      <span>{{ desc }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
type PropsType = {
  title: string;
  desc?: string;
  showPreText?: boolean;
};
const props = withDefaults(defineProps<PropsType>(), {
  title: '',
  desc: '',
  showPreText: true,
});
</script>

<style lang="less" scoped></style>
