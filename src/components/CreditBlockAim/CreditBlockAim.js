import React, { useState } from "react";
import styles from "./CreditBlockAim.module.scss";
import Checkcustom from "../Checkcustom/Checkcustom";
import help from "../../img/icon/icon__help.svg";
import Tolt from "../Tolt/Tolt";

function CreditBlockAim(props) {
  // const [chartModalActive, SetChartModalActive] = useState(false);
  // let color;
  // if (props.value > 0) {
  //   color = "#0DA46F";
  // } else if (props.value < 0) {
  //   color = "#EE2B49";
  // } else {
  //   color = "#ABB0C3";
  // }

  // let months = ["Январь", "Февраль"];
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
  //
  // const [ans, setAns] = useState({});

  // async function send() {
  //   const res = await ModelingRAPI.m1(oldCredits, newCredits);
  //   setAns(res.result);
  //   SetChartModalActive(true);
  //   // console.log(res)
  // }
  //
  // let arr = [26834, 21014];

  // const lineChartData = {
  //   plugins: {
  //     gradient,
  //   },
  //   labels: ["До", "После"],
  //   datasets: [
  //     {
  //       gradient: {
  //         backgroundColor: {
  //           axis: "y",
  //           colors: {
  //             0: "transparent",
  //             10000: "rgba(13, 164, 111, 0.2)",
  //             1000000: "rgba(13, 164, 111, 0.5)",
  //           },
  //         },
  //       },
  //       data: arr,
  //       label: "Рублей",
  //       fill: true,
  //       lineTension: 0,
  //     },
  //   ],
  // };

  // const [ser1, setSer1] = useState([
  //   {
  //     name: "Расходы",
  //     data: [0, 0],
  //   },
  //   {
  //     name: "Расходы 2",
  //     data: [1000, 20000],
  //   },
  // ]);

  // const [ser2, setSer2] = useState([
  //   {
  //     name: "Ежемесячный платеж",
  //     data: [0, 0],
  //   },
  // ]);
  // const [ser3, setSer3] = useState(0);
  // const [ser4, setSer4] = useState(0);

  // const optionsD = {
  //   chart: {
  //     type: "gauge",
  //     plotBackgroundColor: null,
  //     plotBackgroundImage: null,
  //     plotBorderWidth: 0,
  //     plotShadow: false,
  //     height: "80%",
  //   },
  //
  //   title: {
  //     text: "Изменение расходов по кредитам за счет рефинансирования",
  //     style: {
  //       fontSize: "18rem",
  //       color: "#4B4D52",
  //       marginBottom: "0rem",
  //       padding: 0,
  //     },
  //   },
  //
  //   pane: {
  //     startAngle: -90,
  //     endAngle: 90,
  //     background: null,
  //     center: ["50%", "75%"],
  //     size: "110%",
  //   },
  //
  //   // the value axis
  //   yAxis: {
  //     min: -30,
  //     max: 30,
  //     tickPixelInterval: 72,
  //     tickPosition: "inside",
  //     tickColor: Highcharts.defaultOptions.chart.backgroundColor || "#FFFFFF",
  //     tickLength: 20,
  //     tickWidth: 2,
  //     minorTickInterval: null,
  //     labels: {
  //       distance: 20,
  //       style: {
  //         fontSize: "10rem",
  //       },
  //     },
  //     lineWidth: 0,
  //     plotBands: [
  //       {
  //         from: -30,
  //         to: 0,
  //         color: "#EE2B49", // green
  //         thickness: 40,
  //       },
  //       {
  //         from: 0,
  //         to: 30,
  //         color: "#0DA46F", // red
  //         thickness: 40,
  //       },
  //     ],
  //   },
  //
  //   series: [
  //     {
  //       name: "Speed",
  //       data: [Math.min(30, Math.max(parseInt(ser3), -30))],
  //       tooltip: {
  //         valueSuffix: " km/h",
  //       },
  //       dataLabels: {
  //         format: parseInt(ser3) + " %",
  //         borderWidth: 0,
  //         color:
  //           (Highcharts.defaultOptions.title &&
  //             Highcharts.defaultOptions.title.style &&
  //             Highcharts.defaultOptions.title.style.color) ||
  //           "#333333",
  //         // color: function (x) {
  //         //     console.log(x)
  //         //     return '#f00'
  //         // },
  //         style: {
  //           fontSize: "14rem",
  //         },
  //       },
  //       dial: {
  //         radius: "90%",
  //         backgroundColor: "black",
  //         baseWidth: 12,
  //         baseLength: "0%",
  //         rearLength: "0%",
  //       },
  //       pivot: {
  //         backgroundColor: "gray",
  //         radius: 6,
  //       },
  //     },
  //   ],
  // };
  const [calcName, setCalcName] = useState("");

  // useEffect(
  //   function () {
  //     if ("percentOld" in ans) {
  //       const s4 =
  //         ans.percentOld +
  //         ans.insuranceOld -
  //         (ans.percentNew + ans.insuranceNew);
  //       setSer4(s4);
  //       setSer1([
  //         {
  //           name: "Расходы на проценты",
  //           data: [ans.percentOld, ans.percentNew],
  //         },
  //         {
  //           name: "Расходы на страхование",
  //           data: [ans.insuranceOld, ans.insuranceNew],
  //         },
  //       ]);
  //       setSer2([
  //         {
  //           name: "Расходы",
  //           data: [ans.monthlyOld, ans.monthlyNew],
  //         },
  //       ]);
  //       setSer3([(s4 * 100) / (ans.percentOld + ans.insuranceOld)]);
  //     }
  //   },
  //   [ans]
  // );

  // const optionsY = {
  //   chart: {
  //     type: "bar",
  //     height: 350,
  //     stacked: true,
  //   },
  //   title: {
  //     text: "Суммарные расходы по обслуживанию кредитов",
  //     align: "center",
  //     style: {
  //       fontSize: "17rem",
  //       fontWeight: "500",
  //       color: "#4B4D52",
  //       textAlign: "center",
  //     },
  //   },
  //   plotOptions: {
  //     bar: {
  //       horizontal: false,
  //       columnWidth: "55%",
  //       endingShape: "rounded",
  //       dataLabels: {
  //         total: {
  //           enabled: true,
  //           style: {
  //             fontSize: "13rem",
  //             fontWeight: 900,
  //             paddingBottom: "15rem",
  //             color: "#464E5F",
  //           },
  //           offsetY: -12,
  //           offsetX: 0,
  //         },
  //       },
  //     },
  //   },
  //   dataLabels: {
  //     enabled: true,
  //   },
  //   stroke: {
  //     show: true,
  //     width: 2,
  //     colors: ["transparent"],
  //   },
  //   xaxis: {
  //     categories: ["Без рефинансирования", "С рефинансированием"],
  //   },
  //   yaxis: [{ show: true }],
  //   fill: {
  //     opacity: 1,
  //   },
  //   colors: ["#06A1D7", "#6B59A5"],
  //   tooltip: {
  //     y: {
  //       formatter: function (val) {
  //         return parseInt(val);
  //       },
  //     },
  //   },
  // };
  //
  // let optionsY2 = {};
  //
  // for (let key in optionsY) {
  //   optionsY2[key] = optionsY[key];
  // }

  // optionsY2.title = {
  //   text: "Ежемесячный платеж по кредитам",
  //   align: "center",
  //   style: {
  //     fontSize: "17rem",
  //     fontWeight: "500",
  //     color: "#4B4D52",
  //     textAlign: "center",
  //   },
  // };
  // optionsY2.plotOptions = {
  //   bar: {
  //     horizontal: false,
  //     columnWidth: "55%",
  //     endingShape: "rounded",
  //   },
  // };
  //
  // const maxValue = 60;
  // const minValue = 10;
  //
  // const valueToPercent = (val) =>
  //   ((val - minValue) * 100) / (maxValue - minValue);
  // const optionsX = {
  //   chart: {
  //     type: "radialBar",
  //     offsetY: 0,
  //     sparkline: {
  //       enabled: true,
  //     },
  //   },
  //   plotOptions: {
  //     radialBar: {
  //       startAngle: -90,
  //       endAngle: 90,
  //       track: {
  //         background: "#e7e7e7",
  //         strokeWidth: "97%",
  //         margin: 5, // margin is in pixels
  //         dropShadow: {
  //           enabled: true,
  //           top: 2,
  //           left: 0,
  //           color: "#999",
  //           opacity: 1,
  //           blur: 2,
  //         },
  //       },
  //       dataLabels: {
  //         name: {
  //           show: false,
  //         },
  //         value: {
  //           formatter: function (val) {
  //             return val - 50;
  //           },
  //           offsetY: -2,
  //           fontSize: "22px",
  //         },
  //       },
  //     },
  //   },
  //   grid: {
  //     padding: {
  //       top: -10,
  //     },
  //   },
  //   labels: ["Average Results"],
  // };

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
        <div className={styles.creditsBlocks}></div>
        <div className={styles.secondaryblocks}>
          <div className={styles.secondaryblock}>
            <h4 className={styles.creditsBlockTitle}>
              Условия рефинансирования
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
              <h5 className={styles.formTitle}>Сумма погашения</h5>
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
            <h4 className={styles.creditsBlockTitle}>
              Дополнительные параметры
            </h4>
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
          <button type="button" className={styles.submitBtn}>
            Рассчитать
          </button>
        </div>
      </form>
    </>
  );
}

export default CreditBlockAim;
