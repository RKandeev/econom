import React from 'react';

import { Link } from 'react-router-dom';

import Sdp from '../AnalysisCharts/BarCharts/SDP';
import AnalysisHeader from '../AnalysisHeader/AnalysisHeader';

import factimg from '../../img/analysisicons/fact.png';
import hrcontrol from '../../img/analysisicons/HRcontrol.png';
import dollar from '../../img/studyIcons/3.svg';

import styles from './FinAnalysisBody.module.scss';

function FinAnalysisBody(props) {
  return (
    <div className={styles.MyResultsBody}>
      <h2 className={styles.result_head}>
        Финансовый анализ
        <div className={styles.breadcrumb}>
          <ul>
            <li className={styles.onlyOneBreadcrumb}>Денежные потоки</li>
          </ul>
        </div>
      </h2>

      <AnalysisHeader
        activeLink="true"
        firstlink="/FinAnalys"
        firsttitle="Денежные потоки"
        secondlink="/AnalysisEfficiency"
        secondtitle="Финансовая эффективность"
      />
      <div className={styles.cashFlowBody}>
        <div className={styles.cashFlowNav}>
          <div className={styles.cashFlowChartLink}>
            Свод денежных потоков
            <img alt="" src={dollar} />
          </div>
          <Link className={styles.cashFlowLink} to="/ActualAnalysis">
            План-факт анализ
            <img alt="" src={factimg} />
          </Link>
          <Link className={styles.cashFlowLink} to="/NoMatterAnalysis">
            Контроль необязательных расходов
            <img alt="" src={hrcontrol} />
          </Link>
          <Link className={styles.cashFlowLink} to="/StructureAnalysis">
            Структурный анализ
            <svg
              fill="none"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M10.5 6C6.358 6 3 9.358 3 13.5C3 17.642 6.358 21 10.5 21C14.642 21 18 17.642 18 13.5H10.5V6Z"
                fillRule="evenodd"
                stroke="#464e5f"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
              <path
                clipRule="evenodd"
                d="M21 10C21 6.134 17.866 3 14 3V10H21Z"
                fillRule="evenodd"
                stroke="#464e5f"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
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
