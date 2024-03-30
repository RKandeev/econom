import React, { useState } from "react";
import "./SensorChart.scss";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import HighchartsMore from "highcharts/highcharts-more";
import { Link } from "react-router-dom";
HighchartsMore(Highcharts);

function SensorChart(props) {
  const [ser3, setSer3] = useState(10);
  let thick = 40;
  let yFont = "18rem";
  let tickPixelInter = 72;
  let chartCenter = "50%";
  if (window.outerWidth < 450) {
    thick = 20;
    yFont = "10rem";
    tickPixelInter = 32;
    chartCenter = "30%";
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

    title: {
      text: "",
      margin: -10,
      style: {
        fontSize: "21rem",
        color: "#464e5f",
        padding: 0,
        textTransform: "none",
        fontWeight: 700,
      },
    },

    pane: {
      startAngle: -90,
      endAngle: 90,
      background: null,
      center: [chartCenter, "60%"],
      size: "100%",
    },

    // the value axis
    yAxis: {
      min: 0,
      max: 100,
      tickPixelInterval: tickPixelInter,
      tickPosition: "inside",
      tickColor: Highcharts.defaultOptions.chart.backgroundColor || "#FFFFFF",
      tickLength: 20,
      tickWidth: 2,
      minorTickInterval: null,
      labels: {
        distance: 20,
        style: {
          fontSize: yFont,
        },
      },
      lineWidth: 0,
      plotBands: [
        {
          from: 0,
          to: 50,
          color: "#EE2B49", // green
          thickness: thick,
        },
        {
          from: 50,
          to: 100,
          color: "#0DA46F", // red
          thickness: thick,
        },
      ],
    },

    series: [
      {
        name: "Speed",
        data: [Math.min(30, Math.max(parseInt(ser3), -30))],
        tooltip: {
          valueSuffix: " km/h",
        },
        dataLabels: {
          format: parseInt(ser3) + " %",
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
          backgroundColor: "gray",
          radius: 6,
        },
      },
    ],
  };
  return (
    <div className="sensorChartBlock">
      <h3 className="chartTitle">Оценка навыков управления финансами</h3>
      <div className="sensorChart">
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
      <div className="full_study">
        Для улучшения своего уровня Вы можете пройти
        <Link to="/Study" className="fullStudyLink">
          {"  "}Обучение
        </Link>
      </div>
    </div>
  );
}

export default SensorChart;
