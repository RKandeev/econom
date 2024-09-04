import React from "react";
import styles from "../Auth.module.scss";
import OpenHeader from "../../../components/OpenPart/Header/OpenHeader";

function SignUp(props) {
  return (
    <>
      <OpenHeader />
      <section className={styles.log_form_sect}>
        <div className={styles.log_form_block}>
          <h2>Регистрация</h2>
          <h3>
            У вас уже есть аккаунт? <a>Войти</a>
          </h3>
          <div className={styles.user_data_block}>
            <form action="" className={styles.login_form}>
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Пароль" required />
              <input
                type="password"
                placeholder="Подтвердить пароль"
                required
              />
              <input type="text" placeholder="Ваше имя" required />
              <input type="submit" value="Зарегистрироваться" />
              <p>Нажимая кнопку, соглашаюсь с условиями обработки данных</p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default SignUp;
