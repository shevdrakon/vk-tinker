import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {SELECTORS} from '../../../store/session/sessionSelectors';

import {authorizeWithLimitedAccess} from '../../../store/session/sessionActions';

import {VkIcon} from '../../../components/icons';
import Button from '../../../components/Buttons/Button';

import {IVkSignInButtonDispatchProps, IVkSignInButtonProps, IVkSignInButtonStateProps} from './VkSignInButton.types';

import styles from './VkSIgnInButton.module.scss';
import bemFactory from '../../../lib/bem-factory';
import {IStore} from '../../../store/types/store.types';
import {LoginState} from '../../../store/session/session.types';

const {block, element} = bemFactory('vk-sign-in-button', styles);

const VkSignInButton = (props: IVkSignInButtonProps) => {
  const {loginState, authorizeWithLimitedAccess} = props;
  const isProcessing = loginState === LoginState.processing;

  return <Button className={block()} onClick={authorizeWithLimitedAccess}>
    <VkIcon size={24} />
    <span className={element('text')}>Continue with limited access</span>
  </Button>;
};

const mapStateToProps = (state: IStore): IVkSignInButtonStateProps => {
  return {
    loginState: SELECTORS.getLoginState(state),
  };
};

const mapDispatchToProps = (dispatch): IVkSignInButtonDispatchProps => bindActionCreators({
  authorizeWithLimitedAccess,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(VkSignInButton);
