<template>
  <div :class="'h-full w-full'">
    测试 首页+自动导入组件 ------------
    <div>Welcome to the homepage</div>
    <AppAlert> This is an auto-imported component </AppAlert>

    <hr />
    测试 tailwindcss ------------
    <div class="bg-[pink] font-bold text-[deeppink] underline">Hello world!</div>
    <div class="text-[#ff0000]">Hello world!</div>
    <div class="text-[skyblue]">Hello world!</div>

    <hr />
    测试 env智能提示导入 ------------
    <div>
      <div>import.meta.env.VITE_APP_NAME ---- {{ appName }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
const appName = import.meta.env.VITE_APP_NAME;
</script>

<style lang="less" scoped></style>
