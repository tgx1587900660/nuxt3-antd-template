<template>
  <div>
    <NuxtLayout :name="layoutStore.layout">
      ------------ 测试 pinia + layout布局 ------------
      <div>{{ `layoutStore.layout: ${layoutStore.layout}` }} <br />{{ `layoutStore.count: ${layoutStore.count}` }}</div>
      <button @click="onClick">change layout and increment count</button>
      <hr />

      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { Layouts, useLayout } from '~/store';
const layoutStore = useLayout(); // 不要解构，否则会导致无法响应式

// 点击事件动态切换布局
function onClick() {
  if (layoutStore.layout === Layouts.Custom) {
    layoutStore.set(Layouts.Default);
  } else {
    layoutStore.set(Layouts.Custom);
  }
  layoutStore.increment();
}
</script>
