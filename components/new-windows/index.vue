<template>
  <div>
    <AppHeader
      :title="'浏览器新开小窗口 tab'"
      :desc="'使用 window.open 方法实现，可以防止窗口抖动，以增强用户体验，比如分享功能'">
    </AppHeader>

    <div class="flex items-center gap-1 p-5">
      <span>1. 当前页弹出 popup 窗口</span>
      <a-button type="primary" @click="onClick1"> click to open </a-button>
    </div>

    <div class="flex items-center gap-1 p-5">
      <span>2. 当前页弹出 popup 窗口，设置大小和位置</span>
      <a-button type="primary" @click="onClick2"> click to open </a-button>
    </div>

    <div class="flex items-center gap-1 p-5">
      <span>3. 当前页弹出 popup 窗口，自由写入内容</span>
      <a-button type="primary" @click="onClick3"> click to open </a-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { seoDesc } from '~/config/seo';

const url = 'https://nuxt3-antd-template.vercel.app/';
const title = 'nuxt3-antd-template';
const link = `https://www.facebook.com/sharer.php?u=${url}&t=${title}`;

const onClick1 = () => {
  window.open(link, 'shareTab', 'popup');
};

const onClick2 = () => {
  window.open(link, 'shareTab', 'left=400,top=100,width=800,height=450');
};

const onClick3 = () => {
  const win = window.open('', 'shareTab', 'left=400,top=100,width=800,height=450');
  if (win) {
    win.document.write(`<h1>hello world</h1>`);
    win.document.write(`<a href="${link}">click to open</a>`);
    win.document.close();
  }
};

useSeoMeta({
  title: `浏览器新开小窗口 ${seoDesc.titleTemplate}`,
  description: `浏览器新开小窗口 ${seoDesc.description}`,
});
</script>

<style lang="less" scoped></style>
