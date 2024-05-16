import React from "react";
import styles from "./FinAnalysisBody.module.scss";
import { Link } from "react-router-dom";
import Chart from "../Chart/Chart";
import AnalysisHeader from "../AnalysisHeader/AnalysisHeader";
import Sdp from "../AnalysisCharts/BarCharts/SDP";

function FinAnalysisBody(props) {
  return (
    <div className={styles.MyResultsBody}>
      <h2 className={styles.result_head}>Финансовый анализ</h2>
      <AnalysisHeader activeLink="true" />
      <div className={styles.cashFlowBody}>
        <div className={styles.cashFlowNav}>
          <div className={styles.cashFlowChartLink}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.5 6C6.358 6 3 9.358 3 13.5C3 17.642 6.358 21 10.5 21C14.642 21 18 17.642 18 13.5H10.5V6Z"
                stroke="#3156A6"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M21 10C21 6.134 17.866 3 14 3V10H21Z"
                stroke="#3156A6"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Свод денежных потоков
          </div>
          <Link to="/ActualAnalysis" className={styles.cashFlowLink}>
            План-факт анализ
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 16L15 12L11 8"
                stroke="#464E5F"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Link>
          <Link to="/NoMatterAnalysis" className={styles.cashFlowLink}>
            Контроль необязательных расходов
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 16L15 12L11 8"
                stroke="#464E5F"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Link>
          <Link to="/StructureAnalysis" className={styles.cashFlowLink}>
            Структурный анализ
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 16L15 12L11 8"
                stroke="#464E5F"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Link>
        </div>
        <div className={styles.borderRight}></div>
        <div className={styles.cashFlowChart}>
          <Sdp />
        </div>
      </div>
    </div>
  );
}

export default FinAnalysisBody;
