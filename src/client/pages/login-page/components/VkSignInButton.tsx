import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as sessionActions from '../../../store/session/sessionActions';

import VkAuth from '../../../lib/VkAuth';
import {VkIcon} from '../../../components/icons';
import Button from '../../../components/Buttons/Button';

import styles from './VkSIgnInButton.module.scss';
import bemFactory from '../../../lib/bem-factory';

const {block, element} = bemFactory('vk-sign-in-button', styles);

const VkSignInButton = (props) => {
  const handleClick = async () => {
    //const applicationId = 7277411; // site
    const applicationId = 5737599; // standalone
    const loginStatus = await new VkAuth({applicationId}).loginAsUser();
    props.notAuthorized();
  };

  return <Button className={block()} onClick={handleClick}>
    <VkIcon size={24} />
    <span className={element('text')}>Continue with limited access</span>
  </Button>;
};

const mapDispatchToProps = dispatch => bindActionCreators(sessionActions, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(VkSignInButton);
