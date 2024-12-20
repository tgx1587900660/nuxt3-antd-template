<template>
  <div class="home-content">
    <AppHeader :title="'测试 nuxt 自动导入组件 + tailwind + 环境变量'" :show-preText="false"> </AppHeader>

    <div class="mb-4 bg-pink-200 p-3">
      <span>测试首页：这里是 pages/index.vue 组件的内容 </span>
    </div>

    <AppAlert>测试自动导入组件： 这里是组件 AppAlert.vue 的内容 </AppAlert>

    <hr />

    <div class="bg-green-200 mb-4 p-4">
      <div>测试 tailwindcss, 以下是测试代码的样式设置：</div>
      <div class="bg-[pink] font-bold text-[deeppink] underline">Hello world!</div>
      <div class="text-[#ff0000]">Hello world!</div>
      <div class="text-[skyblue]">Hello world!</div>
    </div>

    <div class="mb-4 border border-x-0 border-solid border-[#e0e0e0] bg-[#fefefe] p-3">
      <div>测试 env 智能提示导入</div>
      <div class="mt-4 bg-[#c0ffee] p-3">
        <div>
          <b>VITE_APP_NAME</b> 的值是：<strong class="font-bold">{{ appName }}</strong>
        </div>
      </div>
    </div>

    <div class="mb-4 border border-x-0 border-solid border-[#e0e0e0] bg-[#fefefe] p-3">
      <div>测试 server</div>
      <a-button @click="onClickApiHello">/api/hello</a-button>
      <a-button @click="testGetApi">/api/test</a-button>
      <a-button @click="testPostApi">/api/test</a-button>
      <a-button @click="testFooGetApi">/api/foo</a-button>
      <a-button @click="testFooPostApi">/api/foo</a-button>
      <a-button @click="testFooBarGetApi">/api/foo/bar</a-button>
      <a-button @click="onSubmit">/api/submit</a-button>
      <a-button @click="onQuery">/api/query</a-button>
      <a-button @click="onValidateId">/api/validation/:12</a-button>
      <a-button @click="onRuntimeConfig">/api/runtimeConfig</a-button>
      <a-button @click="onClickCookie">/api/cookies</a-button>
      <a-button @click="onFinishBgTask">/api/background-task</a-button>
      <hr />
      <pre>get: {{ apiHelloInfo }}</pre>
      <hr />
      <pre>get: {{ getApiInfo }}</pre>
      <hr />
      <pre>post: {{ postApiInfo }}</pre>
      <hr />
      <pre>get: {{ fooGetInfo }}</pre>
      <hr />
      <pre>post: {{ fooPostInfo }}</pre>
      <hr />
      <pre>post: {{ fooBargetInfo }}</pre>
      <hr />
      <pre>post: {{ submitBody }}</pre>
      <hr />
      <pre>get: {{ queryInfo }}</pre>
      <hr />
      <pre>get: {{ validateIdInfo }}</pre>
      <hr />
      <pre>get: {{ runtimeConfig }}</pre>
      <hr />
      <pre class="overflow-auto">get: {{ ck }}</pre>
      <hr />
    </div>
  </div>
</template>

<script setup lang="ts">
const appName = import.meta.env.VITE_APP_NAME;

const apiHelloInfo = ref();
const onClickApiHello = async () => {
  const { data } = await useFetch('/api/hello');
  console.log('data :>> ', data);
  apiHelloInfo.value = data.value;
};

const getApiInfo = ref();
const testGetApi = async () => {
  const { data } = await useFetch('/api/test');
  console.log('data :>> ', data);
  getApiInfo.value = data.value;
};
const postApiInfo = ref();
const testPostApi = async () => {
  const { data } = await useFetch('/api/test', { method: 'post' });
  console.log('data :>> ', data);
  postApiInfo.value = data.value;
};
const fooGetInfo = ref();
const testFooGetApi = async () => {
  const { data } = await useFetch('/api/foo');
  console.log('data :>> ', data);
  fooGetInfo.value = data.value;
};
const fooPostInfo = ref();
const testFooPostApi = async () => {
  const { data } = await useFetch('/api/foo', { method: 'post' });
  console.log('data :>> ', data);
  fooPostInfo.value = data.value;
};
const fooBargetInfo = ref();
const testFooBarGetApi = async () => {
  const { data } = await useFetch('/api/foo/bar');
  console.log('data :>> ', data);
  fooBargetInfo.value = data.value;
};
const submitBody = ref();
const onSubmit = async () => {
  const res = await $fetch('/api/submit', {
    method: 'post',
    body: { test: 123456 },
  });
  console.log('res :>> ', res);
  submitBody.value = res;
};
const queryInfo = ref();
const onQuery = async () => {
  const res = await $fetch('/api/query?foo=bar&baz=qux');
  queryInfo.value = res;
};
const validateIdInfo = ref();
const onValidateId = async () => {
  const res = await $fetch('/api/validation/12');
  // const res = await $fetch('/api/validation/xxxx');
  validateIdInfo.value = res;
};
const runtimeConfig = ref();
const onRuntimeConfig = async () => {
  const res = await $fetch('/api/runtimeConfig');
  validateIdInfo.value = res;
};
const ck = ref();
const onClickCookie = async () => {
  const res = await $fetch('/api/cookies');
  ck.value = res;
};
const onFinishBgTask = async () => {
  const res = await $fetch('/api/background-task');
  console.log('res :>> ', res);
};
</script>

<style lang="less" scoped></style>
