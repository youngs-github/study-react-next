import React from 'react';

import Header from '../../comp/layout/header';
import InfoList from '../../comp/layout/infoList';

import styles from './index.module.scss';

// 首页
function Home({ menus, infos }) {
  return (
    <div className={styles.wrapper}>
      <Header menus={menus} />
      <InfoList infos={infos} />
    </div>
  );
}

// 获取数据
export async function getStaticProps() {
  // 默认数据
  const ans = {
    props: {
      menus: [],
      infos: []
    }
  };
  const menusRes = await fetch('http://localhost:3000/api/base');
  const infosRes = await fetch('http://localhost:3000/api/home');
  if (menusRes.status === 200) {
    const data = await menusRes.json();
    ans.props.menus = data || [];
  }
  if (infosRes.status === 200) {
    const data = await infosRes.json();
    ans.props.infos = data || {};
  }
  return ans;
}

export default Home;
