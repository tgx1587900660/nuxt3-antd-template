<template>
  <div>
    <AppHeader
      :title="'自定义复制粘贴'"
      :desc="'使用 Clipboard API 实现网页自定义复制粘贴功能，可以复制图片、文本、网址等等。'">
    </AppHeader>

    <div class="px-5">
      <p>
        <label for="">即将复制：</label>
        <strong id="text-box" class="text-[deeppink]"> 这是一段文本 xxxskljfsdjflsjdfl </strong>
      </p>
      <p>
        <a-button @click="onCopy">复制文本</a-button>
        <a-button @click="onPaste">粘贴文本</a-button>
      </p>
      <a-textarea id="paste-box" :rows="10" placeholder="请粘贴文本"></a-textarea>
      <p></p>
      <div>编辑器(这里可以粘贴图片)：</div>
      <div
        class="editor mb-4 min-h-[200px] border border-solid p-5 outline-none"
        :contenteditable="true"
        @paste="handlePaste"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { seoDesc } from '@/config/seo';

// 点击事件复制文本
function onCopy() {
  const el = document.getElementById('text-box');
  if (!el) {
    return;
  }
  console.dir(el);
  const text = el.innerText || '复制内容为空';
  copyText(text);
}

// 点击事件粘贴文本
function onPaste() {
  navigator.clipboard
    .readText()
    .then((text) => {
      console.log('text :>> ', text);
      const el = document.getElementById('paste-box') as HTMLTextAreaElement;
      if (!el) {
        return;
      }
      el.value = text;
    })
    .catch((err) => {
      console.error('err :>> ', err);
    });
}

// 富文本编辑器粘贴事件
function handlePaste(e: ClipboardEvent) {
  if (!e.clipboardData) {
    return;
  }
  // console.log('e.clipboardData :>> ', e.clipboardData); // 这里直接打印 e.clipboardData 看不到 files，实际上是有的
  if (e.clipboardData.files.length > 0) {
    e.preventDefault();

    const files = e.clipboardData.files;
    console.log('files :>> ', files);

    const file = files[0]; // 只处理第一个文件
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
      console.log('e.target.result :>> ', e.target?.result);
      const img = document.createElement('img');
      img.setAttribute('width', '180px');
      img.setAttribute('src', e.target?.result as string);
      const el = document.querySelector('.editor');
      if (!el) {
        return;
      }
      el.appendChild(img);
    };
    return;
  }
}

function stopCopy(e: Event) {
  e.preventDefault();
  copyText('不准复制！！！！！！！');
}

useSeoMeta({
  title: `Clipboard API 实现网页自定义复制粘贴功能 ${seoDesc.titleTemplate}`,
  description: `Clipboard API 实现网页自定义复制粘贴功能 ${seoDesc.description}`,
});

onMounted(() => {
  document.addEventListener('copy', stopCopy);
});

onUnmounted(() => {
  document.removeEventListener('copy', stopCopy);
});
</script>

<style lang="less" scoped></style>
