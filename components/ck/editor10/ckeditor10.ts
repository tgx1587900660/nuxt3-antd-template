import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { Highlight } from './highlight';

export default class MyClassicEditor extends ClassicEditor {
  static override builtinPlugins = [
    Paragraph,
    Essentials,
    Highlight,
    // ...
  ];

  static override defaultConfig = {
    toolbar: {
      items: [
        'undo',
        'redo',
        // ...
      ],
    },
    language: 'en',
  };
}
