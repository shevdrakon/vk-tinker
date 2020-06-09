import React from 'react';

import PhotoListItem from './PhotoListItem';
import {ISpammer} from '../../../../../server/api/violations/types';

import bemFactory from '../../../../lib/bem-factory';
import styles from './SpammerDetails.module.scss';

const {block} = bemFactory('spammer-details', styles);

interface ISpammerDetailsProps {
  spammer: ISpammer;
}

const SpammerDetails = (props: ISpammerDetailsProps) => {
  const {spammer: {photos}} = props;

  return <ul className={block()}>
    {
      photos.map(x => <PhotoListItem key={x.id} photo={x} />)
    }
  </ul>
};

export default SpammerDetails;
