<template>
  <div :class="'footer-box sticky bottom-0 left-0 z-10 border border-solid border-[#ccc] bg-[lightblue] px-20'">
    <h1 :class="'flex justify-center text-[24px]'">
      <span>AppFooter 组件内容</span>
      <slot></slot>
    </h1>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped></style>
