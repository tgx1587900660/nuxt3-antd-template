<template>
  <div class="space-y-4">
    <h1 class="text-xl font-bold">demo3: 初步使用ckeditor5的 事件 和 API</h1>
    <!-- TODO 测试控制面板 -->
    <div class="flex gap-2">
      <button
        @click="insertTextToEnd"
        class="text-white cursor-pointer rounded border-none bg-blue-500 px-4 py-2 text-[#fff] outline-none">
        插入文本到末尾
      </button>
      <button
        @click="changeEnterEvent"
        class="text-white cursor-pointer rounded border-none bg-blue-500 px-4 py-2 text-[#fff] outline-none">
        把默认的回车事件，由 p 标签改为 br 标签
      </button>
      <button
        @click="insertLongHtmlCode"
        class="text-white cursor-pointer rounded border-none bg-blue-500 px-4 py-2 text-[#fff] outline-none">
        插入一些较长的 HTML 代码
      </button>
    </div>
    <!-- 编辑器组件 -->
    <ClientOnly>
      <CkEditor3 @ready="onEditorReady" />
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import type MyClassicEditor from '@/components/ck/editor3/ckeditor3';

let editorInstance: MyClassicEditor | null = null;
const onEditorReady = (editor: MyClassicEditor) => {
  editorInstance = editor;
  console.log('editorInstance :>> ', editorInstance);
  initContentChangeEvent();
};

/**
 * 点击按钮插入文本到末尾
 */
function insertTextToEnd() {
  /**
   * 使用model.change方法，可以改写编辑内容, change方法是一个回调函数，参数是writer,
   * 在这里找它的属性 https://ckeditor.com/docs/ckeditor5/latest/api/module_engine_model_writer-Writer.html
   * 这是我们第一篇文章提到过的 API 文档
   */
  editorInstance?.model.change((writer) => {
    /**
     * 找到根节点<root> (可以理解为dom树的根节点 document.documentElement 也就是 <html> 标签),
     * ckeditor5也有自己的一棵dom树，但与网页文档对象dom树不一样，而是一一对应的
     */
    const root = writer.model.document.getRoot();
    if (!root) {
      return;
    }
    // 获取末尾位置
    const endPosition = writer.createPositionAt(root, 'end');
    // console.log('endPosition :>> ', endPosition);
    // 移动光标到末尾
    writer.setSelection(endPosition);
    // 执行enter命令
    editorInstance?.execute('enter');

    // 插入文本
    const content = writer.createText('writer 创建的文本 to The End!');
    // console.log('content :>> ', content);
    writer.model.insertContent(content);
  });
}

// 内容变更事件
const initContentChangeEvent = () => {
  editorInstance?.model.document.on('change:data', () => {
    console.log('The data has changed!');
  });
};

/**
 * 把默认的回车事件，由 p 标签改为 br 标签
 */
function changeEnterEvent() {
  editorInstance?.editing.view.document.on(
    'enter',
    (evt, data) => {
      data.preventDefault();
      evt.stop();

      if (data.isSoft) {
        editorInstance?.execute('enter');
        editorInstance?.editing.view.scrollToTheSelection();
        return;
      }

      editorInstance?.execute('shiftEnter');
      editorInstance?.editing.view.scrollToTheSelection();
    },
    { priority: 'high' },
  );
}

/**
 * 插入一些较长的 HTML 代码
 */
function insertLongHtmlCode() {
  editorInstance?.model.change((writer) => {
    const content = '<p>A paragraph with <a href="https://ckeditor.com">some link</a>.</p>';
    const viewFragment = editorInstance?.data.processor.toView(content);
    if (!viewFragment) {
      return;
    }
    const modelFragment = editorInstance?.data.toModel(viewFragment);
    if (!modelFragment) {
      return;
    }
    editorInstance?.model.insertContent(modelFragment);
  });
}
</script>

<style lang="less" scoped>
// 样式
</style>
