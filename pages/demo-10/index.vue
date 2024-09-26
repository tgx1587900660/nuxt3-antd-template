npm i gsap
<template>
  <div>
    <AppHeader :title="'gsap 动画库使用'" :desc="'使用 gsap 库制作动画效果'"> </AppHeader>

    <tgx-tab-list class="px-3 py-2" :list="list" @change="onChange"></tgx-tab-list>

    <hr />

    <CaseOne v-if="activeTabKey === 'tab1'" />
    <CaseTwo v-if="activeTabKey === 'tab2'" />
  </div>
</template>

<script setup lang="ts">
import CaseOne from '~/components/demo-10/Case1.vue';
import CaseTwo from '~/components/demo-10/Case2.vue';

const list = [
  {
    key: 'tab1',
    label: 'tab1',
  },
  {
    key: 'tab2',
    label: 'tab2',
  },
];

const activeTabKey = ref(list[0].key);
const onChange = (key: string) => {
  console.log('key :>> ', key);
  activeTabKey.value = key;
};
</script>

<style lang="less" scoped></style>
