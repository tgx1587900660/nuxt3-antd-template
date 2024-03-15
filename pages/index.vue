<template>
  <div>
    <AppHeader />
    <h1>Welcome to the homepage</h1>
    <AppAlert> This is an auto-imported component </AppAlert>

    <hr :class="''" />
    ------------ 测试 tailwindcss ------------
    <h1 class="text-3xl font-bold underline">Hello world!</h1>
    ------------ 测试 tailwindcss ------------
    <hr />

    <AppFooter />
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped></style>
