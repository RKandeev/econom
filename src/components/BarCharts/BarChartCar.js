import React from "react";
import "./BarCharts.scss";
import { Bar } from "react-chartjs-2";
import gradient from "chartjs-plugin-gradient";
import ChartDataLabels from "chartjs-plugin-datalabels";
import annotationPlugin from "chartjs-plugin-annotation";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineController,
  BarController,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  BarElement,
  Legend,
  CategoryScale,
  LinearScale,
  gradient,
  ChartDataLabels,
  LineController,
  BarController,
  annotationPlugin
);

function BarChartCar(props) {
  const barArr = [196, -413, -475, 240, -451];
  let myArr = [null, null, null, null];
  myArr.push(barArr.splice(-1, 1, null).join());
  console.log(myArr);
  let myArrPos = [];
  let myArrNeg = [];
  let positiveArr = [];
  let negativeArr = [];
  let mobile = true;
  let mobileFont = 16;
  let mobileColor = "#fff";
  let labelFont = 12;
  if (window.outerWidth < 450) {
    mobile = false;
    mobileColor = "#000";
    mobileFont = 12;
    labelFont = 3;
  }
  barArr.forEach((e) => {
    if (e > 0) {
      positiveArr.push(e);
      negativeArr.push(null);
    } else {
      positiveArr.push(null);
      negativeArr.push(e);
    }
  });
  myArr.forEach((e) => {
    if (e > 0) {
      myArrPos.push(e);
      myArrNeg.push(null);
    } else {
      myArrPos.push(null);
      myArrNeg.push(e);
    }
  });
  const options = {
    scales: {
      x: {
        ticks: {
          maxRotation: 0,
          display: true,
          font: {
            size: labelFont,
          },
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
      annotation: {
        annotations: {
          line1: {
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
      tooltip: {
        callbacks: {
          title: (context) => {
            return context[0].label.replaceAll(",", " ");
          },
        },
      },
      legend: {
        display: false,
      },
    },
  };
  const labels = [
    ["Выгода (+)", "или Потери (-)", "на транспортных", "расходах"],
    ["Потери (-)", "на расходах", "по кредиту"],
    [
      "Упущенная",
      "выгода (-)",
      "в виде",
      "неполученного",
      "инвестиционного",
      " дохода",
    ],
    ["Прирост (+)", "или Снижение (-)", "стоимости активов"],
    ["Чистая Выгода (+)", "или Чистые Потери (-)", "от покупки автомобиля"],
  ];
  const data = {
    labels,
    datasets: [
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
        data: myArrPos,
        backgroundColor: "#0DA46F",
        borderColor: "#000000",
        borderWidth: 2,
      },
      {
        label: "",
        data: myArrNeg,
        backgroundColor: "#EE2B49",
        borderColor: "#000000",
        borderWidth: 2,
      },
    ],
  };
  return (
    <div className="barChartBlock">
      <h3 className="chartTitle">Факторы экономического эффекта</h3>
      <Bar options={options} data={data} />
    </div>
  );
}

export default BarChartCar;
