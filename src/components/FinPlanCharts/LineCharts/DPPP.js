import React from 'react';

import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import annotationPlugin from 'chartjs-plugin-annotation';
import gradient from 'chartjs-plugin-gradient';
import { Line } from 'react-chartjs-2';

import Checkcustom from '../../Checkcustom/Checkcustom';
import Selectblue from '../../Selectblue/Selectblue';

import './FinPlanLineCharts.scss';

ChartJS.register(
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  annotationPlugin,
  PointElement,
  Filler,
  gradient
);

function Dppp(props) {
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
  let LinesColor = localStorage.getItem('LinesColorFlat');
  let topArr = [];
  let bottomArr = [];
  let mobile = true;
  let mobileFont = 16;
  let mobileColor = '#fff';

  if (window.outerWidth < 450) {
    mobile = false;
    mobileColor = '#000';
    mobileFont = 12;
  }
  let arr = [
    10900, 11400, 10900, 10900, 9900, 8900, 8400, 8400, 8400, 8900, 10900,
    10900,
  ];
  let arr2 = [
    35000, 28300, 29000, 30700, 31000, 31000, 32700, 15500, 31000, 32700, 31000,
    31000,
  ];
  let arr3 = [0, 0, 0, 4500, 3000, 3000, 20000, 2500, 15000, 24000, 8000, 0];
  let arr4 = [0, 45000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  let arr5 = [700, 700, 700, 700, 700, 700, 700, 700, 700, 700, 700, 700];
  let arr6 = [
    10300, 10300, 10300, 10300, 21300, 47800, 10300, 6300, 10300, 10300, 10300,
    10300,
  ];

  if (LinesColor === '1') {
    topArr = arr;
    bottomArr = arr2;
  } else {
    topArr = arr2;
    bottomArr = arr;
  }
  const lineHomeOptions = {
    plugins: {
      datalabels: {
        display: false,
      },
      legend: {
        display: mobile,
        position: 'bottom',
      },
    },
    scales: {
      x: {
        title: {
          display: false,
          font: {
            size: 12,
            weight: 700,
          },
          text: 'Годы',
        },
      },
      y: {
        display: true,
        min: 0,
        stacked: true,
        ticks: {
          beginAtZero: true,
        },
        title: {
          display: false,
          font: {
            size: 12,
            weight: 700,
          },
          text: 'млн. ₽',
        },
      },
    },
    title: {
      display: false,
      fontSize: 20,
      text: 'COVID-19 Cases of Last 6 Months',
    },
  };
  const lineHomeData = {
    datasets: [
      {
        backgroundColor: '#102E6A',
        borderColor: '#102E6A',
        data: arr,
        fill: true,
        label: 'Жилье',
        lineTension: 0,
        order: 1,
      },
      {
        backgroundColor: '#F2712D',
        borderColor: '#F2712D',
        data: arr2,
        fill: 0,
        label: 'Питание',
        lineTension: 0,
        order: 2,
      },
      {
        backgroundColor: '#102E6A85',
        borderColor: '#102E6A85',
        data: arr3,
        fill: 1,
        label: 'Одежда и обувь',
        lineTension: 0,
        order: 3,
      },
      {
        backgroundColor: '#F2712D85',
        borderColor: '#F2712D85',
        data: arr4,
        fill: 2,
        label: 'Обустройство жилья',
        lineTension: 0,
        order: 4,
      },
      {
        backgroundColor: '#102E6A70',
        borderColor: '#102E6A70',
        data: arr5,
        fill: 3,
        label: 'Транспорт и связь',
        lineTension: 0,
        order: 5,
      },
      {
        backgroundColor: '#F2712D70',
        borderColor: '#F2712D70',
        data: arr6,
        fill: 4,
        label: 'Содержание автомобиля',
        lineTension: 0,
        order: 6,
      },
    ],
    labels: [
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
    ],
  };

  return (
    <div className="chart lineChartModeling AnalysisLineChartBlock">
      <div className="analysisHeader">
        <div className="chartSettingsBlock">
          <div className="dateSelectBlock">
            <Selectblue selectArr={years} />
            <Selectblue selectArr={months} />
          </div>
          <Checkcustom checked label="С начала года" />
        </div>
      </div>
      <Line data={lineHomeData} options={lineHomeOptions} />
    </div>
  );
}

export default Dppp;
