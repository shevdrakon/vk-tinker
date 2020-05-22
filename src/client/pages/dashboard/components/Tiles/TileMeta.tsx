import React from 'react';

import IconButton from '../../../../components/Buttons/IconButton';
import {ThreeHorizontalDotsIcon, ShareIcon} from '../../../../components/Icons';

import styles from './TileMeta.module.scss';
import bemFactory from '../../../../lib/bem-factory';

const {block, element} = bemFactory('tile-meta', styles);

const TileMeta = () => {
  return <div className={block()}>
    <div className={element('details')}>
      <div>
        <IconButton size="small">
          <ThreeHorizontalDotsIcon className={element('action-button')} />
        </IconButton>
      </div>
      <div>
        <IconButton className={element('padding')} size="small">
          <ShareIcon className={element('action-button')} size={14} />
        </IconButton>
      </div>
    </div>
  </div>
};

export default TileMeta;
