import React, { useState } from 'react';

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import AnimatedNumbers from 'react-animated-numbers';

import './SensorModeling.scss';
function SensorPriority(props) {
  const [ser3, setSer3] = useState(40);
  let chartValue = 0;

  if (ser3 >= 50) {
    chartValue = 50;
  } else if (ser3 <= -50) {
    chartValue = -50;
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
  if (window.outerWidth < 400) {
    chartCenter = '29%';
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
        // enabled: false,
        formatter: function () {
          let label = this.axis.defaultLabelFormatter.call(this);

          if (label < 0) {
            label = label * -1;
          }

          return label;
        },
        style: {
          fontSize: yFont,
        },
      },
      lineWidth: 0,
      max: 50,
      min: -50,
      minorTickInterval: null,
      plotBands: [
        {
          color: '#858585',
          from: -50,
          thickness: thick,
          to: 50,
        },
        {
          color: '#0DA46F',
          from: 0,
          thickness: thick,
          to: num1,
        },
        {
          color: '#0DA46F',
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

  return (
    <div className="sensorChartBlockHome">
      <h3 className="chartTitle">
        Сравнительная выгода от досрочного погашения (в %)
      </h3>
      <div className="sensorChart">
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
      <div className={ser3 < 0 ? 'differenceNumber' : 'differenceNumberleft'}>
        +
        <AnimatedNumbers
          animateToNumber={diffNum}
          transitions={(index) => ({
            duration: index + 0.2,
            type: 'spring',
          })}
        />
        &#8381;
      </div>
      <div className="bottomLegends priorityLegends">
        <div className={ser3 >= 0 ? 'leftLegend' : 'leftLegend green'}>
          Кредит-1
        </div>
        <div className={ser3 < 0 ? 'rightLegend' : 'rightLegend green'}>
          Кредит-2
        </div>
      </div>
    </div>
  );
}

export default SensorPriority;