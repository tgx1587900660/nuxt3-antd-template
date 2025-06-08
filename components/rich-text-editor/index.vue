<template>
  <div>
    <AppHeader :title="'富文本编辑器'" :desc="'富文本编辑器，使用ckeditor5'"></AppHeader>

    <div class="p-4">
      <tgx-tab-list :list="list" @change="onChange"></tgx-tab-list>
      <hr />

      <Demo1 v-if="activeTabKey === 'demo1'" />
      <Demo2 v-if="activeTabKey === 'demo2'" />
      <Demo3 v-if="activeTabKey === 'demo3'" />
      <Demo4 v-if="activeTabKey === 'demo4'" />
      <Demo5 v-if="activeTabKey === 'demo5'" />
      <Demo6 v-if="activeTabKey === 'demo6'" />
      <Demo7 v-if="activeTabKey === 'demo7'" />
      <Demo8 v-if="activeTabKey === 'demo8'" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Demo1 from './demo1/index.vue';
import Demo2 from './demo2/index.vue';
import Demo3 from './demo3/index.vue';
import Demo4 from './demo4/index.vue';
import Demo5 from './demo5/index.vue';
import Demo6 from './demo6/index.vue';
import Demo7 from './demo7/index.vue';
import Demo8 from './demo8/index.vue';

const list = [
  { key: 'demo8', label: 'demo8' },
  { key: 'demo7', label: 'demo7' },
  { key: 'demo6', label: 'demo6' },
  { key: 'demo5', label: 'demo5' },
  { key: 'demo4', label: 'demo4' },
  { key: 'demo3', label: 'demo3' },
  { key: 'demo2', label: 'demo2' },
  { key: 'demo1', label: 'demo1' },
];

const activeTabKey = ref(list[0].key);
const onChange = (key: string) => {
  // console.log('key :>> ', key);
  activeTabKey.value = key;
};

useHead({
  title: 'ckeditor5 富文本编辑器测试',
  meta: [{ name: 'description', content: 'ckeditor5 富文本编辑器测试' }],
});
</script>

<style lang="less" scoped></style>
