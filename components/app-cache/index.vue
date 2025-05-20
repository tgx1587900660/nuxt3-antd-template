<template>
  <div class="app-cache">
    <AppHeader title="应用缓存" desc="应用缓存，给网站添加离线缓存功能" />

    <div>
      <tgx-button @click="init">点击加载</tgx-button>
    </div>
  </div>
</template>

<script setup lang="ts">
const content = ref('');

// 读取 index.html 显示到content中
async function init() {
  try {
    // 从服务器API获取当前文件夹中的index.html
    const { data: htmlContent } = await useFetch('/api/app-cache/read-html-file', {
      query: {
        path: '/app-cache.html', // 相对于项目根目录的路径
      },
    });
    console.log('htmlContent.value :>> ', htmlContent.value);
    if (htmlContent.value) {
      content.value = htmlContent.value as string;
      const win = window.open('', 'shareTab', 'left=400,top=100,width=800,height=450');
      if (win) {
        win.document.write(content.value);
        win.document.close();
      }
    }
  } catch (error) {
    console.error('获取index.html文件失败:', error);
  }
}

useHead({
  titleTemplate: '应用缓存',
});
</script>

<style lang="less" scoped></style>
