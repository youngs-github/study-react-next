export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json([
      {
        id: 1,
        name: '首页',
        path: '/home',
        title: '欢迎-首页',
        keywords: 'react nextjs ssr young',
        description: '10分钟学不会nextjs'
      },
      {
        id: 2,
        name: '搜索',
        path: '/query',
        title: '欢迎-搜索',
        keywords: 'react nextjs ssr young',
        description: '10分钟学不会nextjs'
      },
      {
        id: 3,
        name: '个人',
        path: '/user',
        title: '欢迎-个人',
        keywords: 'react nextjs ssr young',
        description: '10分钟学不会nextjs'
      }
    ]);
  }
}
