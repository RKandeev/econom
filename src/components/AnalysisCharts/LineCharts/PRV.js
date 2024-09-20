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

import './AnalysisLineCharts.scss';

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

function Prv(props) {
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
    590, 11970, 11970, 12300, 19640, 20020, 23550, 26630, 42790, 42790, 43170,
    43500, 44730, 45060, 48090, 77070, 77070, 79550, 79880, 97280, 97610, 97940,
    114530, 115630, 115960, 116340, 117390, 117720, 118050, 174618, 174618,
  ];
  let arr2 = [
    156838,
    145458,
    145458,
    145128,
    137788,
    137408,
    133878,
    130798,
    114638,
    114638,
    114258,
    113928,
    112698,
    112368,
    109338,
    80358,
    80358,
    77878,
    77548,
    60148,
    59818,
    59488,
    42898,
    41798,
    41468,
    41088,
    40038,
    39708,
    39378,
    null,
    null,
  ];
  let planMoney = 157428;

  if (LinesColor === '1') {
    topArr = arr;
    bottomArr = arr2;
  } else {
    topArr = arr2;
    bottomArr = arr;
  }
  const lineHomeOptions = {
    plugins: {
      annotation: {
        annotations: {
          line1: {
            borderColor: '#EE2B49',
            borderWidth: 2,
            drawTime: 'afterDraw',
            type: 'line',
            yMax: planMoney,
            yMin: planMoney,
          },
        },
      },
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
          display: true,
          font: {
            size: 12,
            weight: 700,
          },
          text: 'Дни месяца',
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
        backgroundColor: '#3156A690',
        borderColor: '#3156A6',
        data: arr,
        fill: true,
        label: 'Расходы с начала месяца',
        lineTension: 0,
      },
      {
        backgroundColor: 'rgba(25, 227, 133, 0.7)',
        borderColor: '#0DA46F',
        data: arr2,
        fill: true,
        label: 'Оставшийся лимит',
        lineTension: 0,
      },
      {
        backgroundColor: '#EE2B49',
        borderColor: '#EE2B49',
        data: [0],
        fill: false,
        label: 'План на месяц',
        lineTension: 0,
      },
    ],
    labels: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
    ],
  };

  return (
    <div className="chart lineChartModeling AnalysisLineChartBlock">
      <div className="analysisHeader">
        <h3 className="chartTitle">
          Анализ соблюдения плана по совокупным расходам
        </h3>
        <div className="chartSettingsBlock">
          <div className="dateSelectBlock">
            <Selectblue selectArr={years} />
            <Selectblue selectArr={months} />
          </div>
          <Checkcustom checked={false} label="С начала года" />
        </div>
      </div>
      <Line data={lineHomeData} options={lineHomeOptions} />
    </div>
  );
}

export default Prv;
