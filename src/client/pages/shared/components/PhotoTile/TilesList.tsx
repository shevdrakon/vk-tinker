import React from 'react';
import useBindActionCreators from '../../../../hooks/useBindActionCreators';
import {fetchPhotos} from '../../../../store/photos/photosActions';
import {initAlbums} from '../../../../store/albums/albumsActions';

import TileListItemGhost from './Ghost/TileListItem.Ghost';
import TileListItem from './TileListItem';

import styles from './TilesList.module.scss';
import bemFactory from '../../../../lib/bem-factory';
import useAppStateSelector from '../../../../hooks/useAppStateSelector';
import {IDashboardPhoto, PhotosState} from '../../../../store/photos/photos.types';

const {block} = bemFactory('tiles-list', styles);

interface ITilesListProps {
  items: IDashboardPhoto[];
}

const TilesList = (props: ITilesListProps) => {
  const {items} = props;
  const {photosState} = useAppStateSelector(x => x.photos);

  const showGhost = [PhotosState.initial, PhotosState.processing].includes(photosState);
  const showPhotos = photosState === PhotosState.success && items.length > 0;

  return <ul className={block()} style={{paddingTop: 80}}>
    {showGhost && new Array(15).fill('').map((_, index) => <TileListItemGhost key={index} />)}
    {showPhotos && items.map(x => <TileListItem key={x.id} photo={x} />)}
  </ul>
};

export default TilesList;
