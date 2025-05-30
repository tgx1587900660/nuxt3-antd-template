<template>
  <div class="menu-wrapper">
    <NuxtLink
      class="tgx-menu tgx-menu-hover"
      :class="[
        {
          'tgx-menu-active': item.key === activeKey,
        },
      ]"
      v-for="(item, index) in items"
      :key="index"
      :to="item.to"
      @click="onClick(item)">
      <div :title="item.label" class="one-line-ellipsis">{{ item.label }}</div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
type Props = {
  items?: Array<{
    key: string;
    label: string;
    to: string;
    title?: string;
  }>;
};
const props = withDefaults(defineProps<Props>(), {
  items: () => [],
});

const route = useRoute();
const activeKey = ref('');
props.items.forEach((item) => {
  if (route.path === item.to) {
    activeKey.value = item.key;
  }
});

const onClick = (item: Record<string, string>) => {
  if (activeKey.value === item.key) {
    return;
  }
  activeKey.value = item.key;
};
</script>

<style lang="less" scoped>
.menu-wrapper {
  padding: 2px 6px;
  height: 100%;
  overflow: auto;
}
.tgx-menu {
  display: flex;
  align-items: center;
  padding: 0 10px;
  height: 40px;
  line-height: 40px;
  border-radius: 4px;
}
.tgx-menu + .tgx-menu {
  margin-top: 2px;
}
.tgx-menu-hover:hover {
  background-color: theme('colors.blue.hover');
}
.tgx-menu-active {
  background-color: theme('colors.blue.active');
  color: theme('colors.pink.default');
}
.tgx-menu-active:hover {
  background-color: theme('colors.blue.active');
}

a {
  color: #2d374b;
  text-decoration: none;
}

a:hover {
  color: theme('colors.pink.default');
  text-decoration: none;
}
</style>
