import React from "react";
import "./AnalysisBarCharts.scss";
import { Bar } from "react-chartjs-2";
import gradient from "chartjs-plugin-gradient";
import ChartDataLabels from "chartjs-plugin-datalabels";
import annotationPlugin from "chartjs-plugin-annotation";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineController,
} from "chart.js";
import Selectblue from "../../Selectblue/Selectblue";
import Checkcustom from "../../Checkcustom/Checkcustom";

ChartJS.register(
  Title,
  Tooltip,
  BarElement,
  Legend,
  CategoryScale,
  LinearScale,
  gradient,
  ChartDataLabels,
  LineController,
  annotationPlugin
);

function Dkat(props) {
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
  let planArr = [10900, 35000, 0, 0, 700, 10300, 0];
  let factArr = [11450, 36759, 0, 1970, 700, 13550, 0];
  let diffArr = [
    planArr[0] - factArr[0],
    planArr[1] - factArr[1],
    planArr[2] - factArr[2],
  ];
  let barColor = [];
  diffArr.forEach((e) => {
    if (e >= 0) {
      barColor.push("#13efa3");
    } else {
      barColor.push("#EE2B49");
    }
  });

  let mobile = true;
  let mobileFont = 16;
  let mobileColor = "#fff";
  if (window.outerWidth < 450) {
    mobile = false;
    mobileColor = "#000";
    mobileFont = 12;
  }
  const options = {
    indexAxis: "y",
    scales: {
      x: {
        ticks: {
          maxRotation: 0,
          display: true,
        },
        stacked: false,
      },
      y: {
        stacked: false,
        title: {
          display: false,
          text: "тыс. ₽",
          font: {
            size: 14,
            weight: 700,
          },
        },
      },
    },
    responsive: true,
    plugins: {
      annotation: {
        annotations: {
          line1: {
            drawTime: "afterDraw",
            type: "line",
            xMin: 0,
            xMax: 0,
            borderColor: "#858585",
            borderWidth: 2,
          },
        },
      },
      datalabels: {
        display: false,
        color: mobileColor,
        font: {
          size: mobileFont,
          weight: 700,
        },
      },
      tooltip: {
        callbacks: {
          title: (context) => {
            return context[0].label.replaceAll(",", " ");
          },
        },
      },
      legend: {
        display: false,
        position: "bottom",
      },
    },
  };
  const labels = [
    ["Заработная плата"],
    ["Собственный бизнес"],
    ["Фриланс"],
    ["Инвестиционные доходы"],
    ["Финансовая помощь"],
    ["Стипендии, пенсии, пособия"],
    ["Прочие доходы"],
  ];
  const data = {
    labels,
    datasets: [
      {
        label: "Факт",
        data: factArr,
        backgroundColor: "#3156A6",
      },
      {
        label: "План",
        data: planArr,
        backgroundColor: "#85858590",
      },
    ],
  };
  return (
    <div className="analysisBarChartBlock smallChart">
      <div className="analysisHeader">
        <h3 className="chartTitle">Выполнения плана по категориям доходов</h3>
        <div className="chartSettingsBlock">
          <div className="dateSelectBlock">
            <Selectblue selectArr={years} />
            <Selectblue selectArr={months} />
          </div>
          <Checkcustom label="С начала года" checked={false} />
        </div>
      </div>
      <Bar options={options} data={data} />
    </div>
  );
}

export default Dkat;
