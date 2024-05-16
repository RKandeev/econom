import React from "react";
import "./AnalysisPieCharts.scss";
import { Pie } from "react-chartjs-2";
import gradient from "chartjs-plugin-gradient";
import ChartDataLabels from "chartjs-plugin-datalabels";
import {
  Chart as ChartJS,
  CategoryScale,
  ArcElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  Title,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  gradient,
  ChartDataLabels
);

function Rpk(props) {
  let planArr = [38800, 13074, 8560, 51355];
  let mobile = true;
  let mobileFont = 16;
  let mobileColor = "#fff";
  if (window.outerWidth < 450) {
    mobile = false;
    mobileColor = "#fff";
    mobileFont = 12;
  }
  const options = {
    responsive: true,
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          let sum = 0;
          let dataArr = ctx.chart.data.datasets[0].data;
          dataArr.map((data) => {
            sum += data;
          });
          let percentage =
            value + "\n" + ((value * 100) / sum).toFixed(1) + "%";
          return percentage;
        },
        display: mobile,
        color: mobileColor,
        textAlign: "center",

        font: {
          size: mobileFont,
          weight: 700,
        },
      },
      legend: {
        display: true,
        position: "bottom",
      },
    },
  };
  const labels = [
    ["Резерв для экономии"],
    ["Кандидаты на сокращение"],
    ["Нежелательные для сокращения"],
    ["Неприкасаемые расходы"],
  ];
  const data = {
    labels,
    datasets: [
      {
        label: "Норма",
        data: planArr,
        backgroundColor: ["#EE2B49", "#EE2B4995", "#ecc565", "#13efa3"],
      },
    ],
  };
  return (
    <div className="analysisPieChartBlock ">
      <h3 className="chartTitle">Структура Расходов: по критичности</h3>
      <Pie options={options} data={data} />
    </div>
  );
}

export default Rpk;
