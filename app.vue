<template>
  <a-extract-style>
    <NuxtLayout>
      <div class="flex">
        <div
          class="menu sticky left-0 top-0 h-[100vh] w-[250px] border-0 border-r border-solid border-[rgba(0,0,0,0.16)]">
          <TgxMenu :items="items"></TgxMenu>
        </div>

        <div class="w-[calc(100%-250px)] flex-1">
          <NuxtPage />
        </div>
      </div>
    </NuxtLayout>
  </a-extract-style>
</template>

<script setup lang="ts">
const items = [
  { key: '/', label: '测试 nuxt ', to: '/' },
  { key: '/antd', label: '测试 ant-design-vue', to: '/antd' },
  { key: '/demo-1', label: '提取图片的主色调', to: '/demo-1' },
  { key: '/demo-2', label: '自定义单选框样式', to: '/demo-2' },
  { key: '/demo-3', label: '图片异形布局', to: '/demo-3' },
  { key: '/demo-4', label: '复制粘贴', to: '/demo-4' },
  { key: '/demo-5', label: '等比缩放的盒子', to: '/demo-5' },
  { key: '/demo-6', label: '在线预览 pdf', to: '/demo-6' },
  { key: '/demo-7', label: '在线预览 docx', to: '/demo-7' },
  { key: '/demo-8', label: '浏览器小窗口新开 tab', to: '/demo-8' },
  { key: '/demo-9', label: '数字滚动效果', to: '/demo-9' },
  { key: '/demo-10', label: '抛物线飞跃效果（TODO...）', to: '/demo-10' },
  { key: '/demo-11', label: 'hover 抖动问题', to: '/demo-11' },
  { key: '/demo-12', label: '视频播放插件', to: '/demo-12' },
  { key: '/demo-13', label: '富文本编辑器', to: '/demo-13' },
  { key: '/demo-14', label: '邮件发送功能', to: '/demo-14' },
];

// 设置SEO
useSeoMeta({
  title: 'tgx-nuxt-project',
  description: '一个简单的 nuxt3 模板项目, 测评各种 npm 包, 插件, 制作各种前端效果, 以便在千变万化的需求中快速完成工作',
});

// 在根组件中捕获错误，防止应用崩溃，返回 false
onErrorCaptured((err: unknown, instance: ComponentPublicInstance | null, info: string) => {
  console.error(err);
  console.log('instance :>> ', instance);
  console.log('info :>> ', info);
  return false;
});
</script>

<style scoped lang="css"></style>
