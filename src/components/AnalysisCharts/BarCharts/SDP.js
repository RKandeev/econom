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
import Selectblue from "../../Selectblue/Selectblue";
import Checkcustom from "../../Checkcustom/Checkcustom";
import annotationPlugin from "chartjs-plugin-annotation";

ChartJS.register(
  Title,
  Tooltip,
  BarElement,
  Legend,
  CategoryScale,
  LinearScale,
  gradient,
  ChartDataLabels,
  annotationPlugin
);

function Sdp(props) {
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
  let arr = [36284, 179850, 54485, 60900, 44000, 20000, 20749];
  let afterZeroArr = [];
  let invisibleArr = [
    null,
    arr[0],
    arr[0] + arr[1] - arr[2],
    arr[0] + arr[1] - arr[2] - arr[3],
    arr[0] + arr[1] - arr[2] - arr[3] - arr[4],
    arr[0] + arr[1] - arr[2] - arr[3] - arr[4] - arr[5],
    null,
  ];
  if (arr[6] < 0) {
    invisibleArr = [
      null,
      arr[0],
      arr[0] + arr[1] - arr[2],
      arr[0] + arr[1] - arr[2] - arr[3],
      arr[0] + arr[1] - arr[2] - arr[3] - arr[4],
      null,
      null,
    ];
    afterZeroArr = [null, null, null, null, null, arr[6], null];
    arr[5] = arr[5] + arr[6];
  }
  let positiveArr = [arr[0], arr[1], null, null, null, null, null];
  let negativeArr = [null, null, arr[2], arr[3], arr[4], arr[5], null];
  let resultArr = [null, null, null, null, null, null, arr[6]];
  let resultColor = "#0DA46F";
  if (resultArr[6] >= 0) {
    resultColor = resultColor;
  } else {
    resultColor = "#EE2B49";
  }
  // let mobile = true;
  // let mobileFont = 16;
  let mobileColor = "#fff";
  if (window.outerWidth < 450) {
    // mobile = false;
    mobileColor = "#000";
    // mobileFont = 12;
  }
  let triangleArr = [
    invisibleArr[2] + arr[2],
    invisibleArr[3] + arr[3],
    invisibleArr[4] + arr[4],
    invisibleArr[5] + arr[5],
  ];
  let delayed;
  const options = {
    animation: {
      onComplete: () => {
        delayed = true;
      },
      delay: (context) => {
        let delay = 0;
        if (context.type === "data" && context.mode === "default") {
          delay = context.dataIndex * 300;
        }
        return delay;
      },
    },
    scales: {
      x: {
        ticks: {
          display: true,
          font: {
            size: 10,
          },
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
          pentagon1: {
            init: true,
            drawTime: "afterDatasetsDraw",
            type: "polygon",
            xValue: 1,
            yValue: invisibleArr[1],
            yAdjust: -10,
            sides: 3,
            radius: 20,
            backgroundColor: "#13efa3",
          },
          pentagon2: {
            type: "polygon",
            init: true,
            xValue: 2,
            yValue: triangleArr[0],
            yAdjust: 10,
            sides: 3,
            radius: 20,
            rotation: 180,
            backgroundColor: "#EE2B4995",
          },
          pentagon3: {
            type: "polygon",
            init: true,
            xValue: 3,
            yValue: triangleArr[1],
            yAdjust: 10,
            sides: 3,
            radius: 20,
            rotation: 180,
            backgroundColor: "#EE2B4995",
          },
          pentagon4: {
            type: "polygon",
            init: true,
            xValue: 4,
            yValue: triangleArr[2],
            yAdjust: 10,
            sides: 3,
            radius: 20,
            rotation: 180,
            backgroundColor: "#EE2B4995",
          },
          pentagon5: {
            type: "polygon",
            xValue: 5,
            yValue: triangleArr[3],
            yAdjust: 10,
            sides: 3,
            radius: 20,
            rotation: 180,
            backgroundColor: "#EE2B4995",
          },
        },
      },
      datalabels: {
        display: false,
        color: mobileColor,
        font: {
          size: 10,
          weight: 700,
        },
      },
      tooltip: {
        filter: (tooltipItem) => tooltipItem.datasetIndex !== 0,
      },
      legend: {
        display: false,
        position: "bottom",
      },
    },
  };
  const labels = [
    ["Остаток ", "на начало"],
    ["Доходы"],
    ["Платежи ", "по кредитам"],
    ["Расходы: ", "Базовые ", "потребности"],
    ["Расходы: ", "Образ жизни"],
    ["Финансовые", "расходы"],
    ["Свободный", "остаток (+)", " / Дефицит (-)"],
  ];
  const data = {
    labels,
    datasets: [
      {
        label: "",
        data: invisibleArr,
        backgroundColor: "transparent",
      },
      {
        label: "",
        data: positiveArr,
        backgroundColor: "#13efa3",
      },
      {
        label: "",
        data: negativeArr,
        backgroundColor: "#EE2B4995",
      },
      {
        label: "",
        data: afterZeroArr,
        backgroundColor: "#EE2B4995",
      },
      {
        label: "",
        data: resultArr,
        backgroundColor: resultColor,
      },
    ],
  };
  return (
    <div className="analysisBarChartBlock">
      <div className="analysisHeader">
        <h3 className="chartTitle">Свод денежных потоков</h3>
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

export default Sdp;
