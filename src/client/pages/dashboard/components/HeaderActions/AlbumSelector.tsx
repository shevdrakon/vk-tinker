import React from 'react';

import {PhotoCardsIcon} from '../../../../components/Icons';
import Selector from '../../../../components/Selector/Selector';

import styles from './AlbumSelector.module.scss';
import bemFactory from '../../../../lib/bem-factory';

const {block, element} = bemFactory('album-selector', styles);

const AlbumSelector = () => {
  return <Selector className={block()}>
    <Selector.Header>
      <PhotoCardsIcon className={element('cards-icon')} />
      Album
    </Selector.Header>
    <Selector.Option>
      Option 1
    </Selector.Option>
    <Selector.Option>
      Option 2
    </Selector.Option>
  </Selector>
};

export default AlbumSelector;
