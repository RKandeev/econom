import React, { useContext, useEffect, useRef, useState } from 'react';

import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

import { apiRequest } from '../../api';
import { Context } from '../../Context';
import BarChartAim from '../BarCharts/BarChartAim';
import Modal from '../Modal/Modal';
import SensorAim from '../SensorModeling/SensorAim';
import Spinner from '../Spinner/Spinner';
import Tolt from '../Tolt/Tolt';

import help from '../../img/icon/icon__help.svg';

import styles from './CreditBlockAim.module.scss';

function CreditBlockAim(props) {
  const [addModalActive, SetAddModalActive] = useState(false);
  const [calcResult, setCalcResult] = useState({});
  const [isView, setIsView] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [insuranceAwards, setInsuranceAwards] = useState(true);

  const calcBtnRef = useRef(null);
  const saveBtnRef = useRef(null);
  const previousValues = useRef({});

  const { calcView } = useContext(Context);

  const location = useLocation();

  const navigate = useNavigate();

  let chartsNames = ['Экономический эффект', 'Факторный анализ'];

  if (window.outerWidth < 450) {
    chartsNames = ['1', '2'];
  }

  const {
    register,
    handleSubmit,
    trigger,
    watch,
    setError,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      calc_name: '',
      credit_name: '',
      duration: '',
      inflation_rate: '',
      insurance_award: '0',
      invest_rate: '',
      rate: '',
      start_dt: '',
      sum: '',
      sum_add: '',
      sum_add_dt: '',
    },
    mode: 'all',
  });

  const values = watch();

  const hasChanged = Object.keys(values).some((key) => values[key] !== previousValues.current[key]);

  const setViewValuesHandler = () => {
    Object.entries(calcView).forEach(([key, value]) => {
      if (
        key === 'created_at' ||
        key === 'updated_at' ||
        key === 'user_id' ||
        key === 'id' ||
        key === 'calc_result'
      )
        return;
      setValue(key, value);
    });
  };

  useEffect(() => {
    if (Object.entries(calcResult).length > 0) {
      if (hasChanged) {
        saveBtnRef.current.disabled = true;
        setCalcResult({});
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

  useEffect(() => {
    if (insuranceAwards === false) {
      setValue('insurance_award', '0');
    }
  }, [insuranceAwards]);

  const calcBtnHandler = async () => {
    if (Object.entries(calcResult).length > 0) {
      SetAddModalActive(true);

      return;
    }

    const isValid = await trigger();

    if (isValid) {
      previousValues.current = values;
      const formData = new FormData();

      for (const key in values) {
        if (values.hasOwnProperty(key)) {
          formData.append(key, values[key]);
        }
      }

      setIsLoading(true);

      const response = await apiRequest({
        data: formData,
        method: 'POST',
        url: '/fin-model/rationality',
      });

      setTimeout(() => {
        if (!response) {
          toast.error(
            'Ошибка в ответе сервера. Не удалось прочитать ответ сервера',
          );
          setIsLoading(false);

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
        saveFormData.append(key, values[key]);
      }
    }

    if (isView) {
      saveFormData.append('id', calcView.id);
      saveFormData.append('token', localStorage.getItem('token'));
    }
    setIsLoading(true);
    const response = await apiRequest({
      data: saveFormData,
      method: 'POST',
      url: isView
        ? '/fin-model/rationality-update'
        : '/fin-model/rationality-save',
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

        <h4 className={styles.creditsBlockTitle}>
          Кредит для досрочного погашения
        </h4>
        <div className={styles.creditsBlocks}>
          <div className={styles.creditBlock}>
            <div className={styles.creditTitleBlock}>
              <div className={styles.creditTitle}>Кредит</div>
            </div>
            <h5 className={styles.formTitle}>Название кредита</h5>
            <div className={styles.editValueForm}>
              <input
                placeholder='Введите название'
                type='text'
                {...register('credit_name', {
                  required: 'Введите название кредита',
                })}
              />
              {errors.credit_name && (
                <span className='error_message'>
                  {errors.credit_name.message}
                </span>
              )}
            </div>
            <h5 className={styles.formTitle}>Дата получения кредита</h5>
            <div className={styles.editValueForm}>
              <input
                type='date'
                {...register('start_dt', {
                  required: 'Введите дату получения кредита',
                })}
              />
              {errors.start_dt && (
                <span className='error_message'>{errors.start_dt.message}</span>
              )}
            </div>
            <h5 className={styles.formTitle}>Срок кредита (в месяцах)</h5>
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
            <h5 className={styles.formTitle}>Ставка (%)</h5>
            <div className={styles.editValueForm}>
              <input
                step='0.01'
                type='number'
                {...register('rate', {
                  required: 'Введите ставку кредита',
                })}
              />
              {errors.rate && (
                <span className='error_message'>{errors.rate.message}</span>
              )}
            </div>
            <h5 className={styles.formTitle}>Сумма (₽)</h5>
            <div className={styles.editValueForm}>
              <input
                type='number'
                {...register('sum', {
                  required: 'Введите сумму кредита',
                })}
              />
              {errors.sum && (
                <span className='error_message'>{errors.sum.message}</span>
              )}
            </div>
            <h5 className={styles.formTitle}>
              Предстоящие расходы на страхование
            </h5>
            <div className={styles.editValueForm}>
              <select
                className={styles.creditSelect}
                onChange={() => setInsuranceAwards(!insuranceAwards)}
              >
                <option value='0'>Eжегодно</option>
                <option value='1'>Не предусмотрены</option>
              </select>
            </div>
            {insuranceAwards === true && (
              <>
                <h5 className={styles.formTitle}>Страховая премия (%)
                  <Tolt tooltipTitle1='Здесь указывается ставка (в %) страховой премии, которую Вы будете ежегодно уплачивать в рамках обязательств, предусмотренных кредитным договором'>
                    <img alt='' src={help} />
                  </Tolt>
                </h5>
                <div className={styles.editValueForm}>
                  <input
                    step='0.01'
                    type='number'
                    {...register('insurance_award', {
                      required: 'Введите страховую премию',
                    })}
                  />
                  {errors.insurance_award && (
                    <span className='error_message'>
                      {errors.insurance_award.message}
                    </span>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
        <div className={styles.creditsBlocks}></div>
        <div className={styles.secondaryblocks}>
          <div className={styles.secondaryblock}>
            <h4 className={styles.creditsBlockTitle}>
              Параметры досрочного погашения
            </h4>
            <div className={styles.creditBlock}>
              <h5 className={styles.formTitle}>Дата погашения</h5>
              <div className={styles.editValueForm}>
                <input
                  type='date'
                  {...register('sum_add_dt', {
                    required: 'Дата погашения кредита',
                  })}
                />
                {errors.sum_add_dt && (
                  <span className='error_message'>
                    {errors.sum_add_dt.message}
                  </span>
                )}
              </div>
              <h5 className={styles.formTitle}>Сумма погашения (₽)</h5>
              <div className={styles.editValueForm}>
                <input
                  step='0.01'
                  type='number'
                  {...register('sum_add', {
                    required: 'Введите сумму погашения кредита',
                  })}
                />
                {errors.sum_add && (
                  <span className='error_message'>
                    {errors.sum_add.message}
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className={styles.secondaryblock}>
            <h4 className={styles.creditsBlockTitle}>Инвестиции и инфляция</h4>
            <div className={styles.creditBlock}>
              <h5 className={styles.formTitle}>
                Доходность возможных вложений (% год.)
                <Tolt tooltipTitle1='Рекомендуется указывать актуальную на момент расчёта ставку вложений с низким или умеренным риском потерь – банковский депозит, облигации и др.'>
                  <img alt='' src={help} />
                </Tolt>
              </h5>
              <div className={styles.editValueForm}>
                <input
                  step='0.01'
                  type='number'
                  {...register('invest_rate', {
                    required: 'Введите доходность возможных вложений',
                  })}
                />
                {errors.invest_rate && (
                  <span className='error_message'>
                    {errors.invest_rate.message}
                  </span>
                )}
              </div>
              <h5 className={styles.formTitle}>
                Инфляция (%)
                <Tolt tooltipTitle1='Рекомендуется указывать среднее значение инфляции за последние 5 (6,5%) или 10 лет (7,0%). Если в рамках расчёта Вы не хотите учитывать инфляцию, укажите значение 0'>
                  <img alt='' src={help} />
                </Tolt>
              </h5>
              <div className={styles.editValueForm}>
                <input
                  step='0.01'
                  type='number'
                  {...register('inflation_rate', {
                    required: 'Введите инфляцию',
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
        modalTitle='Досрочное погашение кредитов: целесообразность'
        SetActive={SetAddModalActive}
      >
        <Tabs className={styles.result_tabs}>
          <TabList className={styles.modalTablist}>
            <Tab>{chartsNames[0]}</Tab>
            <Tab>{chartsNames[1]}</Tab>
          </TabList>
          <TabPanel className={styles.result_panel}>
            <SensorAim calcResult={calcResult} />
          </TabPanel>
          <TabPanel className={styles.result_panel}>
            <BarChartAim calcResult={calcResult} />
          </TabPanel>
        </Tabs>
      </Modal>

      {isLoading && <Spinner />}
    </>
  );
}

export default CreditBlockAim;
