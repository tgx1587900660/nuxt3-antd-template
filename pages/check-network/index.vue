<template>
  <div class="check-network">
    <AppHeader title="检查网络状态" desc="使用事件监听器检查网络状态" />
    <div class="check-network-content">
      <div class="check-network-item">
        <h1>使用 online/offline 事件监听器检查当前网络状态:</h1>
        <div class="text-2xl text-[deeppink]">{{ isOnline ? '在线' : '离线' }}</div>
      </div>
      <div class="check-network-item">
        <h1>
          使用 navigator.onLine 检查当前网络状态【需要用户手动触发】: <tgx-button @click="checkOnline">检查</tgx-button>
        </h1>
        <div class="text-2xl text-[deeppink]">{{ isNavigatorOnline ? '在线' : '离线' }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isOnline = ref(true);

useEventListener(window, 'online', () => {
  isOnline.value = true;
});
useEventListener(window, 'offline', () => {
  isOnline.value = false;
});

const isNavigatorOnline = ref(true);
const checkOnline = () => {
  isNavigatorOnline.value = navigator.onLine;
};

useHead({
  title: '检查网络状态',
  meta: [{ name: 'description', content: '使用事件监听器检查网络状态' }],
});
</script>

<style lang="less" scoped></style>
