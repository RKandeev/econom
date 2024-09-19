import React from "react";
import OpenHeader from "../../../components/OpenPart/Header/OpenHeader";
import styles from "../Auth.module.scss";
import { Link } from "react-router-dom";
import {useForm} from "react-hook-form";
import {apiRequest} from "../../../api";
import toast from "react-hot-toast";

function SignIn(props) {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'all',
  });


  const onSubmit = async (data) => {
    const response = await apiRequest({
      url: '/login',
      method: 'POST',
      data: data,
    })
    console.log(response)

    if (response.code === 0 && response.http_status === 200) {
      toast.success(response.mes);
    } else {
      if (response.data.email) {
        setError('email', { type: 'server', message: response.data.email[0] });
      }
      if (response.data.password) {
        setError('password', { type: 'server', message: response.data.password[0] });
      }
      toast.error(response.mes)
    }

  }

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
            <form  className={styles.login_form} onSubmit={handleSubmit(onSubmit)}>
              <input
                  type="email"
                  placeholder="Email"
                  {...register("email",{
                    required: 'Поле email обязательно',
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: 'Ведите корректный email'
                    }
                  })
                  }
              />
              {errors.email && <span className={styles.error_message}>{errors.email.message}</span>}

              <input
                  type="password"
                  placeholder="Пароль"
                  {...register("password", {
                    required: "Введите пароль",
                    minLength: {
                      value: 6,
                      message: 'Минимальная длина 6 символов'
                    }
                  })}
              />
              {errors.password && <span className={styles.error_message}>{errors.password.message}</span>}
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
