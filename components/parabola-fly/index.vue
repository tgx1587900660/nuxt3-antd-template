<template>
  <div>
    <AppHeader :title="'用 js 实现抛物线飞跃效果（TODO...）'" :desc="'使用 js 实现一个抛物线飞跃效果'"> </AppHeader>

    <tgx-tab-list class="px-3 py-2" :list="list" @change="onChange"></tgx-tab-list>

    <hr />

    <CaseOne v-if="activeTabKey === 'tab1'" />
    <CaseTwo v-if="activeTabKey === 'tab2'" />
  </div>
</template>

<script setup lang="ts">
import { seoDesc } from '~/config/seo';
import CaseOne from './Case1.vue';
import CaseTwo from './Case2.vue';

const list = [
  { key: 'tab1', label: 'tab1' },
  { key: 'tab2', label: 'tab2' },
];

const activeTabKey = ref(list[0].key);
const onChange = (key: string) => {
  console.log('key :>> ', key);
  activeTabKey.value = key;
};

useSeoMeta({
  title: `实现抛物线飞跃效果 ${seoDesc.titleTemplate}`,
  description: `实现抛物线飞跃效果 ${seoDesc.description}`,
});
</script>

<style lang="less" scoped></style>
