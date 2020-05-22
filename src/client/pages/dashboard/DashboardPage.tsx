import React from 'react';

import Header from './components/Header';
import SideMenu from './components/SideMenu/SideMenu';

import bemFactory from '../../lib/bem-factory';
import styles from './DashboardPage.module.scss';
import TileListItem from './components/Tiles/TileListItem';

const urls = [
  'https://sun9-10.userapi.com/c7001/v7001979/569f4/h0DUjzx5chs.jpg',
  'https://sun9-51.userapi.com/SXu5U4i-uTJmy7h4-y2-aNx801jO7nFWs0CJzw/FMSolhYNwyw.jpg',
  'https://sun9-49.userapi.com/c7001/v7001042/53c5d/ylSkIxGF8nc.jpg',
  'https://sun9-26.userapi.com/c7001/v7001703/57308/HJ5cwesXzvM.jpg',
  'https://sun9-10.userapi.com/c7001/v7001413/5aaa7/NYpp0seFAQ4.jpg',
  'https://sun9-7.userapi.com/c7001/v7001698/55bed/6ufF6gz7ySU.jpg',
  'https://sun9-55.userapi.com/c7001/v7001698/55be6/FaGIaaL66nE.jpg',
  'https://sun9-63.userapi.com/M08cy36D6710iPvI0umb_VEChCO4-tYBk4cm3Q/TqtKexVC13E.jpg',
  'https://sun9-12.userapi.com/c7001/v7001616/527f7/BacGyRHbJvA.jpg',
  'https://sun9-56.userapi.com/UV6ovrGNGbenDK2dGLBh-TAWw5c9Mtmr3QFdlg/cM9R4YnkjJQ.jpg',
  'https://sun9-16.userapi.com/c7001/v7001006/55c05/BUHzF_anJHk.jpg',
  'https://sun9-45.userapi.com/c7001/v7001006/55bfc/Kil2zLSspkg.jpg',
  'https://sun9-55.userapi.com/iKy5xpL2Z5yxX9nhEIENOCa7XvKWVCc_PM165w/P9TaHVVv78s.jpg'
];

const {element} = bemFactory('dashboard-page', styles);

const DashboardPage = () => {
  return <>
    <Header />
    <SideMenu />

    <ul className={element('tiles-list')} style={{paddingTop: 80}}>
      {
        urls.map(url => <TileListItem url={url} />)
      }
    </ul>
  </>
};

export default DashboardPage;
