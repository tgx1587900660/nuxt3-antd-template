<template>
  <div class="home-content">
    <AppHeader :title="'测试 nuxt 自动导入组件 + tailwind + 环境变量'" :show-preText="false"> </AppHeader>

    <div class="mb-4 bg-pink-200 p-3">
      <span>测试首页：这里是 pages/index.vue 组件的内容 </span>
    </div>

    <AppAlert>测试自动导入组件： 这里是组件 AppAlert.vue 的内容 </AppAlert>

    <hr />

    <div class="bg-green-200 mb-4 p-4">
      <div>测试 tailwindcss, 以下是测试代码的样式设置：</div>
      <div class="bg-[pink] font-bold text-[deeppink] underline">Hello world!</div>
      <div class="text-[#ff0000]">Hello world!</div>
      <div class="text-[skyblue]">Hello world!</div>
    </div>

    <div class="mb-4 border border-x-0 border-solid border-[#e0e0e0] bg-[#fefefe] p-3">
      <div>测试 env 智能提示导入</div>
      <div class="mt-4 bg-[#c0ffee] p-3">
        <div>
          <b>VITE_APP_NAME</b> 的值是：<strong class="font-bold">{{ appName }}</strong>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const appName = import.meta.env.VITE_APP_NAME;
</script>

<style lang="less" scoped></style>
