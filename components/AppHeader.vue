<template>
  <div :class="'border-b-1 border-solid border-[#ccc] px-20'">
    <h1 :class="'flex justify-center text-[24px]'">
      <span>AppHeader 组件内容</span>
      <slot></slot>
    </h1>
    <div :class="'flex gap-5 pb-4'">
      <NuxtLink :to="'/'" title="测试layout组件">页眉页脚</NuxtLink>
      <NuxtLink :to="'/antd'" title="测试引入的ant-design-vue组件库">ant-design-vue</NuxtLink>
      <NuxtLink :to="'/demo-1'" title="提取照片的主要色值，并应用到任意元素渐变背景">demo-1</NuxtLink>
      <NuxtLink :to="'/demo-2'" title="使用纯css实现自定义单选框">demo-2</NuxtLink>
      <NuxtLink :to="'/demo-3'" title="依赖图片的尺寸大小不同，实现异形布局">demo-3</NuxtLink>
      <NuxtLink :to="'/demo-4'" title="Clipboard API - 实现自定义复制粘贴">demo-4</NuxtLink>
      <NuxtLink :to="'/demo-5'" title="等比缩放的容器盒子">demo-5</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped></style>
