import React from 'react';
import useAppStateSelector from '../../hooks/useAppStateSelector';
import useBindActionCreators from '../../hooks/useBindActionCreators';
import {fetchSpam} from '../../store/spammers/spammersActions';

import AppHeader from '../shared/components/AppHeaders/AppHeader';
import SpammerList from './SpammerList/SpammerList';

import bemFactory from '../../lib/bem-factory';
import styles from './SpamPage.module.scss';

const {element} = bemFactory('spam-page', styles);

const SpamPage = () => {
  const actions = useBindActionCreators({fetchSpam});

  React.useEffect(() => {
    actions.fetchSpam();
  }, []);

  const items = useAppStateSelector(x => x.spammers.items);

  return <>
    <AppHeader />

    <div className={element('list-container')}>
      <SpammerList items={items} />
    </div>
  </>
};

export default SpamPage;
