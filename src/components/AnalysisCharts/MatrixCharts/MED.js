import React from "react";
import "./AnalysisMatrixCharts.scss";
import { Bubble } from "react-chartjs-2";
import annotationPlugin from "chartjs-plugin-annotation";
import {
  Chart as ChartJS,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  LineController,
  BarController,
} from "chart.js";
import { Link } from "react-router-dom";
ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
  annotationPlugin
);

function Med(props) {
  let radius = 25;
  let labelText = 30;
  let radiusHigh = 15;
  if (window.outerWidth < 450) {
    radius = 10;
    labelText = 25;
    radiusHigh = 12;
  }
  if (window.outerWidth < 400) {
    radius = 12;
    labelText = 20;
  }
  const options = {
    responsive: true,
    transitions: {},
    plugins: {
      datalabels: {
        display: false,
      },
      title: {
        display: false,
        text: "Матрица финансовой эффективности",
        font: {
          size: 21,
          weight: 700,
        },
      },
      annotation: {
        annotations: {
          label1: {
            type: "label",
            responsive: true,
            xValue: 25,
            yValue: 25,
            content: ["ПЛОХО"],
            color: "#ffffff",
            font: {
              size: labelText,
            },
          },
          label2: {
            type: "label",
            xValue: 75,
            yValue: 25,
            content: ["СЛАБО"],
            color: "#ffffff",
            font: {
              size: labelText,
            },
          },
          label3: {
            type: "label",
            xValue: 25,
            yValue: 75,
            content: ["ХОРОШО"],
            color: "#ffffff",
            font: {
              size: labelText,
            },
          },
          label4: {
            type: "label",
            xValue: 75,
            yValue: 75,
            content: ["ОТЛИЧНО"],
            color: "#ffffff",
            font: {
              size: labelText,
            },
          },
          box1: {
            drawTime: "beforeDraw",
            init: true,
            type: "box",
            xMin: 50,
            xMax: 100,
            yMin: 50,
            yMax: 100,
            backgroundColor: "rgba(25, 227, 133, 0.8)",
          },
          box2: {
            drawTime: "beforeDraw",
            init: true,
            type: "box",
            xMin: 50,
            xMax: 100,
            yMin: 50,
            yMax: 0,
            backgroundColor: "rgba(225, 83, 23, 0.8)",
          },
          box3: {
            drawTime: "beforeDraw",
            init: true,
            type: "box",
            xMin: 50,
            xMax: 0,
            yMin: 50,
            yMax: 100,
            backgroundColor: "rgba(231, 183, 63, 0.8)",
          },
          box4: {
            drawTime: "beforeDraw",
            init: true,
            type: "box",
            xMin: 50,
            xMax: 0,
            yMin: 50,
            yMax: 0,
            backgroundColor: "rgba(229, 23, 72, 0.8)",
          },
        },
      },
    },
    scales: {
      y: {
        title: {
          display: true,
          text: "Финансовое состояние, %",
          font: {
            size: 14,
            weight: 700,
          },
        },
        ticks: {
          index: "%",
        },
        beginAtZero: true,
        min: 0,
        max: 100,
        grid: {
          color: ["transparent"],
        },
      },
      x: {
        title: {
          display: true,
          text: "Финансовый результат, %",
          font: {
            size: 14,
            weight: 700,
          },
        },
        beginAtZero: true,
        min: 0,
        max: 100,
        grid: {
          color: ["transparent"],
        },
      },
    },
    maintainAspectRatio: false,
  };

  const data = {
    labels: [40, 100],
    datasets: [
      {
        type: "bubble",
        label: "Ваш результат",
        data: [
          {
            x: 40,
            y: 35,
            r: radius,
          },
          {
            x: 43,
            y: 75,
            r: radius,
          },
        ],

        // data: [yourResult],
        backgroundColor: "#3156A6",
        animation: {
          delay: 800,
        },
      },
      // {
      //   type: "line",
      //   showInLegend: false,
      //   label: "Потенциал",
      //   data: [35, 0],
      //   animationSteps: 60,
      //   borderColor: "#3156A6",
      //   borderDash: [10, 3],
      //   backgroundColor: "#ffffff",
      //   tension: 0.1,
      //   animation: {
      //     delay: 1000,
      //   },
      // },
    ],
  };

  return (
    <div className="MatrixChartBlock AnalysisMatrixChartBlock">
      <div className="MyMatrixChart">
        <h3 className="chartTitle">Финансовая эффективность</h3>
        <Bubble options={options} data={data} />
      </div>
    </div>
  );
}

export default Med;
