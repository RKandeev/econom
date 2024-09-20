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
  gradient
);

function LineHome(props) {
  let mobile = true;

  if (window.outerWidth < 450) {
    mobile = false;
  }
  let arr = [
    1, 1.4, 1.8, 2.2, 2.6, 3.1, 3.5, 3.9, 4.3, 4.8, 5.2, 5.6, 6, 6.5, 6.9, 7.3,
  ];
  let arr2 = [
    1, 1.5, 2, 2.5, 3, 3.6, 4.2, 4.7, 5.3, 5.8, 6.5, 7, 7.7, 8.3, 9, 9.6,
  ];

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
    <div className="chart lineChartModeling">
      <h3 className="chartTitle">Собственный капитал</h3>
      <Line data={lineHomeData} options={lineHomeOptions} />
    </div>
  );
}

export default LineHome;
