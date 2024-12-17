import React, { useContext, useEffect, useRef, useState } from 'react';

import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

import { apiRequest } from '../../api';
import { Context } from '../../Context';
import BarChartCar from '../BarCharts/BarChartCar';
import Modal from '../Modal/Modal';
import SensorCar from '../SensorModeling/SensorCar';
import Spinner from '../Spinner/Spinner';
import Tolt from '../Tolt/Tolt';

import help from '../../img/icon/icon__help.svg';

import styles from './CreditBlockCar.module.scss';

function CreditBlockCar(props) {
  const [addModalActive, SetAddModalActive] = useState(false);
  const [calcResult, setCalcResult] = useState({});
  const [isView, setIsView] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  // const [insuranceAwards, setInsuranceAwards] = useState(true );

  const calcBtnRef = useRef(null);
  const saveBtnRef = useRef(null);
  const previousValues = useRef({});

  const { calcView } = useContext(Context);

  const location = useLocation();

  const navigate = useNavigate();
  let chartsNames = ['Экономический эффект', 'факторный анализ'];

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
      amortisation_rate: '',
      duration: '',
      dt: '',
      expenses_monthly: '',
      expenses_yearly: '',
      inflation_rate: '',
      insurance_rate: '',
      invest_income_rate: '',
      loan_rate: '',
      sum: '',
      osago: '',
      sum1: '',
      rent_incr_rate: '',
      start_sum: '',
      transport_expenses: '',
      transport_tax: '',
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
    setValue('start_sum', watch('sum1'));
  }, [watch('sum1')]);

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
        url: '/fin-model/buy-car-or-invest',
      });

      setTimeout(() => {
        if (!response) {
          setIsLoading(false);
          toast.error(`Непредвиденная ошибка ${response}`);

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
        ? '/fin-model/buy-car-or-invest-update'
        : '/fin-model/buy-car-or-invest-save',
    });

    setTimeout(() => {
      if (!response) {
        setIsLoading(false);
        toast.error(`Непредвиденная ошибка ${response}`);

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
        <div className={styles.secondaryblocks}>
          <div className={styles.secondaryblock}>
            <h4 className={styles.creditsBlockTitle}>Автомобиль</h4>
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
                Стоимость автомобиля (&#x20bd;)
                <Tolt tooltipTitle1='В стоимость автомобиля рекомендуется включать не только цену его покупки, но и все затраты на его дополнительное оборудование, тюнинг и пр.'>
                  <img alt='' src={help} />
                </Tolt>
              </h5>
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
                Ежемесячные расходы на содержание автомобиля (&#x20bd;){' '}
                <Tolt tooltipTitle1='Сюда включаются расходы на топливо, парковку, стоянку, мойку, автомобильные штрафы и другие регулярные расходы, связанные с эксплуатацией автомобиля'>
                  <img alt='' src={help} />
                </Tolt>
              </h5>
              <div className={styles.editValueForm}>
                <input
                  type='number'
                  {...register('expenses_monthly', {
                    required: 'Поле не должно быть пустым',
                  })}
                />
                {errors.expenses_monthly && (
                  <span className='error_message'>
                    {errors.expenses_monthly.message}
                  </span>
                )}
              </div>
              <h5 className={styles.formTitle}>
                Ежегодные расходы на содержание автомобиля (&#x20bd;){' '}
                <Tolt tooltipTitle1='Сюда включаются расходы на техническое обслуживание, ремонт, шиномонтаж, дополнительное оборудование и другие расходы нерегулярного характера, связанные с эксплуатацией автомобиля'>
                  <img alt='' src={help} />
                </Tolt>
              </h5>
              <div className={styles.editValueForm}>
                <input
                  type='number'
                  {...register('expenses_yearly', {
                    required: 'Поле не должно быть пустым',
                  })}
                />
                {errors.expenses_yearly && (
                  <span className='error_message'>
                    {errors.expenses_yearly.message}
                  </span>
                )}
              </div>
              <h5 className={styles.formTitle}>
                Обязательное страхование (ОСАГО) (&#x20bd;){' '}
              </h5>
              <div className={styles.editValueForm}>
                <input
                  type='number'
                  {...register('osago', {
                    required: 'Поле не должно быть пустым',
                  })}
                />
                {errors.osago && (
                  <span className='error_message'>{errors.osago.message}</span>
                )}
              </div>
              <h5 className={styles.formTitle}>
                Транспортный налог (&#x20bd;)
                <Tolt tooltipTitle1='Для определения суммы транспортного налога, который вы будете платить, став владельцем автомобиля, можно воспользоваться налоговым калькулятором'>
                  <img alt='' src={help} />
                </Tolt>
              </h5>
              <div className={styles.editValueForm}>
                <input
                  type='number'
                  {...register('transport_tax', {
                    required: 'Поле не должно быть пустым',
                  })}
                />
                {errors.transport_tax && (
                  <span className='error_message'>
                    {errors.transport_tax.message}
                  </span>
                )}
              </div>
              <h5 className={styles.formTitle}>
                Ожидаемый среднегодовой прирост стоимости автомобиля (%){' '}
                <Tolt tooltipTitle1='Здесь указывается % ожидаемого ежегодного роста стоимости автомобиля этой марки и комплектации. Для определения этого параметра можно использовать информацию с сайтов автодилеров'>
                  <img alt='' src={help} />
                </Tolt>
              </h5>
              <div className={styles.editValueForm}>
                <input
                  step='0.01'
                  type='number'
                  {...register('rent_incr_rate', {
                    required: 'Поле не должно быть пустым',
                  })}
                />
                {errors.rent_incr_rate && (
                  <span className='error_message'>
                    {errors.rent_incr_rate.message}
                  </span>
                )}
              </div>
              <h5 className={styles.formTitle}>
                Износ автомобиля (%){' '}
                <Tolt tooltipTitle1='Здесь указывается % ожидаемого ежегодного снижения стоимости покупаемого автомобиля вследствие его старения, износа, роста пробега, «возраста». Для определения этого параметра можно использовать информацию из агрегаторов объявлений о продаже автомобилей'>
                  <img alt='' src={help} />
                </Tolt>
              </h5>
              <div className={styles.editValueForm}>
                <input
                  step='0.01'
                  type='number'
                  {...register('amortisation_rate', {
                    required: 'Поле не должно быть пустым',
                  })}
                />
                {errors.amortisation_rate && (
                  <span className='error_message'>
                    {errors.amortisation_rate.message}
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className={styles.secondaryblock}>
            <h4 className={styles.creditsBlockTitle}>Условия покупки</h4>
            <div className={styles.creditBlock}>
              <h5 className={styles.formTitle}>
                Первоначальный взнос (&#x20bd;)
                <Tolt tooltipTitle1='Здесь указывается сумма собственных средств, которую Вы готовы внести в качестве первоначального взноса за приобретаемый автомобиль. Если Вы планируете покупку автомобиля полностью за собственные средства (без привлечения кредита), то указывается сумма полной стоимости автомобиля'>
                  <img alt='' src={help} />
                </Tolt>
              </h5>
              <div className={styles.editValueForm}>
                <input
                  type='number'
                  {...register('sum1', {
                    required: 'Поле не должно быть пустым',
                  })}
                />
                {errors.sum1 && (
                  <span className='error_message'>{errors.sum1.message}</span>
                )}
              </div>
              <h5 className={styles.formTitle}>Ставка по кредиту (%) </h5>
              <div className={styles.editValueForm}>
                <input
                  step='0.01'
                  type='number'
                  {...register('loan_rate', {
                    required: 'Поле не должно быть пустым',
                  })}
                />
                {errors.loan_rate && (
                  <span className='error_message'>
                    {errors.loan_rate.message}
                  </span>
                )}
              </div>
              <h5 className={styles.formTitle}>Срок кредита (месяцы)</h5>
              <div className={styles.editValueForm}>
                <input
                  type='number'
                  {...register('duration', {
                    required: 'Поле не должно быть пустым',
                  })}
                />
                {errors.duration && (
                  <span className='error_message'>
                    {errors.duration.message}
                  </span>
                )}
              </div>

              <h5 className={styles.formTitle}>
                Стоимость ежегодного страхования авто (% от остатка долга по
                кредиту)
                <Tolt tooltipTitle1='Здесь указывается ставка (в %) страховой премии, которую Вы будете ежегодно уплачивать в рамках обязательств страхования автомобиля, предусмотренных договором кредитования'>
                  <img alt='' src={help} />
                </Tolt>
              </h5>
              <div className={styles.editValueForm}>
                <input
                  step='0.01'
                  type='number'
                  {...register('insurance_rate', {
                    required: 'Поле не должно быть пустым',
                  })}
                />
                {errors.insurance_rate && (
                  <span className='error_message'>
                    {errors.insurance_rate.message}
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className={styles.secondaryblock}>
            <h4 className={styles.creditsBlockTitle}>Альтернатива</h4>
            <div className={styles.creditBlock}>
              <h5 className={styles.formTitle}>
                Ежемесячные транспортные расходы при отказе от покупки
                автомобиля (&#x20bd;)
                <Tolt tooltipTitle1='Здесь указывается общая сумма расходов на транспорт, которые мы будем нести в том случае, если откажемся от покупки автомобиля, и от которых нас автомобиль может «избавить». Она включает расходы на общественный транспорт, такси, каршеринг и др.'>
                  <img alt='' src={help} />
                </Tolt>
              </h5>
              <div className={styles.editValueForm}>
                <input
                  type='number'
                  {...register('transport_expenses', {
                    required: 'Поле не должно быть пустым',
                  })}
                />
                {errors.transport_expenses && (
                  <span className='error_message'>
                    {errors.transport_expenses.message}
                  </span>
                )}
              </div>
              <h5 className={styles.formTitle}>
                Доходность возможных вложений (% год.){' '}
                <Tolt tooltipTitle1='Здесь указывается годовой процент дохода, который Вы можете получать, инвестировав собственные средства вместо того, чтобы направлять их на покупку автомобиля. Рекомендуется указывать доходность вложений с низким или умеренным, приемлемым для Вас риском'>
                  <img alt='' src={help} />
                </Tolt>
              </h5>
              <div className={styles.editValueForm}>
                <input
                  step='0.01'
                  type='number'
                  {...register('invest_income_rate', {
                    required: 'Поле не должно быть пустым',
                  })}
                />
                {errors.invest_income_rate && (
                  <span className='error_message'>
                    {errors.invest_income_rate.message}
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className={styles.secondaryblock}>
            <h4 className={styles.creditsBlockTitle}>Инфляция</h4>
            <div className={styles.creditBlock}>
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
                    required: 'Поле не должно быть пустым',
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
        modalTitle='Покупка автомобиля: оценка финансовых последствий'
        SetActive={SetAddModalActive}
      >
        <Tabs className={styles.result_tabs}>
          <TabList className={styles.modalTablist}>
            <Tab>{chartsNames[0]}</Tab>
            <Tab>{chartsNames[1]}</Tab>
          </TabList>
          <TabPanel className={styles.result_panel}>
            <SensorCar calcResult={calcResult} />
          </TabPanel>
          <TabPanel className={styles.result_panel}>
            <BarChartCar calcResult={calcResult} />
          </TabPanel>
        </Tabs>
      </Modal>

      {isLoading && <Spinner />}
    </>
  );
}

export default CreditBlockCar;
