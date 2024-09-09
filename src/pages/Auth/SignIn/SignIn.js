import React from "react";
import OpenHeader from "../../../components/OpenPart/Header/OpenHeader";
import styles from "../Auth.module.scss";
import { Link } from "react-router-dom";

function SignIn(props) {
  return (
    <>
      <OpenHeader />
      <section className={styles.log_form_sect}>
        <div className={styles.log_form_block}>
          <h2>Авторизация</h2>
          <h3>
            Нет аккаунта? <Link to="/SignUp">Зарегистрироваться</Link>
          </h3>
          <div className={styles.user_data_block}>
            <form action="" className={styles.login_form}>
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Пароль" required />
              <Link to="/ForgotPass" className={styles.forgot_password}>
                Забыли пароль?
              </Link>
              <input type="submit" value="Войти" />
              <p>Нажимая кнопку, соглашаюсь с условиями обработки данных</p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default SignIn;
