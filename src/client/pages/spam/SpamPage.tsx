import React from 'react';

import useAppStateSelector from '../../hooks/useAppStateSelector';
import useBindActionCreators from '../../hooks/useBindActionCreators';
import {fetchSpam} from '../../store/spammers/spammersActions';
import {initAlbums} from '../../store/albums/albumsActions';
import {clearPhotoSelection} from '../../store/photosSelection/photosSelectionActions';

import SpammerList from './SpammerList/SpammerList';

import bemFactory from '../../lib/bem-factory';
import styles from './SpamPage.module.scss';
import useQuery from '../../hooks/useQuery';

const {element} = bemFactory('spam-page', styles);

const SpamPage = () => {
  const query = useQuery()
  const date = query.get('date');
  const actions = useBindActionCreators({fetchSpam, clearPhotoSelection, initAlbums});

  React.useEffect(() => {
    actions.initAlbums();
  }, []);

  React.useEffect(() => {
    actions.clearPhotoSelection();
    actions.fetchSpam({date});
  }, [date]);

  const items = useAppStateSelector(x => x.spammers.items);

  return <>
    <div className={element('list-container')}>
      <SpammerList items={items} />
    </div>
  </>
};

export default SpamPage;
