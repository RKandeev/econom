import React, { useContext, useEffect, useState } from 'react';

import { Bar } from "react-chartjs-2";
import toast from 'react-hot-toast';

import { apiRequest } from '../../../api';
import { Context } from '../../../Context';

function TestHistory() {
  const {startTestResults} = useContext(Context);
  const [testHistory, setTestHistory] = useState([]);

  let positiveArr = [];
  let negativeArr = [];
  let labels = [];

  let mobile = true;
  let mobileFont = 16;
  let mobileColor = "#fff";


  if (testHistory) {
    testHistory.forEach((element) => {
      positiveArr.push(element.correct_percent);
      negativeArr.push(100 - element.correct_percent);
      labels.push(element.created_at);
    })
    if (window.innerWidth < 480) {
      positiveArr = positiveArr.slice(-3);
      negativeArr = negativeArr.slice(-3);
      labels = labels.slice(-3);
    } else {
      positiveArr = positiveArr.slice(-5);
      negativeArr = negativeArr.slice(-5);
      labels = labels.slice(-5);
    }
    positiveArr.unshift([startTestResults.num1 * 10]);
    negativeArr.unshift([100 - startTestResults.num1 * 10]);
    labels.unshift(["Старт"]);
  }


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

  const getTestingHistory = async () => {
    let data = {
      token: localStorage.getItem('token'),
    };

    const response = await apiRequest({
      headers: data,
      url: '/quiz/history',
    });

    if (response.code === 0 && response.http_status === 200) {
      setTestHistory(response.data);
    } else {
      toast.error(response.mes);
    }
  };

  useEffect(() => {
    getTestingHistory();
  },[]);

  return (
    <div className="analysisBarChartBlock bigChart">
      <div className="analysisHeader"></div>
      <Bar data={data} options={options} />
    </div>
  );
}

export default TestHistory;
