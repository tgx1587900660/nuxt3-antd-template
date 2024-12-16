<template>
  <div>
    <AppHeader :title="'在线预览 pdf，支持展示封面，支持翻页'" :desc="'使用 pdfjs-dist 依赖包 实现'"> </AppHeader>

    <div class="pdf-container m-auto flex max-w-[900px] flex-col items-center" @scroll="handleScroll">
      <canvas id="pdf-canvas" ref="canvas"></canvas>
      <div class="controls">
        <button @click="previousPage" :disabled="currentPage <= 1">上一页</button>
        <span>第 {{ currentPage }} / {{ totalPages }} 页</span>
        <button @click="nextPage" :disabled="currentPage >= totalPages">下一页</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePdfJs } from '@/components/file-preview/hooks/pdf';
import type { PDFDocumentProxy } from 'pdfjs-dist';
// import { type PDFDocumentProxy } from 'pdfjs-dist/types/src/display/api.d.ts';
import { seoDesc } from '@/config/seo';

const { getPdfJs } = usePdfJs();
const file = new URL('./feiman.pdf', import.meta.url);
console.log('file :>> ', file.toString());

const url =
  'https://mbeastustest.blob.core.windows.net/private/xtool/community/attachment/xtool-community/65043fbc-7ae9-4d47-ab7a-738e3ad47d54/别闹了，费曼先生.pdf?se=2024-08-14T13%3A35%3A16Z&sig=vwB1v1%2BhslV5r7AzDojC2AZBArJS%2BHQMu0DxooLfX%2Fg%3D&sp=r&spr=https&sr=b&st=2024-08-13T13%3A35%3A16Z&sv=2020-02-10&expire=1723642516';

const option = reactive({
  pageNumber: 1,
  scale: 1.5,
  pageRendering: false,
});
let pdfDoc: null | PDFDocumentProxy = null;
const currentPage = ref(1);
const totalPages = ref(0);
const canvas = ref<HTMLCanvasElement | null>(null);
const ctx = ref<CanvasRenderingContext2D | null>(null);

let pdfjsLib = null;
// 加载PDF文档
async function loadPdf() {
  pdfjsLib = await getPdfJs();
  // console.log('pdfjsLib :>> ', pdfjsLib);
  const loadingTask = pdfjsLib.getDocument({ url: file });
  pdfDoc = await loadingTask.promise;
  totalPages.value = pdfDoc.numPages;
  renderPage(currentPage.value);
  // loadingTask.promise.then(
  //   (pdf) => {
  //     console.log('pdf :>> ', pdf);
  //     console.log('PDF loaded');
  //     // Fetch the first page
  //     pdf.getPage(option.pageNumber).then((page) => {
  //       console.log('page :>> ', page);
  //       console.log('Page loaded');
  //       const viewport = page.getViewport({ scale: option.scale });
  //       console.log('viewport :>> ', viewport);

  //       // Prepare canvas using PDF page dimensions
  //       const canvas: HTMLCanvasElement | null = document.getElementById('pdf-canvas') as HTMLCanvasElement;
  //       if (!canvas) {
  //         console.log('the-canvas not found');
  //         return;
  //       }
  //       const context = canvas.getContext('2d');
  //       if (!context) {
  //         return;
  //       }
  //       canvas.height = viewport.height;
  //       canvas.width = viewport.width;

  //       // Render PDF page into canvas context
  //       const renderContext = {
  //         canvasContext: context,
  //         viewport: viewport,
  //       };
  //       const renderTask = page.render(renderContext);
  //       renderTask.promise.then(function () {
  //         console.log('Page rendered');
  //       });
  //     });
  //   },
  //   (reason) => {
  //     // PDF loading error
  //     console.error(reason);
  //   },
  // );
}

// 渲染PDF页面
const renderPage = (pageNumber: number) => {
  if (!pdfDoc) {
    return;
  }
  const page = pdfDoc.getPage(pageNumber);
  page.then((page) => {
    const viewport = page.getViewport({ scale: 1.0 });
    if (!canvas.value) {
      return;
    }
    canvas.value.width = viewport.width;
    canvas.value.height = viewport.height;
    ctx.value = canvas.value.getContext('2d');
    if (!ctx.value) {
      return;
    }
    const renderContext = {
      canvasContext: ctx.value,
      viewport: viewport,
    };
    page.render(renderContext);
  });
};

// 上一页
const previousPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
    renderPage(currentPage.value);
  }
};

// 下一页
const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
    renderPage(currentPage.value);
  }
};

// 滚动到底部时自动翻页的阈值（比如 100px）
const scrollThreshold = ref(100);
const pageHeight = ref(0);
const computedPageHeight = computed(async () => {
  // 确保只计算一次页面高度，这里假设页面大小一致
  if (!pageHeight.value) {
    if (!pdfDoc || !canvas.value) {
      return;
    }
    const page = await pdfDoc.getPage(1);
    const viewport = page.getViewport({ scale: 1.0 });
    canvas.value.height = viewport.height;
    return viewport.height;
  }
  return pageHeight.value;
});

const handleScroll = () => {
  if (!pdfDoc || !canvas.value) return;
  const scrollElement = document.querySelector('.pdf-container');
  if (!scrollElement) {
    return;
  }
  // const pageHeight = computedPageHeight.value;
  const isAtBottom = scrollElement.scrollHeight - scrollElement.scrollTop - pageHeight.value <= scrollThreshold.value;

  if (isAtBottom && currentPage.value < totalPages.value) {
    nextPage();
  }
};

useSeoMeta({
  title: `前端在线预览 pdf ${seoDesc.titleTemplate}`,
  description: `前端在线预览 pdf ${seoDesc.description}`,
});

onMounted(() => {
  loadPdf();
});

onBeforeUnmount(() => {
  // 移除滚动事件监听器
});
</script>

<style lang="less" scoped></style>
