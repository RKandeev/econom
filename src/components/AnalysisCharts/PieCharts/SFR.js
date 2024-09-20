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
import { Pie } from 'react-chartjs-2';

import Checkcustom from '../../Checkcustom/Checkcustom';
import Selectblue from '../../Selectblue/Selectblue';

import './AnalysisPieCharts.scss';

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

function Sfr(props) {
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
  let planArr = [68, 32];
  let mobile = true;
  let mobileFont = 16;
  let mobileColor = '#fff';

  if (window.outerWidth < 450) {
    mobile = false;
    mobileColor = '#fff';
    mobileFont = 12;
  }
  const options = {
    plugins: {
      datalabels: {
        color: mobileColor,
        display: [mobile, false],
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
          let percentage = ((value * 100) / sum).toFixed(1) + '%';

          return percentage;
        },

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
  };
  const labels = [['Сила финансового рычага'], ['']];
  const data = {
    datasets: [
      {
        backgroundColor: ['#13efa3', '#85858590'],
        data: planArr,
        label: '',
      },
    ],
    labels,
  };

  return (
    <>
      <div className="analysisBlock">
        <div className="analysisHeader">
          <h3 className="chartTitle">Сила Финансового рычага</h3>
          <div className="chartSettingsBlock">
            <div className="dateSelectBlock">
              <Selectblue selectArr={years} />
              <Selectblue selectArr={months} />
            </div>
            <Checkcustom checked={false} label="С начала года" />
          </div>
        </div>
        <div className="analysisPieChartBlock ">
          <Pie data={data} options={options} />
        </div>
      </div>
    </>
  );
}

export default Sfr;
