<template>
  <div>
    <AppHeader title="歌词滚动效果" />

    <div class="lrc-container">
      <audio id="audio" ref="audio" controls :src="Song" @timeupdate="setOffset" />
      <div class="container" ref="container">
        <ul class="lrc-list" ref="ul" :style="{ transform: `translateY(-${offset}px)` }">
          <li v-for="(item, index) in lrcList" :key="index" class="lrc-item" :class="{ active: index === findIndex() }">
            {{ item.words }}
          </li>
          <!-- <li>Lorem ipsum dolor sit amet.</li>
          <li>Aliquam at hic explicabo rem.</li>
          <li>Asperiores labore voluptas molestiae. Dolor.</li>
          <li>Non voluptatem voluptas quae debitis.</li>
          <li>Quis similique fugit minus illum!</li>
          <li>Libero neque architecto quod fugiat!</li>
          <li>Quidem magnam eos aspernatur ratione.</li>
          <li>Vero voluptates quam aliquam blanditiis!</li>
          <li class="active">Voluptatibus at porro itaque aut.</li>
          <li>Blanditiis eos repudiandae veritatis exercitationem.</li>
          <li>Beatae placeat eaque accusantium nesciunt.</li>
          <li>Sequi nobis odit animi et.</li>
          <li>Ullam sit maiores eos? Provident?</li>
          <li>Minima molestias cupiditate non quidem.</li>
          <li>Doloribus aliquam possimus necessitatibus ea?</li>
          <li>Delectus reprehenderit nemo voluptatem praesentium.</li>
          <li>Ipsum, quae suscipit! Quas, earum!</li>
          <li>Vero blanditiis expedita dicta in?</li>
          <li>Recusandae debitis et unde repellendus?</li>
          <li>Dolore voluptatem sequi quod sit!</li>
          <li>Vero suscipit ea iusto consequatur.</li>
          <li>Sunt odio accusamus nihil explicabo.</li>
          <li>Eaque dicta animi laboriosam quidem!</li>
          <li>Itaque impedit mollitia consequatur ducimus?</li>
          <li>Maxime ea debitis nobis deleniti.</li>
          <li>Labore quibusdam qui reprehenderit corporis!</li>
          <li>Officiis molestias adipisci amet fugiat!</li>
          <li>Ipsa quia recusandae quaerat mollitia?</li>
          <li>Vero iste iure sed delectus.</li>
          <li>Voluptatibus, qui? Ratione, placeat quae!</li> -->
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Song from '@/assets/video/song.mp3';
import lrc from './data.js';

const lrcList: any = parseLrc();
// console.log('lrcList :>> ', lrcList);
const audio = useTemplateRef<HTMLAudioElement | null>('audio');
const ul = useTemplateRef<HTMLUListElement | null>('ul');
const container = useTemplateRef<HTMLDivElement | null>('container');

const containerHeight = ref(0);
const liHeight = ref(0);
const maxOffset = ref(0);

/**
 * 解析lrc歌词字符串
 * 返回一个歌词对象数组，
 * 每个歌词对象: { time: 开始时间, words: 歌词内容 }
 */
function parseLrc() {
  const arr = lrc.split('\n');
  const result = arr.map((item: any) => {
    if (item.includes('[') && item.includes(']')) {
      const time = item.match(/\[(\d{2}:\d{2}.\d{2})/)[1];
      const words = item.replace(`[${time}]`, '');
      return {
        time: parseTime(time),
        words,
      };
    }
  });
  return result;
}

/**
 * 将一个时间字符串解析为数字 (秒)
 * @param {string} timeStr 时间字符串，如 '01:23.45'
 * @returns {number} 解析后的数字，如 83.45
 */
function parseTime(timeStr: string) {
  const [m, s] = timeStr.split(':');
  return +m * 60 + +s;
}

/**
 * 计算出当播放器播放到第几秒的情况下，
 * 应该显示哪一行歌词的索引,
 * 如果没有一句歌词需要显示，返回 -1
 * @returns {number} 应该显示的行号，从 0 开始
 */
function findIndex() {
  if (!audio.value) {
    return -1;
  }
  const currentTime = audio.value.currentTime;
  // console.log('currentTime :>> ', currentTime)
  for (let i = 0; i < lrcList.length; i++) {
    if (currentTime < lrcList[i].time) {
      return i - 1;
    }
  }

  return lrcList.length - 1;
}

/**
 * 创建显示歌词的元素 li，
 * 并将它们添加到 ul 中，
 * 使用 document.createDocumentFragment() 提高性能
 * @returns {void}
 */
// function createLrcElements() {
//   const frags = document.createDocumentFragment();

//   for (let i = 0; i < lrcList.length; i++) {
//     const li = document.createElement('li');
//     li.textContent = lrcList[i].words;
//     li.classList.add('lrc-item');
//     frags.append(li);
//   }

//   // console.log('frags :>> ', frags)
//   ul.value?.appendChild(frags);
// }

const offset = ref(0);
/**
 * 设置 ul 的偏移量，使其与当前播放时间相对应，
 * 使当前播放时间对应的 那个歌词元素li, 出现在容器的最中间
 * @returns {void}
 */
function setOffset() {
  const index = findIndex();
  offset.value = liHeight.value * index + liHeight.value / 2 - containerHeight.value / 2;
  // 边界判断：没有超出时，offset 为 0，超出时，offset 为 maxOffset
  if (offset.value < 0) {
    offset.value = 0;
  }
  if (offset.value > maxOffset.value) {
    offset.value = maxOffset.value;
  }
  // if (!ul.value) {
  //   return;
  // }
  // ul.value.style.transform = `translateY(-${offset}px)`;

  // 去掉之前高亮的li的 active 类名
  // const activeLi = ul.value.querySelector('.lrc-item.active');
  // if (activeLi) {
  //   activeLi.classList.remove('active');
  // }

  // 设置当前高亮的li的 active 类名
  // const li = ul.value.children[index];
  // if (li) {
  //   li.classList.add('active');
  // }
}

onMounted(() => {
  // createLrcElements();
  if (!container.value || !ul.value) {
    return;
  }
  containerHeight.value = container.value.clientHeight; // 容器的自身高度(不包括边框)
  liHeight.value = ul.value?.children[0].clientHeight; // 每个 li 的高度
  if (ul.value?.clientHeight) {
    maxOffset.value = ul.value?.clientHeight - containerHeight.value;
  }
});
</script>

<style scoped lang="less">
.lrc-container {
  background-color: #000;
  color: #666;
  text-align: center;
  padding: 20px;
  #audio {
    max-width: 450px;
    margin: 20px auto;
  }

  .container {
    height: 420px;
    max-width: 1200px;
    margin: 20px auto;
    padding: 0 10px;
    border: 2px solid #fff;
    overflow: hidden;
    /* overflow-y: scroll; */
  }

  .container {
    .lrc-list {
      list-style: none;
      transition: 0.4s;
    }
  }
  .container {
    .lrc-item {
      height: 30px;
      line-height: 30px;
      transition: 0.3s;
      /* border: 1px solid #fff; */
    }
  }
  .lrc-item.active {
    transform: scale(1.2);
    color: #fff;
  }
}
</style>
