<template>
  <div>
    <AppHeader title="本地文件读取" desc="使用 FileReader 读取本地文件, 只读取 图片文件 和 txt文件" />
    <div>
      <input type="file" accept=".txt,image/jpeg,image/png,image/gif,image/jpg,image/webp" @change="handleFileChange" />

      <div>
        <h2>读取结果：</h2>
        <div id="file-content">{{ fileContent }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const file = ref<File | null>(null);
const fileContent = ref();

const handleFileChange = (e: Event) => {
  const input = e.target as HTMLInputElement;
  file.value = input.files?.[0] || null;

  if (!file.value) {
    return;
  }

  const reader = new FileReader();

  const suffix = parseFileSuffix(file.value.name) || '';
  if (suffix === 'txt') {
    reader.readAsText(file.value); // 将文件读取为文本
  } else if (['jpeg', 'png', 'gif', 'jpg', 'webp'].includes(suffix)) {
    reader.readAsDataURL(file.value); // 将文件读取为 base64 编码的图片
  }

  // 读取文件成功后触发 onload 事件, 并自动将结果存入 reader.result 属性中
  reader.onload = (e) => {
    if (suffix === 'txt') {
      fileContent.value = reader.result;
    } else if (['jpeg', 'png', 'gif', 'jpg', 'webp'].includes(suffix)) {
      const img = document.createElement('img');
      img.src = reader.result as string;
      img.width = 600;
      document.getElementById('file-content')?.appendChild(img);
    }
  };
};

function parseFileSuffix(name: string) {
  const suffix = name.split('.').pop();
  return suffix;
}

useHead({
  title: '本地文件读取',
  meta: [{ name: 'description', content: '本地文件读取' }],
});
</script>

<style lang="less" scoped></style>
