import React from 'react';

import useAppStateSelector from '../../../../hooks/useAppStateSelector';

import {ImageLazyLoadingContextProvider} from '../../../../ImageLazyLoading/ImageLazyLoadingContext';
import TileListItemGhost from './Ghost/TileListItem.Ghost';
import TileListItem from './TileListItem';
import LinearProgress from '../../../../components/Progress/LinearProgress';

import {IDashboardPhoto, PhotosState} from '../../../../store/photos/photos.types';

import styles from './TilesList.module.scss';
import bemFactory from '../../../../lib/bem-factory';

const {block, element} = bemFactory('tiles-list', styles);

interface ITilesListProps {
  items: IDashboardPhoto[];
}

const TilesList = (props: ITilesListProps) => {
  const {items} = props;
  const {photosState} = useAppStateSelector(x => x.photos);

  const showGhost = [PhotosState.initial, PhotosState.processing].includes(photosState);
  const showPhotos = [PhotosState.success, PhotosState.fetchingNextPage].includes(photosState) && items.length > 0;
  const isFetchingNext = photosState === PhotosState.fetchingNextPage;

  return <div className={block()}>
    <ImageLazyLoadingContextProvider>
      <ul className={element('list')} style={{paddingTop: 80}}>
        {showGhost && new Array(20).fill('').map((_, index) => <TileListItemGhost key={index} />)}
        {showPhotos && items.map(x => <TileListItem key={x.id} photo={x} />)}
      </ul>
    </ImageLazyLoadingContextProvider>
    {isFetchingNext && <LinearProgress />}
  </div>
};

export default TilesList;
