import React from 'react';

import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import gradient from 'chartjs-plugin-gradient';
import { Line } from 'react-chartjs-2';

import './Chart.scss';

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
  datasets: [
    {
      data: arr,
      fill: true,
      gradient: {
        backgroundColor: {
          axis: 'y',
          colors: {
            0: 'transparent',
            10000: 'rgba(13, 164, 111, 0.2)',
            1000000: 'rgba(13, 164, 111, 0.5)',
          },
        },
      },
      label: 'Рублей',
      lineTension: 0,
    },
  ],
  labels: ['1', '5', '10', '15', '20', '25', '31'],
  plugins: {
    gradient,
  },
};
const Chart = (props) => (
  <div className="chart">
    <h3>{props.chartH3}</h3>
    <h4>{props.chartH4}</h4>
    <Line
      data={lineChartData}
      type="line"
      options={{
        legend: {
          display: true,
          position: 'top',
        },
        title: {
          display: false,
          fontSize: 20,
          text: 'COVID-19 Cases of Last 6 Months',
        },
      }}
    />
  </div>
);

export default Chart;
