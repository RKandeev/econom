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

function Rek(props) {
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
  let planArr = [10000, 15200, 3100, 0, 0, 1100, 9400, 0, 0];

  planArr = planArr.map(function (val, i) {
    return val === 0 ? null : val;
  });

  let barColor = [];
  // diffArr.forEach((e) => {
  //   if (e >= 0) {
  //     barColor.push("#0DA46F");
  //   } else {
  //     barColor.push("#EE2B4995");
  //   }
  // });

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
    ['Образование и развитие'],
    ['Развлечения и досуг'],
    ['Внешний вид, уход и гигиена'],
    ['Праздники и подарки'],
    ['Путешествия и поездки'],
    ['Здоровье и спорт'],
    ['Вредные привычки'],
    ['Прочие расходы'],
    ['Финансовая помощь'],
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
          Резерв для экономии <br />
          (по категориям расходов)
        </h3>
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

export default Rek;
