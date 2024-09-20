import React from 'react';

import {
  ArcElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  RadialLinearScale,
  Title,
  Tooltip,
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import gradient from 'chartjs-plugin-gradient';
import { PolarArea } from 'react-chartjs-2';

import Checkcustom from '../../Checkcustom/Checkcustom';
import Selectblue from '../../Selectblue/Selectblue';

import './AnalysisPieCharts.scss';

ChartJS.register(
  Title,
  ArcElement,
  Tooltip,
  Legend,
  RadialLinearScale,
  CategoryScale,
  LinearScale,
  gradient,
  ChartDataLabels
);

function Frf(props) {
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
  let planArr = [73, 60, 80, 82, 84];
  let factArr = [100, 100, 100, 100, 100];
  let mobile = true;
  let mobileFont = 15;
  let mobileColor = '#000';

  if (window.outerWidth < 450) {
    mobile = false;
    mobileColor = '#fff';
    mobileFont = 12;
  }

  const options = {
    borderWidth: 1,

    plugins: {
      datalabels: {
        align: 'end',
        anchor: 'top',
        color: mobileColor,
        display: function (context) {
          return context.datasetIndex === 1;
        },
        font: {
          size: 12,
          weight: 700,
        },
        formatter: (value, ctx) => {
          let labels = ctx.chart.data.labels[ctx.dataIndex];

          return labels;
        },
        offset: -20,
        textAlign: 'center',
      },
      legend: {
        display: false,
        position: 'bottom',
      },
      tooltip: {
        enabled: false,
      },
    },
    responsive: true,
    scales: {
      r: {
        grid: {
          display: false, // Removes the circulair lines
        },
        ticks: {
          display: false, // Remove vertical numbers
        },
      },
    },
  };
  const labels = [
    ['Финансовая', 'дисциплина'],
    ['Моя', 'Доходность'],
    ['Доходность', 'Собственного', 'Капитала'],
    ['Накопление', 'активов'],
    ['Инвестирование', 'накоплений'],
  ];
  const data = {
    datasets: [
      {
        backgroundColor: [
          '#13efa3',
          '#13efa3',
          '#13efa3',
          '#0DA46F',
          '#13efa3',
        ],
        data: planArr,
        label: '',
      },
      {
        backgroundColor: [
          '#EE2B4995',
          '#EE2B4995',
          '#EE2B4995',
          '#EE2B49',
          '#EE2B4995',
        ],
        data: factArr,
        label: '',
      },
    ],
    labels,
  };

  return (
    <>
      <div className="analysisBlock">
        <div className="analysisHeader">
          <h3 className="chartTitle">
            Финансовые Результаты <br /> (степень выполнения показателей)
          </h3>
          <div className="chartSettingsBlock">
            <div className="dateSelectBlock">
              <Selectblue selectArr={years} />
              <Selectblue selectArr={months} />
            </div>
            <Checkcustom checked label="С начала года" />
          </div>
        </div>
        <div className="analysisPieChartBlock ">
          <PolarArea data={data} options={options} />
        </div>
      </div>
    </>
  );
}

export default Frf;
