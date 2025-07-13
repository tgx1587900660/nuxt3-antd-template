<template>
  <div>
    <AppHeader :title="'图片识别成文字'" :desc="'图片识别成文字, 使用 AI 模型 @xenova/transformers 实现'"> </AppHeader>
    <div class="flex flex-col items-center justify-center gap-4 p-4">
      <div class="flex items-center justify-center gap-2">
        <label class="flex cursor-pointer items-center gap-2 rounded-md border border-solid border-[#ccc] p-2">
          <input class="hidden" id="file-upload" type="file" accept="image/*" @change="handleFileChange" />
          点击上传图片
        </label>
        <p id="status">{{ status }}</p>
      </div>
      <div class="flex w-full gap-1">
        <!-- 图片容器 -->
        <div class="relative flex-1">
          <img
            ref="imageRef"
            class="flex w-full object-contain"
            v-if="imageUrl"
            :src="imageUrl"
            alt="识别图片"
            @load="onImageLoad" />
          <!-- 标注框容器 -->
          <div ref="annotationContainer" class="pointer-events-none absolute inset-0"></div>
          <!-- SVG 连接线容器 -->
          <svg ref="svgContainer" class="pointer-events-none absolute inset-0 z-10 h-full w-full">
            <defs>
              <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" class="z-10" fill="transparent" />
              </marker>
            </defs>
          </svg>
        </div>

        <!-- 右侧标签列表 -->
        <div class="w-[200px]">
          <h3 class="my-0 text-lg font-semibold">识别结果:</h3>
          <div class="space-y-2">
            <div
              v-for="(item, index) in detectedItems"
              :key="index"
              :ref="(el) => setLabelRef(el, index)"
              class="border-gray-200 flex items-center gap-2 rounded border border-solid p-2"
              :style="{ borderColor: item.color }">
              <div class="h-4 w-4 rounded-full" :style="{ backgroundColor: item.color }"></div>
              <span class="text-sm">{{ item.label }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="js">
import { pipeline, env } from 'https://cdn.jsdelivr.net/npm/@xenova/transformers@2.17.2';
console.log('pipeline :>> ', pipeline);
console.log('env :>> ', env);
env.allowLocalModels = false;

let detector = null;
const status = ref('加载模型中...');
const imageUrl = ref();
const imageRef = ref(null);
const annotationContainer = ref(null);
const svgContainer = ref(null);
const detectedItems = ref([]);
const labelRefs = ref([]);

const handleFileChange = (e) => {
  clearAll();
  const file = e.target.files[0];
  if (!file) {
    return;
  }

  const reader = new FileReader();
  reader.onload = function (e2) {
    const image = document.createElement('img');
    imageUrl.value = e2.target.result;
    image.src = e2.target.result;
    detect(image);
  };
  reader.readAsDataURL(file);
};

const onImageLoad = () => {
  // 图片加载完成后重新绘制连接线
  nextTick(() => {
    drawConnectionLines();
  });
};

const setLabelRef = (el, index) => {
  if (el) {
    labelRefs.value[index] = el;
  }
};

async function detect(img) {
  status.value = '正在分析中...';
  const output = await detector(img.src, {
    threshold: 0.5,
    percentage: true,
  });
  status.value = '分析完成';
  console.log('output :>> ', output);

  // 清空之前的结果
  detectedItems.value = [];
  clearAll();

  // 处理检测结果
  output.forEach((item, index) => {
    const color = getRandomColor();
    detectedItems.value.push({
      ...item,
      color,
      index,
    });
  });

  // 渲染标注框
  nextTick(() => {
    renderResult();
  });
}

function renderResult() {
  clearAll();
  // detectedItems.value.forEach(renderBox);
  drawConnectionLines();
}

function renderBox(item) {
  const { box, color } = item;
  const { xmax, xmin, ymax, ymin } = box;

  const boxElement = document.createElement('div');
  boxElement.className = 'absolute border-1 border-solid';
  Object.assign(boxElement.style, {
    borderColor: color,
    left: 100 * xmin + '%',
    top: 100 * ymin + '%',
    width: 100 * (xmax - xmin) + '%',
    height: 100 * (ymax - ymin) + '%',
    pointerEvents: 'none',
  });

  annotationContainer.value.appendChild(boxElement);
}

function clearAll() {
  clearAnnotations();
  clearSvg();
}

function clearAnnotations() {
  if (annotationContainer.value) {
    annotationContainer.value.innerHTML = '';
  }
}
function clearSvg() {
  if (svgContainer.value) {
    const svg = svgContainer.value;
    // 清除所有连接线，保留 defs
    const defs = svg.querySelector('defs');
    svg.innerHTML = '';
    if (defs) {
      svg.appendChild(defs);
    }
  }
}

function drawConnectionLines() {
  if (!imageRef.value || !svgContainer.value || detectedItems.value.length === 0) {
    return;
  }

  const imageRect = imageRef.value.getBoundingClientRect();
  const svg = svgContainer.value;

  detectedItems.value.forEach((item, index) => {
    const { box } = item;
    const { xmax, xmin, ymax, ymin } = box;

    // 计算矩形框中心点（相对于图片）
    const centerX = (xmin + xmax) / 2;
    const centerY = (ymin + ymax) / 2;

    // 转换为像素坐标
    const pixelX = centerX * imageRect.width;
    const pixelY = centerY * imageRect.height;

    // 获取对应标签的位置
    const labelRef = labelRefs.value[index];
    if (!labelRef) return;

    const labelRect = labelRef.getBoundingClientRect();
    const containerRect = svg.getBoundingClientRect();

    // 计算标签在容器中的相对位置
    const labelX = labelRect.left - containerRect.left;
    const labelY = labelRect.top - containerRect.top + labelRect.height / 2;

    // 创建连接线
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', pixelX);
    line.setAttribute('y1', pixelY);
    line.setAttribute('x2', labelX);
    line.setAttribute('y2', labelY);
    line.setAttribute('stroke', item.color);
    line.setAttribute('stroke-width', '1');
    line.setAttribute('marker-end', 'url(#arrowhead)');
    line.setAttribute('opacity', '0.7');

    svg.appendChild(line);
  });
}

async function init() {
  detector = await pipeline('object-detection', 'Xenova/detr-resnet-50');
  status.value = '模型加载完成';
}

onMounted(() => {
  init();
});

// 监听窗口大小变化，重新绘制连接线
onMounted(() => {
  window.addEventListener('resize', () => {
    nextTick(() => {
      renderResult();
    });
  });
});

onUnmounted(() => {
  window.removeEventListener('resize', drawConnectionLines);
});
</script>

<style scoped>
/* 确保 SVG 覆盖在图片上方 */
svg {
  z-index: 10;
}

/* 标注框样式 */
.bounding-box {
  position: absolute;
  border: 2px solid;
  pointer-events: none;
}
</style>
