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

function Dvvp(props) {
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
    10900, 11400, 10900, 10900, 9900, 8900, 8400, 8400, 8400, 8900, 10900,
    10900,
  ];
  let arr2 = [
    35000, 28300, 29000, 30700, 31000, 31000, 32700, 15500, 31000, 32700, 31000,
    31000,
  ];
  let arr3 = [0, 0, 0, 4500, 3000, 3000, 20000, 2500, 15000, 24000, 8000, 0];
  let arr4 = [0, 45000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  let arr5 = [700, 700, 700, 700, 700, 700, 700, 700, 700, 700, 700, 700];
  let arr6 = [
    10300, 10300, 10300, 10300, 21300, 47800, 10300, 6300, 10300, 10300, 10300,
    10300,
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
        label: "Продажа имущества",
        lineTension: 0,
        borderColor: "#102E6A",
        backgroundColor: "#102E6A",
      },
      {
        order: 2,
        fill: 0,
        data: arr2,
        label: "Финансовые вложения",
        lineTension: 0,
        borderColor: "#F2712D",
        backgroundColor: "#F2712D",
      },
      {
        order: 3,
        fill: 1,
        data: arr3,
        label: "Собственный бизнес",
        lineTension: 0,
        borderColor: "#102E6A85",
        backgroundColor: "#102E6A85",
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

export default Dvvp;
