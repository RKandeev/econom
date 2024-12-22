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

import './BarCharts.scss';

ChartJS.register(
  Title,
  Tooltip,
  BarElement,
  Legend,
  CategoryScale,
  LinearScale,
  gradient,
  ChartDataLabels,
);

function BarChartFlat({ calcResult }) {
  let arr = [Math.round(calcResult.flat_clean_income / 1000)];
  let positiveArr = [null, Math.round(calcResult.investment / 1000)];
  let negativeArr = [Math.round(calcResult.flat_price_increase / 1000)];
  let mobile = true;
  let mobileFont = 16;
  let mobileColor = '#fff';

  if (window.outerWidth < 450) {
    mobile = false;
    mobileColor = '#000';
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
        display: mobile,
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
          display: true,
          font: {
            size: 14,
            weight: 700,
          },
          text: 'тыс. ₽',
        },
      },
    },
  };
  const labels = [['Квартира'], ['Иные активы']];
  const data = {
    datasets: [
      {
        backgroundColor: '#0DA46F',
        data: positiveArr,
        label: 'Инвестиционный доход',
      },
      {
        backgroundColor: '#13efa3',
        data: arr,
        label: 'Чистый доход от квартиры',
      },
      {
        backgroundColor: '#85858590',
        data: negativeArr,
        label: 'Прирост стоимости квартиры ',
      },
    ],
    labels,
  };

  return (
    <div className='barChartBlock barFlat'>
      <h3 className='chartTitle'>Выгода (финансовый результат)</h3>
      <Bar data={data} options={options} />
    </div>
  );
}

export default BarChartFlat;
