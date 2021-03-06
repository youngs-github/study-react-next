export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json({
      id: 1,
      path: req.query.id,
      title: '2020最新：100道有答案的前端面试题（上）',
      description: [
        '网上的面试题一大堆，鱼龙混杂，一方面多数题目质量不高，另一方面有答案的很少，即使拿到面试题对自己的帮助也不大。',
        '最近我花了一些时间，为大家整理了2020年各一、二线互联网公司的前端面试题，内容包括JavaScript、算法、网络&安全、Vue、React等大量的前端知识点和相关面试题。答案和解析也整理在文中了，整理不易，麻烦各位走过路过的壮士给颗star，如果可以star fork watch三连更好，感谢😄 🙏',
        '如果大家喜欢这个系列的内容，欢迎点赞，我会根据大家的反馈，看是否继续进行整理更多有答案的面试真题。',
        '这些题还不过瘾？扫码进入前端面试星球🌍，解锁刷题神器，还可以获取 800+道前端面试题 和 一线常见面试高频考点。'
      ]
    });
  }
}
