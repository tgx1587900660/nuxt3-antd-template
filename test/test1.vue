<template>
  <div class="box">
    <div class="imgs">展示选中的一张大图</div>

    <!-- 一个图片列表，有左右箭头，要求左右箭头要在能滚动时才显示 -->
    <div class="list-scroll" v-if="!refresh">
      <div class="list-box">
        <div class="left-arrow"></div>
        <div class="right-arrow"></div>
        <div class="img-item" data-index="first">img</div>
        <div class="img-item">img</div>
        <div class="img-item">img</div>
        <div class="img-item">img</div>
        <div class="img-item">img</div>
        <div class="img-item" data-index="first">img</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

const refresh = ref(false);
function onRefresh() {
  refresh.value = true;
  nextTick(() => {
    refresh.value = false;
  });
}

// 要做的是： 观察第一张和最后一张是否完全显示，然后按需隐藏左右箭头
const scrollRef = ref();
function initObserver() {
  // const observer = new IntersectionObserver((entries) => {
  //   entries.forEach((entry) => {
  //     // ......
  //   });
  // });
  // 观察首尾 img-item
  // arr.forEach((element) => {
  //   observer.observe(element);
  // });
}
onMounted(() => {
  initObserver();
});
</script>

<style lang="css" scoped>
.box {
  min-height: 2000px;
  background-color: aqua;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
