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

function Fpd(props) {
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
  // let mobile = true;
  // let mobileFont = 16;
  // let mobileColor = "#fff";
  // let labelText = 30;
  // if (window.outerWidth < 450) {
  //   mobile = false;
  //   mobileColor = "#000";
  //   mobileFont = 12;
  // }
  let arr = [2, 3, 4, 16, 15, 15, 16, 16, 14, 17, 20, 20];
  let maxValue = Math.max(...arr);
  let minValue = Math.min(...arr);
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
            yMin: 6,
            yMax: maxValue,
            backgroundColor: "#13efa3",
          },
          box2: {
            drawTime: "beforeDraw",
            init: true,
            type: "box",
            xMin: 0,
            xMax: 12,
            yMin: 0,
            yMax: 3,
            backgroundColor: "#EE2B4990",
          },
          box3: {
            drawTime: "beforeDraw",
            init: true,
            type: "box",
            xMin: 0,
            xMax: 12,
            yMin: 3,
            yMax: 6,
            backgroundColor: "#ecc565",
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
          text: "мес.",
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
        label: "",
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
        <h3 className="chartTitle">Финансовая прочность</h3>
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

export default Fpd;
