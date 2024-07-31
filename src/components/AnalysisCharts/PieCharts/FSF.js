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
import Selectblue from "../../Selectblue/Selectblue";
import Checkcustom from "../../Checkcustom/Checkcustom";

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
  let years = [2022, 2023];
  let months = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];
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
      r: {
        ticks: {
          display: false, // Remove vertical numbers
        },
        grid: {
          display: false, // Removes the circulair lines
        },
      },
    },
    borderWidth: 1,
    responsive: true,
    plugins: {
      tooltip: {
        enabled: false,
      },
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
        anchor: "bottom",
        align: "end",
        offset: -35,
        font: {
          size: 12,
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
          "#EE2B4995",
          "#EE2B4995",
          "#EE2B4995",
          "#EE2B4995",
          "#EE2B49",
        ],
      },
    ],
  };
  return (
    <>
      <div className="analysisBlock">
        <div className="analysisHeader">
          <h3 className="chartTitle">
            Финансовое состояние <br />
            (степень выполнения показателей)
          </h3>
          <div className="chartSettingsBlock">
            <div className="dateSelectBlock">
              <Selectblue selectArr={years} />
              <Selectblue selectArr={months} />
            </div>
            <Checkcustom label="С начала года" checked={true} />
          </div>
        </div>
        <div className="analysisPieChartBlock ">
          <PolarArea options={options} data={data} />
        </div>
      </div>
    </>
  );
}

export default Fsf;
