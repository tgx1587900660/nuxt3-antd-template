<template>
  <div class="ck-editor-wrapper">
    <div id="editor" ref="editorRef"></div>
  </div>
</template>

<script setup lang="ts">
import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic';
import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { Paragraph, ParagraphButtonUI } from '@ckeditor/ckeditor5-paragraph';
import { Bold, Italic } from '@ckeditor/ckeditor5-basic-styles';
import { Heading, HeadingButtonsUI } from '@ckeditor/ckeditor5-heading';
import { Link } from '@ckeditor/ckeditor5-link';
import { List } from '@ckeditor/ckeditor5-list';
import { Autoformat } from '@ckeditor/ckeditor5-autoformat';
import { BlockQuote } from '@ckeditor/ckeditor5-block-quote';
import { TgxPlugin1, TgxPlugin2, TgxOnFocusChange } from './plugins';

let instance: ClassicEditor | null = null;
const editorRef = useTemplateRef('editorRef');

const initEditor = () => {
  if (!editorRef.value) {
    return;
  }
  console.log(editorRef.value);
  // console.log('ClassicEditor :>> ', ClassicEditor);

  ClassicEditor.create(editorRef.value, {
    // 有执行顺序
    plugins: [
      Essentials,
      Paragraph,
      ParagraphButtonUI, // 段落按钮
      Bold,
      Italic,
      Heading,
      HeadingButtonsUI, // 标题按钮
      Link,
      List,
      Autoformat,
      BlockQuote,
      // TgxPlugin1,
      // TgxPlugin2,
      TgxOnFocusChange,
    ],
    toolbar: {
      // 工具栏是否换行显示
      shouldNotGroupWhenFull: false,
      items: [
        'undo',
        'redo',
        // 'heading',
        'paragraph',
        'heading1',
        'heading2',
        'heading3',
        'heading4',
        'heading5',
        '|',
        'bulletedList',
        'numberedList',
        // 'alignment',
        '|',
        'bold',
        'italic',
        // 'underline',
        // 'fontColor',
        // 'fontBackgroundColor',
        // 'removeFormat',
        '|',
        // 'outdent',
        // 'indent',
        '|',
        'link',
        // 'bulletedList',
        // 'imageUpload',
        // 'mediaEmbed',
        // 'blockQuote',
        '|',
        // 'insertTable',
        // '|',
        // 'insertTable',
        // 'horizontalLine',
      ],
    },
    heading: {
      options: [
        { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
        { model: 'heading1', view: { name: 'h1' }, title: 'Heading 1', class: 'ck-heading_heading1' },
        { model: 'heading2', view: { name: 'h2' }, title: 'Heading 2', class: 'ck-heading_heading2' },
        { model: 'heading3', view: { name: 'h3' }, title: 'Heading 3', class: 'ck-heading_heading3' },
        { model: 'heading4', view: { name: 'h4' }, title: 'Heading 4', class: 'ck-heading_heading4' },
        { model: 'heading5', view: { name: 'h5' }, title: 'Heading 5', class: 'ck-heading_heading5' },
        // { model: 'heading6', view: { name: 'h6' }, title: 'Heading 6', class: 'ck-heading_heading6' },
      ],
    },
    language: 'zh-cn',
  })
    .then((editor) => {
      console.log('Editor was initialized', editor);
      instance = editor;
      (window as any).ckEditor = editor;

      /**
       * 监听数据变化, 并做某些操作
       */
      instance.model.document.on('change:data', () => {
        console.log('The data has changed!');
      });

      /**
       * 改写默认enter事件
       * 默认情况下 enter 会插入一个<p>标签, shift + enter会插入一个<br>标签
       * 现在把它们进行交换
       */
      // instance.editing.view.document.on(
      //   'enter',
      //   (evt, data) => {
      //     data.preventDefault();
      //     evt.stop();
      //     // console.log('evt :>> ', evt);
      //     console.log('data :>> ', data);
      //     if (data.isSoft) {
      //       console.log('data.isSoft :>> ', data.isSoft, 'enter 插入的是 <p>');
      //       instance?.execute('enter');
      //       instance?.editing.view.scrollToTheSelection();
      //     } else {
      //       console.log('data.isSoft :>> ', data.isSoft, 'shiftEnter 插入的是 <br>');
      //       instance?.execute('shiftEnter');
      //       instance?.editing.view.scrollToTheSelection();
      //     }
      //   },
      //   { priority: 'high' },
      // );
    })
    .catch((error) => {
      console.error(error.stack);
    });
};

// 在末尾插入文本
const insertText = (text?: string) => {
  instance?.model.change((writer) => {
    const root = instance?.model.document.getRoot();
    if (!root) {
      return;
    }
    // Move selection to the end of the document.
    writer.setSelection(writer.createPositionAt(root, 'end'));
    // Execute the enter command.
    instance?.execute('enter');
    // Insert text.
    instance?.model.change((writer) => {
      instance?.model.insertContent(writer.createText(text || '这是插入在末尾的内容'));
    });
  });
};

defineExpose({
  insertText,
});

onMounted(() => {
  initEditor();
  // console.log(editorRef.value); // 使用ClientOnly时，editorRef.value为null
});
</script>

<style lang="less" scoped></style>
