import React from "react";
import { Line } from "react-chartjs-2";
import gradient from "chartjs-plugin-gradient";
import "./LineChartModeling.scss";
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

function LineHome(props) {
  let mobile = true;

  if (window.outerWidth < 450) {
    mobile = false;
  }
  let arr = [
    1, 1.4, 1.8, 2.2, 2.6, 3.1, 3.5, 3.9, 4.3, 4.8, 5.2, 5.6, 6, 6.5, 6.9, 7.3,
  ];
  let arr2 = [
    1, 1.5, 2, 2.5, 3, 3.6, 4.2, 4.7, 5.3, 5.8, 6.5, 7, 7.7, 8.3, 9, 9.6,
  ];

  const lineHomeOptions = {
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
    plugins: {
      datalabels: {
        display: false,
      },
      legend: {
        display: mobile,
        position: "bottom",
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
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
    ],
    datasets: [
      {
        data: arr,
        label: "Аренда жилья",
        lineTension: 1,
        borderColor: "#EE2B49",
        backgroundColor: "#EE2B49",
      },
      {
        data: arr2,
        label: "Покупка жилья",
        lineTension: 1,
        borderColor: "#0DA46F",
        backgroundColor: "#0DA46F",
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

export default LineHome;
