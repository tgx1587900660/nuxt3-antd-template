<template>
  <div>
    <AppHeader :title="'邮件发送功能'" :desc="'基于 nodemailer 实现'" />

    <div class="flex items-center gap-2 p-4">
      <a-button @click="onConfig">配置</a-button>
      <a-button type="primary" @click="onSend">发送</a-button>
    </div>

    <OptDrawer ref="drawerRef"></OptDrawer>
  </div>
</template>

<script lang="ts" setup>
import OptDrawer from './OptDrawer.vue';

async function onSend() {
  const res: any = await $fetch('api/email/send', {
    method: 'post',
    body: { test: 123456 },
  });
  console.log('res :>> ', res);
  if (res.code === 200) {
    message.success(res.message);
  } else {
    message.error(res.message);
  }
}

const drawerRef = useTemplateRef('drawerRef');
function onConfig() {
  drawerRef.value?.open();
}
</script>

<style lang="less" scoped></style>
