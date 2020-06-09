import React from 'react';
import useBindActionCreators from '../../../../hooks/useBindActionCreators';
import {initAlbums} from '../../../../store/albums/albumsActions';

import TileListItem from './TileListItem';
import TileListItemGhost from './Ghost/TileListItem.Ghost';

import styles from './TilesList.module.scss';
import bemFactory from '../../../../lib/bem-factory';
import useAppStateSelector from '../../../../hooks/useAppStateSelector';
import {AlbumsState} from '../../../../store/albums/albums.types';

const {block} = bemFactory('tiles-list', styles);

const TilesList = () => {
  const actions = useBindActionCreators({initAlbums});
  const {albumsState, items} = useAppStateSelector(x => x.albums);

  const showGhost = [AlbumsState.initial, AlbumsState.processing].includes(albumsState);
  const showAlbums = albumsState === AlbumsState.success && items.length > 0;

  React.useEffect(() => {
    actions.initAlbums();
  }, []);

  return <ul className={block()} style={{paddingTop: 80}}>
    {showGhost && new Array(28).fill('').map((_, index) => <TileListItemGhost key={index} />)}
    {showAlbums && items.map(x => <TileListItem key={x.id} album={x} />)}
  </ul>
};

export default TilesList;
