import React from "react";
import { Line } from "react-chartjs-2";
import gradient from "chartjs-plugin-gradient";
import "./AnalysisLineCharts.scss";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
  gradient
);

function Dkd(props) {
  let LinesColor = localStorage.getItem("LinesColorFlat");
  let topArr = [];
  let bottomArr = [];
  let mobile = true;
  let mobileFont = 16;
  let mobileColor = "#fff";
  if (window.outerWidth < 450) {
    mobile = false;
    mobileColor = "#000";
    mobileFont = 12;
  }
  let arr = [5.1, 5.8, 7.1, 6.2, 3.3, 3.5, 6.1, 8.1, 4.5, 7.6, 9.9, 9.4];
  let arr2 = [4.25, 4.25, 4.5, 5.0, 5.0, 5.5, 6.5, 6.5, 6.75, 7.5, 7.5, 8.5];
  if (LinesColor === "1") {
    topArr = arr;
    bottomArr = arr2;
  } else {
    topArr = arr2;
    bottomArr = arr;
  }
  const lineHomeOptions = {
    plugins: {
      datalabels: {
        display: false,
      },
      legend: {
        display: false,
        position: "bottom",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Годы",
          font: {
            size: 12,
            weight: 700,
          },
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: "млн. ₽",
          font: {
            size: 12,
            weight: 700,
          },
        },
      },
    },
    title: {
      display: false,
      text: "COVID-19 Cases of Last 6 Months",
      fontSize: 20,
    },
  };
  const lineHomeData = {
    labels: [
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
    ],
    datasets: [
      {
        data: arr,
        label: "Покупка квартиры для сдачи в аренду",
        lineTension: 0,
        borderColor: "#0DA46F",
      },
      {
        data: arr2,
        label: "Инвестирование в иные активы",
        lineTension: 0,
        borderColor: "#ecc565",
      },
    ],
  };

  return (
    <div className="chart lineChartModeling">
      <h3 className="chartTitle">Собственный капитал</h3>
      <Line options={lineHomeOptions} data={lineHomeData} />
    </div>
  );
}

export default Dkd;
