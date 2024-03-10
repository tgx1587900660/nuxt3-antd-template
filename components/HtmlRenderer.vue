<template>
  <div class="html-renderer">
    <!-- 使用iframe嵌入外部HTML页面或本地文件 -->
    <template v-if="iframeSrc || localFilePath">
      <iframe
        :src="effectiveSource"
        :height="height"
        :width="width"
        :title="title"
        :sandbox="getSandboxPermissions"
        class="w-full border-0"
        loading="lazy"
        referrerpolicy="no-referrer"
        tabindex="0"
        aria-label="嵌入的HTML内容"></iframe>
    </template>

    <!-- 使用v-html渲染HTML字符串 -->
    <template v-else-if="htmlContent">
      <div
        v-if="useWrapper"
        :class="['html-content-wrapper', wrapperClass]"
        v-html="htmlContent"
        tabindex="0"
        aria-label="HTML内容"></div>
      <div v-else v-html="htmlContent" tabindex="0" aria-label="HTML内容"></div>
    </template>

    <!-- 加载本地文件内容显示 -->
    <template v-else-if="fileContent">
      <div
        v-if="useWrapper"
        :class="['html-content-wrapper', wrapperClass]"
        v-html="fileContent"
        tabindex="0"
        aria-label="HTML文件内容"></div>
      <div v-else v-html="fileContent" tabindex="0" aria-label="HTML文件内容"></div>
    </template>

    <!-- 加载中状态 -->
    <div v-else-if="isLoading" class="loading-indicator">
      <a-spin />
      <span class="ml-2">正在加载HTML内容...</span>
    </div>

    <!-- 错误状态 -->
    <div v-else-if="error" class="error-message">
      <a-alert type="error" :message="error" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { $fetch } from 'ofetch';
import { computed, onMounted, ref } from 'vue';

interface Props {
  /**
   * HTML内容字符串
   */
  htmlContent?: string;
  /**
   * 外部HTML页面的URL
   */
  iframeSrc?: string;
  /**
   * 本地HTML文件路径（相对于public目录）
   * 例如: '/demo.html'
   */
  localFilePath?: string;
  /**
   * 需要从服务器加载的HTML文件路径
   * 这将通过API读取文件内容
   */
  serverFilePath?: string;
  /**
   * iframe的高度
   */
  height?: string;
  /**
   * iframe的宽度
   */
  width?: string;
  /**
   * iframe的标题，用于无障碍
   */
  title?: string;
  /**
   * 是否允许iframe内的脚本执行
   */
  allowScripts?: boolean;
  /**
   * 当使用v-html时是否在外层添加包装器
   */
  useWrapper?: boolean;
  /**
   * 包装器的类名
   */
  wrapperClass?: string;
}

const props = withDefaults(defineProps<Props>(), {
  height: '100%',
  width: '100%',
  title: 'HTML内容',
  allowScripts: true,
  useWrapper: true,
  wrapperClass: '',
});

const isLoading = ref(false);
const error = ref('');
const fileContent = ref('');

// 计算实际的iframe源
const effectiveSource = computed(() => {
  if (props.iframeSrc) return props.iframeSrc;
  if (props.localFilePath) {
    // 确保路径以/开头，这样会从public目录加载
    return props.localFilePath.startsWith('/') ? props.localFilePath : `/${props.localFilePath}`;
  }
  return '';
});

const getSandboxPermissions = computed(() => {
  const permissions = ['allow-same-origin', 'allow-popups', 'allow-forms'];

  if (props.allowScripts) {
    permissions.push('allow-scripts');
  }

  return permissions.join(' ');
});

// 加载服务器端文件内容
const loadServerFile = async () => {
  if (!props.serverFilePath) return;

  isLoading.value = true;
  error.value = '';
  fileContent.value = '';

  try {
    // 使用Nuxt的$fetch方法从API获取文件内容
    // 假设你有一个API端点 /api/file 可以读取服务器上的文件
    const content = await $fetch('/api/file', {
      method: 'POST',
      body: {
        filePath: props.serverFilePath,
      },
    });

    fileContent.value = content as string;
  } catch (err) {
    error.value = `无法加载文件: ${err instanceof Error ? err.message : String(err)}`;
    console.error('加载HTML文件失败:', err);
  } finally {
    isLoading.value = false;
  }
};

onMounted(() => {
  if (props.serverFilePath) {
    loadServerFile();
  }
});
</script>

<style scoped>
.html-renderer {
  @apply h-full w-full;
}

/* 在这里我们使用:deep()修饰符来确保样式可以渗透到v-html渲染的内容 */
:deep(.html-content-wrapper) {
  @apply h-full w-full overflow-auto;
}

.loading-indicator {
  @apply flex h-full w-full items-center justify-center;
}

.error-message {
  @apply p-4;
}
</style>
