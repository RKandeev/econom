import React from "react";
import "./FinPlanPieCharts.scss";
import { Doughnut } from "react-chartjs-2";
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
import Selectblue from "../../Selectblue/Selectblue";
import Checkcustom from "../../Checkcustom/Checkcustom";

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

function Svp(props) {
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
  let planArr = [0, 0, 0, 0, 0, 0, 35000];
  const compareFn = (a, b) => b - a;
  planArr = planArr.sort(compareFn);
  let sum = 0;
  sum = planArr.reduce(function (a, b) {
    return a + b;
  }, 0);
  console.log(sum);
  let mobile = true;
  let mobileFont = 16;
  let mobileColor = "#000";
  if (window.outerWidth < 450) {
    mobile = false;
    mobileColor = "#000";
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
          let percentage = ((value * 100) / sum).toFixed(0) + "%";
          return percentage;
        },
        display: mobile,
        color: ["#fff", "#000"],
        textAlign: "center",

        font: {
          size: mobileFont,
          weight: 700,
        },
      },
      legend: {
        display: mobile,
        position: "bottom",
      },
    },
  };
  const labels = [
    ["Недвижимость для личных нужд"],
    ["Собственное строительство"],
    ["Инвестиционная недвижимость"],
    ["Обстановка инвест. недвижимости"],
    ["Личный транспорт"],
    ["Собственный бизнес"],
    ["Финансовые вложения"],
  ];
  const data = {
    labels,
    datasets: [
      {
        label: "",
        data: planArr,
        backgroundColor: [
          "#102E6A",
          "#F2712D",
          "#102E6A85",
          "#F2712D85",
          "#102E6A70",
          "#F2712D70",
          "#102E6A55",
          "#F2712D55",
        ],
      },
    ],
  };
  const textCenter = {
    id: "textCenter",
    beforeDatasetsDraw(chart, args, pluginOptions) {
      const { ctx, data } = chart;
      ctx.save();
      ctx.font = "bold 24rem sans-serif";
      ctx.fillStyle = "#EE2B49";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(
        sum.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 "),
        chart.getDatasetMeta(0).data[0].x,
        chart.getDatasetMeta(0).data[0].y
      );
    },
  };
  return (
    <>
      <div className="analysisBlock">
        <div className="analysisHeader">
          <div className="chartSettingsBlock">
            <div className="dateSelectBlock">
              <Selectblue selectArr={years} />
              <Selectblue selectArr={months} />
            </div>
            <Checkcustom label="С начала года" checked={false} />
          </div>
        </div>
        <div className="analysisPieChartBlock FinplanPieChart">
          <Doughnut options={options} data={data} plugins={[textCenter]} />
        </div>
      </div>
    </>
  );
}

export default Svp;
