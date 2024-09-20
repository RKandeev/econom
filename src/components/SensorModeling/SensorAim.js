import React, { useState } from 'react';

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import AnimatedNumbers from 'react-animated-numbers';

import './SensorModeling.scss';
function SensorAim(props) {
  const [ser3, setSer3] = useState(7);
  let chartValue = 0;

  if (ser3 >= 10) {
    chartValue = 10;
  } else if (ser3 <= -10) {
    chartValue = -10;
  } else {
    chartValue = ser3;
  }
  let num1 = 0;
  let num2 = 0;
  let diffNum = 53233;

  if (ser3 >= 0) {
    localStorage.setItem('LinesColor', '1');
    num1 = ser3;
  } else {
    localStorage.setItem('LinesColor', '2');
    num2 = ser3;
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
          color:
            (Highcharts.defaultOptions.title &&
              Highcharts.defaultOptions.title.style &&
              Highcharts.defaultOptions.title.style.color) ||
            '#333333',
          format: Math.abs(parseInt(ser3)) + ' %',
          style: {
            fontSize: '20rem',
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
        data: [Math.min(0, Math.max(parseInt(ser3), 0))],
        dataLabels: {
          borderWidth: 0,
          color:
            (Highcharts.defaultOptions.title &&
              Highcharts.defaultOptions.title.style &&
              Highcharts.defaultOptions.title.style.color) ||
            '#333333',
          format: Math.abs(parseInt(ser3)) + ' %',
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
      max: 10,
      min: -10,
      minorTickInterval: null,
      plotBands: [
        {
          color: '#858585',
          from: -10,
          thickness: thick,
          to: 10,
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
      tickLength: 20,
      tickPixelInterval: tickPixelInter,
      tickPosition: 'inside',
      tickWidth: 2,
    },
  };
  let sign = '';

  if (ser3 < 0) {
    sign = '-';
  } else {
    sign = '+';
  }

  return (
    <div className="sensorChartBlockHome">
      <h3 className="chartTitle">
        Финансовый результат (в % от суммы погашения)
      </h3>
      <div className="sensorChart">
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
      <div
        className={
          ser3 < 0 ? 'differenceNumber diffNumRed' : 'differenceNumberleft '
        }
      >
        {sign}
        <AnimatedNumbers
          animateToNumber={diffNum}
          transitions={(index) => ({
            duration: index + 0.2,
            type: 'spring',
          })}
        />
        &#8381;
      </div>
      <div className="bottomLegends carLegends">
        <div className="leftLegend">Потери</div>
        <div className="rightLegend green">Выгода</div>
      </div>
    </div>
  );
}

export default SensorAim;
