import React from "react";
import { Line } from "react-chartjs-2";
import gradient from "chartjs-plugin-gradient";
import "./AnalysisLineCharts.scss";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
} from "chart.js";
import Selectblue from "../../Selectblue/Selectblue";
import Checkcustom from "../../Checkcustom/Checkcustom";

ChartJS.register(
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
  gradient
);

function Frd(props) {
  let years = [2022, 2023];
  let months = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];
  let LinesColor = localStorage.getItem("LinesColorFlat");
  let topArr = [];
  let bottomArr = [];
  // let mobile = true;
  // let mobileFont = 16;
  // let mobileColor = "#fff";
  // if (window.outerWidth < 450) {
  //   mobile = false;
  //   mobileColor = "#000";
  //   mobileFont = 12;
  // }
  let arr = [67, 83, 83, 83, 75, 92, 75, 83, 75, 83, 83, 83];
  let arr2 = [33, 17, 17, 17, 25, 8, 25, 17, 25, 17, 17, 17];
  if (LinesColor === "1") {
    topArr = arr;
    bottomArr = arr2;
  } else {
    topArr = arr2;
    bottomArr = arr;
  }
  const lineHomeOptions = {
    plugins: {
      datalabels: {
        display: false,
      },
      legend: {
        display: false,
        position: "bottom",
      },
    },
    scales: {
      x: {
        title: {
          display: false,
          text: "Годы",
          font: {
            size: 12,
            weight: 700,
          },
        },
      },
      y: {
        ticks: {
          beginAtZero: true,
        },
        min: 0,
        stacked: true,
        display: true,
        title: {
          display: true,
          text: "%",
          font: {
            size: 12,
            weight: 700,
          },
        },
      },
    },
    title: {
      display: false,
      text: "COVID-19 Cases of Last 6 Months",
      fontSize: 20,
    },
  };
  const lineHomeData = {
    labels: [
      "Январь",
      "Февраль",
      "Март",
      "Апрель",
      "Май",
      "Июнь",
      "Июль",
      "Август",
      "Сентябрь",
      "Октябрь",
      "Ноябрь",
      "Декабрь",
    ],
    datasets: [
      {
        fill: true,
        data: arr,
        label: "Выполнено",
        lineTension: 0,
        borderColor: "#0DA46F",
        backgroundColor: "#13efa3",
      },
      {
        fill: true,
        data: arr2,
        label: "Не выполнено",
        lineTension: 0,
        borderColor: "#EE2B49",
        backgroundColor: "#EE2B4995",
      },
    ],
  };

  return (
    <div className="chart lineChartModeling AnalysisLineChartBlock">
      <div className="analysisHeader">
        <h3 className="chartTitle">
          Комплексная оценка <br /> «Финансовые результаты»
        </h3>
        <div className="chartSettingsBlock">
          <div className="dateSelectBlock">
            <Selectblue selectArr={years} />
            <Selectblue selectArr={months} />
          </div>
          <Checkcustom label="С начала года" checked={false} />
        </div>
      </div>
      <Line options={lineHomeOptions} data={lineHomeData} />
    </div>
  );
}

export default Frd;
