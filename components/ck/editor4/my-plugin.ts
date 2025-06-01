import { Plugin } from '@ckeditor/ckeditor5-core';
import type { Editor } from '@ckeditor/ckeditor5-core';

function MyPlugin1(editor: Editor) {
  console.log('MyPlugin1 初始化了');
  console.log('编辑器的实例对象是', editor);
}

class MyPlugin2 extends Plugin {
  constructor(editor: Editor) {
    super(editor);
    console.log('MyPlugin2 constructor 执行了');
  }

  init() {
    console.log('MyPlugin2 init');
    console.log('编辑器的实例对象是', this.editor);

    // 2 秒后聚焦编辑器
    setTimeout(() => {
      this.editor.focus();
      // 再过 2 秒后插入文本
      setTimeout(() => {
        this.editor.model.change((writer) => {
          const text = writer.createText('我将会在第 4 秒后被插入到编辑器中, 并且会光标被移动到编辑器的末尾');
          this.editor.model.insertContent(text);
          // 获取根节点, 并设置光标位置在末尾
          const root = this.editor.model.document.getRoot();
          if (!root) {
            return;
          }
          const position = writer.createPositionAt(root, 'end');
          writer.setSelection(position);
        });
      }, 2000);
    }, 2000);
  }
}

export { MyPlugin1, MyPlugin2 };
