<template>
  <div>
    <AppHeader
      :title="'数字滚动效果'"
      :desc="'封装了一个 animation 函数实现数字的滚动。 使用 关键帧 requestAnimationFrame 实现。'">
    </AppHeader>

    <div class="flex items-center gap-10 p-5">
      <tgx-button @click="add">go</tgx-button>
      <span class="text-[8rem]">{{ count.toFixed(2) }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const count = ref(0);

function animation({
  from,
  to,
  duration = 1000,
  callback,
}: {
  from: number;
  to: number;
  duration?: number;
  callback?: (val: number) => void;
}) {
  let value = from;
  const start = Date.now();
  const speed = (to - from) / duration;

  // 让 value 的值变化一点
  const _run = () => {
    // 1. 改变 value 的值
    const t = Date.now() - start;
    if (t >= duration) {
      value = to;
      callback && callback(value);
      // console.log(value);
      return;
    }
    value = from + t * speed;
    callback && callback(value);
    // console.log(value);

    // 2. 注册下一次变化
    requestAnimationFrame(_run);
  };

  _run();
}

function add() {
  animation({
    from: 0,
    to: 4000,
    duration: 2000,
    callback: (val: number) => {
      count.value = val;
    },
  });
}
</script>

<style lang="less" scoped></style>
