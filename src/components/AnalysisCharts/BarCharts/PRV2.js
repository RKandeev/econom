import React from "react";
import { Bar } from "react-chartjs-2";
import gradient from "chartjs-plugin-gradient";
import "./AnalysisBarCharts.scss";
import annotationPlugin from "chartjs-plugin-annotation";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  LineElement,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
} from "chart.js";
import Checkcustom from "../../Checkcustom/Checkcustom";
import Selectblue from "../../Selectblue/Selectblue";

ChartJS.register(
  Title,
  Tooltip,
  LineElement,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  annotationPlugin,
  PointElement,
  Filler,
  gradient
);

function Prv2(props) {
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
    590, 11970, 11970, 12300, 19640, 20020, 23550, 26630, 42790, 42790, 43170,
    43500, 44730, 45060, 48090, 77070, 77070, 79550, 79880, 97280, 97610, 97940,
    114530, 115630, 115960, 116340, 117390, 117720, 118050, 174618, 174618,
  ];
  let arr2 = [
    156838, 145458, 145458, 145128, 137788, 137408, 133878, 130798, 114638,
    114638, 114258, 113928, 112698, 112368, 109338, 80358, 80358, 77878, 77548,
    60148, 59818, 59488, 42898, 41798, 41468, 41088, 40038, 39708, 39378, 0, 0,
  ];
  let planMoney = 157428;
  if (LinesColor === "1") {
    topArr = arr;
    bottomArr = arr2;
  } else {
    topArr = arr2;
    bottomArr = arr;
  }
  const lineHomeOptions = {
    plugins: {
      annotation: {
        annotations: {
          line1: {
            drawTime: "afterDraw",
            type: "line",
            yMin: planMoney,
            yMax: planMoney,
            borderColor: "#EE2B49",
            borderWidth: 2,
          },
        },
      },
      datalabels: {
        display: false,
      },
      legend: {
        display: mobile,
        position: "bottom",
      },
    },
    barPercentage: 1.0,
    categoryPercentage: 1.0,
    scales: {
      x: {
        stacked: true,
        title: {
          display: true,
          text: "Дни месяца",
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
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
    ],
    datasets: [
      {
        fill: true,
        data: arr,
        label: "Расходы с начала месяца",
        lineTension: 0,
        borderColor: "#3156A6",
        backgroundColor: "#3156A690",
      },
      {
        fill: true,
        data: arr2,
        label: "Остаток лимита",
        lineTension: 0,
        borderColor: "#0DA46F",
        backgroundColor: "rgba(25, 227, 133, 0.7)",
      },
      {
        fill: false,
        data: [0],
        label: "План на месяц",
        lineTension: 0,
        borderColor: "#EE2B49",
        backgroundColor: "#EE2B49",
      },
    ],
  };

  return (
    <div className="analysisBarChartBlock">
      <div className="analysisHeader">
        <h3 className="chartTitle">
          Анализ соблюдения плана <br />
          по совокупным расходам
        </h3>
        <div className="chartSettingsBlock">
          <div className="dateSelectBlock">
            <Selectblue selectArr={years} />
            <Selectblue selectArr={months} />
          </div>
          <Checkcustom label="С начала года" checked={false} />
        </div>
      </div>
      <Bar options={lineHomeOptions} data={lineHomeData} />
    </div>
  );
}

export default Prv2;
