import React from 'react';
import cn from 'classnames';

import styles from './Avatar.module.scss';
import bemFactory from '../../lib/bem-factory';

const {block, element, modifier} = bemFactory('avatar', styles);

interface IAvatarProps {
  src: string;
  srcSet?: string;
  alt?: string;
  sizes?: string;
  className?: string;
  variant?: 'circle' | 'rounded' | 'square';
}

const Avatar = (props: IAvatarProps) => {
  const {alt, src, srcSet, sizes, className, variant = 'circle'} = props;

  return <div className={cn(block(), modifier(variant), className)}>
    <img
      alt={alt}
      src={src}
      srcSet={srcSet}
      sizes={sizes}
      className={element('img')}
    />
  </div>
};

export default Avatar;
