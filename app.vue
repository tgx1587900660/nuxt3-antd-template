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
  { key: '/demo-4', label: '自定义复制粘贴', to: '/demo-4' },
  { key: '/demo-5', label: '等比缩放的容器盒子', to: '/demo-5' },
  { key: '/demo-6', label: 'pdf 在线预览', to: '/demo-6' },
  { key: '/demo-7', label: 'docx 在线预览', to: '/demo-7' },
  { key: '/demo-8', label: '浏览器小窗口新开 tab', to: '/demo-8' },
  { key: '/demo-9', label: '数字滚动效果', to: '/demo-9' },
  { key: '/demo-10', label: '抛物线飞跃特效（TODO...）', to: '/demo-10' },
  { key: '/demo-11', label: '解决 transform 抖动问题', to: '/demo-11' },

  // { key: 'app2', label: 'Navigation Two2', title: 'Navigation Two2' },
  // { key: 'test3', label: '测试页3', title: '测试页3' },
  // { key: 'app3', label: 'Navigation Two3', title: 'Navigation Two3' },
  // { key: 'test4', label: '测试页4', title: '测试页4' },
  // { key: 'app4', label: 'Navigation Two4', title: 'Navigation Two4' },
  // { key: 'test5', label: '测试页5', title: '测试页5' },
  // { key: 'app5', label: 'Navigation Two5', title: 'Navigation Two5' },
  // { key: 'test6', label: '测试页6', title: '测试页6' },
  // { key: 'app6', label: 'Navigation Two6', title: 'Navigation Two6' },
  // { key: 'test7', label: '测试页7', title: '测试页7' },
  // { key: 'app7', label: 'Navigation Two7', title: 'Navigation Two7' },
  // { key: 'test8', label: '测试页8', title: '测试页8' },
  // { key: 'app8', label: 'Navigation Two8', title: 'Navigation Two8' },
  // { key: 'test9', label: '测试页9', title: '测试页9' },
  // { key: 'app9', label: 'Navigation Two9', title: 'Navigation Two9' },
  // { key: 'test10', label: '测试页10', title: '测试页10' },
  // { key: 'app10', label: 'Navigation Two10', title: 'Navigation Two10' },
  // { key: 'test11', label: '测试页11', title: '测试页11' },
  // { key: 'app11', label: 'Navigation Two11', title: 'Navigation Two11' },
  // { key: 'test12', label: '测试页12', title: '测试页12' },
  // { key: 'app12', label: 'Navigation Two12', title: 'Navigation Two12' },
  // { key: 'test13', label: '测试页13', title: '测试页13' },
  // { key: 'app13', label: 'Navigation Two13', title: 'Navigation Two13' },
  // { key: 'test14', label: '测试页14', title: '测试页14' },
  // { key: 'app14', label: 'Navigation Two14', title: 'Navigation Two14' },
  // { key: 'test15', label: '测试页15', title: '测试页15' },
  // { key: 'app15', label: 'Navigation Two15', title: 'Navigation Two15' },
  // { key: 'test16', label: '测试页16', title: '测试页16' },
  // { key: 'app16', label: 'Navigation Two16', title: 'Navigation Two16' },
  // { key: 'test17', label: '测试页17', title: '测试页17' },
  // { key: 'app17', label: 'Navigation Two17', title: 'Navigation Two17' },
  // { key: 'test18', label: '测试页18', title: '测试页18' },
  // { key: 'app18', label: 'Navigation Two18', title: 'Navigation Two18' },
  // { key: 'test19', label: '测试页19', title: '测试页19' },
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
