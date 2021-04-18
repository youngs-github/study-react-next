module.exports = {
  webpack: (config, { isServer }) => {
    // 配置修改
    return config;
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true
      }
    ];
  }
};
