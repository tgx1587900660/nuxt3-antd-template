<template>
  <div>
    <a-extract-style>
      <NuxtLayout>
        <div class="opacity-40">
          <span> 测试 pinia + layout布局</span>
          <span> ----- </span>
          <span>{{ `layoutStore.layout: ${layoutStore.layout}` }}</span>
          <span> ----- </span>
          <span>{{ `layoutStore.count: ${layoutStore.count}` }} </span>&nbsp;
          <button @click="onClick">change layout and increment count</button>
          <hr />
        </div>
        <NuxtPage />
      </NuxtLayout>
    </a-extract-style>
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

// 在根组件中捕获错误，防止应用崩溃，返回 false
onErrorCaptured((err, instance, info) => {
  console.dir(err);
  console.log('instance :>> ', instance);
  console.log('info :>> ', info);
  return false;
});
</script>
