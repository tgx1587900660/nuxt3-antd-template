<template>
  <div>
    <AppHeader
      :title="'用 js 实现抛物线飞跃效果'"
      :desc="'原理是使用2个元素,父元素控制水平运动,子元素控制垂直运动,从而实现抛物线运动'">
    </AppHeader>

    <tgx-tab-list :list="list" @change="onChange"></tgx-tab-list>

    <hr />

    <Case1 v-if="activeTabKey === 'tab1'" />
    <Case2 v-if="activeTabKey === 'tab2'" />
  </div>
</template>

<script setup lang="ts">
import { seoDesc } from '~/config/seo';
import Case1 from './Case1.vue';
import Case2 from './Case2.vue';

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
