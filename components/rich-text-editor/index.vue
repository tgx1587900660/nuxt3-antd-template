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
    </div>
  </div>
</template>

<script lang="ts" setup>
import Demo1 from './demo1/index.vue';
import Demo2 from './demo2/index.vue';
import Demo3 from './demo3/index.vue';
import Demo4 from './demo4/index.vue';

const list = [
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
