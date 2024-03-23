<template>
  <div class="h-full w-full">
    <AppHeader />
    <div class="w-[960px] m-auto">
      <div class="flex gap-5">
        <div :class="'flex-1 shadow-lg shadow-blue-500/50 group overflow-hidden'">
          <img class="w-full object-cover transition-[transform] duration-300 group-hover:scale-105" :src="`https://picsum.photos/id/913/600/500?id=${Math.random()}`" alt="" />
        </div>
        <div :class="'flex-1 shadow-lg shadow-blue-500/50 group overflow-hidden'">
          <img class="w-full object-cover transition-[transform] duration-300 group-hover:scale-105" :src="`https://picsum.photos/id/421/600/500?id=${Math.random()}`" alt="" />
        </div>
      </div>

      <div class="flex gap-5 mt-5">
        <div :class="'flex-1 shadow-lg shadow-blue-500/50 group overflow-hidden'">
          <img class="w-full object-cover transition-[transform] duration-300 group-hover:scale-105" :src="`https://picsum.photos/id/894/600/500?id=${Math.random()}`" alt="" />
        </div>
        <div :class="'flex-1 shadow-lg shadow-blue-500/50 group overflow-hidden'">
          <img class="w-full object-cover transition-[transform] duration-300 group-hover:scale-105" :src="`https://picsum.photos/id/957/600/500?id=${Math.random()}`" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped></style>
