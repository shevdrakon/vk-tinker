import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

import {login} from '../../../store/session/sessionActions';

import {PolaroidIcon} from '../../../components/icons';
import Separator from '../../../components/Separators/Separator';
import AccessTokenTextField from './AccessTokenTextField';
import VkSignInButton from './VkSignInButton';
import ContinueButton from './ContinueButton';

import styles from './LoginForm.module.scss';
import bemFactory from '../../../lib/bem-factory';

const {block, element} = bemFactory('auth-form', styles);

const LoginForm = () => {
  const dispatch = useDispatch();
  const [accessToken, setAccessToken] = useState('');
  const history = useHistory();

  const handleContinueButtonClick = () => {
    dispatch(login({accessToken, history}));
  }

  return <section className={block()}>
    <section className={element('card-layout')}>
      <div className={element('context')}>
        <PolaroidIcon size={50} />
        <span className={element('title')}>M's Treasure</span>
      </div>
      <header>
        <h1 className={element('label')}>
          Sign In
        </h1>
        <section className={element('controls')}>
          <AccessTokenTextField onChange={setAccessToken} />
          <section className={element('buttons-section')}>
            <ContinueButton onClick={handleContinueButtonClick} />
          </section>
          <Separator value="Or" />
          <VkSignInButton />
        </section>
      </header>
    </section>
  </section>
};

export default LoginForm;
