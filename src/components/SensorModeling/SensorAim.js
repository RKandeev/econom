import React from 'react';

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import AnimatedNumbers from 'react-animated-numbers';

import './SensorModeling.scss';
function SensorAim({ calcResult }) {
  let chartValue = 0;
  let minChartValue;
  let maxChartValue;
  if (calcResult.profit_percent >= -10 && calcResult.profit_percent <= 10) {
    minChartValue = -10;
    maxChartValue = 10;
  } else if (
    calcResult.profit_percent >= -50 &&
    calcResult.profit_percent <= 50
  ) {
    minChartValue = -50;
    maxChartValue = 50;
  } else if (
    (calcResult.profit_percent >= -100 && calcResult.profit_percent <= 100) ||
    calcResult.profit_percent > 100 ||
    calcResult.profit_percent < 100
  ) {
    minChartValue = -100;
    maxChartValue = 100;
  }
  if (calcResult.profit_percent >= 100) {
    chartValue = 100;
  } else if (calcResult.profit_percent <= -100) {
    chartValue = -100;
  } else {
    chartValue = calcResult.profit_percent;
  }

  let num1 = 0;
  let num2 = 0;
  let diffNum = calcResult.profit_rub;

  let percentColor;

  if (calcResult.profit_percent >= 0) {
    localStorage.setItem('LinesColor', '1');
    num1 = calcResult.profit_percent;
    percentColor = '#0DA46F';
  } else {
    localStorage.setItem('LinesColor', '2');
    num2 = calcResult.profit_percent;
    percentColor = '#EE2B49';
  }

  let thick = 40;
  let yFont = '18rem';
  let tickPixelInter = 72;
  let chartCenter = '50%';
  let verticalChartCenter = '57%';

  if (window.outerWidth < 450) {
    thick = 20;
    yFont = '10rem';
    tickPixelInter = 32;
    chartCenter = '27%';
    verticalChartCenter = '70%';
  }
  const options = {
    chart: {
      height: '50%',
      plotBackgroundColor: null,
      plotBackgroundImage: null,
      plotBorderWidth: 0,
      plotShadow: false,
      type: 'gauge',
    },

    pane: {
      background: null,
      center: [chartCenter, verticalChartCenter],
      endAngle: 90,
      size: '100%',
      startAngle: -90,
    },

    plotOptions: {
      series: {
        animation: false,
      },
    },

    series: [
      {
        data: [
          Math.min(chartValue, Math.max(parseInt(chartValue), chartValue)),
        ],
        dataLabels: {
          borderWidth: 0,
          color: percentColor,
          format: calcResult.profit_percent
            ? Math.abs(Number(calcResult.profit_percent.toFixed(1))) + ' %'
            : '',
          style: {
            fontSize: '20rem',
            fontWeight: '700',
            borderWidth: 0,
            textOutline: false,
          },
        },
        dial: {
          backgroundColor: 'black',
          baseLength: '0%',
          baseWidth: 12,
          radius: '90%',
          rearLength: '0%',
        },
        name: 'Speed',
        pivot: {
          backgroundColor: '#858585',
          radius: 6,
        },
        tooltip: {
          valueSuffix: ' km/h',
        },
      },
      {
        data: [Math.min(0, Math.max(parseInt(calcResult.profit_percent), 0))],
        dataLabels: {
          borderWidth: 0,
          color:
            (Highcharts.defaultOptions.title &&
              Highcharts.defaultOptions.title.style &&
              Highcharts.defaultOptions.title.style.color) ||
            '#333333',
          format: Math.abs(parseInt(calcResult.profit_percent)) + ' %',
          style: {
            fontSize: '20rem',
          },
        },
        dial: {
          backgroundColor: '#858585',
          baseLength: '0%',
          baseWidth: 2,
          radius: '90%',
          rearLength: '0%',
        },
        name: 'Speed',
        tooltip: {
          valueSuffix: ' km/h',
        },
      },
    ],

    title: {
      text: null,
    },
    // the value axis
    yAxis: {
      labels: {
        distance: 30,
        style: {
          fontSize: yFont,
        },
      },
      lineWidth: 0,
      max: maxChartValue,
      min: minChartValue,
      minorTickInterval: null,
      plotBands: [
        {
          color: '#858585',
          from: minChartValue,
          thickness: thick,
          to: maxChartValue,
        },
        {
          color: '#0DA46F',
          from: 0,
          thickness: thick,
          to: num1,
        },
        {
          color: '#EE2B49',
          from: num2,
          thickness: thick,
          to: 0,
        },
      ],
      tickColor: Highcharts.defaultOptions.chart.backgroundColor || '#FFFFFF',
      tickLength: 100,
      tickPixelInterval: tickPixelInter,
      tickPosition: 'inside',
      tickWidth: 2,
    },
  };
  let sign = '';

  if (calcResult.profit_percent < 0) {
    sign = '-';
  } else {
    sign = '+';
  }

  return (
    <div className='sensorChartBlockHome'>
      <h3 className='chartTitle'>
        Финансовый результат (в % от суммы погашения)
      </h3>
      <div className='sensorChart'>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
      <div
        className={
          calcResult.profit_percent < 0
            ? 'differenceNumber diffNumRed'
            : 'differenceNumberleft '
        }
      >
        {sign}
        <AnimatedNumbers
          key={diffNum}
          animateToNumber={diffNum}
          transitions={(index) => ({
            duration: index + 0.2,
            type: 'spring',
          })}
        />
        &#8381;
      </div>
      <div className='bottomLegends carLegends'>
        <div className='leftLegend'>Потери</div>
        <div className='rightLegend green'>Выгода</div>
      </div>
    </div>
  );
}

export default SensorAim;
