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

function Fba(props) {
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
  let otherArr = [null, null];
  let factArr = [null, null];
  let finActiveArr = [2582051, null];
  let carArr = [1700000, null];
  let flatArr = [5000000, 3811552];
  let moneyArr = [null, null, 5552378];
  let mobile = true;
  let mobileFont = 16;
  let mobileColor = '#fff';
  let invisibleArr = [];
  let diffArr = [81879, null, null];
  let debt = [flatArr[1]];

  if (debt[0] >= moneyArr[2]) {
    invisibleArr = [null, null, moneyArr[2]];
  } else {
    invisibleArr = [null, null, debt[0]];
  }
  if (window.outerWidth < 450) {
    mobile = false;
    mobileColor = '#000';
    mobileFont = 12;
  }
  const options = {
    plugins: {
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
  const labels = ['Активы', 'долги', 'Собственный капитал'];
  const data = {
    datasets: [
      {
        backgroundColor: 'transparent',
        data: invisibleArr,
        label: '',
      },

      {
        backgroundColor: ['#0DA46F'],
        borderColor: '#fff',
        borderWidth: 2,
        data: moneyArr,
        label: 'Деньги',
      },
      {
        backgroundColor: ['#13efa3'],
        borderColor: '#fff',
        borderWidth: 2,
        data: otherArr,
        label: 'Прочее имущество',
      },
      {
        backgroundColor: ['#13efa3'],
        borderColor: ['#fff'],
        borderWidth: 2,
        data: factArr,
        label: 'Незавершенное строительство',
      },
      {
        backgroundColor: ['#13efa3'],
        borderColor: ['#fff'],
        borderWidth: 2,
        data: finActiveArr,
        label: 'Финансовые активы',
      },
      {
        backgroundColor: ['#13efa3'],
        borderColor: ['#fff'],
        borderWidth: 2,
        data: carArr,
        label: 'Транспорт',
      },
      {
        backgroundColor: ['#13efa3', '#EE2B4995'],
        borderColor: ['#fff'],
        borderWidth: 2,
        data: flatArr,
        label: 'Недвижимость',
      },

      {
        backgroundColor: ['#13efa3'],
        borderColor: ['#fff'],
        borderWidth: 2,
        data: diffArr,
        label: 'Деньги',
      },
    ],
    labels,
  };

  return (
    <div className="analysisBarChartBlock smallChart">
      <div className="analysisHeader">
        <h3 className="chartTitle">Финансовый баланс</h3>
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

export default Fba;
