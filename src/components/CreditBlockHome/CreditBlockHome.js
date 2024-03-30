import React, { useState } from "react";
import styles from "./CreditBlockHome.module.scss";
import help from "../../img/icon/icon__help.svg";
import Tolt from "../Tolt/Tolt";
import Modal from "../Modal/Modal";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import SensorHome from "../SensorModeling/SensorHome";

function CreditBlockHome(props) {
  const [addModalActive, SetAddModalActive] = useState(false);
  const [oldCredits, setOldCredits] = useState([
    {
      name: "",
      date: "2021-04-01",
      sum: 300000,
      rate: 16,
      period: 60,
      ins_type: "0",
      insurance: 1.0,
    },
  ]);

  function setOldCredit(k, param, value) {
    let credits = [...oldCredits];
    credits[k][param] = value;
    setOldCredits(credits);
  }
  const [newCredits, setNewCredits] = useState({
    date: "2023-06-01",
    rate: 12.0,
    period: 24,
    ins_type: "0",
    insurance: 1,
    discont: 7,
  });

  function setNewCredit(param, value) {
    let credits = { ...newCredits };
    credits[param] = value;
    setNewCredits(credits);
    console.log(credits);
  }

  const [calcName, setCalcName] = useState("");

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
          name: "",
          date: "2023-04-01",
          sum: 0,
          rate: 0,
          period: 12,
          ins_type: "0",
          insurance: 0.0,
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
                type="text"
                placeholder="Введите название"
                value={calcName}
                onChange={(e) => setCalcName(e.target.value)}
              />
            </div>
          </div>
          <div className={styles.creditName}>
            <h5 className={styles.formTitle}>Дата принятия решения</h5>
            <input type="date" />
          </div>
        </div>

        <h4 className={styles.creditsBlockTitle}>Покупка жилья</h4>
        <div className={styles.creditsBlocks}>
          {oldCredits.map((el, k) => (
            <div className={styles.creditBlock}>
              <h5 className={styles.formTitle}>
                Стоимость жилья
                <Tolt tooltipTitle1="В стоимость жилья рекомендуется включать не только цену его покупки, но и расходы на ремонт, обустройство и доведение жилья до состояния, пригодного для Вашего проживания">
                  <img src={help} alt="" />
                </Tolt>
              </h5>
              <div className={styles.editValueForm}>
                <input
                  type="number"
                  value={el.sum}
                  onChange={(e) => setOldCredit(k, "sum", e.target.value)}
                />
              </div>
              <h5 className={styles.formTitle}>
                Первоначальный взнос
                <Tolt tooltipTitle1="Здесь указывается сумма собственных средств, которую Вы готовы внести в качестве первоначального взноса за приобретаемое жилье. Если Вы планируете покупку жилья полностью за собственные средства (без привлечения кредита), то указывается сумма полной стоимости жилья">
                  <img src={help} alt="" />
                </Tolt>
              </h5>
              <div className={styles.editValueForm}>
                <input
                  type="number"
                  value={el.sum}
                  onChange={(e) => setOldCredit(k, "sum", e.target.value)}
                />
              </div>
              <h5 className={styles.formTitle}>
                Ставка ипотечного кредита %{" "}
                <Tolt tooltipTitle1="Здесь указывается ставка (в %) страховой премии, которую Вы будете ежегодно уплачивать в рамках обязательств страхования жилья, предусмотренных договором ипотечного кредитования">
                  <img src={help} alt="" />
                </Tolt>
              </h5>
              <div className={styles.editValueForm}>
                <input
                  type="number"
                  value={el.rate}
                  onChange={(e) => setOldCredit(k, "rate", e.target.value)}
                />
              </div>
              <h5 className={styles.formTitle}>
                Ожидаемый ежегодный прирост стоимости покупаемого жилья %{" "}
                <Tolt tooltipTitle1="Здесь указывается % ожидаемого ежегодного роста стоимости аналогов покупаемого Вами жилья. Для определения этого параметра рекомендуется использовать информацию специализированных сайтов-агрегаторов или имеющиеся в открытом доступе статистические данные">
                  <img src={help} alt="" />
                </Tolt>
              </h5>
              <div className={styles.editValueForm}>
                <input
                  type="number"
                  value={el.rate}
                  onChange={(e) => setOldCredit(k, "rate", e.target.value)}
                />
              </div>
            </div>
          ))}
        </div>
        <div className={styles.creditsBlocks}></div>
        <div className={styles.secondaryblocks}>
          <div className={styles.secondaryblock}>
            <h4 className={styles.creditsBlockTitle}>Аренда жилья</h4>
            <div className={styles.creditBlock}>
              <h5 className={styles.formTitle}>
                Стоимость ежемесячной аренды жилья
                <Tolt tooltipTitle1="Здесь указывается стоимость аренды жилья, являющегося аналогом того, покупку которого Вы рассматриваете. Для определения этого параметра рекомендуется использовать информацию специализированных сайтов-агрегаторов">
                  <img src={help} alt="" />
                </Tolt>
              </h5>
              <div className={styles.editValueForm}>
                <input
                  type="number"
                  value={newCredits.period}
                  onChange={(e) => setNewCredit("period", e.target.value)}
                />
              </div>
              <h5 className={styles.formTitle}>
                Ожидаемый ежегодный прирост стоимости аренды жилья %{" "}
                <Tolt tooltipTitle1="Здесь указывается % ожидаемого ежегодного роста стоимости аренды жилья, аналогичного тому, покупку которого Вы рассматриваете. Для определения этого параметра рекомендуется использовать информацию специализированных сайтов-агрегаторов">
                  <img src={help} alt="" />
                </Tolt>
              </h5>
              <div className={styles.editValueForm}>
                <input type="number" />
              </div>
            </div>
          </div>
          <div className={styles.secondaryblock}>
            <h4 className={styles.creditsBlockTitle}>Инвестиции и инфляция</h4>
            <div className={styles.creditBlock}>
              <h5 className={styles.formTitle}>
                Ожидаемая годовая доходность вложений (%)
                <Tolt tooltipTitle1="Здесь указывается годовой процент дохода, который Вы можете получать, инвестировав собственные средства вместо того, чтобы направлять их на покупку жилья. Рекомендуется указывать доходность вложений с низким или умеренным, приемлемым для Вас риском">
                  <img src={help} alt="" />
                </Tolt>
              </h5>

              <div className={styles.editValueForm}>
                <input
                  type="number"
                  value={newCredits.discont}
                  onChange={(e) => setNewCredit("discont", e.target.value)}
                />
              </div>
              <h5 className={styles.formTitle}>
                Ожидаемая годовая инфляция (%)
                <Tolt tooltipTitle1="Здесь указывается среднегодовое значение инфляции, которую Вы ожидаете в течение заданного Вами периода расчёта. Для более корректной оценки рекомендуется учитывать статистику инфляции за последние 10 лет: в среднем она составляла 7% в год (приводим таблицу инфляции по годам)">
                  <img src={help} alt="" />
                </Tolt>
              </h5>
              <div className={styles.editValueForm}>
                <input
                  type="number"
                  value={newCredits.discont}
                  onChange={(e) => setNewCredit("discont", e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.submitBtnBlock}>
          <button
            type="button"
            className={styles.submitBtn}
            onClick={() => {
              SetAddModalActive(true);
            }}
          >
            Рассчитать
          </button>
        </div>
      </form>
      <Modal
        modalTitle="Платежи по кредитам"
        active={addModalActive}
        SetActive={SetAddModalActive}
      >
        <Tabs className={styles.result_tabs}>
          <TabList className={styles.modalTablist}>
            <Tab>Сравнительная выгода</Tab>
            <Tab>Динамика капитала</Tab>
          </TabList>
          <TabPanel className={styles.result_panel}>
            <SensorHome />
          </TabPanel>
          <TabPanel className={styles.result_panel}></TabPanel>
        </Tabs>
      </Modal>
    </>
  );
}

export default CreditBlockHome;
