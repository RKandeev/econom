import React, { useEffect, useRef, useState } from 'react';

import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

import { apiRequest } from '../../api';
import BarChartAim from '../BarCharts/BarChartAim';
import Modal from '../Modal/Modal';
import SensorAim from '../SensorModeling/SensorAim';
import Tolt from '../Tolt/Tolt';

import help from '../../img/icon/icon__help.svg';

import styles from './CreditBlockAim.module.scss';

function CreditBlockAim(props) {
  const [calcResult, setCalcResult] = useState({});
  const calcBtnRef = useRef(null);
  const saveBtnRef = useRef(null);
  const previousValues = useRef({});

  const [addModalActive, SetAddModalActive] = useState(false);
  const [oldCredits, setOldCredits] = useState([
    {
      date: '2021-04-01',
      duration: 0,
      ins_type: '0',
      insurance: 1.0,
      name: '',
      period: 60,
      rate: 16,
      sum: 300000,
    },
  ]);
  let chartsNames = ['Экономический эффект', 'Факторный анализ'];
  // const date = new Date();
  // const year = date.getFullYear();
  // const month = date.getMonth() + 1;
  // const day = date.getDate();
  // const currentDate = `${year}-${month}-${day}`;

  const {
    register,
    handleSubmit,
    trigger,
    watch,
    setError,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      calc_name: '',
      credit_name: '',
      duration: '',
      inflation_rate: '',
      insurance_award: '',
      invest_rate: '',
      rate: '',
      start_dt: '',
      sum: '',
      sum_add: '',
      sum_add_dt: '',
    },
    mode: 'all',
  });

  if (window.outerWidth < 450) {
    chartsNames = ['1', '2'];
  }

  const values = watch();

  const hasChanged = Object.keys(values).some((key) => {
    return values[key] !== previousValues.current[key];
  });

  useEffect(() => {
    if (Object.entries(calcResult).length > 0) {
      if (hasChanged) {
        saveBtnRef.current.disabled = true;
      }
    }
  }, [values]);

  const calcBtnHandler = async () => {
    const isValid = await trigger();

    if (isValid) {
      previousValues.current = values;
      const formData = new FormData();

      for (const key in values) {
        if (values.hasOwnProperty(key)) {
          formData.append(key, values[key]);
        }
      }
      const response = await apiRequest({
        data: formData,
        method: 'POST',
        url: '/fin-model/rationality',
      });

      if (!response) {
        toast.error('Ошибка в ответе сервера. Не удалось прочитать ответ сервера');

        return;
      }

      if (response.code === 0 && response.http_status === 200) {
        saveBtnRef.current.disabled = false;
        setCalcResult(response.data);
        SetAddModalActive(true);
      } else {
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
    const response = await apiRequest({
      data: saveFormData,
      method: 'POST',
      url: '/fin-model/rationality-save',
    });

    if (!response) {
      toast.error('Ошибка в ответе сервера. Не удалось прочитать ответ сервера');

      return;
    }

    if (response.code === 0 && response.http_status === 200) {
      saveBtnRef.current.disabled = true;
      reset();
      toast.success(response.mes);
    } else {
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
                {
                  ...register('credit_name', {
                    required: 'Введите название кредита'
                  })
                }
              />
              {errors.credit_name && <span className='error_message'>{errors.credit_name.message}</span>}
            </div>
            <h5 className={styles.formTitle}>Дата получения кредита</h5>
            <div className={styles.editValueForm}>
              <input
                type='date'
                {
                  ...register('start_dt', {
                    required: 'Введите дату получения кредита'
                  })
                }
              />
              {errors.start_dt && <span className='error_message'>{errors.start_dt.message}</span>}
            </div>
            <h5 className={styles.formTitle}>Срок кредита (в месяцах)</h5>
            <div className={styles.editValueForm}>
              <input
                type='number'
                {
                  ...register('duration', {
                    required: 'Введите срок кредита'
                  })
                }
              />
              {errors.duration && <span className='error_message'>{errors.duration.message}</span>}
            </div>
            <h5 className={styles.formTitle}>Ставка (%)</h5>
            <div className={styles.editValueForm}>
              <input
                type='number'
                {
                  ...register('rate', {
                    required: 'Введите ставку кредита'
                  })
                }
              />
              {errors.rate && <span className='error_message'>{errors.rate.message}</span>}
            </div>
            <h5 className={styles.formTitle}>Сумма (₽)</h5>
            <div className={styles.editValueForm}>
              <input
                type='number'
                {
                  ...register('sum', {
                    required: 'Введите сумму кредита'
                  })
                }
              />
              {errors.sum && <span className='error_message'>{errors.sum.message}</span>}
            </div>
            <h5 className={styles.formTitle}>Страховая премия (%)</h5>
            <div className={styles.editValueForm}>
              <input
                type='number'
                {
                  ...register('insurance_award', {
                    required: 'Введите страховую премию'
                  })
                }
              />
              {errors.insurance_award && <span className='error_message'>{errors.insurance_award.message}</span>}
            </div>
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
                  {
                    ...register('sum_add_dt', {
                      required: 'Дата погашения кредита'
                    })
                  }
                />
                {errors.sum_add_dt && <span className='error_message'>{errors.sum_add_dt.message}</span>}
              </div>
              <h5 className={styles.formTitle}>Сумма погашения (₽)</h5>
              <div className={styles.editValueForm}>
                <input
                  type='number'
                  {
                    ...register('sum_add', {
                      required: 'Введите сумму погашения кредита'
                    })
                  }
                />
                {errors.sum_add && <span className='error_message'>{errors.sum_add.message}</span>}
              </div>
            </div>
          </div>
          <div className={styles.secondaryblock}>
            <h4 className={styles.creditsBlockTitle}>Инвестиции и инфляция</h4>
            <div className={styles.creditBlock}>
              <h5 className={styles.formTitle}>
                Доходность возможных вложений (годовая) (%)
                <Tolt
                  tooltipTitle1="Рекомендуется указывать актуальную на момент расчёта ставку вложений с низким или умеренным риском потерь – банковский депозит, облигации и др.">
                  <img alt="" src={help} />
                </Tolt>
              </h5>
              <div className={styles.editValueForm}>
                <input
                  type="number"
                  {
                    ...register('invest_rate', {
                      required: 'Введите доходность возможных вложений'
                    })
                  }
                />
                {errors.invest_rate && <span className="error_message">{errors.invest_rate.message}</span>}
              </div>
              <h5 className={styles.formTitle}>
                Инфляция (%)
                <Tolt
                  tooltipTitle1="Рекомендуется указывать среднее значение инфляции за последние 5 (6,5%) или 10 лет (7,0%). Если в рамках расчёта Вы не хотите учитывать инфляцию, укажите значение 0">
                  <img alt="" src={help} />
                </Tolt>
              </h5>
              <div className={styles.editValueForm}>
                <input
                  type="number"
                  {
                    ...register('inflation_rate', {
                      required: 'Введите инфляцию'
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
              type="button"
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
    </>
  );
}

export default CreditBlockAim;
