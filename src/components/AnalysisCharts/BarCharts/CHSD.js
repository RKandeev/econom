import React from "react";
import "./AnalysisBarCharts.scss";
import { Bar } from "react-chartjs-2";
import gradient from "chartjs-plugin-gradient";
import ChartDataLabels from "chartjs-plugin-datalabels";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
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
  ChartDataLabels
);

function Chsd(props) {
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
  let planArr = [30000];
  let factArr = [20000];
  let diffArr = [];
  let invisibleArr = [];
  let barColor = [];
  if (planArr[0] >= factArr[0]) {
    invisibleArr = [null, null, factArr[0]];
    diffArr = [planArr[0] - factArr[0]];
    barColor.push("#0DA46F");
  } else {
    invisibleArr = [null, null, planArr[0]];
    diffArr = [factArr[0] - planArr[0]];
    barColor.push("#EE2B49");
  }
  planArr = [planArr[0], null, null];
  factArr = [null, factArr[0], null];
  diffArr = [null, null, diffArr[0]];

  diffArr = diffArr.map(function (val, i) {
    return val === 0 ? null : val;
  });
  planArr = planArr.map(function (val, i) {
    return val === 0 ? null : val;
  });

  let mobile = true;
  let mobileFont = 16;
  let mobileColor = "#fff";
  if (window.outerWidth < 450) {
    mobile = false;
    mobileColor = "#fff";
    mobileFont = 12;
  }
  const options = {
    scales: {
      x: {
        ticks: {
          maxRotation: 0,
          display: true,
        },
        stacked: true,
      },
      y: {
        stacked: true,
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
      datalabels: {
        display: mobile,
        color: mobileColor,

        font: {
          size: mobileFont,
          weight: 700,
        },
      },
      tooltip: {
        filter: (tooltipItem) => tooltipItem.datasetIndex != 0,
      },
      legend: {
        display: false,
        position: "bottom",
      },
    },
  };
  const labels = [
    ["Собственные доходы"],
    ["Расходы"],
    ["Чистый собственный доход"],
  ];
  const data = {
    labels,
    datasets: [
      {
        label: "",
        data: invisibleArr,
        backgroundColor: "transparent",
      },
      {
        label: "Чистый собственный доход",
        data: diffArr,
        backgroundColor: barColor,
      },
      {
        label: "Собственные доходы",
        data: planArr,
        backgroundColor: "#13efa3",
      },
      {
        label: "Расходы",
        data: factArr,
        backgroundColor: "#EE2B4995",
      },
    ],
  };
  return (
    <div className="analysisBarChartBlock smallChart">
      <div className="analysisHeader">
        <h3 className="chartTitle">Чистый собственный доход</h3>
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

export default Chsd;
