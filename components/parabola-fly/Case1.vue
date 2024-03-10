<template>
  <div class="flex h-[700px] select-none flex-col bg-blue-300/25">
    <div class="border-0 border-b border-dashed border-[#000] py-4 text-center">
      <tgx-button class="text-[20px] text-pink-400" v-coordinate @click="onClick"> 点击跳跃 </tgx-button>
      <div class="text-center text-sm"></div>
    </div>

    <div class="relative mx-auto w-[500px] flex-1">
      <!-- 开始位置 -->
      <div
        class="relative left-0 top-[200px] inline-flex border-1 border-dashed border-[#000] p-2"
        id="start-position"
        :style="{
          '--x': `${x}px`,
          '--y': `${y}px`,
        }">
        <span>(left:0,top:200px)</span>
        <!-- 飞行的元素 -->
        <div id="box" class="absolute bottom-[100%] left-0 z-10 rounded-full border-0 border-dashed border-[#000]">
          <span id="inner" class="block h-5 w-5 rounded-full bg-pink-600"></span>
        </div>
      </div>

      <!-- 结束位置 -->
      <div class="absolute bottom-0 right-0 border-1 border-dashed border-[#000] p-2" id="end-position">
        (bottom:0,right:0)
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const x = ref(0);
const y = ref(0);
const onClick = () => {
  const box = document.getElementById('box');
  const inner = document.getElementById('inner');
  if (!box || !inner) {
    return;
  }

  const startBtn = document.getElementById('start-position');
  const endBtn = document.getElementById('end-position');
  if (!startBtn || !endBtn) return;

  const startPosition = startBtn.getBoundingClientRect();
  const endPosition = endBtn.getBoundingClientRect();

  x.value = endPosition.left - startPosition.left;
  y.value = endPosition.top - startPosition.top;

  // 添加动画类
  box.classList.add('box');
  inner.classList.add('inner');

  // 动画结束后移除类
  box.addEventListener('animationend', () => {
    box.classList.remove('box');
  });
  inner.addEventListener('animationend', () => {
    inner.classList.remove('inner');
  });
};
</script>

<style lang="less" scoped>
.box {
  animation: move-x 1s linear;
}
.inner {
  animation: move-y 1s cubic-bezier(0.11, -0.61, 0.75, -0.11);
}

@keyframes move-x {
  to {
    transform: translateX(var(--x));
  }
}
@keyframes move-y {
  to {
    transform: translateY(var(--y));
  }
}
</style>
