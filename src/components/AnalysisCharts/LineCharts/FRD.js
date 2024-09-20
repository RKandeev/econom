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
  PointElement,
  Filler,
  gradient
);

function Frd(props) {
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
  // let mobile = true;
  // let mobileFont = 16;
  // let mobileColor = "#fff";
  // if (window.outerWidth < 450) {
  //   mobile = false;
  //   mobileColor = "#000";
  //   mobileFont = 12;
  // }
  let arr = [67, 83, 83, 83, 75, 92, 75, 83, 75, 83, 83, 83];
  let arr2 = [33, 17, 17, 17, 25, 8, 25, 17, 25, 17, 17, 17];

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
        display: false,
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
          display: true,
          font: {
            size: 12,
            weight: 700,
          },
          text: '%',
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
        backgroundColor: '#13efa3',
        borderColor: '#0DA46F',
        data: arr,
        fill: true,
        label: 'Выполнено',
        lineTension: 0,
      },
      {
        backgroundColor: '#EE2B4995',
        borderColor: '#EE2B49',
        data: arr2,
        fill: true,
        label: 'Не выполнено',
        lineTension: 0,
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
        <h3 className="chartTitle">
          Комплексная оценка <br /> «Финансовые результаты»
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

export default Frd;
