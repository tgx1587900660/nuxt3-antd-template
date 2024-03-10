<template>
  <div class="html-demo-page h-[calc(100vh-100px)] w-full">
    <AppHeader :title="'2048 游戏'" :desc="'2048 游戏,TailwindCSS 实现'"> </AppHeader>
    <HtmlRenderer local-file-path="/html/2048_game_tailwind.html" />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
