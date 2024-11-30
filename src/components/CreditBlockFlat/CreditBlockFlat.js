import React, { useContext, useEffect, useRef, useState } from 'react';

import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

import BarChartFlat from '../BarCharts/BarChartFlat';
import LineFlat from '../LineChartModeling/LineFlat';
import Modal from '../Modal/Modal';
import SensorFlat from '../SensorModeling/SensorFlat';
import Tolt from '../Tolt/Tolt';

import help from '../../img/icon/icon__help.svg';

import styles from './CreditBlockFlat.module.scss';
import Spinner from '../Spinner/Spinner';
import { Context } from '../../Context';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { apiRequest } from '../../api';
import toast from 'react-hot-toast';

function CreditBlockFlat(props) {
  const [addModalActive, SetAddModalActive] = useState(false);
  const [calcResult, setCalcResult] = useState({});
  const [isView, setIsView] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [insuranceAwards, setInsuranceAwards] = useState(true );

  const calcBtnRef = useRef(null);
  const saveBtnRef = useRef(null);
  const previousValues = useRef({});

  const {calcView} = useContext(Context)

  const location = useLocation();

  const navigate = useNavigate();

  let chartsNames = [
    'Сравнительная выгода',
    'структура выгоды',
    'динамика капитала',
  ];
  if (window.outerWidth < 450) {
    chartsNames = ['1', '2', '3'];
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
      sum: '',
      sum1: '',
      month_inc: '',
      rent_incr_rate: '',
      stoppage: '',
      loan_duration: '',
      loan_rate: '',
      insurance_rate: '',
      sum_incr: '',
      dt: '',
      start_sum: '',
      inflation_rate: '',
      invest_income_rate: '',
    },
    mode: 'all',
  });


  const values = watch();

  const hasChanged = Object.keys(values).some((key) => {
    return values[key] !== previousValues.current[key];
  });

  const setViewValuesHandler = () => {
    Object.entries(calcView).forEach(([key, value]) => {
      if (key === 'created_at' || key === 'updated_at' || key === 'user_id' || key === 'id' || key === 'calc_result') return
      setValue(key, value)
    })
  }

  useEffect(() => {
    if (Object.entries(calcResult).length > 0) {
      if (hasChanged) {
        saveBtnRef.current.disabled = true;
        setCalcResult({})
      }
    }
  }, [values]);

  useEffect (() => {
    const searchParams = new URLSearchParams(location.search);
    const calcId= searchParams.get('calcId');
    if (calcId && Object.entries(calcView).length > 0) {
      setIsView(true)
      setViewValuesHandler()
    }
  }, []);

  useEffect(() => {
    setValue('start_sum', watch('sum1'));
  },[watch('sum1')]);

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
        url: '/fin-model/buy-flat-or-invest',
      });

      setTimeout(() => {
        if (!response) {
          toast.error('Ошибка в ответе сервера. Не удалось прочитать ответ сервера');
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
              behavior:'smooth',
              block:'start',
            });
            setTimeout(()=> (element.focus()),600);
          }
        }
      }, 1800)


    } else {
      const firstErrorField = Object.keys(errors)[0];
      const element = document.querySelector(`[name="${firstErrorField}"]`);

      if (element) {
        element.scrollIntoView({
          behavior:'smooth',
          block:'start',
        });
        setTimeout(()=> (element.focus()),600);
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
      url: isView? '/fin-model/buy-flat-or-invest-update' : '/fin-model/buy-flat-or-invest-save',
    });

    setTimeout(() => {
      if (!response) {
        setIsLoading(false);
        toast.error('Ошибка в ответе сервера. Не удалось прочитать ответ сервера');

        return;
      }

      if (response.code === 0 && response.http_status === 200) {
        setIsLoading(false);
        saveBtnRef.current.disabled = true;
        reset();
        toast.success(response.mes);
        navigate('/finmodeling')
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
            behavior:'smooth',
            block:'start',
          });
          setTimeout(()=> (element.focus()),600);
        }
      }
    }, 1800)
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
                {
                  ...register('calc_name', {
                    required: 'Введите название расчёта',
                  })
                }
              />
              {errors.calc_name && <span className='error_message'>{errors.calc_name.message}</span>}
            </div>
          </div>
        </div>
        <div className={styles.secondaryblocks}>
          <div className={styles.secondaryblock}>
            <h4 className={styles.creditsBlockTitle}>Покупка квартиры</h4>
            <div className={styles.creditBlock}>
              <h5 className={styles.formTitle}>Дата принятия решения</h5>
              <div className={styles.editValueForm}>
                <input
                  type="date"
                  {
                    ...register('dt', {
                      required: 'Введите дату принятия решения'
                    })
                  }
                />
                {errors.dt && <span className="error_message">{errors.dt.message}</span>}
              </div>
              <h5 className={styles.formTitle}>
                Стоимость квартиры (&#x20bd;)
                <Tolt
                  tooltipTitle1="В стоимость жилья рекомендуется включать не только цену его покупки, но и расходы на ремонт, обустройство и доведение жилья до состояния, пригодного для Вашего проживания">
                  <img alt="" src={help} />
                </Tolt>
              </h5>
              <div className={styles.editValueForm}>
                <input
                  type="number"
                  {
                    ...register('sum', {
                      required: 'Поле не должно быть пустым'
                    })
                  }
                />
                {errors.sum && <span className="error_message">{errors.sum.message}</span>}
              </div>
              <h5 className={styles.formTitle}>
                Первоначальный взнос (&#x20bd;){' '}
                <Tolt
                  tooltipTitle1="Здесь указывается сумма собственных средств, которую Вы готовы внести в качестве первоначального взноса за приобретаемое жилье. Если Вы планируете покупку жилья полностью за собственные средства (без привлечения кредита), то указывается сумма полной стоимости жилья">
                  <img alt="" src={help} />
                </Tolt>
              </h5>
              <div className={styles.editValueForm}>
                <input
                  type="number"
                  {
                    ...register('sum1', {
                      required: 'Поле не должно быть пустым'
                    })
                  }
                />
                {errors.sum1 && <span className="error_message">{errors.sum1.message}</span>}
              </div>
              <h5 className={styles.formTitle}>
                Ставка ипотечного кредита (%)
              </h5>
              <div className={styles.editValueForm}>
                <input
                  type="number"
                  {
                    ...register('loan_rate', {
                      required: 'Поле не должно быть пустым'
                    })
                  }
                />
                {errors.loan_rate && <span className="error_message">{errors.loan_rate.message}</span>}
              </div>
              <h5 className={styles.formTitle}>
                Срок ипотечного кредита (месяцы)
              </h5>
              <div className={styles.editValueForm}>
                <input
                  type="number"
                  {
                    ...register('loan_duration', {
                      required: 'Поле не должно быть пустым'
                    })
                  }
                />
                {errors.loan_duration && <span className="error_message">{errors.loan_duration.message}</span>}
              </div>
              <h5 className={styles.formTitle}>
                Ставка ежегодного страхования жилья (%){' '}
                <Tolt
                  tooltipTitle1="Здесь указывается ставка (в %) страховой премии, которую Вы будете ежегодно уплачивать в рамках обязательств страхования жилья, предусмотренных договором ипотечного кредитования">
                  <img alt="" src={help} />
                </Tolt>
              </h5>
              <div className={styles.editValueForm}>
                <input
                  type="number"
                  {
                    ...register('insurance_rate', {
                      required: 'Поле не должно быть пустым'
                    })
                  }
                />
                {errors.insurance_rate && <span className="error_message">{errors.insurance_rate.message}</span>}
              </div>
            </div>
          </div>
          <div className={styles.secondaryblock}>
            <h4 className={styles.creditsBlockTitle}>Эффекты от владения</h4>
            <div className={styles.creditBlock}>
              <h5 className={styles.formTitle}>
                Стоимость ежемесячной аренды квартиры (&#x20bd;)
                <Tolt
                  tooltipTitle1='Здесь указывается ожидаемая Вами стоимость месячной аренды квартиры на момент её приобретения. Для определения этого параметра рекомендуется использовать информацию специализированных сайтов-агрегаторов'>
                  <img alt='' src={help} />
                </Tolt>
              </h5>
              <div className={styles.editValueForm}>
                <input
                  type="number"
                  {
                    ...register('month_inc', {
                      required: 'Поле не должно быть пустым'
                    })
                  }
                />
                {errors.month_inc && <span className="error_message">{errors.month_inc.message}</span>}
              </div>
              <h5 className={styles.formTitle}>
                Ожидаемый ежегодный прирост стоимости аренды квартиры (%){' '}
                <Tolt tooltipTitle1='Здесь указывается % ожидаемого ежегодного роста стоимости аренды квартиры, покупку которой Вы рассматриваете. Для определения этого параметра рекомендуется использовать информацию специализированных сайтов-агрегаторов'>
                  <img alt='' src={help} />
                </Tolt>
              </h5>
              <div className={styles.editValueForm}>
                <input
                  type="number"
                  {
                    ...register('rent_incr_rate', {
                      required: 'Поле не должно быть пустым'
                    })
                  }
                />
                {errors.rent_incr_rate && <span className="error_message">{errors.rent_incr_rate.message}</span>}
              </div>
              <h5 className={styles.formTitle}>
                Длительность простоя квартиры (дни)
                <Tolt tooltipTitle1='Здесь указывается количество дней в году, когда квартира не приносит доход от сдачи в аренду в связи с ремонтом, сменой арендаторов и другими причинами'>
                  <img alt='' src={help} />
                </Tolt>
              </h5>
              <div className={styles.editValueForm}>
                <input
                  type="number"
                  {
                    ...register('stoppage', {
                      required: 'Поле не должно быть пустым'
                    })
                  }
                />
                {errors.stoppage && <span className="error_message">{errors.stoppage.message}</span>}
              </div>

              <h5 className={styles.formTitle}>
                Ожидаемый ежегодный прирост стоимости квартиры (%)
                <Tolt tooltipTitle1='Здесь указывается % ожидаемого ежегодного роста стоимости квартиры, покупку которой Вы рассматриваете. Для определения этого параметра рекомендуется использовать информацию специализированных сайтов-агрегаторов или имеющиеся в открытом доступе статистические данные'>
                  <img alt='' src={help} />
                </Tolt>
              </h5>
              <div className={styles.editValueForm}>
                <input
                  type="number"
                  {
                    ...register('sum_incr', {
                      required: 'Поле не должно быть пустым'
                    })
                  }
                />
                {errors.sum_incr && <span className="error_message">{errors.sum_incr.message}</span>}
              </div>
            </div>
          </div>
          <div className={styles.secondaryblock}>
            <h4 className={styles.creditsBlockTitle}>Инвестиции и инфляция</h4>
            <div className={styles.creditBlock}>
              <h5 className={styles.formTitle}>
                Ожидаемая годовая доходность вложений (%)
                <Tolt tooltipTitle1='Здесь указывается годовой процент дохода, который Вы можете получать, инвестировав собственные средства вместо того, чтобы направлять их на покупку квартиры. Рекомендуется указывать доходность вложений с низким или умеренным, приемлемым для Вас риском'>
                  <img alt='' src={help} />
                </Tolt>
              </h5>
              <div className={styles.editValueForm}>
                <input
                  type="number"
                  {
                    ...register('invest_income_rate', {
                      required: 'Поле не должно быть пустым'
                    })
                  }
                />
                {errors.invest_income_rate && <span className="error_message">{errors.invest_income_rate.message}</span>}
              </div>
              <h5 className={styles.formTitle}>
                Ожидаемая годовая инфляция (%){' '}
                <Tolt tooltipTitle1='Рекомендуется указывать среднее значение инфляции за последние 5 (6,5%) или 10 лет (7,0%). Если в рамках расчёта Вы не хотите учитывать инфляцию, укажите значение 0'>
                  <img alt='' src={help} />
                </Tolt>
              </h5>
              <div className={styles.editValueForm}>
                <input
                  type="number"
                  {
                    ...register('inflation_rate', {
                      required: 'Поле не должно быть пустым'
                    })
                  }
                />
                {errors.inflation_rate && <span className="error_message">{errors.inflation_rate.message}</span>}
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
              type="submit"
              value="Сохранить"
            />
          </div>
        </div>
      </form>
      <Modal
        active={addModalActive}
        modalTitle="Квартира для сдачи в аренду: оценка выгод"
        SetActive={SetAddModalActive}
      >
        <Tabs className={styles.result_tabs}>
          <TabList className={styles.modalTablist}>
            <Tab>{chartsNames[0]}</Tab>
            <Tab>{chartsNames[1]}</Tab>
            <Tab>{chartsNames[2]}</Tab>
          </TabList>
          <TabPanel className={styles.result_panel}>
            <SensorFlat calcResult={calcResult}/>
          </TabPanel>
          <TabPanel className={styles.result_panel}>
            <BarChartFlat calcResult={calcResult}/>
          </TabPanel>
          <TabPanel className={styles.result_panel}>
            <LineFlat calcResult={calcResult}/>
          </TabPanel>
        </Tabs>
      </Modal>

      {
        isLoading && (
          <Spinner />
        )
      }
    </>
  );
}

export default CreditBlockFlat;
