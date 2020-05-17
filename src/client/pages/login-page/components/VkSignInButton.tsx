import React from 'react';
import useBindActionCreators from '../../../hooks/useBindActionCreators';

import {authorizeWithLimitedAccess} from '../../../store/session/sessionActions';

import {VkIconInSquare} from '../../../components/Icons';
import Button from '../../../components/Buttons/Button';

import styles from './VkSIgnInButton.module.scss';
import bemFactory from '../../../lib/bem-factory';
import {useHistory} from 'react-router-dom';

const {block, element} = bemFactory('vk-sign-in-button', styles);

const VkSignInButton = () => {
  const history = useHistory();
  const actions = useBindActionCreators({authorizeWithLimitedAccess});

  const handleSignInButtonClick = () => {
    actions.authorizeWithLimitedAccess({history});
  }

  return <Button className={block()} onClick={handleSignInButtonClick}>
    <VkIconInSquare size={24} />
    <span className={element('text')}>Continue with limited access</span>
  </Button>;
};

export default VkSignInButton;
