import React from 'react';

import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import gradient from 'chartjs-plugin-gradient';
import { Line } from 'react-chartjs-2';

import './LineChartModeling.scss';

ChartJS.register(
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
  gradient,
);

function LineHome({ calcResult }) {
  let mobile = true;

  if (window.outerWidth < 450) {
    mobile = false;
  }
  let arr = [];
  let arr2 = [];

  calcResult.own_capital_progress.forEach((value) => {
    arr.push(Math.round(value.rent) / 1000000);
    arr2.push(Math.round(value.buy) / 1000000);
  });

  const lineHomeOptions = {
    plugins: {
      datalabels: {
        display: false,
      },
      legend: {
        display: mobile,
        position: 'bottom',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          font: {
            size: 12,
            weight: 700,
          },
          text: 'Годы',
        },
      },
      y: {
        title: {
          display: true,
          font: {
            size: 12,
            weight: 700,
          },
          text: 'млн. ₽',
        },
      },
    },
    title: {
      display: false,
      fontSize: 20,
      text: 'COVID-19 Cases of Last 6 Months',
    },
  };
  const lineHomeData = {
    datasets: [
      {
        backgroundColor: '#EE2B49',
        borderColor: '#EE2B49',
        data: arr,
        label: 'Аренда жилья',
        lineTension: 1,
      },
      {
        backgroundColor: '#0DA46F',
        borderColor: '#0DA46F',
        data: arr2,
        label: 'Покупка жилья',
        lineTension: 1,
      },
    ],
    labels: [
      '0',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      '11',
      '12',
      '13',
      '14',
      '15',
    ],
  };

  return (
    <div className='chart lineChartModeling'>
      <h3 className='chartTitle'>Собственный капитал</h3>
      <Line data={lineHomeData} options={lineHomeOptions} />
    </div>
  );
}

export default LineHome;
