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

function Fba(props) {
  let otherArr = [null, null];
  let factArr = [null, null];
  let finActiveArr = [2582051, null];
  let carArr = [1700000, null];
  let flatArr = [5000000, 3811552];
  let moneyArr = [81879, 5552378];
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
  const labels = ["Активы", "Собственный капитал / долги"];
  const data = {
    labels,
    datasets: [
      {
        label: "Прочее имущество",
        data: otherArr,
        backgroundColor: ["#85858590"],
      },
      {
        label: "Незавершенное строительство",
        data: factArr,
        backgroundColor: ["#85858590"],
      },
      {
        label: "Финансовые активы",
        data: finActiveArr,
        backgroundColor: ["#85858590"],
      },
      {
        label: "Транспорт",
        data: carArr,
        backgroundColor: ["#85858590"],
      },
      {
        label: "Недвижимость",
        data: flatArr,
        backgroundColor: ["#85858590"],
      },
      {
        label: "Деньги",
        data: moneyArr,
        backgroundColor: ["#85858590", "#0DA46F"],
      },
    ],
  };
  return (
    <div className="analysisBarChartBlock smallChart">
      <h3 className="chartTitle">Чистый Собственный доход</h3>
      <Bar options={options} data={data} />
    </div>
  );
}

export default Fba;
