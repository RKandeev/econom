import React from "react";
import "./Chart.scss";
import { Line } from "react-chartjs-2";
import gradient from "chartjs-plugin-gradient";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
  gradient
);
let arr = [0, 4000, 50000, 8000, 35000, 10000, 8000];

const lineChartData = {
  plugins: {
    gradient,
  },
  labels: ["1", "5", "10", "15", "20", "25", "31"],
  datasets: [
    {
      gradient: {
        backgroundColor: {
          axis: "y",
          colors: {
            0: "transparent",
            10000: "rgba(13, 164, 111, 0.2)",
            1000000: "rgba(13, 164, 111, 0.5)",
          },
        },
      },
      data: arr,
      label: "Рублей",
      fill: true,
      lineTension: 0,
    },
  ],
};
const Chart = (props) => {
  return (
    <div className="chart">
      <h3>{props.chartH3}</h3>
      <h4>{props.chartH4}</h4>
      <Line
        type="line"
        options={{
          title: {
            display: false,
            text: "COVID-19 Cases of Last 6 Months",
            fontSize: 20,
          },
          legend: {
            display: true,
            position: "top",
          },
        }}
        data={lineChartData}
      />
    </div>
  );
};
export default Chart;
