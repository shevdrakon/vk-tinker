import React from "react";

import classNames from './Button.module.scss';

const Button = (props) => {
  const {text, onClick} = props
  return (
    <div className={classNames.button}>
      {text}
    </div>
  )
}

export default Button
