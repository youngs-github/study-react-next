export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json({
      id: 1,
      name: 'young',
      meta: '前端工程师|keda',
      desc: ' 爱好摸鱼',
      image: '/image/2.jpg',
      address: 'shanghai',
      activity: [
        {
          id: 1,
          name: 'young',
          meta: '前端工程师|keda',
          image: '/image/2.jpg',
          action: '关注了',
          target: '网易云音乐大前端团队'
        },
        {
          id: 2,
          name: 'young',
          meta: '前端工程师|keda',
          image: '/image/3.jpg',
          action: '关注了',
          target: '木易杨说'
        },
        {
          id: 3,
          name: 'young',
          meta: '前端工程师|keda',
          image: '/image/4.jpg',
          action: '关注了',
          target: '程序员小鹿'
        },
        {
          id: 4,
          name: 'young',
          meta: '前端工程师|keda',
          image: '/image/1.jpg',
          action: '关注了',
          target: 'Promise'
        },
        {
          id: 5,
          name: 'young',
          meta: '前端工程师|keda',
          image: '/image/2.jpg',
          action: '关注了',
          target: 'Webpack'
        }
      ]
    });
  }
}
