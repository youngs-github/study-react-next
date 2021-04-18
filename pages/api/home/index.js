export default function handler(req, res) {
  // res.setHeader('Access-Control-Allow-Origin', '*');
  // res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,PUT,DELETE');
  if (req.method === 'GET') {
    res.status(200).json([
      {
        id: 1,
        meta: '分类',
        title: `10分钟快速学不会nextjs-${Math.random().toString(36).slice(2)}`,
        action: '详情',
        suffix: '/image/1.jpg'
      },
      {
        id: 2,
        meta: '分类',
        title: `10分钟快速学不会nextjs-${Math.random().toString(36).slice(2)}`,
        action: '详情',
        suffix: '/image/2.jpg'
      },
      {
        id: 3,
        meta: '分类',
        title: `10分钟快速学不会nextjs-${Math.random().toString(36).slice(2)}`,
        action: '详情',
        suffix: '/image/3.jpg'
      },
      {
        id: 4,
        meta: '分类',
        title: `10分钟快速学不会nextjs-${Math.random().toString(36).slice(2)}`,
        action: '详情',
        suffix: '/image/4.jpg'
      },
      {
        id: 5,
        meta: '分类',
        title: `10分钟快速学不会nextjs-${Math.random().toString(36).slice(2)}`,
        action: '详情',
        suffix: '/image/1.jpg'
      },
      {
        id: 6,
        meta: '分类',
        title: `10分钟快速学不会nextjs-${Math.random().toString(36).slice(2)}`,
        action: '详情',
        suffix: '/image/2.jpg'
      },
      {
        id: 7,
        meta: '分类',
        title: `10分钟快速学不会nextjs-${Math.random().toString(36).slice(2)}`,
        action: '详情',
        suffix: '/image/3.jpg'
      },
      {
        id: 8,
        meta: '分类',
        title: `10分钟快速学不会nextjs-${Math.random().toString(36).slice(2)}`,
        action: '详情',
        suffix: '/image/4.jpg'
      }
    ]);
  }
}
