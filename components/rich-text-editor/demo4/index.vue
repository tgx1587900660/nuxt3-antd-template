<template>
  <div class="space-y-4">
    <h1 class="text-xl font-bold">demo4: 初步使用 CKEditor5 的插件功能</h1>
    <!-- TODO 测试控制面板 -->
    <div class="flex gap-2">
      <!-- <button
        @click="insertTextToEnd"
        class="text-white cursor-pointer rounded border-none bg-blue-500 px-4 py-2 text-[#fff] outline-none">
        插入文本到末尾
      </button> -->
    </div>
    <!-- 编辑器组件 -->
    <ClientOnly>
      <CkEditor4 />
    </ClientOnly>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
// 样式
</style>
