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

function Dozhp(props) {
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
    14500, 14500, 14500, 14500, 14500, 14500, 14500, 2400, 14500, 14500, 14500,
    14500,
  ];
  let arr2 = [
    7000, 5400, 7500, 7500, 7500, 7500, 7500, 2200, 7500, 7500, 7500, 7500,
  ];
  let arr3 = [
    2000, 2000, 2000, 2000, 2000, 2000, 2000, 800, 2000, 2000, 2000, 2000,
  ];
  let arr4 = [6500, 0, 5000, 0, 0, 0, 7000, 0, 0, 10000, 0, 15000];
  let arr5 = [0, 0, 0, 0, 0, 0, 0, 100000, 0, 0, 0, 0];
  let arr6 = [
    1100, 1100, 1100, 1100, 1100, 1100, 1100, 1100, 1100, 1100, 1100, 1100,
  ];
  let arr7 = [
    5600, 5600, 5600, 5600, 5600, 5600, 5600, 1600, 5600, 5600, 5600, 5600,
  ];
  let arr8 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

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
        label: 'Образование и развитие',
        lineTension: 0,
        order: 1,
      },
      {
        backgroundColor: '#F2712D',
        borderColor: '#F2712D',
        data: arr2,
        fill: 0,
        label: 'Развлечения и досуг',
        lineTension: 0,
        order: 2,
      },
      {
        backgroundColor: '#102E6A85',
        borderColor: '#102E6A85',
        data: arr3,
        fill: 1,
        label: 'Внешний вид, уход и гигиена',
        lineTension: 0,
        order: 3,
      },
      {
        backgroundColor: '#F2712D85',
        borderColor: '#F2712D85',
        data: arr4,
        fill: 2,
        label: 'Праздники и подарки',
        lineTension: 0,
        order: 4,
      },
      {
        backgroundColor: '#102E6A70',
        borderColor: '#102E6A70',
        data: arr5,
        fill: 3,
        label: 'Путешествия и поездки',
        lineTension: 0,
        order: 5,
      },
      {
        backgroundColor: '#F2712D70',
        borderColor: '#F2712D70',
        data: arr6,
        fill: 4,
        label: 'Здоровье и спорт',
        lineTension: 0,
        order: 6,
      },
      {
        backgroundColor: '#102E6A55',
        borderColor: '#102E6A55',
        data: arr7,
        fill: 5,
        label: 'Вредные привычки',
        lineTension: 0,
        order: 7,
      },
      {
        backgroundColor: '#F2712D55',
        borderColor: '#F2712D55',
        data: arr8,
        fill: 6,
        label: 'Прочие расходы',
        lineTension: 0,
        order: 8,
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

export default Dozhp;
