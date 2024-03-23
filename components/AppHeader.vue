<template>
  <div :class="'border-0 border-b-[4px] border-solid border-[#ccc] px-20 mb-5'">
    <h1 :class="'flex justify-center text-[24px]'">AppHeader 组件内容</h1>
    <div :class="'flex gap-5 pb-4'">
      <NuxtLink :to="'/'">页眉页脚</NuxtLink>
      <NuxtLink :to="'/antd'">ant-design-vue</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped></style>
