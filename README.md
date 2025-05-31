# 安装使用

```bash
pnpm i # 安装依赖
pnpm dev # 运行开发
pnpm build # 打包
pnpm preview # 预览 build 后的文件
```

# 功能日志

- 初始化 nuxt 项目 (一同维护 nuxt, vue, vue-router 的版本) - 2024.03.10
- 配置 env 环境变量, 并在 .vue 文件中获得 TS 代码智能提示 - 2024.03.12
- 添加 https 启动脚本, 并测试 preview 脚本 - 2024.03.13
- 安装 tailwindcss, (一同维护 tailwindcss, postcss, autoprefixer 的版本) - 2024.03.16
- 安装 less, 使单文件组件支持 less 语法 - 2024.03.17
- 安装 ant-design-vue 依赖, (一同维护 @ant-design-vue/nuxt, ant-design-vue 的版本) - 2024.03.17
- 安装 @ant-design/icons-vue 依赖, (一同维护 @ant-design/icons-vue 的版本) - 2024.03.17
- 安装 colorthief 依赖，并完成一个 demo, (一同维护 colorthief 的版本) - 2024.03.24
- 实现 tailwindcss 类名保存时自动排序功能, (一同维护 prettier 和 prettier-plugin-tailwindcss 的版本) - 2024.03.30
- 实现 git 钩子注册 (一同维护 husky, lint-staged 的版本) - 2024.03.30
- 添加 @pinia/nuxt 模块，利用 pinia store + 点击事件 实现 layout 动态切换 (一同维护 @pinia/nuxt 的版本) - 2024.04.01
- 使用纯 css 实现自定义单选框样式 - 2024.04.11
- 依赖图片的尺寸大小不同，实现 flex 异形布局 - 2024.04.11
- onErrorCaptured 全局钩子函数捕获错误 + 惰性函数 - 2024.04.12
- contenteditable(可编辑元素) + Clipboard API 实现自定义复制粘贴文本/图片 - 2024.04.13
- 解决 tailwindcss 在 css 中的 Unknown at rule 警告问题 - 2024.08.01
- 实现等比缩放的盒子 + 布局更新 - 2024.08.20
- 实现 pdf 在线预览功能, (一同维护 pdfjs-dist 的版本) - 2024.08.24
- 实现 docx 在线预览功能, (一同维护 docx-preview 的版本) - 2024.08.27
- 添加 浏览器小窗口新开 tab 功能 - 2024.09.02
- 实现 数字滚动动效 - 2024.09.08
- 解决 元素的 hover 抖动问题 - 2024.11.25
- 添加 邮件发送功能 (一同维护 nodemailer, @types/nodemailer 的版本) - 2025.02.18
- 解决 iconfont 图标在刷新页面后的闪烁问题, (一同维护 @nuxt/icon 的版本) - 2025.02.18
- 实现 歌词滚动功能 - 2025.04.18
- 实现 视频关键帧提取功能 - 2025.04.21
- 实现 抛物线飞跃动画特效 - 2025.05.05
- ck-editor5 富文本编辑器版本调整到37.1.0, (一同维护 所有@ckeditor/ckeditor5 开头系列的版本) - 2025.05.24
  - 1.初始化一个最基本的富文本
    - 添加 @ckeditor/ckeditor5-theme-lark 为vite插件
    - 编写ck-editor/index.vue组件，使用的时候注意用client-only包裹
    - @ckeditor/ckeditor5-editor-classic 用于创建editor实例
    - @ckeditor/ckeditor5-essentials 和 @ckeditor/ckeditor5-paragraph 提供基础能力，如写入数据、回车换行、撤销等
    - @ckeditor/ckeditor5-basic-styles 提供基本格式功能，如粗体(bold)、斜体(italic)等
    - @ckeditor/ckeditor5-core 提供ts类型, 核心功能，如数据模型、事件系统等
    - @ckeditor/ckeditor5-utils 提供ts类型和工具函数
- 新增 lodash-es 依赖, (一同维护 lodash-es, @types/lodash-es 的版本) - 2025.05.31
