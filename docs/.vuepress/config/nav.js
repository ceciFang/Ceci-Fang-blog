// nav
module.exports = [
  { text: '首页', link: '/' },
  {
    text: '前端',
    link: '/web/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
      {
        text: 'Web 三剑客',
        items: [
          { text: 'HTML', link: '/pages/3dbf66/' },
          { text: 'CSS', link: '/pages/9fb2d5/' },
          { text: 'JavaScript', link: '/pages/58f512/' },
        
        ],
      },
      {
        text: '其他',
        items: [
          { text: 'ES6', link: '/pages/29136e/' },
          { text: '算法', link: '/pages/fad137/' },
          { text: '计算机网络', link: '/pages/62b0be/' },
          { text: '浏览器', link: '/pages/4e9cb9/' },
          { text: '前端性能优化', link: '/pages/4e9cb9/' },
        ],
      },
    ],
  },
  {
    text: '后端',
    link: '/ui/',
    items: [
      // { text: 'HTML', link: '/pages/8309a5b876fc95e3/' },
      // { text: 'CSS', link: '/pages/0a83b083bdf257cb/' },
    ],
  },
  {
    text: '技术',
    link: '/technology/',
    items: [
      { text: '技术文档', link: '/pages/9a7ee40fc232253e/' },
      { text: 'GitHub技巧', link: '/pages/538ee7/' },
      // { text: 'Nodejs', link: '/pages/117708e0af7f0bd9/' },
      { text: '博客搭建', link: '/pages/41f87d890d0a02af/' },
    ],
  },
  {
    text: '更多',
    link: '/more/',
    items: [
      { text: '学习', link: '/pages/f2a556/' },
      { text: '面试', link: '/pages/aea6571b7a8bae86/' },
      // { text: '心情杂货', link: '/pages/2d615df9a36a98ed/' },
      // { text: '实用技巧', link: '/pages/baaa02/' },
      // { text: '友情链接', link: '/friends/' },
    ],
  },
  { text: '关于', link: '/about/' },
  {
    text: '收藏',
    link: '/pages/beb6c0bd8a66cea6/',
    // items: [
    //   { text: '网站', link: '/pages/beb6c0bd8a66cea6/' },
    //   { text: '资源', link: '/pages/eee83a9211a70f9d/' },
    //   { text: 'Vue资源', link: '/pages/12df8ace52d493f6/' },
    // ],
  },
  {
    text: '索引',
    link: '/archives/',
    items: [
      { text: '分类', link: '/categories/' },
      { text: '标签', link: '/tags/' },
      { text: '归档', link: '/archives/' },
    ],
  },
]
