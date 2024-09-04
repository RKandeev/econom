import React from "react";
import { Line } from "react-chartjs-2";
import gradient from "chartjs-plugin-gradient";
import annotationPlugin from "chartjs-plugin-annotation";
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
import Selectblue from "../../Selectblue/Selectblue";
import Checkcustom from "../../Checkcustom/Checkcustom";

ChartJS.register(
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
  gradient,
  annotationPlugin
);

function Mdd(props) {
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
  let mobileFont = 16;
  let mobileColor = "#fff";
  let labelText = 30;
  if (window.outerWidth < 450) {
    mobile = false;
    mobileColor = "#000";
    mobileFont = 12;
  }
  let arr = [16, -30, 29, 28, 27, 25, 22, 15, 16, 15, 16, 15];
  let maxValue = Math.max(...arr);
  let minValue = Math.min(...arr);
  let boxValue = (parseInt(maxValue / 10, 10) + 1) * 10;

  console.log(minValue);

  const lineHomeOptions = {
    plugins: {
      annotation: {
        annotations: {
          box1: {
            drawTime: "beforeDraw",
            init: true,
            type: "box",
            xMin: 0,
            xMax: 12,
            yMin: 0,
            yMax: boxValue,
            backgroundColor: "#13efa3",
          },
          box2: {
            drawTime: "beforeDraw",
            init: true,
            type: "box",
            xMin: 0,
            xMax: 12,
            yMin: 0,
            yMax: minValue,
            backgroundColor: "#EE2B4990",
          },
        },
      },
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
          display: false,
          text: "Годы",
          font: {
            size: 12,
            weight: 700,
          },
        },
      },
      y: {
        stacked: true,
        display: true,
        title: {
          display: true,
          text: "%",
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
        fill: false,
        data: arr,
        label: "Моя доходность",
        lineTension: 0,
        borderColor: "#1d5d90",
        backgroundColor: "#1d5d90",
        borderWidth: 5,
      },
    ],
  };

  return (
    <div className="chart lineChartModeling AnalysisLineChartBlock">
      <div className="analysisHeader">
        <h3 className="chartTitle">Моя доходность</h3>
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

export default Mdd;
