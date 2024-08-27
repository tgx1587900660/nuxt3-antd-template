<template>
  <div>
    <AppHeader
      :title="'等比缩放的盒子，适应不同宽度的设备，支持服务端渲染'"
      :desc="'使用 等比缩放的盒子 + 媒体查询 + css变量实现'">
    </AppHeader>

    <div class="m-auto max-w-[1400px] p-5">
      <div class="items flex flex-wrap gap-3 bg-pink-200">
        <RatioBox
          v-for="(item, index) in 8"
          :key="index"
          :style="{
            width: `calc(100% / var(--w) - var(--gap)*(var(--w) - 1)/var(--w))`,
          }">
          <div class="h-full w-full overflow-hidden">
            <img class="h-full w-full object-cover" src="./test.jpeg" alt="" />
          </div>
        </RatioBox>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.items {
  --gap: 12px;
  --w: 1;
  @media screen and (min-width: 768px) {
    --w: 2;
  }
  @media screen and (min-width: 992px) {
    --w: 3;
  }
  @media screen and (min-width: 1200px) {
    --w: 4;
  }
}
</style>
