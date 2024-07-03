<template>
  <div class="m-auto max-w-[1400px] border-1 border-solid border-[#000]">
    <div class="list-wrapper flex w-full overflow-auto">
      <RatioBox v-for="(item, index) in 8" :key="index" class="flex-shrink-0">
        <div class="flex h-full w-full flex-col items-center">
          <div class="h-[80px] w-[80px] rounded-full border-4 border-solid border-[#fff] bg-[#f40]">
            <img
              class="h-full w-full rounded-full object-cover"
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              alt="" />
          </div>
          <span>title</span>
        </div>
      </RatioBox>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped></style>
