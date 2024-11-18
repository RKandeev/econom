import React, { useEffect, useRef, useState } from 'react';

import { useFieldArray, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

import { apiRequest } from '../../api';
import BarChartPriority1 from '../BarCharts/BarChartPriority1';
import BarChartPriority2 from '../BarCharts/BarChartPriority2';
import Checkcustom from '../Checkcustom/Checkcustom';
import Modal from '../Modal/Modal';
import SensorPriority from '../SensorModeling/SensorPriority';
import Tolt from '../Tolt/Tolt';

import help from '../../img/icon/icon__help.svg';

import styles from './CreditBlockPriority.module.scss';

function CreditBlockPriority(props) {
  const [addModalActive, SetAddModalActive] = useState(false);
  const [calcResult, setCalcResult] = useState({});
  const [creditCount, setCreditCount] = useState(2);
  const [insuranceAwards, setInsuranceAwards] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
  });
  const previousValues = useRef({});

  const calcBtnRef = useRef(null);
  const saveBtnRef = useRef(null);
  const calcNameRef = useRef(null);
  let chartsNames = ['Экономический эффект', 'Факторный анализ'];

  const {
    control,
    register,
    handleSubmit,
    trigger,
    watch,
    setError,
    reset,
    formState: { errors },
    setValue,
    getValues,
  } = useForm({
    defaultValues: {
      calcName: '',
      groups: [
        {
          credit_name1: '',
          duration1: '',
          insurance_award1: 0,
          isactive1: true,
          rate1: '',
          start_dt1: '',
          sum1: '',
        },
        {
          credit_name2: '',
          duration2: '',
          insurance_award2: 0,
          isactive2: true,
          rate2: '',
          start_dt2: '',
          sum2: '',
        },
      ],
      inflation_rate: '',
      invest_rate: '',
      sum_add: '',
      sum_add_dt: ''
    },
    mode: "all"
  });

  // Используем useFieldArray для управления массивом групп
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'groups'
  });

  if (window.outerWidth < 450) {
    chartsNames = ['1', '2'];
  }

  function setCreditCountHandler(cnt) {
    switch (cnt) {
      case 2:
        if (creditCount === 3) {
          remove(2);
        } else if (creditCount === 4) {
          remove([2,3]);
        } else if (creditCount === 5) {
          remove([2,3,4]);
        }
        break;
      case 3:
        if (creditCount === 2) {
          append({
            credit_name3: '',
            duration3: '',
            insurance_award3: 0,
            isactive3: true,
            rate3: '',
            start_dt3: '',
            sum3: '',
          });
        } else if (creditCount === 4) {
          remove(3);
        } else if (creditCount === 5) {
          remove([3,4]);
        }
        break;
      case 4:
        if (creditCount === 2) {
          append(
            {
              credit_name3: '',
              duration3: '',
              insurance_award3: 0,
              isactive3: true,
              rate3: '',
              start_dt3: '',
              sum3: '',
            });
          append(
            {
              credit_name4: '',
              duration4: '',
              insurance_award4: 0,
              isactive4: true,
              rate4: '',
              start_dt4: '',
              sum4: '',
            },
          );
        } else if (creditCount === 3) {
          append({
            credit_name4: '',
            duration4: '',
            insurance_award4: 0,
            isactive4: true,
            rate4: '',
            start_dt4: '',
            sum4: '',
          });
        } else if (creditCount === 5) {
          remove([4]);
        }
        break;
      case 5:
        if (creditCount === 2) {
          append(
            {
              credit_name3: '',
              duration3: '',
              insurance_award3: 0,
              isactive3: true,
              rate3: '',
              start_dt3: '',
              sum3: '',
            });
          append(
            {
              credit_name4: '',
              duration4: '',
              insurance_award4: 0,
              isactive4: true,
              rate4: '',
              start_dt4: '',
              sum4: '',
            },
          );
          append(
            {
              credit_name5: '',
              duration5: '',
              insurance_award5: 0,
              isactive5: true,
              rate5: '',
              start_dt5: '',
              sum5: '',
            },
          );
        } else if ( creditCount === 3 ) {
          append(
            {
              credit_name4: '',
              duration4: '',
              insurance_award4: 0,
              isactive4: true,
              rate4: '',
              start_dt4: '',
              sum4: '',
            },
          );
          append(
            {
              credit_name5: '',
              duration5: '',
              insurance_award5: 0,
              isactive5: true,
              rate5: '',
              start_dt5: '',
              sum5: '',
            });
        } else if (creditCount === 4) {
          append({
            credit_name5: '',
            duration5: '',
            insurance_award5: 0,
            isactive5: true,
            rate5: '',
            start_dt5: '',
            sum5: '',
          });
        }
        break;

    }
    setCreditCount(cnt);
  }

  function insuranceAwardsHandler(number) {
    const newAwards = Object.entries(insuranceAwards).reduce((acc, [award, value]) => {
      acc[award] = Number(award) === number ? !value : value;

      return acc;
    }, {});

    setInsuranceAwards(newAwards);
    setValue(`groups.${number - 1}.insurance_award${number}`, 0);
  }

  let sensor = false;

  if (creditCount > 2) {
    sensor = true;
  } else {
    sensor = false;
  }

  const values = watch();


  useEffect(() => {
    if (Object.entries(calcResult).length > 0) {
      // console.log(getValues());
      Object.assign(values, values.groups[0], values.groups[1]);
      delete values.groups;
      // console.log("values", values);
      // console.log("prevValues", previousValues.current);
      const hasChanged = Object.keys(values).some((key) => {
        return values[key] !== previousValues.current[key];
      });

      // console.log(hasChanged);

      if (hasChanged) {
        saveBtnRef.current.disabled = true;
      }
    }
  }, [values]);

  const calcBtnHandler = async () => {
    const isValid = await trigger();

    if (isValid) {
      previousValues.current = values;
      console.log(values);
      Object.assign(values, values.groups[0], values.groups[1]);
      delete values.groups;

      const formData = new FormData();

      for (const key in values) {
        if (values.hasOwnProperty(key)) {
          formData.append(key, values[key]);
        }
      }
      const response = await apiRequest({
        data: formData,
        method: 'POST',
        url: '/fin-model/priority',
      });

      if (!response) {
        toast.error('Непредвиденная ошибка');

        return;
      }

      if (response.code === 0 && response.http_status === 200) {
        setCalcResult(response.data);
        SetAddModalActive(true);
        saveBtnRef.current.disabled = false;
      } else {
        Object.entries(response.data).forEach(([key, value]) => {
          setError(`${key}`, { message: value[0], type: 'server' });
        });
        toast.error(response.mes);
      }
    } else {
      console.log(errors);

      let firstErrorField;

      if (errors.groups){
        let groupErrorField
        if (errors.groups[0]) {
          groupErrorField = Object.keys(errors.groups[0])[0];
        }
        if (errors.groups[1]) {
          groupErrorField = Object.keys(errors.groups[1])[0];
        }
        if (errors.groups[2]) {
          groupErrorField = Object.keys(errors.groups[2])[0];
        }
        if (errors.groups[3]) {
          groupErrorField = Object.keys(errors.groups[3])[0];
        }
        if (errors.groups[4]) {
          groupErrorField = Object.keys(errors.groups[4])[0];
        }
        firstErrorField = groupErrorField
      } else {
        firstErrorField = Object.keys(errors)[0];
      }


      // console.log(firstErrorField);
      const element = document.querySelector(`[name="${firstErrorField}"]`);

      if (element) {
        element.scrollIntoView({
          behavior:'smooth',
          block:'start',
        });
        element.focus();
      }
    }
  };

  const onSubmit = async () => {
    const values = watch();
    Object.assign(values, values.groups[0], values.groups[1]);
    delete values.groups;
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
      url: '/fin-model/priority-save',
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
                ref={calcNameRef}
                placeholder='Введите название'
                type='text'
                {
                  ...register(`calcName`, {
                    required: 'Введите название рассчета',
                  })
                }
              />
              {errors.calcName && <span className='error_message'>{errors.calcName.message}</span>}
            </div>
            <h5 className={styles.formTitle}>Количество кредитов</h5>
            <div className={styles.editValueForm + ' ' + styles.bubtngroup}>
              <button disabled className={styles.creditNumBtn} type='button'>
                1
              </button>
              <button
                active={creditCount === 2 ? '1' : ''}
                className={styles.creditNumBtn}
                type='button'
                onClick={() => setCreditCountHandler(2)}
              >
                2
              </button>
              <button
                active={creditCount === 3 ? '1' : ''}
                className={styles.creditNumBtn}
                type='button'
                onClick={() => setCreditCountHandler(3)}
              >
                3
              </button>
              <button
                active={creditCount === 4 ? '1' : ''}
                className={styles.creditNumBtn}
                type='button'
                onClick={() => setCreditCountHandler(4)}
              >
                4
              </button>
              <button
                active={creditCount === 5 ? '1' : ''}
                className={styles.creditNumBtn}
                type='button'
                onClick={() => setCreditCountHandler(5)}
              >
                5
              </button>
            </div>
          </div>
        </div>
        <h4 className={styles.creditsBlockTitle}>
          Кредиты для досрочного погашения
        </h4>
        <div className={styles.creditsBlocks}>
          {fields.map((el, k) => (
            <div key={k} className={styles.creditBlock}>
              <div className={styles.creditTitleBlock}>
                <div className={styles.creditTitle}>{'Кредит №' + (k + 1)}</div>
                <Checkcustom groupIndex={k} label='Учитывать' register={register} />
              </div>
              <h5 className={styles.formTitle}>Название кредита</h5>
              <div className={styles.editValueForm}>
                <input
                  placeholder='Введите название'
                  type='text'
                  {
                    ...register(`groups.${k}.credit_name${k + 1}`, {
                      required: 'Введите название кредита',
                    })
                  }
                />
                {
                  errors.groups &&
                  errors.groups[k] &&
                  errors.groups[k][`credit_name${k + 1}`] && (
                    <span className="error_message">
                      {errors.groups[k][`credit_name${k + 1}`].message}
                    </span>
                  )
                }
              </div>
              <h5 className={styles.formTitle}>Дата получения кредита</h5>
              <div className={styles.editValueForm}>
                <input
                  type='date'
                  {
                    ...register(`groups.${k}.start_dt${k + 1}`, {
                      required: 'Введите дату получения кредита',
                    })
                  }
                />
                {
                  errors.groups &&
                  errors.groups[k] &&
                  errors.groups[k][`start_dt${k + 1}`] && (
                    <span className="error_message">
                      {errors.groups[k][`start_dt${k + 1}`].message}
                    </span>
                  )
                }
              </div>
              <h5 className={styles.formTitle}>Срок кредита (в месяцах)</h5>
              <div className={styles.editValueForm}>
                <input
                  type='number'
                  {
                    ...register(`groups.${k}.duration${k + 1}`, {
                      required: 'Укажите срок кредита',
                    })
                  }
                />
                {
                  errors.groups &&
                  errors.groups[k] &&
                  errors.groups[k][`duration${k + 1}`] && (
                    <span className="error_message">
                      {errors.groups[k][`duration${k + 1}`].message}
                    </span>
                  )
                }
              </div>
              <h5 className={styles.formTitle}>Ставка (%)</h5>
              <div className={styles.editValueForm}>
                <input
                  type='number'
                  {
                    ...register(`groups.${k}.rate${k + 1}`, {
                      required: 'Укажите ставку',
                    })
                  }
                />
                {
                  errors.groups &&
                  errors.groups[k] &&
                  errors.groups[k][`rate${k + 1}`] && (
                    <span className="error_message">
                      {errors.groups[k][`rate${k + 1}`].message}
                    </span>
                  )
                }
              </div>
              <h5 className={styles.formTitle}>Сумма (&#8381;)</h5>
              <div className={styles.editValueForm}>
                <input
                  type='number'
                  {
                    ...register(`groups.${k}.sum${k + 1}`, {
                      required: 'Укажите сумму',
                    })
                  }
                />
                {
                  errors.groups &&
                  errors.groups[k] &&
                  errors.groups[k][`sum${k + 1}`] && (
                    <span className="error_message">
                      {errors.groups[k][`sum${k + 1}`].message}
                    </span>
                  )
                }
              </div>
              <h5 className={styles.formTitle}>
                Предстоящие расходы на страхование
              </h5>
              <div className={styles.editValueForm}>
                <select
                  className={styles.creditSelect}
                  onChange={() => insuranceAwardsHandler(k + 1)}
                >
                  <option value='0'>Eжегодно</option>
                  <option value='1'>Не предусмотрены</option>
                </select>
              </div>
              {insuranceAwards[`${k + 1}`] === false && (
                <>
                  <h5 className={styles.formTitle}>Страховая премия (%)</h5>
                  <div className={styles.editValueForm}>
                    <input
                      type='number'
                      {
                        ...register(`groups.${k}.insurance_award${k + 1}`)
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
                    ...register(`sum_add_dt`, {
                      required: 'Введите дату погашения',
                    })
                  }
                />
                {errors.sum_add_dt && <span className='error_message'>{errors.sum_add_dt.message}</span>}
              </div>
              <h5 className={styles.formTitle}>Сумма погашения (&#8381;)</h5>
              <div className={styles.editValueForm}>
                <input
                  type='number'
                  {
                    ...register(`sum_add`, {
                      required: 'Введите сумму погашения',
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
                <Tolt tooltipTitle1='Рекомендуется указывать актуальную на момент расчёта ставку вложений с низким или умеренным риском потерь – банковский депозит, облигации и др.'>
                  <img alt='' src={help} />
                </Tolt>
              </h5>

              <div className={styles.editValueForm}>
                <input
                  type='number'
                  {
                    ...register(`invest_rate`, {
                      required: 'Введите доходность возможных вложений',
                    })
                  }
                />
                {errors.invest_rate && <span className='error_message'>{errors.invest_rate.message}</span>}
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
                    ...register(`inflation_rate`, {
                      required: 'Укажите инфляцию',
                    })
                  }
                />
                {errors.inflation_rate && <span className='error_message'>{errors.inflation_rate.message}</span>}
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
              value="Сохранить"
            />

          </div>
        </div>
      </form>
      <Modal
        active={addModalActive}
        modalTitle='Досрочное погашение кредитов: приоритет'
        SetActive={SetAddModalActive}
      >
        <Tabs className={styles.result_tabs}>
          <TabList className={styles.modalTablist}>
            <Tab>{chartsNames[0]}</Tab>
            <Tab>{chartsNames[1]}</Tab>
          </TabList>
          <TabPanel className={styles.result_panel}>
            <div style={{ display: sensor ? 'none' : 'block' }}>
              <SensorPriority />
            </div>
            <div style={{ display: sensor ? 'block' : 'none' }}>
              <BarChartPriority1 />
            </div>
          </TabPanel>
          <TabPanel className={styles.result_panel}>
            <BarChartPriority2 />
          </TabPanel>
        </Tabs>
      </Modal>
    </>
  );
}

export default CreditBlockPriority;
