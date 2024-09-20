import React from 'react';

import {useForm} from 'react-hook-form';
import toast from 'react-hot-toast';

import {apiRequest} from '../../../api';
import OpenHeader from '../../../components/OpenPart/Header/OpenHeader';

import styles from '../Auth.module.scss';

function ForgotPass(props) {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
    },
    mode: 'all',
  });

  const onSubmit = async (data) => {
    const response = await apiRequest({
      data: data,
      method: 'POST',
      url: '/pass-reset-ask',
    });

    console.log(response);

    if (response.code === 0 && response.http_status === 200) {
      toast.success(response.mes);
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
        <div className={`${styles.log_form_block} ${styles.forgot_pass}`}>
          <h2>Укажите Ваш E-mail для восстановления пароля</h2>

          <div className={styles.user_data_block}>
            <form className={`${styles.login_form}`} onSubmit={handleSubmit(onSubmit)} >
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
              <input type="submit" value="Отправить" />
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default ForgotPass;
