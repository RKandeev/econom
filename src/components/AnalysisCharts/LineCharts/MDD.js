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
import annotationPlugin from 'chartjs-plugin-annotation';
import gradient from 'chartjs-plugin-gradient';
import { Line } from 'react-chartjs-2';

import Checkcustom from '../../Checkcustom/Checkcustom';
import Selectblue from '../../Selectblue/Selectblue';

import './AnalysisLineCharts.scss';

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
  annotationPlugin
);

function Mdd(props) {
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
  // let LinesColor = localStorage.getItem("LinesColorFlat");
  // let topArr = [];
  // let bottomArr = [];
  let mobile = true;
  let mobileFont = 16;
  let mobileColor = '#fff';
  let labelText = 30;

  if (window.outerWidth < 450) {
    mobile = false;
    mobileColor = '#000';
    mobileFont = 12;
  }
  let arr = [16, -30, 29, 28, 27, 25, 22, 15, 16, 15, 16, 15];
  let maxValue = Math.max(...arr);
  let minValue = Math.min(...arr);
  let boxValue = (parseInt(maxValue / 10, 10) + 1) * 10;

  console.log(minValue);

  const lineHomeOptions = {
    plugins: {
      annotation: {
        annotations: {
          box1: {
            backgroundColor: '#13efa3',
            drawTime: 'beforeDraw',
            init: true,
            type: 'box',
            xMax: 12,
            xMin: 0,
            yMax: boxValue,
            yMin: 0,
          },
          box2: {
            backgroundColor: '#EE2B4990',
            drawTime: 'beforeDraw',
            init: true,
            type: 'box',
            xMax: 12,
            xMin: 0,
            yMax: minValue,
            yMin: 0,
          },
        },
      },
      datalabels: {
        display: false,
      },
      legend: {
        display: false,
        position: 'bottom',
      },
    },
    scales: {
      x: {
        title: {
          display: false,
          font: {
            size: 12,
            weight: 700,
          },
          text: 'Годы',
        },
      },
      y: {
        display: true,
        stacked: true,
        title: {
          display: true,
          font: {
            size: 12,
            weight: 700,
          },
          text: '%',
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
        backgroundColor: '#1d5d90',
        borderColor: '#1d5d90',
        borderWidth: 5,
        data: arr,
        fill: false,
        label: 'Моя доходность',
        lineTension: 0,
      },
    ],
    labels: [
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
    ],
  };

  return (
    <div className="chart lineChartModeling AnalysisLineChartBlock">
      <div className="analysisHeader">
        <h3 className="chartTitle">Моя доходность</h3>
        <div className="chartSettingsBlock">
          <div className="dateSelectBlock">
            <Selectblue selectArr={years} />
            <Selectblue selectArr={months} />
          </div>
          <Checkcustom checked label="С начала года" />
        </div>
      </div>
      <Line data={lineHomeData} options={lineHomeOptions} />
    </div>
  );
}

export default Mdd;