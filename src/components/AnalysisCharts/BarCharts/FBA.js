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

function Fba(props) {
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
  let otherArr = [null, null];
  let factArr = [null, null];
  let finActiveArr = [2582051, null];
  let carArr = [1700000, null];
  let flatArr = [5000000, 3811552];
  let moneyArr = [null, null, 5552378];
  let mobile = true;
  let mobileFont = 16;
  let mobileColor = "#fff";
  let invisibleArr = [];
  let diffArr = [81879, null, null];
  let debt = [flatArr[1]];
  if (debt[0] >= moneyArr[2]) {
    invisibleArr = [null, null, moneyArr[2]];
  } else {
    invisibleArr = [null, null, debt[0]];
  }
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
  const labels = ["Активы", "долги", "Собственный капитал"];
  const data = {
    labels,
    datasets: [
      {
        label: "",
        data: invisibleArr,
        backgroundColor: "transparent",
      },

      {
        label: "Деньги",
        data: moneyArr,
        backgroundColor: ["#0DA46F"],
        borderColor: "#fff",
        borderWidth: 2,
      },
      {
        label: "Прочее имущество",
        data: otherArr,
        borderColor: "#fff",
        backgroundColor: ["#13efa3"],
        borderWidth: 2,
      },
      {
        label: "Незавершенное строительство",
        data: factArr,
        borderColor: ["#fff"],
        backgroundColor: ["#13efa3"],
        borderWidth: 2,
      },
      {
        label: "Финансовые активы",
        data: finActiveArr,
        backgroundColor: ["#13efa3"],
        borderWidth: 2,
        borderColor: ["#fff"],
      },
      {
        label: "Транспорт",
        data: carArr,
        backgroundColor: ["#13efa3"],
        borderWidth: 2,
        borderColor: ["#fff"],
      },
      {
        label: "Недвижимость",
        data: flatArr,
        backgroundColor: ["#13efa3", "#EE2B4995"],
        borderWidth: 2,
        borderColor: ["#fff"],
      },

      {
        label: "Деньги",
        data: diffArr,
        backgroundColor: ["#13efa3"],
        borderWidth: 2,
        borderColor: ["#fff"],
      },
    ],
  };
  return (
    <div className="analysisBarChartBlock smallChart">
      <div className="analysisHeader">
        <h3 className="chartTitle">Финансовый баланс</h3>
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

export default Fba;
