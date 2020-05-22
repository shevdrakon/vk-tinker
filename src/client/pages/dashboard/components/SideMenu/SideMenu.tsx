import React from 'react';

import SideMenuItem from './SideMenuItem';
import {
  PhotosOutlinedIcon,
  PhotosFilledIcon,
  AlbumsOutlinedIcon,
  AlbumsFilledIcon,
} from '../../../../components/Icons';

import styles from './SideMenu.module.scss';
import bemFactory from '../../../../lib/bem-factory';

const {block} = bemFactory('side-menu', styles);

const SideMenu = () => {
  const photosOnIcon = <PhotosFilledIcon />;
  const photosOffIcon = <PhotosOutlinedIcon />;

  const albumsOnIcon = <AlbumsFilledIcon />;
  const albumsOffIcon = <AlbumsOutlinedIcon />;

  return <div className={block()}>
    <SideMenuItem title="Photos" to="/" selected={true} onIcon={photosOnIcon} offIcon={photosOffIcon} />
    <SideMenuItem title="Albums" to="/albums" selected={false} onIcon={albumsOnIcon} offIcon={albumsOffIcon} />
  </div>
};

export default SideMenu;
