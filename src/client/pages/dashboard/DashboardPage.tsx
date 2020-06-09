import React from 'react';
import useAppStateSelector from '../../hooks/useAppStateSelector';

import AppHeader from '../shared/components/AppHeaders/AppHeader';
import TilesList from '../shared/components/PhotoTile/TilesList';
import useBindActionCreators from '../../hooks/useBindActionCreators';

import {fetchPhotos} from '../../store/photos/photosActions';
import {initAlbums} from '../../store/albums/albumsActions';

const DashboardPage = () => {
  const actions = useBindActionCreators({fetchPhotos, initAlbums});

  React.useEffect(() => {
    actions.initAlbums();
    actions.fetchPhotos();
  }, []);

  const items = useAppStateSelector(x => x.photos.items);

  return <>
    <AppHeader />
    <TilesList items={items} />
  </>
};

export default DashboardPage;
