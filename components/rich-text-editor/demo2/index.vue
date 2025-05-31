<template>
  <div class="space-y-4">
    <h1 class="text-xl font-bold">demo2: 把 ckeditor5 封装成一个可配置的、有一些事件的 vue 组件</h1>

    <!-- 测试控制面板 -->
    <div class="bg-gray-50 !mt-0 space-y-2 rounded-lg border p-4">
      <h3 class="m-0 font-medium">事件日志:</h3>
      <div class="bg-white h-32 overflow-y-auto rounded border p-2">
        <div v-for="(log, index) in eventLogs" :key="index" class="text-sm">
          <span class="text-gray-500">{{ log.time }}</span>
          <span class="ml-2 text-blue-600">{{ log.event }}:</span>
          <span class="ml-2">{{ log.message }}</span>
        </div>
      </div>
      <button @click="clearLogs" class="text-white bg-red-500 hover:bg-red-600 rounded px-4 py-1 text-sm">
        清除日志
      </button>
      <div class="flex flex-col gap-2">
        <label class="flex items-center gap-2">
          <span class="text-sm font-medium">编辑器内容:</span>
          <input type="text" v-model="model" class="rounded border px-3 py-1" />
          <button
            @click="setRandomContent"
            class="text-white cursor-pointer rounded border-none bg-blue-500 px-4 py-1 text-sm text-[#fff] outline-none hover:bg-blue-600">
            设置随机内容
          </button>
        </label>
        <label for="disabled" class="flex items-center gap-2">
          <span class="text-sm font-medium">是否禁用:</span>
          <input type="checkbox" id="disabled" v-model="disabled" class="rounded border px-3 py-1" />
        </label>
        <label for="disableTwoWayDataBinding" class="flex items-center gap-2">
          <span class="text-sm font-medium">是否禁用双向数据绑定:</span>
          <input
            type="checkbox"
            id="disableTwoWayDataBinding"
            v-model="disableTwoWayDataBinding"
            class="rounded border px-3 py-1" />
        </label>
      </div>
    </div>

    <!-- 编辑器组件 -->
    <ClientOnly>
      <ck-editor2
        v-model="model"
        :disabled="disabled"
        :disableTwoWayDataBinding="disableTwoWayDataBinding"
        @ready="onEditorReady"
        @focus="onEditorFocus"
        @blur="onEditorBlur"
        @input="onEditorChange" />
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
const model = ref('初始化的值');
const eventLogs = ref<Array<{ time: string; event: string; message: string }>>([]);
const disabled = ref(false);
const disableTwoWayDataBinding = ref(false);

// 添加事件日志
const addLog = (event: string, message: string) => {
  const now = new Date().toLocaleTimeString();
  eventLogs.value.unshift({
    time: now,
    event,
    message,
  });
};

// 清除日志
const clearLogs = () => {
  eventLogs.value = [];
};

// 编辑器事件处理
const onEditorReady = () => {
  addLog('ready', '编辑器初始化完成');
};

const onEditorFocus = () => {
  addLog('focus', '编辑器获得焦点');
};

const onEditorBlur = () => {
  addLog('blur', '编辑器失去焦点');
};

const onEditorChange = (event: any) => {
  addLog('change', `内容已更改: ${model.value.slice(0, 50)}...`);
};

// 设置随机内容
const setRandomContent = () => {
  const contents = [
    '<h1>标题内容</h1><p>这是一段测试文字</p>',
    '<p>Hello, CKEditor!</p>',
    '<blockquote>这是一段引用文字</blockquote>',
    '<ul><li>列表项 1</li><li>列表项 2</li></ul>',
    '<a href="https://www.baidu.com">百度</a>',
    '<h1>标题1</h1><h2>标题2</h2><h3>标题3</h3><h4>标题4</h4><h5>标题5</h5><h6>标题6</h6>',
    '<p>Hello, CKEditor! 这是一段测试文字</p>',
  ];
  const randomIndex = Math.floor(Math.random() * contents.length);
  model.value = contents[randomIndex];
};
</script>

<style lang="less" scoped>
// 样式
</style>
