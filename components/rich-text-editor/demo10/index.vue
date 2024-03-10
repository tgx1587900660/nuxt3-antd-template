<template>
  <div class="space-y-4">
    <h1 class="text-xl font-bold">
      demo10: 借助自定义 highlight 插件，来深入理解CKEditor5的 Model(模型) 和 schema(模式)
    </h1>
    <!-- TODO 测试控制面板 -->
    <div class="flex items-center gap-2">
      <button
        class="text-white cursor-pointer rounded border-none bg-blue-500 px-4 py-2 text-[#fff] outline-none"
        @click="onSetData">
        设置数据
      </button>
    </div>
    <ClientOnly>
      <CkEditor10 @ready="onReady" />
    </ClientOnly>

    <!-- <hr />
    <div>预览-获取的数据：</div>
    <CkPreview :contentText="editorData" /> -->
  </div>
</template>

<script setup lang="ts">
import type MyClassicEditor from '@/components/ck/editor10/ckeditor10';

let instance: MyClassicEditor | null = null;
const editorData = ref();

const onReady = (editor: MyClassicEditor) => {
  instance = editor;
};

function onSetData() {
  instance?.setData('<p>Hello <mark>world</mark>!</p>');
}
</script>

<style lang="less" scoped></style>
