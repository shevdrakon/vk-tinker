import React from 'react';
import useAppStateSelector from '../../hooks/useAppStateSelector';

import TilesList from '../shared/components/PhotoTile/TilesList';
import useBindActionCreators from '../../hooks/useBindActionCreators';
import useInfiniteHistoryPaging from './useInfiniteHistoryPaging';

import {initAlbums} from '../../store/albums/albumsActions';
import {fetchNextPagePhotos, fetchPhotos} from '../../store/photos/photosActions';
import {clearPhotoSelection} from '../../store/photosSelection/photosSelectionActions';

const DashboardPage = () => {
  const actions = useBindActionCreators({
    initAlbums,
    fetchPhotos,
    fetchNextPagePhotos,
    clearPhotoSelection
  });
  const items = useAppStateSelector(x => x.photos.items);
  const [start, page, initial] = useInfiniteHistoryPaging(items[0]);

  React.useEffect(() => {
    actions.initAlbums();
  }, []);

  React.useEffect(() => {
    if (!initial) return;

    actions.clearPhotoSelection();
    actions.fetchPhotos({start, page});
  }, [start, page, initial]);

  React.useEffect(() => {
    if (initial) return;

    actions.fetchNextPagePhotos({start, page});
  }, [page]);

  return <TilesList items={items} />
};

export default DashboardPage;
