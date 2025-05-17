<script setup lang="ts"></script>

<template>
  <div class="html-demo-page h-[calc(100vh-100px)] w-full">
    <AppHeader :title="'颜色混合测试工具'" :desc="'测试颜色混合工具'"> </AppHeader>
    <HtmlRenderer allow-scripts local-file-path="/html/color-blend-tester.html" />
  </div>
</template>

<style scoped></style>
