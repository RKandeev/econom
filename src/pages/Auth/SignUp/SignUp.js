import React from "react";
import styles from "../Auth.module.scss";
import OpenHeader from "../../../components/OpenPart/Header/OpenHeader";
import { Link } from "react-router-dom";
import {FormProvider, useFieldArray, useForm} from 'react-hook-form';
import {apiRequest} from "../../../api";
import toast from "react-hot-toast";

function SignUp(props) {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    mode: 'all',
  });

  const password = watch("password")

  const onSubmit = async (data) => {
    const response = await apiRequest({
      url: '/user-register',
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
        if (response.data.username) {
            setError('username', { type: 'server', message: response.data.username[0] });
        }
      toast.error(response.mes)
    }

  }


  return (
    <>
      <OpenHeader />
      <section className={styles.log_form_sect}>
        <div className={styles.log_form_block}>
          <h2>Регистрация</h2>
          <h3>
            У вас уже есть аккаунт? <Link to="/SignIn">Войти</Link>
          </h3>
          <div className={styles.user_data_block}>
            <form className={styles.login_form} onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Ваше имя" {...register("username",{ required: "Поле имя обязательно" } )} />
                {errors.username&& <span className={styles.error_message} >{errors.username.message}</span>}

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

                <input
                  type="password"
                  placeholder="Подтвердить пароль"
                  {...register("confirmPassword",{
                    required: "Подтвердите пароль",
                    validate: (value) =>
                        value === password || 'Пароли не совпадают'
                  })}
                />
                {errors.confirmPassword && <span className={styles.error_message}>{errors.confirmPassword.message}</span>}

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
