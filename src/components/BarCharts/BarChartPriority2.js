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
  ChartDataLabels
);

function BarChartPriority2(props) {
  let insuranceArr = [18, 8];
  let percentArr = [191, 44];
  let incomeArr = [9, 207];
  let mobile = true;
  let mobileFont = 16;
  let mobileColor = '#fff';

  if (window.outerWidth < 450) {
    mobile = false;
    mobileColor = '#000';
    mobileFont = '12';
  }
  const options = {
    plugins: {
      datalabels: {
        color: '#fff',
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
  const labels = [['Кредит-1'], ['Кредит-2']];
  const data = {
    datasets: [
      {
        backgroundColor: '#85858590',
        data: percentArr,
        label: 'Возможный доход от инвестирования',
      },
      {
        backgroundColor: '#0DA46F90',
        data: insuranceArr,
        label: 'Экономия расходов на страховку',
      },
      {
        backgroundColor: '#0DA46F',
        data: incomeArr,
        label: 'Экономия расходов на проценты',
      },
    ],
    labels,
  };

  return (
    <div className="barChartBlock barFlat">
      <h3 className="chartTitle">Структура экономического эффекта </h3>
      <Bar data={data} options={options} />
    </div>
  );
}

export default BarChartPriority2;
