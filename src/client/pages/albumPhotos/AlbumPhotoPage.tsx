import React from 'react';
import {useParams} from 'react-router-dom';

import AppHeader from '../shared/components/AppHeaders/AppHeader';
import TilesList from '../shared/components/PhotoTile/TilesList';
import useBindActionCreators from '../../hooks/useBindActionCreators';
import {fetchAlbumPhotos} from '../../store/photos/photosActions';
import {initAlbums} from '../../store/albums/albumsActions';
import useAppStateSelector from '../../hooks/useAppStateSelector';

const AlbumPhotoPage = () => {
  const actions = useBindActionCreators({fetchAlbumPhotos, initAlbums});
  const {albumId} = useParams();

  React.useEffect(() => {
    actions.initAlbums();
    actions.fetchAlbumPhotos({albumId});
  }, [albumId]);

  const items = useAppStateSelector(x => x.photos.items);

  return <>
    <AppHeader />
    <TilesList items={items} />
  </>
};

export default AlbumPhotoPage;
