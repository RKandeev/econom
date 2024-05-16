import React from "react";
import "./AnalysisPieCharts.scss";
import { PolarArea } from "react-chartjs-2";
import gradient from "chartjs-plugin-gradient";
import ChartDataLabels from "chartjs-plugin-datalabels";
import {
  Chart as ChartJS,
  CategoryScale,
  ArcElement,
  LinearScale,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  Title,
  ArcElement,
  Tooltip,
  Legend,
  RadialLinearScale,
  CategoryScale,
  LinearScale,
  gradient,
  ChartDataLabels
);

function Fsf(props) {
  let planArr = [73, 60, 80, 82, 84];
  let factArr = [100, 100, 100, 100, 100];
  let mobile = true;
  let mobileFont = 15;
  let mobileColor = "#000";
  if (window.outerWidth < 450) {
    mobile = false;
    mobileColor = "#fff";
    mobileFont = 12;
  }

  const options = {
    scales: {
      y: {
        display: false,
      },
      x: {
        display: false,
      },
    },
    borderWidth: 1,
    responsive: true,
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          let labels = ctx.chart.data.labels[ctx.dataIndex];
          return labels;
        },
        display: function (context) {
          return context.datasetIndex === 1;
        },
        color: mobileColor,
        textAlign: "center",
        anchor: "top",
        align: "end",
        offset: -20,
        font: {
          size: mobileFont,
          weight: 700,
        },
      },
      legend: {
        display: false,
        position: "bottom",
      },
    },
  };
  const labels = [
    ["Финансовая", "устойчивость"],
    ["Ликвидность", "активов"],
    ["Долговая", "нагрузка"],
    ["Инвестиционные", "активы"],
    ["Финансовая", "прочность"],
  ];
  const data = {
    labels,
    datasets: [
      {
        label: "",
        data: planArr,
        backgroundColor: [
          "#13efa3",
          "#13efa3",
          "#13efa3",
          "#13efa3",
          "#0DA46F",
        ],
      },
      {
        label: "",
        data: factArr,
        backgroundColor: [
          "#EE2B4990",
          "#EE2B4990",
          "#EE2B4990",
          "#EE2B4990",
          "#EE2B49",
        ],
      },
    ],
  };
  return (
    <div className="analysisPieChartBlock ">
      <h3 className="chartTitle">
        Финансовые Результаты (степень выполнения показателей)
      </h3>
      <PolarArea options={options} data={data} />
    </div>
  );
}

export default Fsf;
