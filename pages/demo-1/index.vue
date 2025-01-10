<template>
  <div>
    <AppHeader :title="'提取图片的主要颜色, 并应用到 div 容器的背景'" :desc="'使用 colorthief 依赖包 和 CSS 变量实现'">
    </AppHeader>

    <div class="mt-4 flex justify-center">
      <tgx-button @click="reset">点击重置背景色</tgx-button>
    </div>

    <div
      ref="divBoxRef"
      class="mt-4 h-full w-full border-[10px] border-dashed border-pink-500"
      :style="{
        '--c1': '#fff',
        '--c2': '#fff',
        '--c3': '#fff',
      }">
      <div class="color-change-box p-5">
        <div class="mx-auto flex max-w-[700px] flex-wrap gap-4">
          <div
            v-for="(img, i) in imgs"
            :key="i"
            class="inline-flex h-[280px] w-[340px] border border-solid border-[rgba(0,0,0,0.2)] text-[0]">
            <img
              class="w-full object-cover"
              crossorigin="anonymous"
              :style="{
                opacity: curIndex === -1 || curIndex === i ? 1 : 0.3,
              }"
              :src="img"
              @mouseenter="handleMouseEnter($event.target, i)"
              @mouseleave="handleMouseLeave" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { seoDesc } from '@/config/seo';
import ColorThief from 'colorthief';

const imgs = [];
for (let i = 0; i < 4; i++) {
  imgs.push(`https://picsum.photos/600/500?r=${i}`);
}

const curIndex = ref(-1);
const divBoxRef = ref(null);

async function handleMouseEnter(img, index) {
  // console.log('handleMouseEnter')
  curIndex.value = index;

  const colorThief = new ColorThief();
  // console.log('colorThief :>> ', colorThief)
  const colors = await colorThief.getPalette(img, 3); // img: 是img元素， 3:是跳过的像素来采样， https://lokeshdhakar.com/projects/color-thief/#api
  // console.log('colors :>> ', colors);
  const newColors = colors.map((c) => `rgb(${c[0]}, ${c[1]}, ${c[2]})`);
  // console.log('newColors :>> ', newColors);

  // 设置3个主色值
  if (divBoxRef.value) {
    divBoxRef.value.style.setProperty('--c1', newColors[0]);
    divBoxRef.value.style.setProperty('--c2', newColors[1]);
    divBoxRef.value.style.setProperty('--c3', newColors[2]);
  }
}

function handleMouseLeave() {
  // console.log('handleMouseLeave')
  curIndex.value = -1;
}

const reset = () => {
  if (divBoxRef.value) {
    divBoxRef.value.style.setProperty('--c1', '#fff');
    divBoxRef.value.style.setProperty('--c2', '#fff');
    divBoxRef.value.style.setProperty('--c3', '#fff');
  }
};

useSeoMeta({
  title: `提取图片的主要颜色, 并应用到 div 容器的背景 ${seoDesc.titleTemplate}`,
  description: `提取图片的主要颜色, 并应用到 div 容器的背景 ${seoDesc.description}`,
});
</script>

<style lang="less" scoped>
.color-change-box {
  background-image: linear-gradient(to bottom, var(--c1), var(--c2), var(--c3));
}
</style>
