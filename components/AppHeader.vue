<template>
  <div :class="'border-0 border-b-[4px] border-solid border-[#ccc] px-20 mb-5'">
    <h1 :class="'flex justify-center text-[24px]'">AppHeader 组件内容</h1>
    <ul :class="'flex gap-5'">
      <li>
        <NuxtLink :to="'/'">页眉页脚</NuxtLink>
      </li>
      <li>
        <NuxtLink :to="'/test1'">ant-design-vue</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped></style>
