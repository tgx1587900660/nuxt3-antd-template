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
  { key: '/', label: '测试 nuxt 自动导入组件 + tailwind + 环境变量', to: '/' },
  { key: '/antd', label: '测试 ant-design-vue', to: '/antd' },
  { key: '/nuxt-icon', label: '测试 @nuxt/icon', to: '/nuxt-icon' },
  { key: '/colorthief', label: '提取图片主色调', to: '/colorthief' },
  { key: '/radio-style', label: '自定义单选框样式', to: '/radio-style' },
  { key: '/alien-layout', label: '图片异形布局', to: '/alien-layout' },
  { key: '/copy', label: '复制粘贴 API', to: '/copy' },
  { key: '/ratio-box-test', label: '等比缩放的盒子', to: '/ratio-box-test' },
  { key: '/pdf-view', label: '在线预览 pdf', to: '/pdf-view' },
  { key: '/docx-view', label: '在线预览 docx', to: '/docx-view' },
  { key: '/new-windows', label: '浏览器小窗口新开 tab', to: '/new-windows' },
  { key: '/number-scroll', label: '数字滚动效果', to: '/number-scroll' },
  { key: '/hover-shake', label: '元素 hover 抖动问题', to: '/hover-shake' },
  { key: '/rich-text-editor', label: '富文本编辑器', to: '/rich-text-editor' },
  { key: '/email-send', label: '邮件发送功能', to: '/email-send' },
  { key: '/video-keyframes', label: '获取视频关键帧', to: '/video-keyframes' },
  { key: '/lrc-scroll', label: '歌词滚动效果', to: '/lrc-scroll' },
  { key: '/parabola-fly', label: '抛物线飞跃效果', to: '/parabola-fly' },
  { key: '/check-network', label: '检查网络状态', to: '/check-network' },
];

// 设置SEO
useSeoMeta({
  title: 'tgx-nuxt-project',
  description: '一个简单的 nuxt3 模板项目, 测评各种 npm 包, 插件, 制作各种前端效果',
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
