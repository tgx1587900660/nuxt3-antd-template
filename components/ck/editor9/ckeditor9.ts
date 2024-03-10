import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic';
import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';

export default class MyClassicEditor extends ClassicEditor {
  static override builtinPlugins = [
    Paragraph,
    Essentials,
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
