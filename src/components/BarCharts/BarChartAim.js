import React from 'react';

import {
  BarController,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineController,
  Title,
  Tooltip,
} from 'chart.js';
import annotationPlugin from 'chartjs-plugin-annotation';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import gradient from 'chartjs-plugin-gradient';
import { Bar } from 'react-chartjs-2';

import './BarCharts.scss';

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
  let mobileColor = '#fff';
  let labelFont = 12;

  if (window.outerWidth < 450) {
    mobile = false;
    mobileColor = '#000';
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
    plugins: {
      annotation: {
        annotations: {
          line1: {
            borderColor: '#858585',
            borderWidth: 2,
            type: 'line',
            yMax: 0,
            yMin: 0,
          },
        },
      },
      datalabels: {
        align: 'bottom',
        anchor: 'start',
        color: mobileColor,
        display: mobile,
        font: {
          size: 16,
          weight: 700,
        },
      },
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          title: (context) => context[0].label.replaceAll(',', ' '),
        },
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
        ticks: {
          display: true,
          font: {
            size: labelFont,
          },
          maxRotation: 0,
        },
      },
      y: {
        stacked: true,
        title: {
          display: true,
          font: {
            size: 10,
            weight: 700,
          },
          text: 'тыс. ₽',
        },
      },
    },
  };
  const labels = [
    ['Экономия', 'на расходах', 'по кредиту'],
    ['Недополученный', 'инвестиционный', 'доход'],
    ['Финансовый', 'результат'],
  ];
  const data = {
    datasets: [
      {
        backgroundColor: '#13efa3',
        data: positiveArr,
        label: '',
      },
      {
        backgroundColor: '#EE2B4995',
        data: negativeArr,
        label: '',
      },
      {
        backgroundColor: '#0DA46F',
        borderColor: '#000000',
        borderWidth: 2,
        data: myArrPos,
        label: '',
      },
      {
        backgroundColor: '#EE2B49',
        borderColor: '#000000',
        borderWidth: 2,
        data: myArrNeg,
        label: '',
      },
    ],
    labels,
  };

  return (
    <div className="barChartBlock">
      <h3 className="chartTitle barChartTitle">
        Факторы экономического эффекта
      </h3>
      <Bar data={data} options={options} />
    </div>
  );
}

export default BarChartAim;