<template>
  <div class="space-y-4">
    <h1 class="text-xl font-bold">demo9: 初识 Framework, 了解 CKEditor5 的架构设计知识</h1>
    <!-- TODO 测试控制面板 -->
    <div class="flex items-center gap-2">
      <button
        @click="onGetData"
        class="text-white cursor-pointer rounded border-none bg-blue-500 px-4 py-2 text-[#fff] outline-none">
        onGetData
      </button>
      <button
        @click="onSetData"
        class="text-white cursor-pointer rounded border-none bg-blue-500 px-4 py-2 text-[#fff] outline-none">
        onSetData
      </button>
      <button
        @click="onDestroy"
        class="text-white cursor-pointer rounded border-none bg-blue-500 px-4 py-2 text-[#fff] outline-none">
        onDestroy
      </button>
    </div>
    <ClientOnly>
      <CkEditor9 @ready="onReady" />
    </ClientOnly>

    <hr />
    <div>预览-获取的数据：</div>
    <CkPreview :contentText="editorData" />
  </div>
</template>

<script setup lang="ts">
import type MyClassicEditor from '@/components/ck/editor9/ckeditor9';

let instance: MyClassicEditor | null = null;
const onReady = (editor: MyClassicEditor) => {
  instance = editor;
};

const editorData = ref();
function onGetData() {
  editorData.value = instance?.getData();
}

function onSetData() {
  instance?.setData('<p>Modified from the console!</p>');
}

function onDestroy() {
  instance?.destroy();
  instance = null;
}
</script>

<style lang="less" scoped></style>
