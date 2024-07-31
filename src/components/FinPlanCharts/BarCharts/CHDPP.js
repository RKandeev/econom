import React from "react";
import "./FinPlanBarCharts.scss";
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
import Selectblue from "../../Selectblue/Selectblue";
import Checkcustom from "../../Checkcustom/Checkcustom";

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

function Chdpp(props) {
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
  let planArr = [-30000];
  let factArr = [20000, -20000];
  let diffArr = [];
  let invisibleArr = [];
  let barColor = [];
  let barColor2 = [];
  if (planArr[0] >= 0) {
    barColor.push("#0DA46F");
  } else {
    barColor.push("#EE2B49");
  }
  factArr.forEach((e) => {
    if (e < 0) {
      barColor2.push("#EE2B4995");
    } else {
      barColor2.push("#13efa3");
    }
  });
  planArr = [planArr[0], null, null];
  factArr = [null, factArr[0], factArr[1]];

  diffArr = diffArr.map(function (val, i) {
    return val === 0 ? null : val;
  });
  planArr = planArr.map(function (val, i) {
    return val === 0 ? null : val;
  });

  let mobile = true;
  let mobileFont = 16;
  let mobileColor = "#fff";
  if (window.outerWidth < 450) {
    mobile = false;
    mobileColor = "#fff";
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
      annotation: {
        annotations: {
          line1: {
            drawTime: "afterDraw",
            type: "line",
            yMin: 0,
            yMax: 0,
            borderColor: "#858585",
            borderWidth: 2,
          },
        },
      },
      datalabels: {
        display: mobile,
        color: mobileColor,

        font: {
          size: mobileFont,
          weight: 700,
        },
      },
      // tooltip: {
      //   filter: (tooltipItem) => tooltipItem.datasetIndex != 0,
      // },
      legend: {
        display: false,
        position: "bottom",
      },
    },
  };
  const labels = [
    ["Чистый доход"],
    ["Чистый поток Вложений"],
    ["Чистый поток Долгов"],
  ];
  const data = {
    labels,
    datasets: [
      {
        data: planArr,
        backgroundColor: barColor,
      },
      {
        data: factArr,
        backgroundColor: barColor2,
      },
    ],
  };
  return (
    <div className="analysisBarChartBlock smallChart">
      <div className="analysisHeader">
        <div className="chartSettingsBlock">
          <div className="dateSelectBlock">
            <Selectblue selectArr={years} />
            <Selectblue selectArr={months} />
          </div>
          <Checkcustom label="С начала года" checked={false} />
        </div>
      </div>

      <Bar options={options} data={data} />
    </div>
  );
}

export default Chdpp;
