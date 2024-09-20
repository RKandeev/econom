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

import './FinPlanBarCharts.scss';

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

function Chdpp(props) {
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
  let planArr = [-30000];
  let factArr = [20000, -20000];
  let diffArr = [];
  let invisibleArr = [];
  let barColor = [];
  let barColor2 = [];

  if (planArr[0] >= 0) {
    barColor.push('#0DA46F');
  } else {
    barColor.push('#EE2B49');
  }
  factArr.forEach((e) => {
    if (e < 0) {
      barColor2.push('#EE2B4995');
    } else {
      barColor2.push('#13efa3');
    }
  });
  planArr = [planArr[0], null, null];
  factArr = [null, factArr[0], factArr[1]];

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
      annotation: {
        annotations: {
          line1: {
            borderColor: '#858585',
            borderWidth: 2,
            drawTime: 'afterDraw',
            type: 'line',
            yMax: 0,
            yMin: 0,
          },
        },
      },
      datalabels: {
        color: mobileColor,
        display: mobile,

        font: {
          size: mobileFont,
          weight: 700,
        },
      },
      // tooltip: {
      //   filter: (tooltipItem) => tooltipItem.datasetIndex != 0,
      // },
      legend: {
        display: false,
        position: 'bottom',
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
    ['Чистый доход'],
    ['Чистый поток Вложений'],
    ['Чистый поток Долгов'],
  ];
  const data = {
    datasets: [
      {
        backgroundColor: barColor,
        data: planArr,
      },
      {
        backgroundColor: barColor2,
        data: factArr,
      },
    ],
    labels,
  };

  return (
    <div className="analysisBarChartBlock smallChart">
      <div className="analysisHeader">
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

export default Chdpp;
