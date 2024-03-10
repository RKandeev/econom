import React from "react";
import { Bubble } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Filler,
  LineController,
  BarController,
} from "chart.js";
ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController
);

function MatrixChart(props) {
  const options = {
    scales: {
      y: {
        beginAtZero: true,
        min: -100,
        max: 100,
        grid: {
          color: ["rgb(33,215,27)", "transparent"],
          backgroundColor: "rgb(33,215,27)",
        },
      },
      x: {
        beginAtZero: true,
        min: -100,
        max: 100,
        grid: {
          color: ["rgb(255,14,14)", "transparent"],
          backgroundColor: "rgb(33,215,27)",
        },
      },
    },
    maintainAspectRatio: false,
    // responsive: true,
  };

  const data = {
    // datasets: [
    //   {
    //     type: 'bubble' as const,
    //     label: "Ваш результат",
    //     data: Array.from({ length: 1 }, () => ({
    //       x: 24,
    //       y: 25,
    //       r: 5,
    //     })),
    //     backgroundColor: "rgba(255, 99, 132, 0.5)",
    //   },
    // ],
    labels: ["-10", "0", "10"],
    datasets: [
      // {
      //   type: "bar",
      //   label: "Dataset 2",
      //   data: [-10, 0, 10],
      //   backgroundColor: "rgba(70, 192, 192, 0.6)",
      // },
      {
        type: "bubble",
        label: "Ваш результат",
        data: Array.from({ length: 1 }, () => ({
          x: 24,
          y: 25,
          r: 5,
        })),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      // {
      //   type: "bar",
      //   label: "Dataset 3",
      //   backgroundColor: "rgb(53, 162, 235)",
      //   data: [100, 0, -100],
      // },
    ],
  };
  return (
    <div>
      <Bubble options={options} data={data} />
    </div>
  );
}

export default MatrixChart;
