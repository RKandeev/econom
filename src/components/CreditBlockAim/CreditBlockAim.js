import React, { useState } from "react";
import styles from "./CreditBlockAim.module.scss";
import Checkcustom from "../Checkcustom/Checkcustom";
import help from "../../img/icon/icon__help.svg";
import Tolt from "../Tolt/Tolt";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import SensorCar from "../SensorModeling/SensorCar";
import BarChartCar from "../BarCharts/BarChartCar";
import Modal from "../Modal/Modal";
import SensorAim from "../SensorModeling/SensorAim";
import BarChartAim from "../BarCharts/BarChartAim";

function CreditBlockAim(props) {
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
  let chartsNames = ["Экономический эффект", "Факторный анализ"];
  if (window.outerWidth < 450) {
    chartsNames = ["1", "2"];
  }
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
        </div>

        <h4 className={styles.creditsBlockTitle}>
          Кредит для досрочного погашения
        </h4>
        <div className={styles.creditsBlocks}>
          {oldCredits.map((el, k) => (
            <div className={styles.creditBlock}>
              <div className={styles.creditTitleBlock}>
                <div className={styles.creditTitle}>Кредит</div>
              </div>
              <h5 className={styles.formTitle}>Название кредита</h5>
              <div className={styles.editValueForm}>
                <input
                  placeholder="Введите название"
                  type="text"
                  value={el.name}
                  onChange={(e) => setOldCredit(k, "name", e.target.value)}
                />
              </div>
              <h5 className={styles.formTitle}>Дата получения кредита</h5>
              <div className={styles.editValueForm}>
                <input
                  type="date"
                  value={el.date}
                  onChange={(e) => setOldCredit(k, "date", e.target.value)}
                />
              </div>
              <h5 className={styles.formTitle}>Срок кредита (в месяцах)</h5>
              <div className={styles.editValueForm}>
                <input
                  type="number"
                  value={el.period}
                  onChange={(e) => setOldCredit(k, "period", e.target.value)}
                />
              </div>
              <h5 className={styles.formTitle}>Ставка (%)</h5>
              <div className={styles.editValueForm}>
                <input
                  type="number"
                  value={el.rate}
                  onChange={(e) => setOldCredit(k, "rate", e.target.value)}
                />
              </div>
              <h5 className={styles.formTitle}>Сумма (₽)</h5>
              <div className={styles.editValueForm}>
                <input
                  type="number"
                  value={el.sum}
                  onChange={(e) => setOldCredit(k, "sum", e.target.value)}
                />
              </div>
              <h5 className={styles.formTitle}>
                Предстоящие расходы на страхование
              </h5>
              <div className={styles.editValueForm}>
                <select
                  className={styles.creditSelect}
                  value={el.ins_type}
                  onChange={(e) => setOldCredit(k, "ins_type", e.target.value)}
                >
                  <option value="0">Eжегодно</option>
                  <option value="1">Не предусмотрены</option>
                </select>
              </div>
              {el.ins_type === "0" && (
                <>
                  <h5 className={styles.formTitle}>Страховая премия (%)</h5>
                  <div className={styles.editValueForm}>
                    <input
                      type="number"
                      value={el.insurance}
                      onChange={(e) =>
                        setOldCredit(k, "insurance", e.target.value)
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
                  type="date"
                  value={newCredits.date}
                  onChange={(e) => setNewCredit("date", e.target.value)}
                />
              </div>
              <h5 className={styles.formTitle}>Сумма погашения (₽)</h5>
              <div className={styles.editValueForm}>
                <input
                  type="number"
                  value={newCredits.period}
                  onChange={(e) => setNewCredit("period", e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className={styles.secondaryblock}>
            <h4 className={styles.creditsBlockTitle}>Инвестиции и инфляция</h4>
            <div className={styles.creditBlock}>
              <h5 className={styles.formTitle}>
                Доходность возможных вложений (годовая) (%)
                <Tolt tooltipTitle1="Рекомендуется указывать актуальную на момент расчёта ставку вложений с низким или умеренным риском потерь – банковский депозит, облигации и др.">
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
                Инфляция (%)
                <Tolt tooltipTitle1="Рекомендуется указывать среднее значение инфляции за последние 5 (6,5%) или 10 лет (7,0%). Если в рамках расчёта Вы не хотите учитывать инфляцию, укажите значение 0">
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
        modalTitle="Досрочное погашение кредитов: целесообразность"
        active={addModalActive}
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
