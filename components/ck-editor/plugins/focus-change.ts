import type { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic';

function TgxOnFocusChange(editor: ClassicEditor) {
  console.log('TgxOnFocusChange', editor);

  // Add a listener on the focus change.
  editor.editing.view.document.on('change:isFocused', (evt, data, isFocused) => {
    if (isFocused) {
      // Implement your logic what should happen when the editor is focused.
      console.log('editor is focused');
    }
  });
}

export default TgxOnFocusChange as any;
