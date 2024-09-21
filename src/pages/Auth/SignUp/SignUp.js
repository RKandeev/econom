import React from 'react';

import { useForm} from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

import {apiRequest} from '../../../api';
import OpenHeader from '../../../components/OpenPart/Header/OpenHeader';

import styles from '../Auth.module.scss';

function SignUp() {

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues: {
      confirmPassword: '',
      email: '',
      password: '',
      username: '',
    },
    mode: 'all',
  });

  const password = watch('password');

  const onSubmit = async (data) => {
    const response = await apiRequest({
      data: data,
      method: 'POST',
      url: '/user-register',
    });

    if (response.code === 0 && response.http_status === 200) {
      toast.success(response.mes);
      navigate('/SignIn');
    } else {
      if (response.data.email) {
        setError('email', { message: response.data.email[0], type: 'server' });
      }
      if (response.data.password) {
        setError('password', { message: response.data.password[0], type: 'server' });
      }
      if (response.data.username) {
        setError('username', { message: response.data.username[0], type: 'server' });
      }
      toast.error(response.mes);
    }

  };

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
              <input placeholder="Ваше имя" type="text" {...register('username',{ required: 'Поле имя обязательно' } )} />
              {errors.username&& <span className={styles.error_message} >{errors.username.message}</span>}

              <input
                placeholder="Email"
                type="email"
                {...register('email',{
                  pattern: {
                    message: 'Ведите корректный email',
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
                  },
                  required: 'Поле email обязательно'
                })
                }
              />
              {errors.email && <span className={styles.error_message}>{errors.email.message}</span>}

              <input
                placeholder="Пароль"
                type="password"
                {...register('password', {
                  minLength: {
                    message: 'Минимальная длина 8 символов',
                    value: 8
                  },
                  required: 'Введите пароль'
                })}
              />
              {errors.password && <span className={styles.error_message}>{errors.password.message}</span>}

              <input
                placeholder="Подтвердить пароль"
                type="password"
                {...register('confirmPassword',{
                  required: 'Подтвердите пароль',
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
