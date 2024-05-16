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

function Sdp(props) {
  let arr = [36284, 179850, 54485, 60900, 44000, 20000, 36749];
  let invisibleArr = [
    null,
    arr[0],
    arr[0] + arr[1] - arr[2],
    arr[0] + arr[1] - arr[2] - arr[3],
    arr[0] + arr[1] - arr[2] - arr[3] - arr[4],
    arr[0] + arr[1] - arr[2] - arr[3] - arr[4] - arr[5],
    null,
  ];

  let positiveArr = [arr[0], arr[1], null, null, null, null, null];
  let negativeArr = [null, null, arr[2], arr[3], arr[4], arr[5], null];
  let resultArr = [null, null, null, null, null, null, arr[6]];
  let resultColor = "#0DA46F";
  if (resultArr[6] >= 0) {
    resultColor = resultColor;
  } else {
    resultColor = "#EE2B49";
  }
  let mobile = true;
  let mobileFont = 16;
  let mobileColor = "#fff";
  if (window.outerWidth < 450) {
    mobile = false;
    mobileColor = "#000";
    mobileFont = 12;
  }
  const options = {
    scales: {
      x: {
        ticks: {
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
    ["Остаток на начало"],
    ["Доходы"],
    ["Платежи по кредитам"],
    ["Расходы: Базовые потребности"],
    ["Расходы: Образ жизни"],
    ["Финансовые расходы"],
    ["Свободный остаток"],
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
        label: "",
        data: positiveArr,
        backgroundColor: "#0DA46F95",
      },
      {
        label: "",
        data: negativeArr,
        backgroundColor: "#EE2B4995",
      },
      {
        label: "",
        data: resultArr,
        backgroundColor: resultColor,
      },
    ],
  };
  return (
    <div className="analysisBarChartBlock">
      <h3 className="chartTitle">Свободный остаток</h3>
      <Bar options={options} data={data} />
    </div>
  );
}

export default Sdp;
