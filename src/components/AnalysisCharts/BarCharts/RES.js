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

function Res(props) {
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
  let category = ["Категория1", "Категория2", "Категория3"];

  let planArr = [0, 1100, 2320, 3800, 800, 1760, 0];
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
        display: false,
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
    ["Театр"],
    ["Кино"],
    ["Боулинг, бильярд "],
    ["Клубы, караоке"],
    ["Интеллектуальные игры, квест"],
    ["Бар, кафе, ресторан"],
    ["Прочее"],
  ];
  const data = {
    labels,
    datasets: [
      {
        label: "Факт",
        data: planArr,
        backgroundColor: ["#EE2B4995"],
      },
    ],
  };
  return (
    <div className="analysisBarChartBlock smallChart">
      <div className="analysisHeader">
        <h3 className="chartTitle">
          Резерв для экономии <br />
          (по статьям расходов)
        </h3>
        <div className="chartSettingsBlock">
          <div className="dateSelectBlock">
            <Selectblue selectArr={years} />
            <Selectblue selectArr={months} />
          </div>
          <Checkcustom label="С начала года" checked={false} />
        </div>
      </div>
      <div className="categorySelect">
        <Selectblue selectArr={category} />
      </div>
      <Bar options={options} data={data} />
    </div>
  );
}

export default Res;