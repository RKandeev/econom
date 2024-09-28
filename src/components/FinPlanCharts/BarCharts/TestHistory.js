import React from "react";
import { Bar } from "react-chartjs-2";

function TestHistory(props) {
  let positiveArr = [9, 5, 4, 15];
  positiveArr = positiveArr.map((el) => (el / 20) * 100);
  let negativeArr = positiveArr.map((el) => 100 - el);
  let diffArr = [];
  let barColor = [];
  let barColor2 = [];

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
          display: true,
          text: "%",
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
        display: true,
        position: "bottom",
      },
    },
  };
  const labels = [["Старт"], ["01.09.2024"], ["01.10.2024"], ["01.11.2024"]];
  const data = {
    labels,
    datasets: [
      {
        label: "Правильные ответы",
        data: positiveArr,
        backgroundColor: "#13efa3",
      },
      {
        label: "Неправильные ответы",
        data: negativeArr,
        backgroundColor: "#EE2B4995",
      },
    ],
  };
  return (
    <div className="analysisBarChartBlock bigChart">
      <div className="analysisHeader"></div>
      <Bar options={options} data={data} />
    </div>
  );
}

export default TestHistory;
