import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic';
import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
import { Bold, Italic, Underline, Strikethrough, Code, Subscript, Superscript } from '@ckeditor/ckeditor5-basic-styles';
import { Link } from '@ckeditor/ckeditor5-link';
import { Heading } from '@ckeditor/ckeditor5-heading';
import { List } from '@ckeditor/ckeditor5-list';
import { BlockQuote } from '@ckeditor/ckeditor5-block-quote';
import { Autoformat } from '@ckeditor/ckeditor5-autoformat';
import { Image, ImageToolbar, ImageCaption, ImageResize, ImageStyle } from '@ckeditor/ckeditor5-image';

export default class MyClassicEditor extends ClassicEditor {
  static override builtinPlugins = [
    Paragraph,
    Essentials,
    Bold, // 提供 'bold'
    Italic, // 提供 'italic'
    Underline, // 'underline'
    Strikethrough, // 提供 strikethrough
    Code, // 提供 'code'
    Subscript, // 提供 'subscript'
    Superscript, // 提供 'superscript'
    Link, // 提供 'link'
    Heading, // 提供 'heading'
    List, // 提供 'bulletedList' 和 'numberedList'
    BlockQuote, // 提供 'blockQuote'
    Autoformat, // 自动格式化
    Image, // 提供图片基础能力, 比如允许复制图片进入编辑器
    ImageToolbar, // 提供 image.toolbar
    ImageCaption, // 提供 image.toolbar.toggleImageCaption
    ImageResize, // 提供 image.toolbar.toggleImageCaption
    ImageStyle,
    // ImageUpload, // TODO 提供 'insertImage' 和 'image.insert'
  ];

  static override defaultConfig = {
    // 配置工具栏的按钮。可以使用数组，也可以使用一个对象
    // toolbar: ['heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote', 'undo', 'redo'],
    // 我这里使用对象形式来配置
    toolbar: {
      items: [
        'heading',
        '|',
        'bold',
        'italic',
        'underline',
        'strikethrough',
        'code',
        'subscript',
        'superscript',
        '|',
        'link',
        'bulletedList',
        'numberedList',
        'blockQuote',
        '|',
        // 'resizeImage', // 也可以在这
        // 'insertImage',
      ],
    },
    image: {
      // 选中图片时出现的菜单
      toolbar: [
        'imageTextAlternative', // 设置图片的 alt 属性
        'toggleImageCaption', // 设置图片底部的 描述文本
        '|',
        {
          name: 'imageStyle:pictures',
          title: 'Style',
          items: ['imageStyle:alignBlockLeft', 'imageStyle:block', 'imageStyle:alignBlockRight'],
          defaultItem: 'imageStyle:block',
        },
        'imageStyle:inline',
        'imageStyle:side',
        'imageStyle:alignLeft',
        'imageStyle:alignRight',
        'imageStyle:alignCenter',
        '|',
        'resizeImage', // 设置图片大小比例
        '|',
        // 'linkImage',
      ],
      // resizeImage 配置项
      resizeOptions: [
        { name: 'resizeImage:original', value: null, label: 'Original' },
        { name: 'resizeImage:custom', value: 'custom', label: 'Custom' },
        { name: 'resizeImage:10', value: '10', label: '10%' },
        { name: 'resizeImage:20', value: '20', label: '20%' },
        { name: 'resizeImage:25', value: '25', label: '25%' },
        { name: 'resizeImage:30', value: '30', label: '30%' },
        { name: 'resizeImage:40', value: '40', label: '40%' },
        { name: 'resizeImage:45', value: '45', label: '45%' },
        { name: 'resizeImage:50', value: '50', label: '50%' },
        { name: 'resizeImage:60', value: '60', label: '60%' },
        { name: 'resizeImage:70', value: '70', label: '70%' },
        { name: 'resizeImage:75', value: '75', label: '75%' },
        { name: 'resizeImage:80', value: '80', label: '80%' },
        { name: 'resizeImage:90', value: '90', label: '90%' },
        { name: 'resizeImage:100', value: '100', label: '100%' },
      ],
      styles: {
        // options: [
        //   {
        //     name: 'side',
        //     title: 'Side image',
        //     className: 'image-side',
        //     modelElements: ['imageBlock'],
        //   },
        //   {
        //     name: 'margin-left',
        //     title: 'Image on left margin',
        //     className: 'image-margin-left',
        //     modelElements: ['imageInline'],
        //   },
        //   {
        //     name: 'margin-right',
        //     title: 'Image on right margin',
        //     className: 'image-margin-right',
        //     modelElements: ['imageInline'],
        //   },
        //   { name: 'inline' },
        //   {
        //     name: 'block',
        //     title: 'Centered image',
        //   },
        // ],
      },
      // Configuration.
      // insert: {
      //   // 默认配置
      //   integrations: ['upload', 'assetManager', 'url'],
      //   // 如果不设置，默认是 'block'
      //   type: 'auto', // 'block', 'inline', 'auto'
      // },
    },
    language: 'en',
  };
}
