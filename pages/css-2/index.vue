<template>
  <div class="flex flex-col items-center p-5">
    <div>
      <h1>使用纯css实现自定义单选框</h1>
      <p>input是可替换元素，默认不可以修改样式</p>
      <p>使用 伪元素:checked 和 相邻兄弟选择器 实现自定义单选框</p>
    </div>
    <div class="flex w-[200px] gap-10 bg-[pink] p-5">
      <label :class="'flex cursor-pointer items-center justify-center'">
        <input class="input-native" type="radio" name="gender" id="" />
        <span class="yuan"></span>
        <span class="field">男 ♂</span>
      </label>
      <label :class="'flex cursor-pointer items-center justify-center'">
        <input class="input-native" type="radio" name="gender" id="" />
        <span class="yuan"></span>
        <span class="field">女 ♀</span>
      </label>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="css" scoped>
.yuan {
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid #000;
  margin-right: 5px;
  position: relative;
}

.yuan::after {
  content: '';
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #008c8c;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
}

.input-native {
  display: none;
}
.input-native:checked ~ .yuan {
  border-color: #008c8c;
}
.input-native:checked ~ .yuan::after {
  opacity: 1;
}
.input-native:checked ~ .field {
  color: #008c8c;
}
</style>
