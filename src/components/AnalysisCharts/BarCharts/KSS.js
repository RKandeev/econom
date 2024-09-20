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

function Kss(props) {
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

  let planArr = [0, 3980, 0, 0, 0, 0, 0];

  planArr = planArr.map(function (val, i) {
    return val === 0 ? null : val;
  });

  let barColor = [];
  let mobile = true;
  let mobileFont = 16;
  let mobileColor = '#000';

  if (window.outerWidth < 450) {
    mobile = false;
    mobileColor = '#000';
    mobileFont = 12;
  }
  const options = {
    indexAxis: 'y',
    plugins: {
      datalabels: {
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
        backgroundColor: ['#EE2B4995'],
        data: planArr,
        label: 'Факт',
      },
    ],
    labels,
  };

  return (
    <div className="analysisBarChartBlock smallChart">
      <div className="analysisHeader">
        <h3 className="chartTitle">
          Кандидаты на сокращение <br />
          (по статьям расходов)
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

export default Kss;
