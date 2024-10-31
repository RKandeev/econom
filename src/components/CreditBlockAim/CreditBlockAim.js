import React, { useRef, useState } from 'react';

import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

import BarChartAim from '../BarCharts/BarChartAim';
import Modal from '../Modal/Modal';
import SensorAim from '../SensorModeling/SensorAim';
import Tolt from '../Tolt/Tolt';

import help from '../../img/icon/icon__help.svg';

import styles from './CreditBlockAim.module.scss';
import { useForm } from 'react-hook-form';

import {Select, MenuItem} from '@mui/material'

function CreditBlockAim(props) {
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

  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues: {
      start_dt: '2021-04-01',
      sum_add_dt: '2021-04-01',
      ins_type: '0',
      duration: '0',
      insurance_award: 1.0,
      name: '',
      calcName: '',
      period: 0,
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
    return Object.values(values).every(value => value);
  };

  const onSubmit = () => {

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
                  ...register('calcName', {
                    required: 'Введите название расчёта',
                  })
                }
              />
              {errors.calcName && <span className='error_message'>{errors.calcName.message}</span>}
            </div>
          </div>
        </div>

        <h4 className={styles.creditsBlockTitle}>
          Кредит для досрочного погашения
        </h4>
        <div className={styles.creditsBlocks}>
          {oldCredits.map((el, k) => (
            <div className={styles.creditBlock} >
              <div className={styles.creditTitleBlock}>
                <div className={styles.creditTitle}>Кредит</div>
              </div>
              <h5 className={styles.formTitle}>Название кредита</h5>
              <div className={styles.editValueForm}>
                <input
                  placeholder='Введите название'
                  type='text'
                  {
                    ...register('name', {
                      required: 'Введите название кредита'
                    })
                  }
                />
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
              </div>
              <h5 className={styles.formTitle}>Срок кредита (в месяцах)</h5>
              <div className={styles.editValueForm}>
                <input
                  type='number'
                  {
                    ...register('period', {
                        required: 'Введите срок кредита'
                    })
                  }
                />
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
              </div>
              <h5 className={styles.formTitle}>
                Предстоящие расходы на страхование
              </h5>
              <div className={styles.editValueForm}>
                <Select
                  className={styles.creditSelect}
                  {
                    ...register('duration', {
                      required: 'Введите сумму кредита'
                    })
                  }
                >
                  <MenuItem  value='0'>Eжегодно</MenuItem>
                  <MenuItem  value='1'>Не предусмотрены</MenuItem>
                </Select>
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
              </div>
              <h5 className={styles.formTitle}>Сумма погашения (₽)</h5>
              <div className={styles.editValueForm}>
                <input
                  type='number'
                  {
                    ...register('sum_add', {
                      required: 'Сумма погашения кредита'
                    })
                  }
                />
              </div>
            </div>
          </div>
          <div className={styles.secondaryblock}>
            <h4 className={styles.creditsBlockTitle}>Инвестиции и инфляция</h4>
            <div className={styles.creditBlock}>
              <h5 className={styles.formTitle}>
                Доходность возможных вложений (годовая) (%)
                <Tolt tooltipTitle1='Рекомендуется указывать актуальную на момент расчёта ставку вложений с низким или умеренным риском потерь – банковский депозит, облигации и др.'>
                  <img alt='' src={help} />
                </Tolt>
              </h5>

              <div className={styles.editValueForm}>
                <input
                  type='number'
                  {
                    ...register('invest_rate', {
                      required: 'Введите доходность возможных вложений'
                    })
                  }
                />
              </div>
              <h5 className={styles.formTitle}>
                Инфляция (%)
                <Tolt tooltipTitle1='Рекомендуется указывать среднее значение инфляции за последние 5 (6,5%) или 10 лет (7,0%). Если в рамках расчёта Вы не хотите учитывать инфляцию, укажите значение 0'>
                  <img alt='' src={help} />
                </Tolt>
              </h5>
              <div className={styles.editValueForm}>
                <input
                  type='number'
                  {
                    ...register('inflation_rate', {
                      required: 'Введите инфляцию'
                    })
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.bottomBtns}>
          <div className={styles.submitBtnBlock}>
            <button
              ref={calcBtnRef}
              disabled = {!isFormFilled()}
              className={styles.submitBtn}
              type='button'
              onClick={() => {
                SetAddModalActive(true);
              }}
            >
              Рассчитать
            </button>
          </div>
          <div className={styles.submitBtnBlock}>
            <button
              ref={saveBtnRef}
              disabled
              className={styles.submitBtn}
              type='button' >
              Сохранить
            </button>
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
            <SensorAim />
          </TabPanel>
          <TabPanel className={styles.result_panel}>
            <BarChartAim />
          </TabPanel>
        </Tabs>
      </Modal>
    </>
  );
}

export default CreditBlockAim;
