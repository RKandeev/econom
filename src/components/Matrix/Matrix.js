import React from 'react';

import {
  BarController,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineController,
  LineElement,
  PointElement,
  Tooltip,
} from 'chart.js';
import annotationPlugin from 'chartjs-plugin-annotation';
import { Bubble } from 'react-chartjs-2';
import { Link } from 'react-router-dom';

import './Matrix.scss';
ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
  annotationPlugin
);

function Matrix({result}) {
  let radius = 25;
  let labelText = 30;
  let radiusHigh = 15;

  const firstResultNumber = result.num2 / 6;
  const secondResultNumber = result.num3 / 6;

  if (window.outerWidth < 450) {
    radius = 10;
    labelText = 25;
    radiusHigh = 12;
  }
  if (window.outerWidth < 400) {
    radius = 12;
    labelText = 20;
  }

  const options = {
    maintainAspectRatio: false,
    plugins: {
      annotation: {
        annotations: {
          box1: {
            backgroundColor: 'rgba(25, 227, 133, 0.8)',
            drawTime: 'beforeDraw',
            init: true,
            type: 'box',
            xMax: 100,
            xMin: 50,
            yMax: 100,
            yMin: 50,
          },
          box2: {
            backgroundColor: 'rgba(225, 83, 23, 0.8)',
            drawTime: 'beforeDraw',
            init: true,
            type: 'box',
            xMax: 100,
            xMin: 50,
            yMax: 0,
            yMin: 50,
          },
          box3: {
            backgroundColor: 'rgba(231, 183, 63, 0.8)',
            drawTime: 'beforeDraw',
            init: true,
            type: 'box',
            xMax: 0,
            xMin: 50,
            yMax: 100,
            yMin: 50,
          },
          box4: {
            backgroundColor: 'rgba(229, 23, 72, 0.8)',
            drawTime: 'beforeDraw',
            init: true,
            type: 'box',
            xMax: 0,
            xMin: 50,
            yMax: 0,
            yMin: 50,
          },
          label1: {
            color: '#ffffff',
            content: ['ПЛОХО'],
            font: {
              size: labelText,
            },
            responsive: true,
            type: 'label',
            xValue: 25,
            yValue: 25,
          },
          label2: {
            color: '#ffffff',
            content: ['СЛАБО'],
            font: {
              size: labelText,
            },
            type: 'label',
            xValue: 75,
            yValue: 25,
          },
          label3: {
            color: '#ffffff',
            content: ['ХОРОШО'],
            font: {
              size: labelText,
            },
            type: 'label',
            xValue: 25,
            yValue: 75,
          },
          label4: {
            color: '#ffffff',
            content: ['ОТЛИЧНО'],
            font: {
              size: labelText,
            },
            type: 'label',
            xValue: 75,
            yValue: 75,
          },
        },
      },
      datalabels: {
        display: false,
      },
      title: {
        display: false,
        font: {
          size: 21,
          weight: 700,
        },
        text: 'Матрица финансовой эффективности',
      },
    },
    responsive: true,
    scales: {
      x: {
        beginAtZero: true,
        grid: {
          color: ['transparent'],
        },
        max: 100,
        min: 0,
        title: {
          display: true,
          font: {
            size: 14,
            weight: 700,
          },
          text: 'Финансовые результаты, %',
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: ['transparent'],
        },
        max: 100,
        min: 0,
        ticks: {
          index: '%',
        },
        title: {
          display: true,
          font: {
            size: 14,
            weight: 700,
          },
          text: 'Финансовое состояние, %',
        },
      },
    },
    transitions: {},
  };

  const data = {
    datasets: [
      {
        animation: {
          delay: 800,
        },
        // data: [yourResult],
        backgroundColor: '#3156A6',
        data: Array.from({ length: 1 }, () => ({
          r: radius,
          x: firstResultNumber,
          y: secondResultNumber,
        })),
        label: 'Ваш результат',
        type: 'bubble',
      },
      {
        animation: {
          delay: 500,
        },
        backgroundColor: '#065707',
        data: Array.from({ length: 1 }, () => ({
          r: radiusHigh,
          x: 99,
          y: 99,
        })),
        label: 'Эталон',
        type: 'bubble',
      },
      {
        animation: {
          delay: 1000,
        },
        animationSteps: 60,
        backgroundColor: '#ffffff',
        borderColor: '#3156A6',
        borderDash: [10, 3],
        data: [secondResultNumber, 100],
        label: 'Потенциал',
        showInLegend: false,
        tension: 0.1,
        type: 'line',
      },
    ],
    labels: [firstResultNumber, 100],
  };

  return (
    <div className="MatrixChartBlock">
      <div className="MyMatrixChart">
        <h3 className="chartTitle">Матрица финансовой эффективности</h3>
        <Bubble data={data} options={options} />
      </div>
      <div className="full_study_matrix">
        Для улучшения своего уровня Вы можете пройти
        <Link className="fullStudyLink" to="/Study">
          {'  '}Обучение
        </Link>
      </div>
    </div>
  );
}

export default Matrix;
