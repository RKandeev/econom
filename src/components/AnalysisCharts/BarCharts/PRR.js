import React from "react";
import "./AnalysisBarCharts.scss";
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

function Prr(props) {
  let planArr = [1915684, null];
  let factArr = [null, 1977800];
  let mobile = true;
  let mobileFont = 16;
  let mobileColor = "#fff";
  if (window.outerWidth < 450) {
    mobile = false;
    mobileColor = "#000";
    mobileFont = 12;
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
          display: false,
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
        color: mobileColor,
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
  const labels = ["Расходы", "Регулярные доходы"];
  const data = {
    labels,
    datasets: [
      {
        label: "",
        data: planArr,
        backgroundColor: ["rgba(231, 183, 63, 0.8)", "#85858590"],
      },
      {
        label: "",
        data: factArr,
        backgroundColor: ["#0DA46F"],
      },
    ],
  };
  return (
    <div className="analysisBarChartBlock smallChart">
      <h3 className="chartTitle">Покрытие Расходов Регулярными доходами</h3>
      <Bar options={options} data={data} />
    </div>
  );
}

export default Prr;
