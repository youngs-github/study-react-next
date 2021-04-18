export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json([
      {
        id: 1,
        meta: '专栏·young·1天前·nextjs / 前端',
        title: 'webpack及node.js基础必会--path模块的常见操作',
        action: '在没有相关经验的同学，在学习webpack和使用node时...',
        suffix: '/image/1.jpg'
      },
      {
        id: 2,
        meta: '专栏·young·1天前·nextjs / 前端',
        title: 'webpack及node.js基础必会--path模块的常见操作',
        action: '在没有相关经验的同学，在学习webpack和使用node时...',
        suffix: '/image/2.jpg'
      },
      {
        id: 3,
        meta: '专栏·young·1天前·nextjs / 前端',
        title: 'webpack及node.js基础必会--path模块的常见操作',
        action: '在没有相关经验的同学，在学习webpack和使用node时...',
        suffix: '/image/3.jpg'
      },
      {
        id: 4,
        meta: '专栏·young·1天前·nextjs / 前端',
        title: 'webpack及node.js基础必会--path模块的常见操作',
        action: '在没有相关经验的同学，在学习webpack和使用node时...',
        suffix: '/image/4.jpg'
      },
      {
        id: 5,
        meta: '专栏·young·1天前·nextjs / 前端',
        title: 'webpack及node.js基础必会--path模块的常见操作',
        action: '在没有相关经验的同学，在学习webpack和使用node时...',
        suffix: '/image/1.jpg'
      },
      {
        id: 6,
        meta: '专栏·young·1天前·nextjs / 前端',
        title: 'webpack及node.js基础必会--path模块的常见操作',
        action: '在没有相关经验的同学，在学习webpack和使用node时...',
        suffix: '/image/2.jpg'
      },
      {
        id: 7,
        meta: '专栏·young·1天前·nextjs / 前端',
        title: 'webpack及node.js基础必会--path模块的常见操作',
        action: '在没有相关经验的同学，在学习webpack和使用node时...',
        suffix: '/image/3.jpg'
      },
      {
        id: 8,
        meta: '专栏·young·1天前·nextjs / 前端',
        title: 'webpack及node.js基础必会--path模块的常见操作',
        action: '在没有相关经验的同学，在学习webpack和使用node时...',
        suffix: '/image/4.jpg'
      }
    ]);
  }
}
