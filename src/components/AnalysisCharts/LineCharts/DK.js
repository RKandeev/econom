import React from "react";
import { Line } from "react-chartjs-2";
import gradient from "chartjs-plugin-gradient";
import "./AnalysisLineCharts.scss";
import annotationPlugin from "chartjs-plugin-annotation";
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
import Selectblue from "../../Selectblue/Selectblue";
import Checkcustom from "../../Checkcustom/Checkcustom";

ChartJS.register(
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  annotationPlugin,
  PointElement,
  Filler,
  gradient
);

function Dk(props) {
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
  // let LinesColor = localStorage.getItem("LinesColorFlat");
  // let topArr = [];
  // let bottomArr = [];
  let mobile = true;
  // let mobileFont = 16;
  // let mobileColor = "#fff";
  if (window.outerWidth < 450) {
    mobile = false;
    // mobileColor = "#000";
    // mobileFont = 12;
  }
  let arr = [
    4726036, 4857931, 4952099, 5014894, 5022653, 5063085, 5178185, 5190588,
    5126561, 5297748, 5508225, 5552378,
  ];
  let arr2 = [
    4033394, 4014261, 3994927, 3975391, 3955650, 3935703, 3915546, 3895179,
    3874598, 3853801, 3832787, 3811552,
  ];
  // if (LinesColor === "1") {
  //   topArr = arr;
  //   bottomArr = arr2;
  // } else {
  //   topArr = arr2;
  //   bottomArr = arr;
  // }
  const lineHomeOptions = {
    plugins: {
      datalabels: {
        display: false,
      },
      legend: {
        display: mobile,
        position: "bottom",
      },
    },
    scales: {
      x: {
        title: {
          display: false,
          text: "Годы",
          font: {
            size: 12,
            weight: 700,
          },
        },
      },
      y: {
        ticks: {
          beginAtZero: true,
        },
        min: 0,
        stacked: true,
        display: true,
        title: {
          display: false,
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
        fill: true,
        data: arr,
        label: "Собственный капитал",
        lineTension: 0,
        borderColor: "#0DA46F",
        backgroundColor: "rgba(25, 227, 133, 0.7)",
      },
      {
        fill: true,
        data: arr2,
        label: "Заемный капитал",
        lineTension: 0,
        borderColor: "#858585",
        backgroundColor: "#85858590",
      },
    ],
  };

  return (
    <div className="chart lineChartModeling AnalysisLineChartBlock">
      <div className="analysisHeader">
        <h3 className="chartTitle">Динамика капитала</h3>
        <div className="chartSettingsBlock">
          <div className="dateSelectBlock">
            <Selectblue selectArr={years} />
            <Selectblue selectArr={months} />
          </div>
          <Checkcustom label="С начала года" checked={true} />
        </div>
      </div>
      <Line options={lineHomeOptions} data={lineHomeData} />
    </div>
  );
}

export default Dk;
