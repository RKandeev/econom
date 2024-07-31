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

function Dvp(props) {
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
  let arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  let arr2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  let arr3 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  let arr4 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  let arr5 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  let arr6 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  let arr7 = [
    20000, 25000, 15000, 5000, 37000, 28000, 15000, 18000, 11000, 170000, 30000,
    15000,
  ];

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
        label: "Недвижимость для личных нужд",
        lineTension: 0,
        borderColor: "#102E6A",
        backgroundColor: "#102E6A",
      },
      {
        order: 2,
        fill: 0,
        data: arr2,
        label: "Собственное строительство",
        lineTension: 0,
        borderColor: "#F2712D",
        backgroundColor: "#F2712D",
      },
      {
        order: 3,
        fill: 1,
        data: arr3,
        label: "Инвестиционная недвижимость",
        lineTension: 0,
        borderColor: "#102E6A85",
        backgroundColor: "#102E6A85",
      },
      {
        order: 4,
        fill: 2,
        data: arr4,
        label: "Обстановка инвест. Недвижимости",
        lineTension: 0,
        borderColor: "#F2712D85",
        backgroundColor: "#F2712D85",
      },
      {
        order: 5,
        fill: 3,
        data: arr5,
        label: "Личный транспорт",
        lineTension: 0,
        borderColor: "#102E6A70",
        backgroundColor: "#102E6A70",
      },
      {
        order: 6,
        fill: 4,
        data: arr6,
        label: "Собственный бизнес",
        lineTension: 0,
        borderColor: "#F2712D70",
        backgroundColor: "#F2712D70",
      },
      {
        order: 7,
        fill: 5,
        data: arr7,
        label: "Финансовые вложения",
        lineTension: 0,
        borderColor: "#102E6A55",
        backgroundColor: "#102E6A55",
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

export default Dvp;
