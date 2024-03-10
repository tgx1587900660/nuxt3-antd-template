<template>
  <div>
    <AppHeader :title="'@nuxt/icon 图标测试'" :desc="'测试 @nuxt/icon'" />

    <div class="mb-4">
      <b>icon-font（刷新后会闪烁）: </b>
      <div class="flex gap-2 border border-solid border-pink-500">
        <icon-font type="icon-left-circle-fill" />
        <icon-font type="icon-check" />
      </div>
    </div>

    <div class="mb-4">
      <b>@nuxt/icon（解决闪烁问题）: </b>
      <div class="border border-solid border-pink-500">
        <p class="flex items-center gap-2">
          <Icon name="uil:github" size="18" class="text-pink-500" />
          <Icon name="NuxtLogo" size="18" class="text-[#80c]" />
          <Icon name="my-icon:like-fill" class="text-[skyblue]" />
          <Icon name="my-icon:close" class="text-[red]" />
          <Icon name="my-icon:spider" class="" />
        </p>

        <p class="mt-4 flex gap-2">
          <span>输入 icon 名称:</span>
          <a-input class="w-[200px]" v-model:value="inputIcon" />
          <span>来源:</span>
          <a href="https://icones.js.org/collection/all?s=uil:" class="underline" target="_blank">icones.js.org</a>
        </p>
        <p class="flex items-center gap-2">
          <span>当前 icon 名称: {{ inputIcon }}</span>
          <Icon :name="inputIcon" />
          <Icon :name="inputIcon" size="24" />
          <Icon :name="inputIcon" size="48" class="text-[#ccc]" />
        </p>
        <div class="flex items-center gap-2">
          <span>全局注册组件:（从components/global/里面取）</span>
          <Icon name="NuxtLogo" />
          <Icon name="NuxtLogo" size="24" />
        </div>
        <p>Render function: <MyIcon /></p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Icon } from '#components';

const inputIcon = ref('uil:github');

const MyIcon = h(Icon, { name: 'my-icon:close' });

useHead({
  title: '@nuxt/icon 图标测试',
  meta: [{ name: 'description', content: '测试 @nuxt/icon' }],
});
</script>

<style lang="less" scoped></style>
