import React from 'react';
import cn from 'classnames';

import {PolaroidIcon} from '../../../components/icons';

import styles from './LogoSection.module.scss';
import bemFactory from '../../../lib/bem-factory';

const {block, element} = bemFactory('logo-section', styles);

interface ILogoSectionProps {
  className?: string;
}

const LogoSection = (props: ILogoSectionProps) => {
  const {className} = props;
  const classes = cn(block(), className);

  return <div className={classes}>
    <div className={element('container')}>
      <div className={element('context')}>
        <div className={element('context-header')}>
          <PolaroidIcon size={100} />
          <h1 className={element('title')}>
            M's Treasure
          </h1>
        </div>
        <p className={element('context-copy')}>
          Please sign in
        </p>
      </div>
    </div>
  </div>
};

export default LogoSection;
