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

function Ssd(props) {
  let planArr = [1495530, 0, 770400, 0, 0, 0];

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
    ["Зарплата"],
    ["Собственный бизнес"],
    ["Фриланс"],
    ["Финансовая помощь"],
    ["Стипендия"],
    ["Прочие доходы"],
  ];
  const data = {
    labels,
    datasets: [
      {
        label: "",
        data: planArr,
        backgroundColor: ["#85858590"],
      },
    ],
  };
  return (
    <div className="analysisPieChartBlock ">
      <h3 className="chartTitle">Структура Расходов: по приоритетности</h3>
      <Pie options={options} data={data} />
    </div>
  );
}

export default Ssd;
