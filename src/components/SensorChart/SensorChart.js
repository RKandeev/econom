import React, { useState } from 'react';

import Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsReact from 'highcharts-react-official';
import { Link } from 'react-router-dom';

import './SensorChart.scss';
HighchartsMore(Highcharts);

function SensorChart(props) {
  const [ser3, setSer3] = useState(10);
  let thick = 40;
  let yFont = '18rem';
  let tickPixelInter = 72;
  let chartCenter = '50%';

  if (window.outerWidth < 450) {
    thick = 20;
    yFont = '10rem';
    tickPixelInter = 32;
    chartCenter = '30%';
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
      center: [chartCenter, '60%'],
      endAngle: 90,
      size: '100%',
      startAngle: -90,
    },

    series: [
      {
        data: [Math.min(30, Math.max(parseInt(ser3), -30))],
        dataLabels: {
          borderWidth: 0,
          color:
            (Highcharts.defaultOptions.title &&
              Highcharts.defaultOptions.title.style &&
              Highcharts.defaultOptions.title.style.color) ||
            '#333333',
          format: parseInt(ser3) + ' %',
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
          backgroundColor: 'gray',
          radius: 6,
        },
        tooltip: {
          valueSuffix: ' km/h',
        },
      },
    ],
    
    title: {
      margin: -10,
      style: {
        color: '#464e5f',
        fontSize: '21rem',
        fontWeight: 700,
        padding: 0,
        textTransform: 'none',
      },
      text: '',
    },

    // the value axis
    yAxis: {
      labels: {
        distance: 20,
        style: {
          fontSize: yFont,
        },
      },
      lineWidth: 0,
      max: 100,
      min: 0,
      minorTickInterval: null,
      plotBands: [
        {
          color: '#EE2B49',
          from: 0,
          // green
          thickness: thick, 
          to: 50,
        },
        {
          color: '#0DA46F',
          from: 50,
          // red
          thickness: thick, 
          to: 100,
        },
      ],
      tickColor: Highcharts.defaultOptions.chart.backgroundColor || '#FFFFFF',
      tickLength: 20,
      tickPixelInterval: tickPixelInter,
      tickPosition: 'inside',
      tickWidth: 2,
    },
  };

  return (
    <div className="sensorChartBlock">
      <h3 className="chartTitle">Оценка навыков управления финансами</h3>
      <div className="sensorChart">
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
      <div className="full_study">
        Для улучшения своего уровня Вы можете пройти
        <Link className="fullStudyLink" to="/Study">
          {'  '}Обучение
        </Link>
      </div>
    </div>
  );
}

export default SensorChart;
