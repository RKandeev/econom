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

function Dk(props) {
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
  // let LinesColor = localStorage.getItem("LinesColorFlat");
  // let topArr = [];
  // let bottomArr = [];
  let mobile = true;

  // let mobileFont = 16;
  // let mobileColor = "#fff";
  if (window.outerWidth < 450) {
    mobile = false;
    // mobileColor = "#000";
    // mobileFont = 12;
  }
  let arr = [
    4726036, 4857931, 4952099, 5014894, 5022653, 5063085, 5178185, 5190588,
    5126561, 5297748, 5508225, 5552378,
  ];
  let arr2 = [
    4033394, 4014261, 3994927, 3975391, 3955650, 3935703, 3915546, 3895179,
    3874598, 3853801, 3832787, 3811552,
  ];
  // if (LinesColor === "1") {
  //   topArr = arr;
  //   bottomArr = arr2;
  // } else {
  //   topArr = arr2;
  //   bottomArr = arr;
  // }
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
        backgroundColor: 'rgba(25, 227, 133, 0.7)',
        borderColor: '#0DA46F',
        data: arr,
        fill: true,
        label: 'Собственный капитал',
        lineTension: 0,
      },
      {
        backgroundColor: '#85858590',
        borderColor: '#858585',
        data: arr2,
        fill: true,
        label: 'Заемный капитал',
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
        <h3 className="chartTitle">Динамика капитала</h3>
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

export default Dk;
