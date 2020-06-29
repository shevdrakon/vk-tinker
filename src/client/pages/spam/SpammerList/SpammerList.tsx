import React from 'react';

import SpammerListItem from './SpammerListItem';
import HappyKittyIcon from '../../../components/Icons/HappyKittyIcon';

import bemFactory from '../../../lib/bem-factory';
import styles from './SpammerList.module.scss';
import {ISpammer} from '../../../../server/api/violations/types';
import useAppStateSelector from '../../../hooks/useAppStateSelector';
import {SpammersState} from '../../../store/spammers/spammers.types';

const {block, element} = bemFactory('spammer-list', styles);

interface ISpammerListProps {
  items: ISpammer[];
}

const SpammerList = (props: ISpammerListProps) => {
  const {items} = props;
  const isEmpty = !items.length;

  const state = useAppStateSelector(x => x.spammers.spammersState);
  const loaded = state === SpammersState.success;

  return <div className={block()}>
    <div className={element('content')}>
      {
        items.map(x => <SpammerListItem key={x.user.id} spammer={x} />)
      }
      {
        loaded && isEmpty && <div className={element('empty-list')}>
          <HappyKittyIcon size={110} className={element('empty-smile')} />
          <span className={element('text')}>Hey! It seems everyone is happy as a <strong>kitten</strong>!</span>
        </div>
      }
    </div>
  </div>
};

export default SpammerList;
