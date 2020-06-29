import React from 'react';
import {useParams} from 'react-router-dom';

import TilesList from '../shared/components/PhotoTile/TilesList';
import useBindActionCreators from '../../hooks/useBindActionCreators';
import useAppStateSelector from '../../hooks/useAppStateSelector'

import {fetchAlbumPhotos} from '../../store/photos/photosActions';
import {initAlbums} from '../../store/albums/albumsActions';
import {clearPhotoSelection} from '../../store/photosSelection/photosSelectionActions';

const AlbumPhotoPage = () => {
  const actions = useBindActionCreators({fetchAlbumPhotos, initAlbums, clearPhotoSelection});
  const {albumId} = useParams();

  React.useEffect(() => {
    actions.clearPhotoSelection();
    actions.initAlbums();
    actions.fetchAlbumPhotos({albumId});
  }, [albumId]);

  const items = useAppStateSelector(x => x.photos.items);

  return <TilesList items={items} />
};

export default AlbumPhotoPage;
