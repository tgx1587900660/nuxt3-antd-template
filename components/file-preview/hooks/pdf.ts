// 封装 pdf.js 库的hook
// import * as pdfjs from 'pdfjs-dist';
// pdfjs.GlobalWorkerOptions.workerSrc = new URL('../build/pdf.worker.min.js', import.meta.url);
// import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.min.mjs';
// pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

export const usePdfJs = () => {
  async function getPdfJs() {
    const pdfjs = await import('pdfjs-dist');
    const workerSrc = new URL('pdfjs-dist/build/pdf.worker.min.mjs', import.meta.url);
    // console.log('workerSrc :>> ', workerSrc.toString());
    pdfjs.GlobalWorkerOptions.workerSrc = workerSrc.toString();
    return pdfjs;
  }

  return {
    getPdfJs,
    // getDocument: pdfjs.getDocument,
  };
};
