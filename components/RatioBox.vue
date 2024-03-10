<template>
  <div class="item">
    <div
      class="inner"
      :style="{
        paddingTop: paddingTop,
      }">
      <div class="content-box">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
type PropsType = {
  paddingTop?: string;
};

const props = withDefaults(defineProps<PropsType>(), {
  paddingTop: '75%',
});
</script>

<style lang="css" scoped>
.item .inner {
  width: 100%;
  height: 0;
  padding-top: 100%;
  position: relative;
}

.item .inner .content-box {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
