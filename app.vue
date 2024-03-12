<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
const a = import.meta.env.VITE_APP_NAME // 把这个ts报错解决了
console.log('a :>> ', a)
console.log('import.meta :>> ', import.meta)
</script>
