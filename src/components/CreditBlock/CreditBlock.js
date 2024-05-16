import React, { useState } from "react";
import styles from "./CreditBlock.module.scss";
import Checkcustom from "../Checkcustom/Checkcustom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import BarChartFlat from "../BarCharts/BarChartFlat";
import LineFlat from "../LineChartModeling/LineFlat";
import Modal from "../Modal/Modal";
import SensorRefin from "../SensorModeling/SensorRefin";
import BarChartRefin from "../BarCharts/BarChartRefin";
import BarChartRefinPay from "../BarCharts/BarChartRefinPay";

function CreditBlock(props) {
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
    {
      name: "",
      date: "2020-03-02",
      sum: 700000,
      rate: 14.0,
      period: 60,
      ins_type: "0",
      insurance: 4.0,
    },
  ]);
  let chartsNames = [
    "Экономический эффект",
    "Расходы по кредитам",
    "Ежемесячные платежи",
  ];
  if (window.outerWidth < 450) {
    chartsNames = ["1", "2", "3"];
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
            <h5 className={styles.formTitle}>Количество кредитов</h5>
            <div className={styles.editValueForm + " " + styles.bubtngroup}>
              <button
                className={styles.creditNumBtn}
                type="button"
                onClick={() => setCreditCount(1)}
                active={oldCredits.length === 1 ? "1" : ""}
              >
                1
              </button>
              <button
                className={styles.creditNumBtn}
                type="button"
                onClick={() => setCreditCount(2)}
                active={oldCredits.length === 2 ? "1" : ""}
              >
                2
              </button>
              <button
                className={styles.creditNumBtn}
                type="button"
                onClick={() => setCreditCount(3)}
                active={oldCredits.length === 3 ? "1" : ""}
              >
                3
              </button>
              <button
                className={styles.creditNumBtn}
                type="button"
                onClick={() => setCreditCount(4)}
                active={oldCredits.length === 4 ? "1" : ""}
              >
                4
              </button>
              <button
                className={styles.creditNumBtn}
                type="button"
                onClick={() => setCreditCount(5)}
                active={oldCredits.length === 5 ? "1" : ""}
              >
                5
              </button>
            </div>
          </div>
        </div>

        <h4 className={styles.creditsBlockTitle}>Рефинансируемые кредиты</h4>
        <div className={styles.creditsBlocks}>
          {oldCredits.map((el, k) => (
            <div className={styles.creditBlock}>
              <div className={styles.creditTitleBlock}>
                <div className={styles.creditTitle}>{"Кредит №" + (k + 1)}</div>
                <Checkcustom label="Учитывать" />
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
              <h5 className={styles.formTitle}>Ставка</h5>
              <div className={styles.editValueForm}>
                <input
                  type="number"
                  value={el.rate}
                  onChange={(e) => setOldCredit(k, "rate", e.target.value)}
                />
              </div>
              <h5 className={styles.formTitle}>Сумма</h5>
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
        <div className={styles.secondaryblocks}>
          <div className={styles.secondaryblock}>
            <h4 className={styles.creditsBlockTitle}>
              Условия рефинансирования
            </h4>
            <div className={styles.creditsBlocks}>
              <div className={styles.creditBlock}>
                <h5 className={styles.formTitle}>Дата рефинансирования</h5>
                <div className={styles.editValueForm}>
                  <input
                    type="date"
                    value={newCredits.date}
                    onChange={(e) => setNewCredit("date", e.target.value)}
                  />
                </div>
                <h5 className={styles.formTitle}>Срок кредита (в месяцах)</h5>
                <div className={styles.editValueForm}>
                  <input
                    type="number"
                    value={newCredits.period}
                    onChange={(e) => setNewCredit("period", e.target.value)}
                  />
                </div>
                <h5 className={styles.formTitle}>Ставка</h5>
                <div className={styles.editValueForm}>
                  <input
                    type="number"
                    step="0.1"
                    value={newCredits.rate}
                    onChange={(e) => setNewCredit("rate", e.target.value)}
                  />
                </div>
                <h5 className={styles.formTitle}>
                  Предстоящие расходы на страхование
                </h5>
                <div className={styles.editValueForm}>
                  <select
                    className={styles.creditSelect}
                    value={newCredits.ins_type}
                    onChange={(e) => setNewCredit("ins_type", e.target.value)}
                  >
                    <option value="0">Eжегодно</option>
                    <option value="1">Не предусмотрены</option>
                  </select>
                </div>
                {newCredits.ins_type === "0" && (
                  <>
                    <h5 className={styles.formTitle}>Страховая премия (%)</h5>
                    <div className={styles.editValueForm}>
                      <input
                        type="number"
                        value={newCredits.insurance}
                        onChange={(e) =>
                          setNewCredit("insurance", e.target.value)
                        }
                      />
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className={styles.secondaryblock}>
            <h4 className={styles.creditsBlockTitle}>
              Дополнительные параметры
            </h4>
            <div className={styles.creditBlock}>
              <h5 className={styles.formTitle}>Инфляция (%)</h5>
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
        modalTitle="Рефинансирование кредитов: целесообразность"
        active={addModalActive}
        SetActive={SetAddModalActive}
      >
        <Tabs className={styles.result_tabs}>
          <TabList className={styles.modalTablist}>
            <Tab>{chartsNames[0]}</Tab>
            <Tab>{chartsNames[1]}</Tab>
            <Tab>{chartsNames[2]}</Tab>
          </TabList>
          <TabPanel className={styles.result_panel}>
            <SensorRefin />
          </TabPanel>
          <TabPanel className={styles.result_panel}>
            <BarChartRefin />
          </TabPanel>
          <TabPanel className={styles.result_panel}>
            <BarChartRefinPay />
          </TabPanel>
        </Tabs>
      </Modal>
    </>
  );
}

export default CreditBlock;
