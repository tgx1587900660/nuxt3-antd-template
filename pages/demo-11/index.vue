<template>
  <div>
    <Demo11 />
  </div>
</template>

<script setup lang="ts">
import { seoDesc } from '~/config/seo';

useSeoMeta({
  title: `解决 transform: translate 的 hover 抖动问题 ${seoDesc.titleTemplate}`,
  description: `解决 transform: translate 的 hover 抖动问题 ${seoDesc.description}`,
});
</script>

<style lang="less" scoped></style>
