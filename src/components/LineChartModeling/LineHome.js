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
  let arrColor = '#ABB0C3';
  let arr2Color = '#0DA46F';
  let yearLabels = [];

  calcResult.own_capital_progress.forEach((value, index) => {
    yearLabels.push(index);
    arr.push(Math.round(value.rent) / 1000000);
    arr2.push(Math.round(value.buy) / 1000000);
  });

  if (calcResult.own_capital_progress[calcResult.own_capital_progress.length - 1].rent > calcResult.own_capital_progress[calcResult.own_capital_progress.length - 1].buy) {
    arrColor = '#0DA46F';
    arr2Color = '#ABB0C3';
  } else {
    arrColor = '#ABB0C3';
    arr2Color = '#0DA46F';
  }

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
        backgroundColor: arrColor,
        borderColor: arrColor,
        borderWidth: 7,
        data: arr,
        label: 'Аренда жилья',
        lineTension: 1,
        pointBorderWidth: 5,
      },
      {
        backgroundColor: arr2Color,
        borderColor: arr2Color,
        borderWidth: 7,
        data: arr2,
        label: 'Покупка жилья',
        lineTension: 1,
        pointBorderWidth: 5,
      },
    ],
    labels: yearLabels,
  };

  return (
    <div className='chart lineChartModeling'>
      <h3 className='chartTitle'>Собственный капитал</h3>
      <Line data={lineHomeData} options={lineHomeOptions} />
    </div>
  );
}

export default LineHome;
