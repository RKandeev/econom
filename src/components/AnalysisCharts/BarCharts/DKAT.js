import React from 'react';

import {
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
  LineController,
  annotationPlugin
);

function Dkat(props) {
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
  let planArr = [10900, 35000, 0, 0, 700, 10300, 0];
  let factArr = [11450, 36759, 0, 1970, 700, 13550, 0];
  let diffArr = [
    planArr[0] - factArr[0],
    planArr[1] - factArr[1],
    planArr[2] - factArr[2],
  ];
  let barColor = [];

  diffArr.forEach((e) => {
    if (e >= 0) {
      barColor.push('#13efa3');
    } else {
      barColor.push('#EE2B49');
    }
  });

  let mobile = true;
  let mobileFont = 16;
  let mobileColor = '#fff';

  if (window.outerWidth < 450) {
    mobile = false;
    mobileColor = '#000';
    mobileFont = 12;
  }
  const options = {
    indexAxis: 'y',
    plugins: {
      annotation: {
        annotations: {
          line1: {
            borderColor: '#858585',
            borderWidth: 2,
            drawTime: 'afterDraw',
            type: 'line',
            xMax: 0,
            xMin: 0,
          },
        },
      },
      datalabels: {
        color: mobileColor,
        display: false,
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
        callbacks: {
          title: (context) => context[0].label.replaceAll(',', ' '),
        },
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: false,
        ticks: {
          display: true,
          maxRotation: 0,
        },
      },
      y: {
        stacked: false,
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
    ['Заработная плата'],
    ['Собственный бизнес'],
    ['Фриланс'],
    ['Инвестиционные доходы'],
    ['Финансовая помощь'],
    ['Стипендии, пенсии, пособия'],
    ['Прочие доходы'],
  ];
  const data = {
    datasets: [
      {
        backgroundColor: '#3156A6',
        data: factArr,
        label: 'Факт',
      },
      {
        backgroundColor: '#85858590',
        data: planArr,
        label: 'План',
      },
    ],
    labels,
  };

  return (
    <div className="analysisBarChartBlock smallChart">
      <div className="analysisHeader">
        <h3 className="chartTitle">Выполнения плана по категориям доходов</h3>
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

export default Dkat;
