import React, { useContext } from 'react';

import {useForm} from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

import {apiRequest} from '../../../api';
import OpenHeader from '../../../components/OpenPart/Header/OpenHeader';
import { Context } from '../../../Context';

import styles from '../Auth.module.scss';

function SignIn() {
  const {setUserInfo, setStartTestResults, setShowStartModal} = useContext(Context);

  const navigate = useNavigate();

  const saveTestingResults = async () => {
    let data = {
      num1: localStorage.getItem('firstTestResult'),
      num2: localStorage.getItem('secondTestResult1'),
      num3: localStorage.getItem('secondTestResult2'),
      token: localStorage.getItem('token'),
    };

    const response = await apiRequest({
      data,
      method: 'POST',
      url: '/set-start-test',
    });

    if (response.code === 0 && response.http_status === 200) {
      setStartTestResults({
        num1: localStorage.getItem('firstTestResult'),
        num2: localStorage.getItem('secondTestResult1'),
        num3: localStorage.getItem('secondTestResult2')
      });
      navigate('/');
    } else {
      toast.error(response.mes);
    }
  };

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
      data: data,
      method: 'POST',
      url: '/login',
    });

    if (response.code === 0 && response.http_status === 200) {
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('userName', response.data.name);
      localStorage.setItem('userEmail', response.data.email);
      setUserInfo({email: response.data.email, name: response.data.name});
      saveTestingResults();
      response.data.show_it === 1? setShowStartModal(true) : setShowStartModal(false);
    } else {
      if (response.data.email) {
        setError('email', { message: response.data.email[0], type: 'server' });
      }
      if (response.data.password) {
        setError('password', { message: response.data.password[0], type: 'server' });
      }
      toast.error(response.mes);
    }
  };

  return (
    <>
      <OpenHeader />
      <section className={styles.log_form_sect}>
        <div className={styles.log_form_block}>
          <h2>Вход</h2>
          <h3>
            Нет аккаунта? <Link to="/SignUp">Зарегистрироваться</Link>
          </h3>
          <div className={styles.user_data_block}>
            <form className={styles.login_form} onSubmit={handleSubmit(onSubmit)}>
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
                    message: 'Минимальная длина 6 символов',
                    value: 6
                  },
                  required: 'Введите пароль'
                })}
              />
              {errors.password && <span className={styles.error_message}>{errors.password.message}</span>}
              <Link className={styles.forgot_password} to="/ForgotPass">
                Забыли пароль?
              </Link>
              <input type="submit" value="Войти" />
              <p style={{opacity: '0', pointerEvents: 'none'}}>Нажимая кнопку, соглашаюсь с условиями обработки данных</p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default SignIn;
