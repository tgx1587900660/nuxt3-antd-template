<template>
  <div class="space-y-4">
    <h1 class="text-xl font-bold">demo5: 优化-页面离开时提醒用户保存信息</h1>
    <!-- 测试控制面板 -->
    <div class="flex gap-2">
      <button
        id="save"
        @click="handleSaveButton"
        class="text-white cursor-pointer rounded border-none bg-blue-500 px-4 py-2 text-[#fff] outline-none"
        :class="{ active: !isDirty, saving: isSaving }">
        {{ !isDirty ? '数据没变化，无需保存' : isSaving ? '保存中...' : '点击保存' }}
      </button>
      <div class="text-gray-500 flex items-center text-sm">
        {{ isSaving ? '保存中......刷新页面有离开提示' : '非保存中，刷新页面不提示' }}
      </div>
    </div>
    <!-- 编辑器组件 -->
    <ClientOnly>
      <CkEditor5 @ready="handleEditorReady" />
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import type MyClassicEditor from '@/components/ck/editor5/ckeditor5';

let instance: MyClassicEditor | null = null;
const isDirty = ref(false);
const isSaving = ref(false);

const handleEditorReady = (editor: MyClassicEditor) => {
  console.log('editor :>> ', editor);
  instance = editor;
  initStatusChangesEvent();
};

/**
 * 初始化2个状态改变的事件 `change:hasAny` 和 `change:data`
 */
function initStatusChangesEvent() {
  // 获取插件
  const peddingActionPlugin = instance?.plugins.get('PendingActions');
  // console.log('peddingActionPlugin :>> ', peddingActionPlugin);
  // 此插件自带一个 `change:hasAny` 事件可以监听是否有动作正在进行中
  peddingActionPlugin?.on('change:hasAny', () => {
    updateStatus();
  });

  // 编辑器实例对象, 监听 `change:data`(内容变更) 事件, 内容有改变时，才可以点击保存按钮
  instance?.model.document.on('change:data', () => {
    isDirty.value = true;
    updateStatus();
  });
}

/**
 * 使用`pendingActions.hasAny` 判断是否正在保存中
 */
function updateStatus() {
  if (instance?.plugins.get('PendingActions').hasAny) {
    isSaving.value = true;
  } else {
    isSaving.value = false;
  }
}

/**
 * 点击保存按钮时，控制状态变化
 */
function handleSaveButton(e: Event) {
  console.log('handleSaveButton');
  e.preventDefault();

  const data = instance?.getData();
  const pendingActions = instance?.plugins.get('PendingActions');
  // 添加一个保存中状态, 可以使用`pendingActions.hasAny` 判断是否保存中
  const action = pendingActions?.add('Saving changes');
  // console.log('action :>> ', action);
  if (!action) {
    return;
  }

  // 模拟保存中状态, 5秒后移除保存中状态
  setTimeout(() => {
    pendingActions?.remove(action);
    // 如果数据没有变化, 则设置为未修改状态
    if (data === instance?.getData()) {
      isDirty.value = false;
    }
    updateStatus();
  }, 5000);
}

/**
 * 注册页面卸载事件, 判断是否有动作正在进行中。决定是否弹窗提醒
 */
useEventListener(window, 'beforeunload', (event: BeforeUnloadEvent) => {
  const pendingActions = instance?.plugins.get('PendingActions');
  // console.log('pendingActions :>> ', pendingActions);
  if (pendingActions?.hasAny) {
    event.preventDefault();
  }
});
</script>

<style lang="less" scoped>
// 样式
.active {
  background-color: #007bff;
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none; // 禁止元素触发点击事件
}
.saving {
  background-color: #007bff;
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}
</style>
