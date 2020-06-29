import React from 'react';
import cn from 'classnames';

import useBindActionCreators from '../../../../hooks/useBindActionCreators';
import useAppStateSelector from '../../../../hooks/useAppStateSelector';
import {togglePhotoSelect} from '../../../../store/photosSelection/photosSelectionActions';
import {SELECTORS} from '../../../../store/photosSelection/photosSelectionReducer';
import {SELECTORS as AlbumsSelectors} from '../../../../store/albums/albumsReducer';

import Tile from './Tile/Tile';
import ActionIcon from '../../../shared/components/ActionIcons/ActionIcon';
import {CheckCircleIcon, CircleIcon} from '../../../../components/Icons';

import {IPhoto} from '../../../../../server/vk/vk-api/photos/photos.types';
import bemFactory from '../../../../lib/bem-factory';
import styles from './PhotoListItem.module.scss';

const {block, element} = bemFactory('photo-list-item', styles);

interface IPhotoListItemProps {
  photo: IPhoto;
}

const PhotoListItem = (props: IPhotoListItemProps) => {
  const {photo} = props;

  const actions = useBindActionCreators({togglePhotoSelect});
  const selected = useAppStateSelector(SELECTORS.isSelected(photo.id));
  const albumsHash = useAppStateSelector(AlbumsSelectors.getAlbumsHash);
  const album = albumsHash[photo.album_id];

  const handleClick = () => {
    actions.togglePhotoSelect(photo.id);
  }

  const tileClasses = cn({
    [element('tile', 'selected')]: selected,
  })

  return <li className={block()} onClick={handleClick}>
    <Tile album={album} photo={photo} className={tileClasses} />
    <div className={element('actions')}>
      {!selected && <ActionIcon component={CircleIcon} />}
      {selected && <ActionIcon component={CheckCircleIcon} active />}
    </div>
  </li>
};

export default PhotoListItem;
