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

function Ksk(props) {
  let planArr = [0, 3980, 0, 0, 0, 2000];
  planArr = planArr.map(function (val, i) {
    return val === 0 ? null : val;
  });
  let barColor = [];
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
        label: "План",
        data: planArr,
        backgroundColor: ["#EE2B4995"],
      },
    ],
  };
  return (
    <div className="analysisBarChartBlock smallChart">
      <h3 className="chartTitle">Кандидаты на сокращение (по категориям)</h3>
      <Bar options={options} data={data} />
    </div>
  );
}

export default Ksk;
