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

function Dkd(props) {
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
  // let mobile = true;
  // let mobileFont = 16;
  // let mobileColor = "#fff";
  // if (window.outerWidth < 450) {
  //   mobile = false;
  //   mobileColor = "#000";
  //   mobileFont = 12;
  // }
  let arr = [5.1, 5.8, 7.1, 6.2, 3.3, 3.5, 6.1, 8.1, 4.5, 7.6, 9.9, 9.4];
  let arr2 = [4.25, 4.25, 4.5, 5.0, 5.0, 5.5, 6.5, 6.5, 6.75, 7.5, 7.5, 8.5];
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
        backgroundColor: '#0DA46F',
        borderColor: '#0DA46F',
        data: arr,
        label: 'Доходность собственного капитала',
        lineTension: 0,
      },
      {
        backgroundColor: '#ecc565',
        borderColor: '#ecc565',
        data: arr2,
        label: 'Ключевая ставка ЦБ',
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
        <h3 className="chartTitle">Доходность собственного капитала</h3>
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

export default Dkd;
