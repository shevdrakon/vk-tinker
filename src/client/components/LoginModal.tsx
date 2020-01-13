import React from "react";
import classNames from './LoginModal.module.scss';

import Button from "./Button";

export const LoginModal = () => {
  return (
    <div className={classNames.login_modal}>
      <div className={classNames.login_modal__header}>
        <h4 className={classNames.login_modal__header_text}>Login</h4>
      </div>
      <div className={classNames.login_modal__body}>
        <Button
          text="GET STARTED"
        />
      </div>
    </div>
  )
}

export default LoginModal;
