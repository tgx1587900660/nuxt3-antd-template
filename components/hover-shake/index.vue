<template>
  <div class="">
    <AppHeader :title="'解决 transform: translate 的 hover 抖动问题'" :desc="'主要思路是在外层包裹一层 div'">
    </AppHeader>

    <div class="mt-6 flex gap-4 p-4">
      <!-- 有 hover 抖动问题 -->
      <div class="flex-1">
        <div class="text-center">有 hover 抖动问题</div>
        <div class="flex min-h-[400px] items-center justify-center bg-[#f2f2f2]">
          <div class="card flex h-[200px] w-[200px] items-center justify-center rounded border border-solid bg-[#ccc]">
            card
          </div>
        </div>
      </div>

      <!-- 无 hover 抖动问题 -->
      <div class="flex-1">
        <div class="text-center">修复后：无 hover 抖动问题</div>
        <div class="flex min-h-[400px] items-center justify-center bg-[#f2f2f2]">
          <div class="card-wrapper">
            <div
              class="card-content flex h-[200px] w-[200px] items-center justify-center rounded border border-solid bg-[#ccc]">
              card
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { seoDesc } from '~/config/seo';

useSeoMeta({
  title: `解决 transform: translate 的 hover 抖动问题 ${seoDesc.titleTemplate}`,
  description: `解决 transform: translate 的 hover 抖动问题 ${seoDesc.description}`,
});
</script>

<style lang="less" scoped>
// 有 hover 抖动问题
.card {
  transition-duration: 0.1s;
  transition-property: box-shadow, transform;
  &:hover {
    transform: translateY(-16px);
    box-shadow: 0 0 16px 8px rgba(0, 0, 0, 0.1);
  }
}

// 无 hover 抖动问题
.card-wrapper {
  .card-content {
    transition-duration: 0.1s;
    transition-property: box-shadow, transform;
  }
  &:hover .card-content {
    transform: translateY(-16px);
    box-shadow: 0 0 16px 8px rgba(0, 0, 0, 0.1);
  }
}
</style>
