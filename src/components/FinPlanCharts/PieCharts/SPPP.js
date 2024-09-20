import React from 'react';

import {
  ArcElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import gradient from 'chartjs-plugin-gradient';
import { Doughnut } from 'react-chartjs-2';

import Checkcustom from '../../Checkcustom/Checkcustom';
import Selectblue from '../../Selectblue/Selectblue';

import './FinPlanPieCharts.scss';

ChartJS.register(
  Title,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  gradient,
  ChartDataLabels
);

function Sppp(props) {
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
  let planArr = [358900, 168100, 118800, 80000, 45000, 8400];
  let sum = 0;

  sum = planArr.reduce(function (a, b) {
    return a + b;
  }, 0);

  console.log(sum);
  let mobile = true;
  let mobileFont = 16;
  let mobileColor = '#000';

  if (window.outerWidth < 450) {
    mobile = false;
    mobileColor = '#000';
    mobileFont = 12;
  }
  const options = {
    plugins: {
      datalabels: {
        color: ['#fff', '#000'],
        display: mobile,
        font: {
          size: mobileFont,
          weight: 700,
        },
        formatter: (value, ctx) => {
          let sum = 0;
          let dataArr = ctx.chart.data.datasets[0].data;

          dataArr.map((data) => {
            sum += data;
          });
          let percentage = ((value * 100) / sum).toFixed(0) + '%';

          return percentage;
        },

        textAlign: 'center',
      },
      legend: {
        display: mobile,
        position: 'bottom',
      },
    },
    responsive: true,
  };
  const labels = [
    ['Питание'],
    ['Содержание автомобиля'],
    ['Жилье'],
    ['Одежда и обувь'],
    ['Обустройство жилья'],
    ['Связь'],
  ];
  const data = {
    datasets: [
      {
        backgroundColor: [
          '#102E6A',
          '#F2712D',
          '#102E6A85',
          '#F2712D85',
          '#102E6A70',
          '#F2712D70',
          '#102E6A55',
          '#F2712D55',
        ],
        data: planArr,
        label: '',
      },
    ],
    labels,
  };
  const textCenter = {
    beforeDatasetsDraw(chart, args, pluginOptions) {
      const { ctx, data } = chart;

      ctx.save();
      ctx.font = 'bold 24rem sans-serif';
      ctx.fillStyle = '#EE2B49';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(
        sum.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 '),
        chart.getDatasetMeta(0).data[0].x,
        chart.getDatasetMeta(0).data[0].y
      );
    },
    id: 'textCenter',
  };

  return (
    <>
      <div className="analysisBlock">
        <div className="analysisHeader">
          <div className="chartSettingsBlock">
            <div className="dateSelectBlock">
              <Selectblue selectArr={years} />
              <Selectblue selectArr={months} />
            </div>
            <Checkcustom checked={false} label="С начала года" />
          </div>
        </div>
        <div className="analysisPieChartBlock FinplanPieChart">
          <Doughnut data={data} options={options} plugins={[textCenter]} />
        </div>
      </div>
    </>
  );
}

export default Sppp;
