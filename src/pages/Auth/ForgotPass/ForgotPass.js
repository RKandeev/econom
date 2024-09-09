import React from "react";
import OpenHeader from "../../../components/OpenPart/Header/OpenHeader";
import styles from "../Auth.module.scss";
import { Link } from "react-router-dom";

function ForgotPass(props) {
  return (
    <>
      <OpenHeader />
      <section className={styles.log_form_sect}>
        <div className={`${styles.log_form_block} ${styles.forgot_pass}`}>
          <h2>Укажите Ваш E-mail для восстановления пароля</h2>

          <div className={styles.user_data_block}>
            <form action="" className={`${styles.login_form}`}>
              <input type="email" placeholder="Укажите свой Email" required />
              <input type="submit" value="Отправить" />
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default ForgotPass;
