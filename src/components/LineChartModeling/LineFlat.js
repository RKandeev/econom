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

function LineFlat({ calcResult }) {
  let LinesColor = localStorage.getItem('LinesColorFlat');
  let topArr = [];
  let bottomArr = [];
  let mobile = true;
  let mobileFont = 16;
  let mobileColor = '#fff';

  if (window.outerWidth < 450) {
    mobile = false;
    mobileColor = '#000';
    mobileFont = 12;
  }
  let arr = [];
  let arr2 = [];
  let arrColor = '#ABB0C3';
  let arr2Color = '#0DA46F';

  calcResult.own_capital.forEach((item) => {
    arr.push(item.rent / 1000000);
    arr2.push(item.buy / 1000000);
  });

  if (calcResult.own_capital[calcResult.own_capital.length - 1].rent > calcResult.own_capital[calcResult.own_capital.length - 1].buy) {
    arrColor = '#0DA46F';
    arr2Color = '#ABB0C3';
  } else {
    arrColor = '#ABB0C3';
    arr2Color = '#0DA46F';
  }

  if (LinesColor === '1') {
    topArr = arr;
    bottomArr = arr2;
  } else {
    topArr = arr2;
    bottomArr = arr;
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
        borderColor: '#ABB0C3',
        borderWidth: 7,
        data: arr,
        label: 'Покупка квартиры для сдачи в аренду',
        lineTension: 1,
        pointBorderWidth: 5,
      },
      {
        backgroundColor: arr2Color,
        borderColor: '#0DA46F',
        borderWidth: 7,
        data: arr2,
        label: 'Инвестирование в иные активы',
        lineTension: 1,
        pointBorderWidth: 5,
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

export default LineFlat;
