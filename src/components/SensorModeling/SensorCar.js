import React, { useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import "./SensorModeling.scss";
import AnimatedNumbers from "react-animated-numbers";
function SensorCar(props) {
  const [ser3, setSer3] = useState(-70);
  let chartValue = 0;
  if (ser3 >= 100) {
    chartValue = 100;
  } else if (ser3 <= -100) {
    chartValue = -100;
  } else {
    chartValue = ser3;
  }
  let num1 = 0;
  let num2 = 0;
  let diffNum = 53233;
  if (ser3 >= 0) {
    localStorage.setItem("LinesColor", "1");
    num1 = ser3;
  } else {
    localStorage.setItem("LinesColor", "2");
    num2 = ser3;
  }

  let thick = 40;
  let yFont = "18rem";
  let tickPixelInter = 72;
  let chartCenter = "50%";
  let verticalChartCenter = "57%";
  if (window.outerWidth < 450) {
    thick = 20;
    yFont = "10rem";
    tickPixelInter = 32;
    chartCenter = "30%";
    verticalChartCenter = "70%";
  }
  const options = {
    chart: {
      type: "gauge",
      plotBackgroundColor: null,
      plotBackgroundImage: null,
      plotBorderWidth: 0,
      plotShadow: false,
      height: "50%",
    },

    pane: {
      startAngle: -90,
      endAngle: 90,
      background: null,
      center: [chartCenter, verticalChartCenter],
      size: "100%",
    },

    // the value axis
    yAxis: {
      min: -100,
      max: 100,
      tickPixelInterval: tickPixelInter,
      tickPosition: "inside",
      tickColor: Highcharts.defaultOptions.chart.backgroundColor || "#FFFFFF",
      tickLength: 20,
      tickWidth: 2,
      minorTickInterval: null,
      labels: {
        distance: 30,
        style: {
          fontSize: yFont,
        },
      },
      lineWidth: 0,
      plotBands: [
        {
          from: -100,
          to: 100,
          color: "#858585",
          thickness: thick,
        },
        {
          from: 0,
          to: num1,
          color: "#0DA46F",
          thickness: thick,
        },
        {
          from: num2,
          to: 0,
          color: "#EE2B49",
          thickness: thick,
        },
      ],
    },
    plotOptions: {
      series: {
        animation: false,
      },
    },
    title: {
      text: null,
    },
    series: [
      {
        name: "Speed",
        data: [
          Math.min(chartValue, Math.max(parseInt(chartValue), chartValue)),
        ],
        tooltip: {
          valueSuffix: " km/h",
        },
        dataLabels: {
          format: Math.abs(parseInt(ser3)) + " %",
          borderWidth: 0,
          color:
            (Highcharts.defaultOptions.title &&
              Highcharts.defaultOptions.title.style &&
              Highcharts.defaultOptions.title.style.color) ||
            "#333333",
          style: {
            fontSize: "20rem",
          },
        },
        dial: {
          radius: "90%",
          backgroundColor: "black",
          baseWidth: 12,
          baseLength: "0%",
          rearLength: "0%",
        },
        pivot: {
          backgroundColor: "#858585",
          radius: 6,
        },
      },
      {
        name: "Speed",
        data: [Math.min(0, Math.max(parseInt(ser3), 0))],
        tooltip: {
          valueSuffix: " km/h",
        },
        dataLabels: {
          format: Math.abs(parseInt(ser3)) + " %",
          borderWidth: 0,
          color:
            (Highcharts.defaultOptions.title &&
              Highcharts.defaultOptions.title.style &&
              Highcharts.defaultOptions.title.style.color) ||
            "#333333",
          style: {
            fontSize: "20rem",
          },
        },
        dial: {
          radius: "90%",
          backgroundColor: "#858585",
          baseWidth: 2,
          baseLength: "0%",
          rearLength: "0%",
        },
      },
    ],
  };
  let sign = "";
  if (ser3 < 0) {
    sign = "-";
  } else {
    sign = "+";
  }
  return (
    <div className="sensorChartBlockHome">
      <h3 className="chartTitle">
        Экономический эффект (в % от стартового капитала)
      </h3>
      <div className="sensorChart">
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
      <div
        className={
          ser3 < 0 ? "differenceNumber diffNumRed" : "differenceNumberleft "
        }
      >
        {sign}
        <AnimatedNumbers
          animateToNumber={diffNum}
          transitions={(index) => ({
            type: "spring",
            duration: index + 0.2,
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

export default SensorCar;
