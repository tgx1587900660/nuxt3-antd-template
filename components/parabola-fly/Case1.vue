<template>
  <div id="container-box" class="case-one relative bg-blue-300/25 p-5" @click="onClick">
    <div id="flyItem" class="fly-item absolute left-0 top-0 z-10" @transitionend="onTransitionEnd">
      <span class="block h-5 w-5 bg-pink-600"></span>
    </div>

    <div class="pt-10">
      <a-button type="primary" id="btnCart">开始位置</a-button>
    </div>

    <span class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[24px] text-pink-400">
      点击这个容器
    </span>

    <div class="mt-[400px] flex justify-end">
      <a-button type="primary" id="shopCart">结束位置</a-button>
    </div>
  </div>
</template>

<script setup lang="ts">
const doms = reactive<Record<string, HTMLElement | null>>({
  eleBtn: null,
  eleCart: null,
  eleFlyItem: null,
  wrapperEl: null,
});

/**
 * 点击
 */
let isRunning = false;
const onClick = () => {
  console.log('点击了容器');
  if (!doms.eleBtn || !doms.eleFlyItem || !doms.eleCart || !doms.wrapperEl) {
    return;
  }

  // 现在按钮距离购物车的距离
  const boundBtn = doms.eleBtn.getBoundingClientRect();
  const boundCart = doms.eleCart.getBoundingClientRect();
  // 初始位置的两个元素的中心点的水平/垂直距离
  const offsetX = boundCart.left + boundCart.width / 2 - (boundBtn.left + boundBtn.width / 2);
  const offsetY = boundCart.top + boundCart.height / 2 - (boundBtn.top + boundBtn.height / 2);

  // 页面滚动尺寸
  // const scrollTop = document.documentElement.scrollTop || document.body.scrollTop || 0;
  // const scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft || 0;
  console.log('isRunning :>> ', isRunning);
  if (isRunning === false) {
    doms.eleFlyItem.style.display = 'block';
    // 容器左上角的坐标
    const wrapperRect = doms.wrapperEl.getBoundingClientRect();
    const wrapperX = wrapperRect.left;
    const wrapperY = wrapperRect.top;

    // 购物车图形出现与初始定位(计算 绝对定位的 top 和 left )
    doms.eleFlyItem.style.left =
      boundBtn.left + doms.eleBtn.clientWidth / 2 - wrapperX - doms.eleFlyItem.clientWidth / 2 + 'px';
    doms.eleFlyItem.style.top =
      boundBtn.top + doms.eleBtn.clientHeight / 2 - wrapperY - doms.eleFlyItem.clientHeight / 2 + 'px';

    // 开始动画
    doms.eleFlyItem.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    // 动画标志量
    isRunning = true;
  }
};

const onTransitionEnd = () => {
  console.log('transition end');
  isRunning = false;
  if (!doms.eleFlyItem) {
    return;
  }
  doms.eleFlyItem.style.display = 'none';
  doms.eleFlyItem.style.transform = 'translate(0, 0)';
};

onMounted(() => {
  doms.eleFlyItem = document.querySelector('#flyItem');
  doms.eleBtn = document.querySelector('#btnCart');
  doms.eleCart = document.querySelector('#shopCart');
  doms.wrapperEl = document.querySelector('#container-box');
});
</script>

<style lang="less" scoped>
.fly-item {
  display: none;
  transition-timing-function: cubic-bezier(0.55, 0, 0.85, 0.36);
  transition-duration: 1s;
}
</style>
