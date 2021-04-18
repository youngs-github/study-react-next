import React, { useCallback } from 'react';
import Link from 'next/link';
import Head from 'next/head';
// import Image from 'next/image';
import { useRouter } from 'next/router';

import styles from './header.module.scss';

// 页面header组件
function Header({ menus = [] }) {
  const { pathname } = useRouter();
  // 匹配路由路径
  const matchClass = useCallback((menu, clazz) => {
    return new RegExp(menu.path).test(pathname) ? ' ' + clazz : '';
  }, []);
  // 修改标签名称
  const matchMenu = menus.find((menu) => new RegExp(menu.path).test(pathname));
  return (
    <div className={styles.box}>
      <Head>
        <title>{matchMenu?.title || '欢迎-详情'}</title>
        <meta
          name={'keywords'}
          content={matchMenu?.keywords || 'react nextjs ssr'}
        />
        <meta
          name={'description'}
          content={matchMenu?.description || '10分钟学不会nextjs'}
        />
      </Head>
      <header className={styles.wrapper}>
        <a href='/' className={styles.icon}>
          <img src={'/image/2.jpg'} width={46} height={46} />
        </a>
        <nav className={styles.link}>
          {menus.map((menu) => (
            <li
              className={styles.item + matchClass(menu, styles.active)}
              key={menu.id}
            >
              <Link href={menu.path}>{menu.name}</Link>
            </li>
          ))}
        </nav>
      </header>
    </div>
  );
}

export default Header;
