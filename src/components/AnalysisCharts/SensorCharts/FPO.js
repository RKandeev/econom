import React, { useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import "./AnalysisSensorCharts.scss";
import AnimatedNumbers from "react-animated-numbers";
import Selectblue from "../../Selectblue/Selectblue";
import Checkcustom from "../../Checkcustom/Checkcustom";
function Fpo(props) {
  let years = [2022, 2023];
  let months = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];
  const [ser3, setSer3] = useState(7);
  let chartValue = 0;
  if (ser3 >= 30) {
    chartValue = 30;
  } else if (ser3 <= -30) {
    chartValue = -30;
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
  let verticalChartCenter = "58%";
  if (window.outerWidth < 450) {
    thick = 20;
    yFont = "10rem";
    tickPixelInter = 32;
    chartCenter = "27%";
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
      min: 0,
      max: 12,
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
          from: 6,
          to: 12,
          color: "#0DA46F",
          thickness: thick,
        },
        {
          from: 3,
          to: 6,
          color: "#ecc565",
          thickness: thick,
        },
        {
          from: 0,
          to: 3,
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
          format: Math.abs(parseInt(ser3)) + " мес.",
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
    ],
  };
  let sign = "";
  if (ser3 < 0) {
    sign = "-";
  } else {
    sign = "+";
  }
  return (
    <div className="sensorChartBlockHome AnalysisSensorChartBlock ">
      <div className="analysisHeader">
        <h3 className="chartTitle">Финансовая Прочность</h3>
        <div className="chartSettingsBlock">
          <div className="dateSelectBlock">
            <Selectblue selectArr={years} />
            <Selectblue selectArr={months} />
          </div>
          <Checkcustom label="С начала года" checked={true} />
        </div>
      </div>
      <div className="sensorChart">
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </div>
  );
}

export default Fpo;
