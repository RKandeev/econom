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
  ChartDataLabels
);

function Sdv(props) {
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
  let planArr = [30000];
  let factArr = [20000];
  let diffArr = [];
  let invisibleArr = [];
  let barColor = [];

  if (planArr[0] >= factArr[0]) {
    invisibleArr = [null, null, factArr[0]];
    diffArr = [planArr[0] - factArr[0]];
    barColor.push('#EE2B49');
  } else {
    invisibleArr = [null, null, planArr[0]];
    diffArr = [factArr[0] - planArr[0]];
    barColor.push('#0DA46F');
  }
  planArr = [planArr[0], null, null];
  factArr = [null, factArr[0], null];
  diffArr = [null, null, diffArr[0]];

  diffArr = diffArr.map(function (val, i) {
    return val === 0 ? null : val;
  });
  planArr = planArr.map(function (val, i) {
    return val === 0 ? null : val;
  });

  let mobile = true;
  let mobileFont = 16;
  let mobileColor = '#fff';

  if (window.outerWidth < 450) {
    mobile = false;
    mobileColor = '#fff';
    mobileFont = 12;
  }
  const options = {
    plugins: {
      datalabels: {
        color: mobileColor,
        display: mobile,

        font: {
          size: mobileFont,
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
          maxRotation: 0,
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
  const labels = [['План'], ['Факт'], ['Отклонение']];
  const data = {
    datasets: [
      {
        backgroundColor: 'transparent',
        data: invisibleArr,
        label: '',
      },
      {
        backgroundColor: barColor,
        data: diffArr,
        label: 'Отклонение',
      },
      {
        backgroundColor: '#85858590',
        data: planArr,
        label: 'План',
      },
      {
        backgroundColor: '#85858590',
        data: factArr,
        label: 'Факт',
      },
    ],
    labels,
  };

  return (
    <div className="analysisBarChartBlock smallChart">
      <div className="analysisHeader">
        <h3 className="chartTitle">Выполнение плана по доходам</h3>
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

export default Sdv;
