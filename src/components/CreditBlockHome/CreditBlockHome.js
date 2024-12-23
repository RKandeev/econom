import React, { useContext, useEffect, useRef, useState } from 'react';

import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

import LineHome from '../LineChartModeling/LineHome';
import Modal from '../Modal/Modal';
import SensorHome from '../SensorModeling/SensorHome';
import Tolt from '../Tolt/Tolt';

import help from '../../img/icon/icon__help.svg';

import styles from './CreditBlockHome.module.scss';
import { useForm } from 'react-hook-form';
import { apiRequest } from '../../api';
import toast from 'react-hot-toast';
import { Context } from '../../Context';
import { useLocation, useNavigate } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';

function CreditBlockHome(props) {
  const [addModalActive, SetAddModalActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isView, setIsView] = useState(false);
  const [calcResult, setCalcResult] = useState({});
  const calcBtnRef = useRef(null);
  const saveBtnRef = useRef(null);
  const previousValues = useRef({});
  let chartsNames = ['СРАВНИТЕЛЬНАЯ ВЫГОДА', 'ДИНАМИКА КАПИТАЛА'];

  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const currentDate = `${year}-${month}-${day}`;

  const { calcView } = useContext(Context);

  const location = useLocation();

  const navigate = useNavigate();

  if (window.outerWidth < 450) {
    chartsNames = ['1', '2'];
  }

  const {
    register,
    handleSubmit,
    trigger,
    watch,
    setError,
    reset,
    formState: { errors },
    getValues,
    setValue,
  } = useForm({
    defaultValues: {
      calc_name: '',
      duration: '',
      inflation_rate: '',
      insurance_award1: '',
      rate: '',
      sum_incr: '',
      dt: currentDate,
      sum: '',
      sum1: '',
      sum2: '',
      rate2: '',
      invest_income: '',
    },
    mode: 'all',
  });

  const values = watch();

  const hasChanged = Object.keys(values).some((key) => {
    return values[key] !== previousValues.current[key];
  });

  const setViewValuesHandler = () => {
    Object.entries(calcView).forEach(([key, value]) => {
      if (
        key === 'created_at' ||
        key === 'updated_at' ||
        key === 'user_id' ||
        key === 'id' ||
        key === 'calc_result'
      ) {
        return;
      }
      if (key === 'duration') {
        setValue(key, value / 12);
      } else {
        setValue(key, value);
      }
    });
  };

  useEffect(() => {
    if (Object.entries(calcResult).length > 0) {
      if (hasChanged) {
        saveBtnRef.current.disabled = true;
      }
    }
  }, [values]);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const calcId = searchParams.get('calcId');
    if (calcId && Object.entries(calcView).length > 0) {
      setIsView(true);
      setViewValuesHandler();
    }
  }, []);

  const calcBtnHandler = async () => {
    const isValid = await trigger();

    if (isValid) {
      previousValues.current = values;
      const formData = new FormData();

      for (const key in values) {
        if (values.hasOwnProperty(key)) {
          if (key === 'duration') {
            formData.append(key, values[key] * 12);
          } else {
            formData.append(key, values[key]);
          }
        }
      }
      setIsLoading(true);

      const response = await apiRequest({
        data: formData,
        method: 'POST',
        url: '/fin-model/buy-or-rent',
      });

      setTimeout(() => {
        if (!response) {
          setIsLoading(false);
          toast.error(
            'Ошибка в ответе сервера. Не удалось прочитать ответ сервера',
          );

          return;
        }

        if (response.code === 0 && response.http_status === 200) {
          setIsLoading(false);
          saveBtnRef.current.disabled = false;
          setCalcResult(response.data);
          SetAddModalActive(true);
        } else {
          setIsLoading(false);
          Object.entries(response.data).forEach(([key, value]) => {
            if (value[0]) {
              setError(`${key}`, { message: value[0], type: 'server' });
            }
          });
          toast.error(response.mes);
          const firstErrorField = Object.keys(errors)[0];
          const element = document.querySelector(`[name="${firstErrorField}"]`);

          if (element) {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
            setTimeout(() => element.focus(), 600);
          }
        }
      }, 1800);
    } else {
      const firstErrorField = Object.keys(errors)[0];
      const element = document.querySelector(`[name="${firstErrorField}"]`);

      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
        setTimeout(() => element.focus(), 600);
      }
    }
  };

  const onSubmit = async () => {
    const saveFormData = new FormData();

    saveFormData.append('token', localStorage.getItem('token'));
    for (const key in values) {
      if (values.hasOwnProperty(key)) {
        if (key === 'duration') {
          saveFormData.append(key, values[key] * 12);
        } else {
          saveFormData.append(key, values[key]);
        }
      }
    }
    const sumValue = getValues('sum');
    saveFormData.append('start_sum', sumValue);

    if (isView) {
      saveFormData.append('id', calcView.id);
      saveFormData.append('token', localStorage.getItem('token'));
    }
    setIsLoading(true);

    const response = await apiRequest({
      data: saveFormData,
      method: 'POST',
      url: isView
        ? '/fin-model/buy-or-rent-update'
        : '/fin-model/buy-or-rent-save',
    });

    setTimeout(() => {
      if (!response) {
        setIsLoading(false);
        toast.error(
          'Ошибка в ответе сервера. Не удалось прочитать ответ сервера',
        );
        return;
      }

      if (response.code === 0 && response.http_status === 200) {
        setIsLoading(false);
        saveBtnRef.current.disabled = true;
        reset();
        toast.success(response.mes);
        navigate('/finmodeling');
      } else {
        setIsLoading(false);
        Object.entries(response.data).forEach(([key, value]) => {
          setError(`${key}`, { message: value[0], type: 'server' });
        });
        toast.error(response.mes);

        const firstErrorField = Object.keys(errors)[0];
        const element = document.querySelector(`[name="${firstErrorField}"]`);

        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
          setTimeout(() => element.focus(), 600);
        }
      }
    }, 1800);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div>
            <h5 className={styles.formTitle}>Название расчёта</h5>
            <div className={styles.creditName}>
              <input
                placeholder='Введите название'
                type='text'
                {...register('calc_name', {
                  required: 'Введите название расчёта',
                })}
              />
              {errors.calc_name && (
                <span className='error_message'>
                  {errors.calc_name.message}
                </span>
              )}
            </div>
          </div>
        </div>

        <h4 className={styles.creditsBlockTitle}>Покупка жилья</h4>
        <div className={styles.creditsBlocks}>
          <div className={styles.creditBlock}>
            <h5 className={styles.formTitle}>Дата принятия решения</h5>
            <div className={styles.editValueForm}>
              <input
                type='date'
                {...register('dt', {
                  required: 'Введите дату принятия решения',
                })}
              />
              {errors.dt && (
                <span className='error_message'>{errors.dt.message}</span>
              )}
            </div>

            <h5 className={styles.formTitle}>
              Стоимость жилья (&#8381;)
              <Tolt tooltipTitle1='В стоимость жилья рекомендуется включать не только цену его покупки, но и расходы на ремонт, обустройство и доведение жилья до состояния, пригодного для Вашего проживания'>
                <img alt='' src={help} />
              </Tolt>
            </h5>
            <div className={styles.editValueForm}>
              <input
                type='number'
                {...register('sum', {
                  required: 'Введите стоимость жилья',
                })}
              />
              {errors.sum && (
                <span className='error_message'>{errors.sum.message}</span>
              )}
            </div>
            <h5 className={styles.formTitle}>
              Первоначальный взнос (&#8381;)
              <Tolt tooltipTitle1='Здесь указывается сумма собственных средств, которую Вы готовы внести в качестве первоначального взноса за приобретаемое жилье. Если Вы планируете покупку жилья полностью за собственные средства (без привлечения кредита), то указывается сумма полной стоимости жилья'>
                <img alt='' src={help} />
              </Tolt>
            </h5>
            <div className={styles.editValueForm}>
              <input
                type='number'
                {...register('sum1', {
                  required: 'Введите первоначальный взнос',
                })}
              />
              {errors.sum1 && (
                <span className='error_message'>{errors.sum1.message}</span>
              )}
            </div>
            <h5 className={styles.formTitle}>Ставка ипотечного кредита (%) </h5>
            <div className={styles.editValueForm}>
              <input
                step='0.01'
                type='number'
                {...register('rate', {
                  required: 'Введите ставку ипотечного кредита',
                })}
              />
              {errors.rate && (
                <span className='error_message'>{errors.rate.message}</span>
              )}
            </div>
            <h5 className={styles.formTitle}>Срок кредита (лет)</h5>
            <div className={styles.editValueForm}>
              <input
                type='number'
                {...register('duration', {
                  required: 'Введите срок кредита',
                })}
              />
              {errors.duration && (
                <span className='error_message'>{errors.duration.message}</span>
              )}
            </div>
            <h5 className={styles.formTitle}>
              Ожидаемый ежегодный прирост стоимости покупаемого жилья (%){' '}
              <Tolt tooltipTitle1='Здесь указывается % ожидаемого ежегодного роста стоимости аналогов покупаемого Вами жилья. Для определения этого параметра рекомендуется использовать информацию специализированных сайтов-агрегаторов или имеющиеся в открытом доступе статистические данные'>
                <img alt='' src={help} />
              </Tolt>
            </h5>
            <div className={styles.editValueForm}>
              <input
                step='0.01'
                type='number'
                {...register('sum_incr', {
                  required: 'Введите значение в это поле',
                })}
              />
              {errors.sum_incr && (
                <span className='error_message'>{errors.sum_incr.message}</span>
              )}
            </div>
            <h5 className={styles.formTitle}>
              Страховая премия (%){' '}
              <Tolt tooltipTitle1='Здесь указывается ставка (в %) страховой премии, которую Вы будете ежегодно уплачивать в рамках обязательств страхования жилья, предусмотренных договором ипотечного кредитования'>
                <img alt='' src={help} />
              </Tolt>
            </h5>
            <div className={styles.editValueForm}>
              <input
                step='0.01'
                type='number'
                {...register('insurance_award1', {
                  required: 'Введите страховую премию',
                })}
              />
              {errors.insurance_award1 && (
                <span className='error_message'>
                  {errors.insurance_award1.message}
                </span>
              )}
            </div>
          </div>
        </div>
        <div className={styles.creditsBlocks}></div>
        <div className={styles.secondaryblocks}>
          <div className={styles.secondaryblock}>
            <h4 className={styles.creditsBlockTitle}>Аренда жилья</h4>
            <div className={styles.creditBlock}>
              <h5 className={styles.formTitle}>
                Стоимость ежемесячной аренды жилья (&#8381;)
                <Tolt tooltipTitle1='Здесь указывается стоимость аренды жилья, являющегося аналогом того, покупку которого Вы рассматриваете. Для определения этого параметра рекомендуется использовать информацию специализированных сайтов-агрегаторов'>
                  <img alt='' src={help} />
                </Tolt>
              </h5>
              <div className={styles.editValueForm}>
                <input
                  type='number'
                  {...register('sum2', {
                    required: 'Введите стоимость ежемесячной аренды жилья',
                  })}
                />
                {errors.sum2 && (
                  <span className='error_message'>{errors.sum2.message}</span>
                )}
              </div>
              <h5 className={styles.formTitle}>
                Ожидаемый ежегодный прирост стоимости аренды жилья (%){' '}
                <Tolt tooltipTitle1='Здесь указывается % ожидаемого ежегодного роста стоимости аренды жилья, аналогичного тому, покупку которого Вы рассматриваете. Для определения этого параметра рекомендуется использовать информацию специализированных сайтов-агрегаторов'>
                  <img alt='' src={help} />
                </Tolt>
              </h5>
              <div className={styles.editValueForm}>
                <input
                  step='0.01'
                  type='number'
                  {...register('rate2', {
                    required: 'Введите значение в это поле',
                  })}
                />
                {errors.rate2 && (
                  <span className='error_message'>{errors.rate2.message}</span>
                )}
              </div>
            </div>
          </div>
          <div className={styles.secondaryblock}>
            <h4 className={styles.creditsBlockTitle}>Инвестиции и инфляция</h4>
            <div className={styles.creditBlock}>
              <h5 className={styles.formTitle}>
                Доходность возможных вложений (% год.)
                <Tolt tooltipTitle1='Здесь указывается годовой процент дохода, который Вы можете получать, инвестировав собственные средства вместо того, чтобы направлять их на покупку жилья. Рекомендуется указывать доходность вложений с низким или умеренным, приемлемым для Вас риском'>
                  <img alt='' src={help} />
                </Tolt>
              </h5>
              <div className={styles.editValueForm}>
                <input
                  step='0.01'
                  type='number'
                  {...register('invest_income', {
                    required: 'Введите ожидаемую годовую доходность вложений',
                  })}
                />
                {errors.invest_income && (
                  <span className='error_message'>
                    {errors.invest_income.message}
                  </span>
                )}
              </div>

              <h5 className={styles.formTitle}>
                Ожидаемая годовая инфляция (%)
                <Tolt tooltipTitle1='Рекомендуется указывать среднее значение инфляции за последние 5 (6,5%) или 10 лет (7,0%). Если в рамках расчёта Вы не хотите учитывать инфляцию, укажите значение 0'>
                  <img alt='' src={help} />
                </Tolt>
              </h5>
              <div className={styles.editValueForm}>
                <input
                  step='0.01'
                  type='number'
                  {...register('inflation_rate', {
                    required: 'Введите ожидаемую годовую инфляцию',
                  })}
                />
                {errors.inflation_rate && (
                  <span className='error_message'>
                    {errors.inflation_rate.message}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.bottomBtns}>
          <div className={styles.submitBtnBlock}>
            <button
              ref={calcBtnRef}
              className={styles.submitBtn}
              type='button'
              onClick={() => calcBtnHandler()}
            >
              Рассчитать
            </button>
          </div>
          <div className={styles.submitBtnBlock}>
            <input
              ref={saveBtnRef}
              disabled
              className={styles.submitBtn}
              type='submit'
              value='Сохранить'
            />
          </div>
        </div>
      </form>
      <Modal
        active={addModalActive}
        modalTitle='Жилищный вопрос: покупка или аренда'
        SetActive={SetAddModalActive}
      >
        <Tabs className={styles.result_tabs}>
          <TabList className={styles.modalTablist}>
            <Tab>{chartsNames[0]}</Tab>
            <Tab>{chartsNames[1]}</Tab>
          </TabList>
          <TabPanel className={styles.result_panel}>
            <SensorHome calcResult={calcResult} />
          </TabPanel>
          <TabPanel className={styles.result_panel}>
            <LineHome calcResult={calcResult} />
          </TabPanel>
        </Tabs>
      </Modal>
      {isLoading && <Spinner />}
    </>
  );
}

export default CreditBlockHome;
