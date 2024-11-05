import React, { useRef, useState } from 'react';

import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

import BarChartAim from '../BarCharts/BarChartAim';
import Modal from '../Modal/Modal';
import SensorAim from '../SensorModeling/SensorAim';
import Tolt from '../Tolt/Tolt';

import help from '../../img/icon/icon__help.svg';

import styles from './CreditBlockAim.module.scss';
import { useForm } from 'react-hook-form';
import { apiRequest } from '../../api';
import toast from 'react-hot-toast';


function CreditBlockAim(props) {
  const [calcResult, setCalcResult] = useState({});
  const calcBtnRef = useRef(null);
  const saveBtnRef = useRef(null);

  const [addModalActive, SetAddModalActive] = useState(false);
  const [oldCredits, setOldCredits] = useState([
    {
      date: '2021-04-01',
      ins_type: '0',
      insurance: 1.0,
      name: '',
      period: 60,
      rate: 16,
      sum: 300000,
      duration: 0,
    },
  ]);
  let chartsNames = ['Экономический эффект', 'Факторный анализ'];
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const currentDate = `${year}-${month}-${day}`;

  const {
    register,
    handleSubmit,
    watch,
    setError,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      start_dt: '',
      sum_add_dt: '',
      duration: '0',
      insurance_award: 1.0,
      calc_name: '',
      credit_name: '',
      rate: 0,
      invest_rate: 0,
      inflation_rate: 0,
      sum: 0,
      sum_add: 0,
    },
    mode: 'all',
  });

  if (window.outerWidth < 450) {
    chartsNames = ['1', '2'];
  }

  const values = watch();

  const isFormFilled = () => {
    return Object.values(values).every(Boolean);
  };

  const calcBtnHandler = async () => {
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
      return
    }

    if (response.code === 0 && response.http_status === 200) {
      setCalcResult(response.data);
      SetAddModalActive(true);
      saveBtnRef.current.disabled = true
    } else {
      Object.entries(response.data).forEach(([key, value]) => {
        setError(`${key}`, { message: value[0], type: 'server' });
      });
      toast.error(response.mes);
    }
  }

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
      return
    }

    if (response.code === 0 && response.http_status === 200) {
      calcBtnRef.current.disabled = true
      saveBtnRef.current.disabled = true
      reset()
      toast.success(response.mes)
    } else {
      Object.entries(response.data).forEach(([key, value]) => {
        setError(`${key}`, { message: value[0], type: 'server' });
      });
      toast.error(response.mes);
    }
  }

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
          {oldCredits.map((el, k) => (
            <div className={styles.creditBlock} key={k}>
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
              {el.ins_type === '0' && (
                <>
                  <h5 className={styles.formTitle}>Страховая премия (%)</h5>
                  <div className={styles.editValueForm}>
                    <input
                      type='number'
                      {
                        ...register('insurance', {
                          required: 'Введите страховую премию'
                        })
                      }
                    />
                    {errors.insurance && <span className='error_message'>{errors.insurance.message}</span>}
                  </div>
                </>
              )}
            </div>
          ))}
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
                Длительность вложений, мес.
              </h5>
              <div className={styles.editValueForm}>
                <input
                  type="number"
                  {
                    ...register('invest_duration', {
                      required: 'Введите длительность вложений'
                    })
                  }
                />
                {errors.invest_duration && <span className="error_message">{errors.invest_duration.message}</span>}
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
              disabled={!isFormFilled()}
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
