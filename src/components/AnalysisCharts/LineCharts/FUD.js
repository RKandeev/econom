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

function Fud(props) {
  let LinesColor = localStorage.getItem("LinesColorFlat");
  let topArr = [];
  let bottomArr = [];
  let mobile = true;
  let mobileFont = 16;
  let mobileColor = "#fff";
  let labelText = 30;
  if (window.outerWidth < 450) {
    mobile = false;
    mobileColor = "#000";
    mobileFont = 12;
  }
  let arr = [54, 55, 55, 56, 56, 56, 57, 57, 57, 58, 59, 59];
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
            yMin: 50,
            yMax: 100,
            backgroundColor: "#13efa3",
          },
          box2: {
            drawTime: "beforeDraw",
            init: true,
            type: "box",
            xMin: 0,
            xMax: 12,
            yMin: 0,
            yMax: 50,
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
      <h3 className="chartTitle">Моя доходность (Динамика)</h3>
      <Line options={lineHomeOptions} data={lineHomeData} />
    </div>
  );
}

export default Fud;
