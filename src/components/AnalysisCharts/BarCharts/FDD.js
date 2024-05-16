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

function Fdd(props) {
  let planArr = [
    -11.2, 2.2, -1.7, -1.7, -1.1, 0.0, -1.6, -5.3, -5.5, -5.9, -5.4, -5.9,
  ];
  let barColor = [];
  planArr.forEach((e) => {
    if (e >= 0) {
      barColor.push("#0DA46F");
    } else {
      barColor.push("#EE2B4995");
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
  const data = {
    labels,
    datasets: [
      {
        label: "План",
        data: planArr,
        backgroundColor: barColor,
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

export default Fdd;
