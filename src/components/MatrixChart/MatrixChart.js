import React from "react";
import "./MatrixChart.scss";
import { Bubble } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Filler,
  LineController,
  BarController,
} from "chart.js";
ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController
);

function MatrixChart(props) {
  let testResult = 3;
  let resultClass = "resultPoint ";
  resultClass +=
    testResult === 0
      ? "sadRes"
      : testResult === 1
      ? "boredRes"
      : testResult === 2
      ? "goodRes"
      : testResult === 3
      ? "bestRes"
      : "";
  return (
    <div className="MatrixChart">
      <div className="myMatrixBlocks">
        <div className="matrix_block1">
          {" "}
          <svg
            fill="#fff"
            viewBox="0 0 64 64"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g data-name="Layer 32" id="Layer_32">
              <path d="M32,61A29,29,0,1,1,61,32,29,29,0,0,1,32,61ZM32,5A27,27,0,1,0,59,32,27,27,0,0,0,32,5ZM42,28a6,6,0,1,1,6-6A6,6,0,0,1,42,28Zm0-10a4,4,0,1,0,4,4A4,4,0,0,0,42,18ZM22,28a6,6,0,1,1,6-6A6,6,0,0,1,22,28Zm0-10a4,4,0,1,0,4,4A4,4,0,0,0,22,18ZM46.75,34a1,1,0,0,0-2,0A9.82,9.82,0,0,1,35,43.8h-2.7a1,1,0,0,0,0,2H35A11.81,11.81,0,0,0,46.75,34Z" />
            </g>
          </svg>
        </div>
        <div className="matrix_block2">
          <svg
            fill="#fff"
            width="100%"
            height="100%"
            viewBox="0 0 64 64"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g data-name="Layer 3" id="Layer_3">
              <path d="M42,28a6,6,0,1,1,6-6A6,6,0,0,1,42,28Zm0-10a4,4,0,1,0,4,4A4,4,0,0,0,42,18ZM22,28a6,6,0,1,1,6-6A6,6,0,0,1,22,28Zm0-10a4,4,0,1,0,4,4A4,4,0,0,0,22,18ZM48.14,36.22l.53-.47a1,1,0,0,0-1.34-1.5l-.53.49C44.21,37.08,39.88,41,32,41s-12.21-3.92-14.8-6.26l-.53-.49a1,1,0,1,0-1.34,1.5l.53.47C18.66,38.75,23.35,43,32,43S45.34,38.75,48.14,36.22ZM32,61A29,29,0,1,1,61,32,29,29,0,0,1,32,61ZM32,5A27,27,0,1,0,59,32,27,27,0,0,0,32,5Z" />
            </g>
          </svg>
        </div>
        <div className="matrix_block3">
          <svg
            fill="#fff"
            viewBox="0 0 64 64"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g data-name="Layer 12" id="Layer_12">
              <path d="M32,61A29,29,0,1,1,61,32,29,29,0,0,1,32,61ZM32,5A27,27,0,1,0,59,32,27,27,0,0,0,32,5ZM42,28a6,6,0,1,1,6-6A6,6,0,0,1,42,28Zm0-10a4,4,0,1,0,4,4A4,4,0,0,0,42,18ZM22,28a6,6,0,1,1,6-6A6,6,0,0,1,22,28Zm0-10a4,4,0,1,0,4,4A4,4,0,0,0,22,18ZM48.75,42.67a1,1,0,0,0-.08-1.42l-.53-.47C45.34,38.25,40.65,34,32,34s-13.34,4.25-16.14,6.78l-.53.47a1,1,0,1,0,1.34,1.5l.53-.49C19.79,39.92,24.12,36,32,36s12.21,3.92,14.8,6.26l.53.49a1,1,0,0,0,1.42-.08Z" />
            </g>
          </svg>
        </div>
        <div className="matrix_block4">
          <svg
            fill="#fff"
            viewBox="0 0 64 64"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g data-name="Layer 24" id="Layer_24">
              <path d="M32,61A29,29,0,1,1,61,32,29,29,0,0,1,32,61ZM32,5A27,27,0,1,0,59,32,27,27,0,0,0,32,5ZM42,28a6,6,0,1,1,6-6A6,6,0,0,1,42,28Zm0-10a4,4,0,1,0,4,4A4,4,0,0,0,42,18ZM22,28a6,6,0,1,1,6-6A6,6,0,0,1,22,28Zm0-10a4,4,0,1,0,4,4A4,4,0,0,0,22,18ZM43,37a1,1,0,0,0-1-1H22a1,1,0,0,0,0,2H42A1,1,0,0,0,43,37Z" />
            </g>
          </svg>
        </div>
      </div>
      <div className={resultClass}>
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <g>
            <title>Layer 1</title>
            <path
              id="svg_1"
              d="m19.5,39c-10.77348,0 -19.5,-8.72652 -19.5,-19.5c0,-10.77348 8.72652,-19.5 19.5,-19.5c10.77348,0 19.5,8.72652 19.5,19.5c0,10.77348 -8.72652,19.5 -19.5,19.5z"
              opacity="undefined"
              stroke="#000"
              fill="#3156a6"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default MatrixChart;
