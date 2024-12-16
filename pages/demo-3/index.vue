<template>
  <div>
    <AppHeader :title="'图片异形布局'" :desc="'使用 flex 布局实现, 依赖图片的长宽比'"> </AppHeader>

    <div class="m-8 flex justify-between gap-5">
      <div class="flex flex-[1_1_0] flex-col justify-center">
        <div class="content-box flex flex-col justify-center gap-5">
          <img class="w-full" :src="`https://picsum.photos/500/300?r=1`" alt="" />
          <img class="w-full" :src="`https://picsum.photos/400/500?t=1`" alt="" />
        </div>
      </div>
      <div class="flex flex-[1_1_0] flex-col justify-center">
        <div class="content-box flex flex-col justify-center gap-5">
          <img class="w-full" :src="`https://picsum.photos/300/400?r=1`" alt="" />
          <img class="w-full" :src="`https://picsum.photos/400/380?t=1`" alt="" />
        </div>
      </div>
      <div class="flex flex-[1_1_0] flex-col justify-center">
        <div class="content-box flex flex-col justify-center gap-5">
          <img class="w-full" :src="`https://picsum.photos/400/300?r=1`" alt="" />
          <img class="w-full" :src="`https://picsum.photos/400/370?t=1`" alt="" />
        </div>
      </div>
      <div class="flex flex-[1_1_0] flex-col justify-center">
        <div class="content-box flex flex-col justify-center gap-5">
          <img class="w-full" :src="`https://picsum.photos/400/500?r=1`" alt="" />
          <img class="w-full" :src="`https://picsum.photos/400/400?t=1`" alt="" />
        </div>
      </div>
      <div class="flex flex-[1_1_0] flex-col justify-center">
        <div class="content-box flex flex-col justify-center gap-5">
          <img class="w-full" :src="`https://picsum.photos/400/250?r=1`" alt="" />
          <img class="w-full" :src="`https://picsum.photos/700/400?t=1`" alt="" />
        </div>
      </div>
      <div class="flex flex-[1_1_0] flex-col justify-center">
        <div class="content-box flex flex-col justify-center gap-5">
          <img class="w-full" :src="`https://picsum.photos/400/260?r=1`" alt="" />
          <img class="w-full" :src="`https://picsum.photos/600/400?t=1`" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { seoDesc } from '@/config/seo';

useSeoMeta({
  title: `图片异形布局 ${seoDesc.titleTemplate}`,
  description: `图片异形布局 ${seoDesc.description}`,
});
</script>

<style lang="css" scoped>
.content-box img {
  box-shadow: 0 0 3px #0008;
  border-radius: 8px;
}
</style>
