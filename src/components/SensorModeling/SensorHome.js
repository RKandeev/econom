import React, { useEffect, useRef, useState } from 'react';

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import AnimatedNumbers from 'react-animated-numbers';

import './SensorModeling.scss';
function SensorHome({ calcResult }) {
  const [ser3, setSer3] = useState(calcResult.own_capital_incr_perc);
  const [diffNum, setDiffNum] = useState(calcResult.own_capital_incr);

  let chartValue = 0;

  let minChartValue;
  let maxChartValue;
  if (ser3 >= -10 && ser3 <= 10) {
    minChartValue = -10;
    maxChartValue = 10;
  } else if (ser3 >= -50 && ser3 <= 50) {
    minChartValue = -50;
    maxChartValue = 50;
  } else if ((ser3 >= -100 && ser3 <= 100) || ser3 > 100 || ser3 < 100) {
    minChartValue = -100;
    maxChartValue = 100;
  }

  if (ser3 >= 100) {
    chartValue = 100;
  } else if (ser3 <= -100) {
    chartValue = -100;
  } else {
    chartValue = ser3;
  }
  let num1 = 0;
  let num2 = 0;

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

  useEffect(() => {
    setSer3(calcResult.own_capital_incr_perc);
    setDiffNum(calcResult.own_capital_incr);
  }, [calcResult]);

  if (window.outerWidth < 450) {
    thick = 20;
    yFont = '10rem';
    tickPixelInter = 32;
    chartCenter = '30%';
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
        data: [Math.min(0, Math.max(parseInt(ser3), 0))],
        dataLabels: {
          borderWidth: 0,
          color:
            (Highcharts.defaultOptions.title &&
              Highcharts.defaultOptions.title.style &&
              Highcharts.defaultOptions.title.style.color) ||
            '#333333',
          format: calcResult.own_capital_incr_perc
            ? Math.abs(Number(calcResult.own_capital_incr_perc.toFixed(1))) +
              ' %'
            : '',
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
          format: calcResult.own_capital_incr_perc
            ? Math.abs(Number(calcResult.own_capital_incr_perc.toFixed(1))) +
              ' %'
            : '',
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
    <div className='sensorChartBlockHome'>
      <h3 className='chartTitle'>
        Разница прироста собственного капитала (в %)
      </h3>
      <div className='sensorChart'>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
      <div className={ser3 < 0 ? 'differenceNumber' : 'differenceNumberleft'}>
        +
        <AnimatedNumbers
          key={diffNum}
          animateToNumber={Math.round(diffNum)}
          transitions={(index) => ({
            duration: index + 0.2,
            type: 'spring',
          })}
        />
        &#8381;
      </div>
      <div className='bottomLegends sensorHomeLegends'>
        <div className={'leftLegend grey'}>Покупка жилья</div>
        <div className={'rightLegend grey'}>Аренда жилья</div>
      </div>
    </div>
  );
}

export default SensorHome;
