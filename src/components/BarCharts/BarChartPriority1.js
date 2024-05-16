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

function BarChartPriority2(props) {
  let Arr = [18, 8, 3];
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
        color: "#fff",
        font: {
          size: mobileFont,
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
        display: false,
        position: "bottom",
      },
    },
  };
  const labels = [["Кредит-1"], ["Кредит-2"], ["Кредит-3"]];
  const data = {
    labels,
    datasets: [
      {
        label: "Экономический эффект",
        data: Arr,
        backgroundColor: "#0DA46F",
      },
    ],
  };
  return (
    <div className="barChartBlock barFlat">
      <h3 className="chartTitle">
        Экономический эффект от досрочного погашения{" "}
      </h3>
      <Bar options={options} data={data} />
    </div>
  );
}

export default BarChartPriority2;
