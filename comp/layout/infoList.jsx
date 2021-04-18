import React, { useCallback } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import styles from './infoList.module.scss';

// 详情组件
function Info({ infos = [] }) {
  const onClick = useCallback((e) => {
    e.preventDefault();
  }, []);
  return (
    <main className={styles['wrapper']}>
      <ul className={styles['nav-box']}>
        <li className={styles['nav-item']}>
          <a onClick={onClick}>热门</a>
        </li>
        <li className={styles['nav-item'] + ' ' + styles['active']}>
          <a onClick={onClick}>最新</a>
        </li>
      </ul>
      <div className={styles['list-box']}>
        <ul className={styles['list-ul']}>
          {infos.map((item) => (
            <InfoItem info={item} key={item.id} />
          ))}
        </ul>
      </div>
    </main>
  );
}

// 子项
function InfoItem({ info }) {
  const router = useRouter();
  // 跳转
  const jumpTo = useCallback(() => {
    router.push(`/detail/${info.id}`);
  }, []);
  return (
    <li className={styles['list-item']} onClick={jumpTo} key={info.id}>
      <div className={styles['info-box']}>
        <div className={styles['meta-row']}>{info.meta}</div>
        <div className={styles['title-row']}>{info.title}</div>
        <div className={styles['action-row']}>{info.action}</div>
      </div>
      <div className={styles['info-img']}>
        <Image src={info.suffix} width={70} height={70} />
      </div>
    </li>
  );
}

export default Info;
