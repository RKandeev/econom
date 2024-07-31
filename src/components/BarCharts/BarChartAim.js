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

function BarChartAim(props) {
  const barArr = [98, -108, -10];
  let myArr = [null, null];
  myArr.push(barArr.splice(-1, 1, null).join());
  console.log(myArr);
  let myArrPos = [];
  let myArrNeg = [];
  let positiveArr = [];
  let negativeArr = [];
  let mobile = true;
  let mobileColor = "#fff";
  let labelFont = 12;
  if (window.outerWidth < 450) {
    mobile = false;
    mobileColor = "#000";
    labelFont = 10;
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
            size: 10,
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
        align: "bottom",
        anchor: "start",
        color: mobileColor,
        font: {
          size: 16,
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
    ["Экономия", "на расходах", "по кредиту"],
    ["Недополученный", "инвестиционный", "доход"],
    ["Финансовый", "результат"],
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
      <h3 className="chartTitle barChartTitle">
        Факторы экономического эффекта
      </h3>
      <Bar options={options} data={data} />
    </div>
  );
}

export default BarChartAim;
