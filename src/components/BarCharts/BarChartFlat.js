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
  let arr = [150];
  let positiveArr = [null, 6012];
  let negativeArr = [3637];
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
        display: mobile,
        position: "bottom",
      },
    },
  };
  const labels = [["Квартира"], ["Иные активы"]];
  const data = {
    labels,
    datasets: [
      {
        label: "Инвестирование в иные активы",
        data: positiveArr,
        backgroundColor: "#0DA46F",
      },
      {
        label: "Чистый доход от квартиры",
        data: arr,
        backgroundColor: "#13efa3",
      },
      {
        label: "Прирост стоимости квартиры ",
        data: negativeArr,
        backgroundColor: "#85858590",
      },
    ],
  };
  return (
    <div className="barChartBlock barFlat">
      <h3 className="chartTitle">Выгода (финансовый результат)</h3>
      <Bar options={options} data={data} />
    </div>
  );
}

export default BarChartFlat;
