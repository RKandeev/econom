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

function Pkr(props) {
  let planArr = [10900, 35000, 0, 0, 700, 10300];
  let factArr = [11450, 36759, 0, 1970, 700, 13550];
  let diffArr = [
    planArr[0] - factArr[0],
    planArr[1] - factArr[1],
    planArr[2] - factArr[2],
    planArr[3] - factArr[3],
    planArr[4] - factArr[4],
    planArr[5] - factArr[5],
  ];
  diffArr = diffArr.map(function (val, i) {
    return val === 0 ? null : val;
  });
  planArr = planArr.map(function (val, i) {
    return val === 0 ? null : val;
  });

  console.log(diffArr);
  let barColor = [];
  diffArr.forEach((e) => {
    if (e >= 0) {
      barColor.push("#0DA46F");
    } else {
      barColor.push("#EE2B4995");
    }
  });

  let mobile = true;
  let mobileFont = 16;
  let mobileColor = "#000";
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
        anchor: "center",
        align: "left",
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
        display: mobile,
        position: "bottom",
      },
    },
  };
  const labels = [
    ["Жилье"],
    ["Питание"],
    ["Одежда и обувь"],
    ["Техника, мебель"],
    ["Транспорт и связь"],
    ["Содержание автомобиля"],
  ];
  const data = {
    labels,
    datasets: [
      {
        label: "Разница с фактом",
        data: diffArr,
        backgroundColor: barColor,
      },
      {
        label: "План",
        data: planArr,
        backgroundColor: "#13efa3",
      },
    ],
  };
  return (
    <div className="analysisBarChartBlock smallChart">
      <h3 className="chartTitle">Перерасход по направлениям</h3>
      <Bar options={options} data={data} />
    </div>
  );
}

export default Pkr;
