import React from "react";
import "./BarCharts.scss";
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

function BarChartFlat(props) {
  let percentArr = [8, 7];
  let insuranceArr = [84, 61];
  let mobile = true;
  let mobileFont = 16;
  let mobileColor = "#fff";
  if (window.outerWidth < 450) {
    mobile = false;
    mobileColor = "#000";
    mobileFont = "12";
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
          display: true,
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
        display: mobile,
        anchor: "start",
        align: "top",
        color: "#fff",
        font: {
          size: 16,
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
        display: mobile,
        position: "bottom",
      },
    },
  };
  const labels = [["Без рефинанс-ия"], ["С рефинанс-ем"]];
  const data = {
    labels,
    datasets: [
      {
        label: "Расходы на проценты",
        data: insuranceArr,
        backgroundColor: "#EE2B49",
      },
      {
        label: "Расходы на страхование",
        data: percentArr,
        backgroundColor: "#f58191",
      },
    ],
  };
  return (
    <div className="barChartBlock barFlat">
      <h3 className="chartTitle">Расходы на обслуживание кредитов</h3>
      <Bar options={options} data={data} />
    </div>
  );
}

export default BarChartFlat;
