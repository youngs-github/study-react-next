import React, { useCallback } from 'react';
import { Button } from 'antd';

import Header from '../../comp/layout/header';

import styles from './index.module.scss';

function User({ menus, user }) {
  const onClick = useCallback(() => console.log(Date.now()), []);
  return (
    <div className={styles.wrapper}>
      <Header menus={menus} />
      <div className={styles['user-info']}>
        <div className={styles['user-image']}>
          <img src={user.image} alt='头像' />
        </div>
        <div className={styles['user-desc']}>
          <p className={styles['desc-name']}>{user.name}</p>
          <p className={styles['desc-meta']}>{user.meta}</p>
          <p className={styles['desc-desc']}>{user.desc}</p>
        </div>
        <div className={styles['user-edit']}>
          <Button onClick={onClick}>编辑：暂不支持</Button>
        </div>
      </div>
      {user.activity.map((ac) => (
        <div className={styles.activity} key={ac.id}>
          <div className={styles['ac-image']}>
            <img src={ac.image} alt='头像' />
          </div>
          <div className={styles['ac-desc']}>
            <p className={styles['ac-name']}>
              {`${ac.name} ${ac.action} ${ac.target}`}
            </p>
            <p className={styles['ac-meta']}>{ac.meta}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

// 数据获取
export async function getStaticProps() {
  // 默认数据
  const ans = {
    props: {
      menus: [],
      user: {}
    }
  };
  const menusRes = await fetch('http://localhost:3000/api/base');
  const userRes = await fetch('http://localhost:3000/api/user');
  if (menusRes.status === 200) {
    const data = await menusRes.json();
    ans.props.menus = data || [];
  }
  if (userRes.status === 200) {
    const data = await userRes.json();
    ans.props.user = data || {};
  }
  return ans;
}

export default User;
