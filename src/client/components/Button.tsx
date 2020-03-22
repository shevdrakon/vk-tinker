import React from 'react';
import bemFactory from '../lib/bem-factory';

const styles = require('./Button.module.scss');

const Button = (props) => {
  const {text, onClick} = props;
  const {block} = bemFactory('button', styles);

  return (
    <div className={block()}>
      {text}
    </div>
  )
};

export default Button
