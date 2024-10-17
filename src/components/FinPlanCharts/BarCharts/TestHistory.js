import React, { useContext } from 'react';

import { Bar } from "react-chartjs-2";

import { Context } from '../../../Context';

function TestHistory() {
  const {startTestResults, testHistory} = useContext(Context);

  let positiveArr = [startTestResults.num1 * 10];
  let negativeArr = [100 - startTestResults.num1 * 10];
  const labels = [["Старт"], ];


  testHistory && testHistory.forEach(element => {
    positiveArr.push(element.correct_percent);
    negativeArr.push(100 - element.correct_percent);
    labels.push(element.created_at);
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
