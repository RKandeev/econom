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

function Pnr(props) {
  let planArr = [56900, 37000, 38549];
  let factArr = [64429, 44360, 38549];
  let diffArr = [
    planArr[0] - factArr[0],
    planArr[1] - factArr[1],
    planArr[2] - factArr[2],
  ];
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
        display: mobile,
        position: "bottom",
      },
    },
  };
  const labels = [
    ["Расходы:", "Базовые", "потребности"],
    ["Расходы:", "Образ", "жизни"],
    ["Финансовые", "расходы"],
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

export default Pnr;
