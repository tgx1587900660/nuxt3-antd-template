<template>
  <div>
    <AppHeader :title="'在线预览 word 文档 - .docx'" :desc="'使用 docx-preview 把 .docx 转换成 HTML，然后在线预览'">
    </AppHeader>

    <div class="p-5">
      <button
        class="cursor-pointer p-1 outline-dashed outline-1 outline-blue-300 hover:text-[#006eff]"
        @click="openNewWindow">
        click here to open in new window
      </button>
    </div>
    <div id="box"></div>
  </div>
</template>

<script setup lang="ts">
import { renderAsync } from 'docx-preview';

// function getFileByUrl() {
//   return new Promise((resolve) => {
//     const str = 'https://volodymyrbaydalka.github.io/docxjs/tests/render-test/page-layout/document.docx';
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', str);
//     xhr.responseType = 'blob';
//     xhr.onload = () => {
//       if (xhr.status === 200) {
//         resolve(xhr.response);
//       }
//     };
//     xhr.send();
//   });
// }

// 读取当前文件夹下 './test_file.doc' 这个文件, 并将其转化为一个 Blob 对象
async function getFileByUrl() {
  try {
    const str = new URL('./test.docx', import.meta.url);
    const response = await fetch(str.toString());
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.blob();
  } catch (error) {
    console.error('Fetching error:', error);
    return null;
  }
}

async function convertDocxToHtml(doc: ArrayBuffer | Blob | Uint8Array | undefined) {
  if (!doc) {
    console.error('doc is empty');
    return;
  }
  const div = document.createElement('div');
  const res = await renderAsync(doc, div, undefined, {
    className: 'docx-xxxxxxxxxxxxxxxxxxxxxxx', //class name/prefix for default and document style classes
    inWrapper: true, //enables rendering of wrapper around document content
    ignoreWidth: false, //disables rendering width of page
    ignoreHeight: false, //disables rendering height of page
    ignoreFonts: false, //disables fonts rendering
    breakPages: true, //enables page breaking on page breaks
    ignoreLastRenderedPageBreak: true, //disables page breaking on lastRenderedPageBreak elements
    experimental: false, //enables experimental features (tab stops calculation)
    trimXmlDeclaration: true, //if true, xml declaration will be removed from xml documents before parsing
    useBase64URL: false, //if true, images, fonts, etc. will be converted to base 64 URL, otherwise URL.createObjectURL is used
    renderChanges: false, //enables experimental rendering of document changes (inserions/deletions)
    renderHeaders: true, //enables headers rendering
    renderFooters: true, //enables footers rendering
    renderFootnotes: true, //enables footnotes rendering
    renderEndnotes: true, //enables endnotes rendering
    renderComments: false, //enables experimental comments rendering
    debug: false, //enables additional logging
  });
  console.log('res :>> ', res);
  // console.log('div :>> ', div.innerHTML);
  return div;
}

const init = async () => {
  const docx = await getFileByUrl();
  console.log('docx :>> ', docx);
  if (!docx) {
    return;
  }
  const el = await convertDocxToHtml(docx);
  const root = document.getElementById('box');
  if (!root || !el) {
    return;
  }
  root.appendChild(el);
};
init();

const openNewWindow = async () => {
  const docx = await getFileByUrl();
  if (!docx) {
    return;
  }
  const el = await convertDocxToHtml(docx);
  const newWindow = window.open('', '_blank');
  if (!newWindow || !el) {
    return;
  }
  newWindow.document.write(
    `<html><head><title>${'这是文件名'}</title><style> html,body{margin: 0; padding: 0;} </style></head><body>`,
  );
  newWindow.document.write(el.innerHTML);
  newWindow.document.write(`</body></html>`);
  newWindow.document.close();
};
</script>

<style lang="less" scoped></style>
