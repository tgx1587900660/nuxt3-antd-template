<template>
  <div>
    <AppHeader :title="'gsap1'" :desc="'滚动控制视频播放进度'" />
    <div class="page h-[4000px] border-2 border-solid border-[#000] bg-[#ccc] p-10">
      <div class="flex h-[900px] items-center justify-center border-2 border-solid border-[#000] bg-[#fff]">
        <div class="text-center">
          <p class="mb-4 text-2xl">向下滚动开始播放视频</p>
        </div>
      </div>
      <div
        ref="videoContainerRef"
        class="video-container relative mt-10 h-[1400px] border-2 border-solid border-[#000] bg-blue-400">
        <div
          class="video-wrapper sticky left-0 top-[50px] flex h-[500px] items-center justify-center border-2 border-solid border-[#000] bg-[pink]">
          <div class="absolute left-1/2 top-0 -translate-x-1/2 text-center">视频和文字会被蓝色box带走</div>
          <video
            ref="videoRef"
            :src="videoUrl"
            class="block h-full w-full object-contain"
            muted
            playsinline
            preload="auto"
            @loadedmetadata="onVideoLoaded" />
          <div
            ref="textRef"
            class="text-shadow-lg absolute left-1/2 top-[calc(100%+50px)] -translate-x-1/2 text-[40px] font-bold text-[#000] opacity-0">
            这里是渐变文本
          </div>
        </div>
      </div>
      <div class="flex h-[900px] items-center justify-center border-2 border-solid border-[#000] bg-[#fff]">
        <div class="text-center">
          <p class="mb-4 text-2xl">向上滚动倒序播放</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import videoUrl from './test.mp4';

// 注册 ScrollTrigger 插件
if (import.meta.client) {
  gsap.registerPlugin(ScrollTrigger);
}

const videoRef = ref<HTMLVideoElement | null>(null);
const videoContainerRef = ref<HTMLDivElement | null>(null);
const textRef = ref<HTMLDivElement | null>(null);

let isInitialized = false;

const onVideoLoaded = () => {
  if (!videoRef.value || !videoContainerRef.value || !textRef.value || isInitialized) return;

  const video = videoRef.value;
  const container = videoContainerRef.value;
  const text = textRef.value;

  // 只要 metadata 加载了，duration 就可用了
  if (!video.duration || !isFinite(video.duration)) {
    return;
  }

  isInitialized = true;
  video.pause();

  // 创建一个 GSAP 时间轴，绑定滚动触发器
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 1, // 使用数字 1 增加一点平滑感，减少卡顿
    },
  });

  // 1. 视频进度控制 (先开始)
  const videoObj = { currentTime: 0 };
  tl.to(videoObj, {
    currentTime: video.duration,
    duration: 1, // 相对权重
    ease: 'none',
    onStart: () => console.log('视频开始播放'),
    onComplete: () => console.log('视频结束播放'),
    onUpdate: () => {
      video.currentTime = videoObj.currentTime;
    },
  });

  // 2. 文本渐变动画 (在视频播放完后开始)
  tl.to(text, {
    opacity: 1,
    duration: 0.5, // 相对权重
    onStart: () => console.log('文本开始渐变'),
    onComplete: () => console.log('文本结束渐变'),
  });
};

onMounted(() => {
  // 确保在客户端执行
  if (import.meta.client && videoRef.value) {
    // 如果视频已经加载，直接初始化
    if (videoRef.value.readyState >= 2) {
      onVideoLoaded();
    }
  }
});

onUnmounted(() => {
  // 清理 ScrollTrigger
  if (import.meta.client) {
    ScrollTrigger.getAll().forEach((trigger) => {
      if (trigger.vars.trigger === videoContainerRef.value) {
        trigger.kill();
      }
    });
  }
});
</script>

<style lang="less" scoped></style>
