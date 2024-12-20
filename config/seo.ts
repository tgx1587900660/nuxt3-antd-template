// seo 的描述文案
export const seoDesc = {
  titleTemplate: 'nuxt3 模版',
  description:
    'nuxt3 模版 | 唐干宵 的博客| 唐干宵 的网络日志|谭竿霄 的博客|谭竿霄 的网络日志|tgx 的博客|tgx 的网络日志|使用 vitepress 搭建的个人博客',
  extraDesc:
    'nuxt3 模版 | 唐干宵 的博客| 唐干宵 的网络日志|谭竿霄 的博客|谭竿霄 的网络日志|tgx 的博客|tgx 的网络日志|使用 vitepress 搭建的个人博客',
  h1: 'nuxt3 templete 模版项目',
  ogImage: 'https://tgx1587900660.github.io/tgx-blog-vitepress/logo2.jpg',
};

// 默认的 seo 配置
export const defaultSeoDesc = {
  titleTemplate: seoDesc.titleTemplate,
  meta: [
    { name: 'title', content: seoDesc.titleTemplate },
    { name: 'h1', content: seoDesc.h1 },
    { name: 'description', content: seoDesc.description },
    { property: 'og:title', content: seoDesc.titleTemplate },
    { property: 'og:description', content: seoDesc.description },
    { property: 'og:image', content: seoDesc.ogImage },
  ],
};
