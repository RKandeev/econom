import React from 'react';

import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js';
import annotationPlugin from 'chartjs-plugin-annotation';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import gradient from 'chartjs-plugin-gradient';
import { Bar } from 'react-chartjs-2';

import Checkcustom from '../../Checkcustom/Checkcustom';
import Selectblue from '../../Selectblue/Selectblue';

import './AnalysisBarCharts.scss';

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
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
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
  let resultColor = '#0DA46F';

  if (resultArr[6] >= 0) {
    resultColor = resultColor;
  } else {
    resultColor = '#EE2B49';
  }
  // let mobile = true;
  // let mobileFont = 16;
  let mobileColor = '#fff';

  if (window.outerWidth < 450) {
    // mobile = false;
    mobileColor = '#000';
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
      delay: (context) => {
        let delay = 0;

        if (context.type === 'data' && context.mode === 'default') {
          delay = context.dataIndex * 300;
        }

        return delay;
      },
      onComplete: () => {
        delayed = true;
      },
    },
    plugins: {
      annotation: {
        annotations: {
          line1: {
            borderColor: '#858585',
            borderWidth: 2,
            drawTime: 'afterDraw',
            type: 'line',
            yMax: 0,
            yMin: 0,
          },
          pentagon1: {
            backgroundColor: '#13efa3',
            drawTime: 'afterDatasetsDraw',
            init: true,
            radius: 20,
            sides: 3,
            type: 'polygon',
            xValue: 1,
            yAdjust: -10,
            yValue: invisibleArr[1],
          },
          pentagon2: {
            backgroundColor: '#EE2B4995',
            init: true,
            radius: 20,
            rotation: 180,
            sides: 3,
            type: 'polygon',
            xValue: 2,
            yAdjust: 10,
            yValue: triangleArr[0],
          },
          pentagon3: {
            backgroundColor: '#EE2B4995',
            init: true,
            radius: 20,
            rotation: 180,
            sides: 3,
            type: 'polygon',
            xValue: 3,
            yAdjust: 10,
            yValue: triangleArr[1],
          },
          pentagon4: {
            backgroundColor: '#EE2B4995',
            init: true,
            radius: 20,
            rotation: 180,
            sides: 3,
            type: 'polygon',
            xValue: 4,
            yAdjust: 10,
            yValue: triangleArr[2],
          },
          pentagon5: {
            backgroundColor: '#EE2B4995',
            radius: 20,
            rotation: 180,
            sides: 3,
            type: 'polygon',
            xValue: 5,
            yAdjust: 10,
            yValue: triangleArr[3],
          },
        },
      },
      datalabels: {
        color: mobileColor,
        display: false,
        font: {
          size: 10,
          weight: 700,
        },
      },
      legend: {
        display: false,
        position: 'bottom',
      },
      tooltip: {
        filter: (tooltipItem) => tooltipItem.datasetIndex !== 0,
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
        ticks: {
          display: true,
          font: {
            size: 10,
          },
        },
      },
      y: {
        stacked: true,
        title: {
          display: false,
          font: {
            size: 14,
            weight: 700,
          },
          text: 'тыс. ₽',
        },
      },
    },
  };
  const labels = [
    ['Остаток ', 'на начало'],
    ['Доходы'],
    ['Платежи ', 'по кредитам'],
    ['Расходы: ', 'Базовые ', 'потребности'],
    ['Расходы: ', 'Образ жизни'],
    ['Финансовые', 'расходы'],
    ['Свободный', 'остаток (+)', ' / Дефицит (-)'],
  ];
  const data = {
    datasets: [
      {
        backgroundColor: 'transparent',
        data: invisibleArr,
        label: '',
      },
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
        backgroundColor: '#EE2B4995',
        data: afterZeroArr,
        label: '',
      },
      {
        backgroundColor: resultColor,
        data: resultArr,
        label: '',
      },
    ],
    labels,
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
          <Checkcustom checked={false} label="С начала года" />
        </div>
      </div>
      <Bar data={data} options={options} />
    </div>
  );
}

export default Sdp;
