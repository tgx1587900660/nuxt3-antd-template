import { Plugin } from '@ckeditor/ckeditor5-core';

export class Highlight extends Plugin {
  public static get pluginName() {
    return 'Highlight';
  }

  public init() {
    const editor = this.editor;
    console.log('Highlight init', editor);

    /**
     * 扩展 $text 节点，允许使用 highlight 属性。
     * $text 是 CKEditor 中表示文本的节点。
     * allowAttributes 表示允许的属性。
     */
    editor.model.schema.extend('$text', {
      allowAttributes: 'highlight',
    });

    /**
     * 将 mark标签 转换为 highlight属性。
     * model 表示模型中的属性名称。
     * view 表示视图中的标签名称。
     * 注意细节: attributeToElement 的名称看起来是反着的，因为model对于CKEditor5来说是最重要的，而HTML只是输入输出
     */
    editor.conversion.attributeToElement({
      model: 'highlight',
      view: 'mark',
    });
  }
}
