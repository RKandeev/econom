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
  let Arr = [18, 8, 3];
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
  const labels = [['Кредит-1'], ['Кредит-2'], ['Кредит-3']];
  const data = {
    datasets: [
      {
        backgroundColor: '#0DA46F',
        data: Arr,
        label: 'Экономический эффект',
      },
    ],
    labels,
  };

  return (
    <div className="barChartBlock barFlat">
      <h3 className="chartTitle">
        Экономический эффект от досрочного погашения{' '}
      </h3>
      <Bar data={data} options={options} />
    </div>
  );
}

export default BarChartPriority2;
