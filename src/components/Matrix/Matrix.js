import React from "react";
import "./Matrix.scss";
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

function Matrix(props) {
  const options = {
    plugins: {
      title: {
        display: true,
        text: "Оценка навыков управления финансами",
        font: {
          size: 20,
          weight: 700,
        },
      },
      annotation: {
        annotations: {
          box1: {
            drawTime: "beforeDraw",
            init: true,
            type: "box",
            xMin: 0,
            xMax: 100,
            yMin: 0,
            yMax: 100,
            backgroundColor: "rgba(25, 227, 133, 0.8)",
          },
          box2: {
            drawTime: "beforeDraw",
            init: true,
            type: "box",
            xMin: 0,
            xMax: 100,
            yMin: 0,
            yMax: -100,
            backgroundColor: "rgba(225, 83, 23, 0.8)",
          },
          box3: {
            drawTime: "beforeDraw",
            init: true,
            type: "box",
            xMin: 0,
            xMax: -100,
            yMin: 0,
            yMax: 100,
            backgroundColor: "rgba(231, 183, 63, 0.8)",
          },
          box4: {
            drawTime: "beforeDraw",
            init: true,
            type: "box",
            xMin: 0,
            xMax: -100,
            yMin: 0,
            yMax: -100,
            backgroundColor: "rgba(229, 23, 72, 0.8)",
          },
        },
      },
    },
    scales: {
      y: {
        ticks: {
          index: "%",
        },
        beginAtZero: true,
        min: -100,
        max: 100,
        grid: {
          color: ["transparent"],
        },
      },
      x: {
        beginAtZero: true,
        min: -100,
        max: 100,
        grid: {
          color: ["transparent"],
        },
      },
    },
    maintainAspectRatio: false,
  };

  const data = {
    datasets: [
      {
        type: "bubble",
        label: "Ваш результат",
        data: Array.from({ length: 1 }, () => ({
          x: 24,
          y: 25,
          r: 10,
        })),
        backgroundColor: "#3156A6",
      },
    ],
  };
  return (
    <div className="MatrixChartBlock">
      <div className="MyMatrixChart">
        <Bubble options={options} data={data} />
      </div>
      <div className="full_study">
        Для улучшения своего уровня Вы можете пройти
        <Link to="/Study" className="fullStudyLink">
          {"  "}Обучение
        </Link>
      </div>
    </div>
  );
}

export default Matrix;
