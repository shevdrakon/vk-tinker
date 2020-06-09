import React from 'react';

import LinkButton from '../../../../../components/Buttons/LinkButton';
import VkIcon from '../../../../../components/Icons/VkIcon';

import styles from './HeaderActions.module.scss';
import bemFactory from '../../../../../lib/bem-factory';
import useAppStateSelector from '../../../../../hooks/useAppStateSelector';

const {block, element} = bemFactory('header-actions', styles);

const HeaderActions = () => {
  const vkGroupUrl = useAppStateSelector(state => state.config.vkGroupUrl);

  return <ul className={block()}>
    <li className={element('item')}>
      <LinkButton className={element('link')}
                  href={vkGroupUrl}
                  variant="text" color="inherit">
        <VkIcon />
      </LinkButton>
    </li>
  </ul>
};

export default HeaderActions;
