import React from "react";
import OpenHeader from "../../../components/OpenPart/Header/OpenHeader";
import styles from "../Auth.module.scss";
import { Link } from "react-router-dom";
import {useForm} from "react-hook-form";
import {apiRequest} from "../../../api";
import toast from "react-hot-toast";

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
            url: '/pass-reset-ask',
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
        <div className={`${styles.log_form_block} ${styles.forgot_pass}`}>
          <h2>Укажите Ваш E-mail для восстановления пароля</h2>

          <div className={styles.user_data_block}>
            <form className={`${styles.login_form}`}  onSubmit={handleSubmit(onSubmit)} >
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
              <input type="submit" value="Отправить" />
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default ForgotPass;
