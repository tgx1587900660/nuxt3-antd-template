<template>
  <div :class="'h-full w-full'">
    <AppHeader>(Default-layout)</AppHeader>

    <slot></slot>

    <AppFooter>(Default-layout)</AppFooter>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped></style>
