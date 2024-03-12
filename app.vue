<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
const a = import.meta.env.VITE_APP_NAME
console.log('a :>> ', a)
console.log('import.meta :>> ', import.meta)
</script>
