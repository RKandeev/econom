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

function Rek(props) {
  let planArr = [10000, 15200, 3100, 0, 0, 1100, 9400, 0, 0];
  planArr = planArr.map(function (val, i) {
    return val === 0 ? null : val;
  });

  let barColor = [];
  // diffArr.forEach((e) => {
  //   if (e >= 0) {
  //     barColor.push("#0DA46F");
  //   } else {
  //     barColor.push("#EE2B4995");
  //   }
  // });

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
    ["Образование и развитие"],
    ["Развлечения и досуг"],
    ["Внешний вид, уход и гигиена"],
    ["Праздники и подарки"],
    ["Путешествия и поездки"],
    ["Здоровье и спорт"],
    ["Вредные привычки"],
    ["Прочие расходы"],
    ["Финансовая помощь"],
  ];
  const data = {
    labels,
    datasets: [
      {
        label: "План",
        data: planArr,
        backgroundColor: [
          "#13efa3",
          "#EE2B4995",
          "#EE2B4995",
          "#EE2B4995",
          "#EE2B4995",
          "#13efa3",
          "#EE2B49",
          "#EE2B4995",
          "#EE2B4995",
        ],
      },
    ],
  };
  return (
    <div className="analysisBarChartBlock smallChart">
      <h3 className="chartTitle">Резерв для Экономии (по категориям)</h3>
      <Bar options={options} data={data} />
    </div>
  );
}

export default Rek;
