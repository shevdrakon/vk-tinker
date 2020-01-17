import React from "react";

const classNames = require('./Button.module.scss');

const Button = (props) => {
  const {text, onClick} = props
  return (
    <div className={classNames.button}>
      {text}
    </div>
  )
}

export default Button
