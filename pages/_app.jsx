import React from 'react';
import { ConfigProvider } from 'antd';
import zh_CN from 'antd/lib/locale/zh_CN';

import './_app.scss';
import 'antd/dist/antd.css';

// 基础组件
function App({ Component, pageProps }) {
  return (
    <ConfigProvider locale={zh_CN}>
      <div className={'page-wrapper'}>
        <Component {...pageProps} />
      </div>
    </ConfigProvider>
  );
}

export default App;
