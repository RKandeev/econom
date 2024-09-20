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

function Dfrp(props) {
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
    3000, 13000, 13000, 13000, 13000, 13000, 13000, 3000, 3000, 13000, 13000,
    13000,
  ];
  let arr2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  let arr3 = [300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300];

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
        label: 'Финансовая помощь',
        lineTension: 0,
        order: 1,
      },
      {
        backgroundColor: '#F2712D',
        borderColor: '#F2712D',
        data: arr2,
        fill: 0,
        label: 'Страхование',
        lineTension: 0,
        order: 2,
      },
      {
        backgroundColor: '#102E6A85',
        borderColor: '#102E6A85',
        data: arr3,
        fill: 1,
        label: 'Прочие финансовые расходы',
        lineTension: 0,
        order: 3,
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

export default Dfrp;
