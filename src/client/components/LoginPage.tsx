import React from "react";
import LoginModal from "./LoginModal";
import styles from './LoginPage.module.scss';

export const LoginPage = (props) => {
  return (
    <div className={styles.login_page}>
      <LoginModal/>
    </div>
  )
}

export default LoginPage

