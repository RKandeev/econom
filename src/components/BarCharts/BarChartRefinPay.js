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

function BarChartRefinPay(props) {
  let percentArr = [8, 7];
  let insuranceArr = [23, 23];
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
          size: 16,
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
          display: true,
          font: {
            size: 12,
            weight: 700,
          },
          text: 'тыс. ₽',
        },
      },
    },
  };
  const labels = [['Без рефинанс-ия'], ['С рефинанс-ем']];
  const data = {
    datasets: [
      {
        backgroundColor: '#858585',
        data: insuranceArr,
        label: '',
      },
    ],
    labels,
  };

  return (
    <div className="barChartBlock barFlat">
      <h3 className="chartTitle">Ежемесячные платежи по кредитам</h3>
      <Bar data={data} options={options} />
    </div>
  );
}

export default BarChartRefinPay;
