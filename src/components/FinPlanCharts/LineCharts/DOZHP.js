import React from "react";
import { Line } from "react-chartjs-2";
import gradient from "chartjs-plugin-gradient";
import "./FinPlanLineCharts.scss";
import annotationPlugin from "chartjs-plugin-annotation";
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
  annotationPlugin,
  PointElement,
  Filler,
  gradient
);

function Dozhp(props) {
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
  let mobile = true;
  let mobileFont = 16;
  let mobileColor = "#fff";
  if (window.outerWidth < 450) {
    mobile = false;
    mobileColor = "#000";
    mobileFont = 12;
  }
  let arr = [
    14500, 14500, 14500, 14500, 14500, 14500, 14500, 2400, 14500, 14500, 14500,
    14500,
  ];
  let arr2 = [
    7000, 5400, 7500, 7500, 7500, 7500, 7500, 2200, 7500, 7500, 7500, 7500,
  ];
  let arr3 = [
    2000, 2000, 2000, 2000, 2000, 2000, 2000, 800, 2000, 2000, 2000, 2000,
  ];
  let arr4 = [6500, 0, 5000, 0, 0, 0, 7000, 0, 0, 10000, 0, 15000];
  let arr5 = [0, 0, 0, 0, 0, 0, 0, 100000, 0, 0, 0, 0];
  let arr6 = [
    1100, 1100, 1100, 1100, 1100, 1100, 1100, 1100, 1100, 1100, 1100, 1100,
  ];
  let arr7 = [
    5600, 5600, 5600, 5600, 5600, 5600, 5600, 1600, 5600, 5600, 5600, 5600,
  ];
  let arr8 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
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
        display: mobile,
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
          display: false,
          text: "млн. ₽",
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
        order: 1,
        fill: true,
        data: arr,
        label: "Образование и развитие",
        lineTension: 0,
        borderColor: "#102E6A",
        backgroundColor: "#102E6A",
      },
      {
        order: 2,
        fill: 0,
        data: arr2,
        label: "Развлечения и досуг",
        lineTension: 0,
        borderColor: "#F2712D",
        backgroundColor: "#F2712D",
      },
      {
        order: 3,
        fill: 1,
        data: arr3,
        label: "Внешний вид, уход и гигиена",
        lineTension: 0,
        borderColor: "#102E6A85",
        backgroundColor: "#102E6A85",
      },
      {
        order: 4,
        fill: 2,
        data: arr4,
        label: "Праздники и подарки",
        lineTension: 0,
        borderColor: "#F2712D85",
        backgroundColor: "#F2712D85",
      },
      {
        order: 5,
        fill: 3,
        data: arr5,
        label: "Путешествия и поездки",
        lineTension: 0,
        borderColor: "#102E6A70",
        backgroundColor: "#102E6A70",
      },
      {
        order: 6,
        fill: 4,
        data: arr6,
        label: "Здоровье и спорт",
        lineTension: 0,
        borderColor: "#F2712D70",
        backgroundColor: "#F2712D70",
      },
      {
        order: 7,
        fill: 5,
        data: arr7,
        label: "Вредные привычки",
        lineTension: 0,
        borderColor: "#102E6A55",
        backgroundColor: "#102E6A55",
      },
      {
        order: 8,
        fill: 6,
        data: arr8,
        label: "Прочие расходы",
        lineTension: 0,
        borderColor: "#F2712D55",
        backgroundColor: "#F2712D55",
      },
    ],
  };

  return (
    <div className="chart lineChartModeling AnalysisLineChartBlock">
      <div className="analysisHeader">
        <div className="chartSettingsBlock">
          <div className="dateSelectBlock">
            <Selectblue selectArr={years} />
            <Selectblue selectArr={months} />
          </div>
          <Checkcustom label="С начала года" checked={true} />
        </div>
      </div>
      <Line options={lineHomeOptions} data={lineHomeData} />
    </div>
  );
}

export default Dozhp;
