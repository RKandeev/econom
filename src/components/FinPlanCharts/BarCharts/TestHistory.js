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
    plugins: {
      annotation: {
        annotations: {
          line1: {
            borderColor: "#858585",
            borderWidth: 2,
            drawTime: "afterDraw",
            type: "line",
            yMax: 0,
            yMin: 0,
          },
        },
      },
      datalabels: {
        color: mobileColor,
        display: mobile,
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
    responsive: true,
    scales: {
      x: {
        stacked: true,
        ticks: {
          display: true,
          maxRotation: 0,
        },
      },
      y: {
        stacked: true,
        title: {
          display: true,
          font: {
            size: 14,
            weight: 700,
          },
          text: "%",
        },
      },
    },
  };
  const labels = [["Старт"], ["01.09.2024"], ["01.10.2024"], ["01.11.2024"]];
  const data = {
    datasets: [
      {
        backgroundColor: "#13efa3",
        data: positiveArr,
        label: "Правильные ответы",
      },
      {
        backgroundColor: "#EE2B4995",
        data: negativeArr,
        label: "Неправильные ответы",
      },
    ],
    labels,
  };

  return (
    <div className="analysisBarChartBlock bigChart">
      <div className="analysisHeader"></div>
      <Bar data={data} options={options} />
    </div>
  );
}

export default TestHistory;
