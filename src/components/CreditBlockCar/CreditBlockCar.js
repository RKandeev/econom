import React, { useState } from 'react';

import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

import BarChartCar from '../BarCharts/BarChartCar';
import Modal from '../Modal/Modal';
import SensorCar from '../SensorModeling/SensorCar';
import Tolt from '../Tolt/Tolt';

import help from '../../img/icon/icon__help.svg';

import styles from './CreditBlockCar.module.scss';

function CreditBlockCar(props) {
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
    },
  ]);
  let chartsNames = ['Экономический эффект', 'факторный анализ'];

  if (window.outerWidth < 450) {
    chartsNames = ['1', '2'];
  }
  const [newCredits, setNewCredits] = useState({
    date: '2023-06-01',
    discont: 7,
    ins_type: '0',
    insurance: 1,
    period: 24,
    rate: 12.0,
  });

  function setNewCredit(param, value) {
    let credits = { ...newCredits };

    credits[param] = value;
    setNewCredits(credits);
    console.log(credits);
  }

  const [calcName, setCalcName] = useState('');

  function setCreditCount(cnt) {
    let cr = [...oldCredits];

    if (cr.length > cnt) {
      const max = cr.length - cnt;

      for (let i = 0; i < max; i++) {
        cr.pop();
      }

      setOldCredits(cr);
    } else if (cr.length < cnt) {
      const max = cnt - cr.length;

      for (let i = 0; i < max; i++) {
        cr.push({
          date: '2023-04-01',
          ins_type: '0',
          insurance: 0.0,
          name: '',
          period: 12,
          rate: 0,
          sum: 0,
        });
      }

      setOldCredits(cr);
    }
  }

  return (
    <>
      <form>
        <div>
          <div>
            <h5 className={styles.formTitle}>Название расчёта</h5>
            <div className={styles.creditName}>
              <input
                placeholder="Введите название"
                type="text"
                value={calcName}
                onChange={(e) => setCalcName(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className={styles.secondaryblocks}>
          <div className={styles.secondaryblock}>
            <h4 className={styles.creditsBlockTitle}>Автомобиль</h4>
            <div className={styles.creditBlock}>
              <h5 className={styles.formTitle}>
                Стоимость автомобиля (&#x20bd;)
                <Tolt tooltipTitle1="В стоимость автомобиля рекомендуется включать не только цену его покупки, но и все затраты на его дополнительное оборудование, тюнинг и пр.">
                  <img alt="" src={help} />
                </Tolt>
              </h5>
              <div className={styles.editValueForm}>
                <input
                  type="number"
                  value={newCredits.period}
                  onChange={(e) => setNewCredit('period', e.target.value)}
                />
              </div>
              <h5 className={styles.formTitle}>
                Ежемесячные расходы на содержание автомобиля (&#x20bd;){' '}
                <Tolt tooltipTitle1="Сюда включаются расходы на топливо, парковку, стоянку, мойку, автомобильные штрафы и другие регулярные расходы, связанные с эксплуатацией автомобиля">
                  <img alt="" src={help} />
                </Tolt>
              </h5>
              <div className={styles.editValueForm}>
                <input
                  type="number"
                  value={newCredits.period}
                  onChange={(e) => setNewCredit('period', e.target.value)}
                />
              </div>
              <h5 className={styles.formTitle}>
                Ежегодные расходы на содержание автомобиля (&#x20bd;){' '}
                <Tolt tooltipTitle1="Сюда включаются расходы на техническое обслуживание, ремонт, шиномонтаж, дополнительное оборудование и другие расходы нерегулярного характера, связанные с эксплуатацией автомобиля">
                  <img alt="" src={help} />
                </Tolt>
              </h5>
              <div className={styles.editValueForm}>
                <input
                  type="number"
                  value={newCredits.period}
                  onChange={(e) => setNewCredit('period', e.target.value)}
                />
              </div>
              <h5 className={styles.formTitle}>
                Обязательное страхование (ОСАГО) (&#x20bd;){' '}
              </h5>
              <div className={styles.editValueForm}>
                <input
                  type="number"
                  value={newCredits.period}
                  onChange={(e) => setNewCredit('period', e.target.value)}
                />
              </div>
              <h5 className={styles.formTitle}>
                Транспортный налог (&#x20bd;)
                <Tolt tooltipTitle1="Для определения суммы транспортного налога, который вы будете платить, став владельцем автомобиля, можно воспользоваться налоговым калькулятором">
                  <img alt="" src={help} />
                </Tolt>
              </h5>
              <div className={styles.editValueForm}>
                <input
                  type="number"
                  value={newCredits.period}
                  onChange={(e) => setNewCredit('period', e.target.value)}
                />
              </div>
              <h5 className={styles.formTitle}>
                Ожидаемый среднегодовой прирост стоимости автомобиля (%){' '}
                <Tolt tooltipTitle1="Здесь указывается % ожидаемого ежегодного роста стоимости автомобиля этой марки и комплектации. Для определения этого параметра можно использовать информацию с сайтов автодилеров">
                  <img alt="" src={help} />
                </Tolt>
              </h5>
              <div className={styles.editValueForm}>
                <input type="number" />
              </div>
              <h5 className={styles.formTitle}>
                Износ автомобиля (%){' '}
                <Tolt tooltipTitle1="Здесь указывается % ожидаемого ежегодного снижения стоимости покупаемого автомобиля вследствие его старения, износа, роста пробега, «возраста». Для определения этого параметра можно использовать информацию из агрегаторов объявлений о продаже автомобилей">
                  <img alt="" src={help} />
                </Tolt>
              </h5>
              <div className={styles.editValueForm}>
                <input type="number" />
              </div>
            </div>
          </div>
          <div className={styles.secondaryblock}>
            <h4 className={styles.creditsBlockTitle}>Условия покупки</h4>
            <div className={styles.creditBlock}>
              <h5 className={styles.formTitle}>
                Первоначальный взнос (&#x20bd;)
                <Tolt tooltipTitle1="Здесь указывается сумма собственных средств, которую Вы готовы внести в качестве первоначального взноса за приобретаемый автомобиль. Если Вы планируете покупку автомобиля полностью за собственные средства (без привлечения кредита), то указывается сумма полной стоимости автомобиля">
                  <img alt="" src={help} />
                </Tolt>
              </h5>
              <div className={styles.editValueForm}>
                <input
                  type="number"
                  value={newCredits.period}
                  onChange={(e) => setNewCredit('period', e.target.value)}
                />
              </div>
              <h5 className={styles.formTitle}>Ставка по кредиту (%) </h5>
              <div className={styles.editValueForm}>
                <input type="number" />
              </div>
              <h5 className={styles.formTitle}>Срок кредита (месяцы)</h5>
              <div className={styles.editValueForm}>
                <input type="number" />
              </div>

              <h5 className={styles.formTitle}>
                Стоимость ежегодного страхования авто (% от остатка долга по
                кредиту)
                <Tolt tooltipTitle1="Здесь указывается ставка (в %) страховой премии, которую Вы будете ежегодно уплачивать в рамках обязательств страхования автомобиля, предусмотренных договором кредитования">
                  <img alt="" src={help} />
                </Tolt>
              </h5>
              <div className={styles.editValueForm}>
                <input
                  type="number"
                  value={newCredits.period}
                  onChange={(e) => setNewCredit('period', e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className={styles.secondaryblock}>
            <h4 className={styles.creditsBlockTitle}>Альтернатива</h4>
            <div className={styles.creditBlock}>
              <h5 className={styles.formTitle}>
                Ежемесячные транспортные расходы при отказе от покупки
                автомобиля (&#x20bd;)
                <Tolt tooltipTitle1="Здесь указывается общая сумма расходов на транспорт, которые мы будем нести в том случае, если откажемся от покупки автомобиля, и от которых нас автомобиль может «избавить». Она включает расходы на общественный транспорт, такси, каршеринг и др.">
                  <img alt="" src={help} />
                </Tolt>
              </h5>
              <div className={styles.editValueForm}>
                <input
                  type="number"
                  value={newCredits.period}
                  onChange={(e) => setNewCredit('period', e.target.value)}
                />
              </div>
              <h5 className={styles.formTitle}>
                Ожидаемая доходность вложений (годовая) (%){' '}
                <Tolt tooltipTitle1="Здесь указывается годовой процент дохода, который Вы можете получать, инвестировав собственные средства вместо того, чтобы направлять их на покупку автомобиля. Рекомендуется указывать доходность вложений с низким или умеренным, приемлемым для Вас риском">
                  <img alt="" src={help} />
                </Tolt>
              </h5>
              <div className={styles.editValueForm}>
                <input type="number" />
              </div>
            </div>
          </div>
          <div className={styles.secondaryblock}>
            <h4 className={styles.creditsBlockTitle}>Инфляция</h4>
            <div className={styles.creditBlock}>
              <h5 className={styles.formTitle}>
                Ожидаемая годовая инфляция (%)
                <Tolt tooltipTitle1="Здесь указывается среднегодовое значение инфляции, которую Вы ожидаете в течение заданного Вами периода расчёта. Для более корректной оценки рекомендуется учитывать статистику инфляции за последние 10 лет: в среднем она составляла 7% в год (приводим таблицу инфляции по годам)">
                  <img alt="" src={help} />
                </Tolt>
              </h5>

              <div className={styles.editValueForm}>
                <input
                  type="number"
                  value={newCredits.discont}
                  onChange={(e) => setNewCredit('discont', e.target.value)}
                />
              </div>
              <h5 className={styles.formTitle}>
                Период расчёта (месяцы)
                <Tolt tooltipTitle1="Здесь указывается период, за который Вы хотите рассчитать экономический эффект от покупки автомобиля. Рекомендуется устанавливать его равным сроку кредита">
                  <img alt="" src={help} />
                </Tolt>
              </h5>
              <div className={styles.editValueForm}>
                <input
                  type="number"
                  value={newCredits.discont}
                  onChange={(e) => setNewCredit('discont', e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.submitBtnBlock}>
          <button
            className={styles.submitBtn}
            type="button"
            onClick={() => {
              SetAddModalActive(true);
            }}
          >
            Рассчитать
          </button>
        </div>
      </form>
      <Modal
        active={addModalActive}
        modalTitle="Покупка автомобиля: оценка финансовых последствий"
        SetActive={SetAddModalActive}
      >
        <Tabs className={styles.result_tabs}>
          <TabList className={styles.modalTablist}>
            <Tab>{chartsNames[0]}</Tab>
            <Tab>{chartsNames[1]}</Tab>
          </TabList>
          <TabPanel className={styles.result_panel}>
            <SensorCar />
          </TabPanel>
          <TabPanel className={styles.result_panel}>
            <BarChartCar />
          </TabPanel>
        </Tabs>
      </Modal>
    </>
  );
}

export default CreditBlockCar;
