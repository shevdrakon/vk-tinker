import React from 'react';

import {PolaroidIcon} from '../../../components/icons';
import Separator from '../../../components/Separators/Separator';
import Button from '../../../components/Buttons/Button';
import AccessTokenTextField from './AccessTokenTextField';

import VkSignInButton from './VkSignInButton';

import styles from './LoginForm.module.scss';
import bemFactory from '../../../lib/bem-factory';

const {block, element} = bemFactory('login-form', styles);

const LoginForm = () => {
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
          <AccessTokenTextField />
          <section className={element('buttons-section')}>
            <Button>Continue</Button>
          </section>
          <Separator value="Or" />
          <VkSignInButton />
        </section>
      </header>
    </section>
  </section>
};

export default LoginForm;
