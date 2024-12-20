<template>
  <div>
    <AppHeader :title="'邮件发送功能'" :desc="'基于 nodemailer 实现'" />

    <div>
      <span>选择发送的方式「「」」</span>
      <a-button @click="onSend">发送</a-button>
    </div>

    <!-- <OptDrawer ref="drawerRef"></OptDrawer> -->
  </div>
</template>

<script lang="ts" setup>
// import OptDrawer from './OptDrawer.vue';

// const drawerRef = ref();
async function onSend() {
  // drawerRef.value?.open();

  const res = await $fetch('api/email/send', {
    method: 'post',
    body: { test: 123456 },
  });
  console.log('res :>> ', res);
}
</script>

<style lang="less" scoped></style>
