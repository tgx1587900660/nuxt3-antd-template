<template>
  <div :class="'mb-5 border-0 border-b-[4px] border-solid border-[#ccc] px-20'">
    <h1 :class="'flex justify-center text-[24px]'">
      <span>AppHeader 组件内容</span>
      <slot></slot>
    </h1>
    <div :class="'flex gap-5 pb-4'">
      <NuxtLink :to="'/'">页眉页脚</NuxtLink>
      <NuxtLink :to="'/antd'">ant-design-vue</NuxtLink>
      <NuxtLink :to="'/css-1'" title="提取照片的主要色值并应用到任意元素渐变背景">css-1</NuxtLink>
      <NuxtLink :to="'/css-2'" title="使用纯css实现自定义单选框">css-2</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped></style>
