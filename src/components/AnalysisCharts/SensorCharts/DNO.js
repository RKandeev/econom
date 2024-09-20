import React, { useState } from 'react';

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import Checkcustom from '../../Checkcustom/Checkcustom';
import Selectblue from '../../Selectblue/Selectblue';

import './AnalysisSensorCharts.scss';
function Dno(props) {
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
  const [ser3, setSer3] = useState(23);
  let chartValue = 0;
  let standartValue = 8.5;

  if (ser3 >= 50) {
    chartValue = 50;
  } else if (ser3 <= 0) {
    chartValue = 0;
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
  let verticalChartCenter = '58%';

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
      max: 50,
      min: 0,
      minorTickInterval: null,
      plotBands: [
        {
          color: '#0DA46F',
          from: 0,
          thickness: thick,
          to: 20,
        },
        {
          color: '#ecc565',
          from: 20,
          thickness: thick,
          to: 30,
        },
        {
          color: '#EE2B49',
          from: 30,
          thickness: thick,
          to: 50,
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
    <div className="sensorChartBlockHome AnalysisSensorChartBlock ">
      <div className="analysisHeader">
        <h3 className="chartTitle">Долговая Нагрузка</h3>
        <div className="chartSettingsBlock">
          <div className="dateSelectBlock">
            <Selectblue selectArr={years} />
            <Selectblue selectArr={months} />
          </div>
          <Checkcustom checked label="С начала года" />
        </div>
      </div>
      <div className="sensorChart">
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </div>
  );
}

export default Dno;
