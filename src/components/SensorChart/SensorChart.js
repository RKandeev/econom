import React, { useState } from "react";
import "./SensorChart.scss";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import HighchartsMore from "highcharts/highcharts-more";
import { Link } from "react-router-dom";
HighchartsMore(Highcharts);

function SensorChart(props) {
  const [ser3, setSer3] = useState(10);

  const options = {
    chart: {
      type: "gauge",
      plotBackgroundColor: null,
      plotBackgroundImage: null,
      plotBorderWidth: 0,
      plotShadow: false,
      height: "60%",
    },

    title: {
      text: "Оценка навыков управления финансами  ",
      style: {
        fontSize: "21rem",
        color: "#464e5f",
        marginBottom: "0rem",
        marginTop: "16rem",
        padding: 0,
        textTransform: "none",
        fontWeight: 700,
      },
    },

    pane: {
      startAngle: -90,
      endAngle: 90,
      background: null,
      center: ["50%", "75%"],
      size: "110%",
    },

    // the value axis
    yAxis: {
      min: 0,
      max: 100,
      tickPixelInterval: 72,
      tickPosition: "inside",
      tickColor: Highcharts.defaultOptions.chart.backgroundColor || "#FFFFFF",
      tickLength: 20,
      tickWidth: 2,
      minorTickInterval: null,
      labels: {
        distance: 20,
        style: {
          fontSize: "18rem",
        },
      },
      lineWidth: 0,
      plotBands: [
        {
          from: 0,
          to: 50,
          color: "#EE2B49", // green
          thickness: 40,
        },
        {
          from: 50,
          to: 100,
          color: "#0DA46F", // red
          thickness: 40,
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
          // color: function (x) {
          //     console.log(x)
          //     return '#f00'
          // },
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
      <HighchartsReact highcharts={Highcharts} options={options} />
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
