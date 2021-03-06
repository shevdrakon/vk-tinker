import React from 'react';
import {useLocation, matchPath} from 'react-router-dom'

import SideMenuItem from './SideMenuItem';
import {
  PhotosOutlinedIcon,
  PhotosFilledIcon,
  AlbumsOutlinedIcon,
  AlbumsFilledIcon,
  MalwareOutlinedIcon,
  MalwareFilledIcon,
} from '../../../../components/Icons';

import routes from '../../../../routes/routes';

import styles from './SideMenu.module.scss';
import bemFactory from '../../../../lib/bem-factory';
import useAppStateSelector from '../../../../hooks/useAppStateSelector';

const {block} = bemFactory('side-menu', styles);

const SideMenu = () => {
  const {pathname} = useLocation();
  const newPhotosToShow = useAppStateSelector(x => x.photos.newItemsCount);

  const isPhotos = !![routes.albumPhotos, routes.dashboard]
    .find(path => matchPath(pathname, {path, exact: true}));

  return <div className={block()}>
    <SideMenuItem title="Photos" to={routes.dashboard}
                  selected={isPhotos}
                  count={newPhotosToShow}
                  onIcon={<PhotosFilledIcon />}
                  offIcon={<PhotosOutlinedIcon />} />
    <SideMenuItem title="Albums" to={routes.albums} selected={pathname === routes.albums}
                  onIcon={<AlbumsFilledIcon />}
                  offIcon={<AlbumsOutlinedIcon />} />
    <SideMenuItem title="Spam" to={routes.spam} selected={pathname === routes.spam}
                  onIcon={<MalwareFilledIcon />}
                  offIcon={<MalwareOutlinedIcon />} />
  </div>
};

export default SideMenu;
