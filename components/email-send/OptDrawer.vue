<template>
  <a-drawer v-model:open="isShow" width="600" title="配置">
    <template #extra>
      <a-button style="margin-right: 8px" @click="onClose">Cancel</a-button>
      <a-button type="primary" @click="onSubmit">Submit</a-button>
    </template>
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </a-drawer>
</template>

<script lang="ts" setup>
const isShow = ref(false);
function open() {
  console.log('open');
  isShow.value = true;
}

function onClose() {
  isShow.value = false;
}

async function onSubmit() {
  const res = await $fetch('api/email/send', {
    method: 'post',
    body: { test: 123456 },
  });
  console.log('res :>> ', res);
}

defineExpose({
  open,
});
</script>

<style lang="less" scoped></style>
