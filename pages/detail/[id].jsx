import React from 'react';

import Header from '../../comp/layout/header';

import styles from './index.module.scss';

function Detail({ menus, detail }) {
  return (
    <div className={styles.wrapper}>
      <Header menus={menus} />
      <div className={styles.description}>
        <p>path: {detail.path}</p>
        <p>title: {detail.title}</p>
        {detail.description?.map((s, i) => (
          <p key={i}>{s}</p>
        ))}
      </div>
    </div>
  );
}

// 获取数据
export async function getServerSideProps({ params }) {
  // 默认数据
  const ans = {
    props: {
      menus: [],
      detail: {}
    }
  };
  const menusRes = await fetch('http://localhost:3000/api/base');
  const detailRes = await fetch(
    'http://localhost:3000/api/detail?id=' + params.id
  );
  if (menusRes.status === 200) {
    const data = await menusRes.json();
    ans.props.menus = data || [];
  }
  if (detailRes.status === 200) {
    const data = await detailRes.json();
    ans.props.detail = data || {};
  }
  return ans;
}

export default Detail;
