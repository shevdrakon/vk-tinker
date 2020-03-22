import React from 'react';
import cn from 'classnames';

import LogoSection from './components/LogoSection';
import LoginForm from './components/LoginForm';

import getCanvasImage from './getCanvasImage';
import bemFactory from '../../lib/bem-factory';
import styles from './LoginPage.module.scss';

const {block, element, modifier} = bemFactory('canvas', styles);

const LoginPage = () => {
  const canvasImageName = getCanvasImage();
  const canvasClasses = cn(block(), modifier(canvasImageName));

  return <div className={canvasClasses}>
    <section className={element('background')}>
      <section className={element('grid')}>
        <LogoSection className={element('logo-section')} />
        <LoginForm />
      </section>
    </section>
  </div>
};

export default LoginPage;
