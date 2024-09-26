<template>
  <div class="tgx-tab-list">
    <div class="flex gap-2">
      <div
        v-for="item in list"
        :key="item.key"
        class="tab cursor-pointer rounded-lg border border-solid border-[rgba(0,0,0,0.1)] px-4 py-1"
        :class="[{ 'tab-active': item.key == active }]"
        @click="changeTab(item)">
        {{ item.label }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
type ListItem = {
  key: string;
  label: string;
};
type PropsType = {
  list: ListItem[];
};
const props = withDefaults(defineProps<PropsType>(), {
  list: () => [],
});
type EmitsType = {
  (e: 'change', key: string, item: any): void;
};
const emits = defineEmits<EmitsType>();

const active = ref(props.list[0]?.key || '');
const changeTab = (item: any) => {
  active.value = item.key;
  emits('change', item.key, item);
};
</script>

<style lang="less" scoped>
.tab-active {
  color: theme('colors.pink.400');
  background-color: azure;
}
</style>
