<template>
  <div class="">
    <AppHeader :title="'获取视频的关键帧'" :desc="'获取视频的关键帧, 选取封面'"> </AppHeader>

    <div class="mt-6 flex flex-col gap-4 p-4">
      <input type="file" name="file" accept="video/*" id="file" @change="onGetKeyframe" />
      <!-- <a-button class="w-[200px]" type="primary" @click="onCapture">获取关键帧</a-button> -->
      <div id="keyframe-box"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
let file: File | null = null;
const onGetKeyframe = (e: Event) => {
  file = (e.target as HTMLInputElement).files?.[0] ?? null;
  onCapture();
};

const onCapture = async () => {
  if (!file) {
    alert('请先选择视频文件');
    return;
  }
  const wrapper = document.getElementById('keyframe-box');
  for (let i = 0; i < 20; i++) {
    const data = (await captureFrame(file, i * 10)) as { url: string; blob: Blob | null };
    // console.log('data :>> ', data);
    const img = document.createElement('img');
    img.src = data.url ?? '';
    img.width = 250;
    img.style.border = '2px dashed #ccc';
    img.style.padding = '10px';
    wrapper?.appendChild(img);
  }
};

/**
 * 获取视频关键帧
 * @param file 视频文件
 * @param time 视频的当前时间
 * @returns { url: string, blob: Blob | null }
 */
function captureFrame(file: File, time: number) {
  return new Promise((resolve) => {
    // console.log('file :>> ', file);
    // console.log('time :>> ', time);
    const vdo = document.createElement('video');
    vdo.autoplay = true; // 自动播放
    vdo.muted = true; // 静音播放
    vdo.currentTime = time; // 设置当前时间
    vdo.src = URL.createObjectURL(file); // 转化成临时的 blob URL
    vdo.addEventListener('canplay', () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = vdo.videoWidth;
      canvas.height = vdo.videoHeight;
      ctx?.drawImage(vdo, 0, 0, canvas.width, canvas.height);

      // 直接在页面中显示
      // const wrapper = document.getElementById('keyframe-box');
      // console.log('wrapper :>> ', wrapper);
      // if (!wrapper) {
      //   return;
      // }
      // wrapper.appendChild(canvas);

      // 获取 blob
      canvas.toBlob((blob) => {
        if (!blob) {
          throw new Error('无法获取视频关键帧');
        }
        const url = URL.createObjectURL(blob);
        resolve({ url, blob });
      });
    });
  });
}

useHead({
  title: '获取视频的关键帧',
  meta: [{ name: 'description', content: '获取视频的关键帧, 选取封面' }],
});
</script>

<style lang="less" scoped>
#keyframe-box {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
</style>
