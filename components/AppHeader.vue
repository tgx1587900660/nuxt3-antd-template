<template>
  <div :class="'mb-5 border-0 border-b-[4px] border-solid border-[#ccc] px-20'">
    <h1 :class="'flex justify-center text-[24px]'">
      <span>AppHeader 组件内容</span>
      <slot></slot>
    </h1>
    <div :class="'flex gap-5 pb-4'">
      <NuxtLink :to="'/'">页眉页脚</NuxtLink>
      <NuxtLink :to="'/antd'">ant-design-vue</NuxtLink>
      <NuxtLink :to="'/css-1'">css-1</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped></style>
