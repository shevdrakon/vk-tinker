import React from 'react';

import bemFactory from '../../../lib/bem-factory';
import styles from './SpammerList.module.scss';
import {ISpammer} from '../../../../server/api/violations/types';
import SpammerListItem from './SpammerListItem';

const {block, element} = bemFactory('spammer-list', styles);

interface ISpammerListProps {
  items: ISpammer[];
}

const SpammerList = (props: ISpammerListProps) => {
  const {items} = props;

  return <div className={block()}>
    <div className={element('content')}>
      {
        items.map(x => <SpammerListItem key={x.user.id} spammer={x} />)
      }
    </div>
  </div>
};

export default SpammerList;
