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

function Psr(props) {
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
  let category = ['Категория1', 'Категория2', 'Категория3'];

  let planArr = [25000, 3500, 0, 4800, 0, 1700, 0];
  let factArr = [24055, 6754, 0, 3600, 0, 2350, 0];
  let diffArr = [
    planArr[0] - factArr[0],
    planArr[1] - factArr[1],
    planArr[2] - factArr[2],
    planArr[3] - factArr[3],
    planArr[4] - factArr[4],
    planArr[5] - factArr[5],
  ];

  diffArr = diffArr.map(function (val, i) {
    return val === 0 ? null : val;
  });
  planArr = planArr.map(function (val, i) {
    return val === 0 ? null : val;
  });

  console.log(diffArr);
  let barColor = [];

  diffArr.forEach((e) => {
    if (e >= 0) {
      barColor.push('#13efa3');
    } else {
      barColor.push('#EE2B49');
    }
  });

  // let mobile = true;
  let mobileFont = 16;
  let mobileColor = '#000';

  if (window.outerWidth < 450) {
    // mobile = false;
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
        align: 'left',
        anchor: 'center',
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
    ['Основные продукты'],
    ['Снеки, сладости, напитки'],
    ['Прочие продукты'],
    ['Услуги заведений общепита'],
    ['Покупка готовых рационов'],
    ['Спортивное питание'],
    ['Прочие расходы на питание'],
  ];
  const data = {
    datasets: [
      {
        backgroundColor: barColor,
        barPercentage: 0.7,
        data: diffArr,
        label: 'Экономия (+), перерасход (-)',
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
        <h3 className="chartTitle">
          Анализ соблюдения плана по <br />
          Статьям расходов
        </h3>
        <div className="chartSettingsBlock">
          <div className="dateSelectBlock">
            <Selectblue selectArr={years} />
            <Selectblue selectArr={months} />
          </div>
          <Checkcustom checked={false} label="С начала года" />
        </div>
      </div>
      <div className="categorySelect">
        <Selectblue selectArr={category} />
      </div>
      <Bar data={data} options={options} />
    </div>
  );
}

export default Psr;
