import React from "react";
import styles from "./FinAnalysisBody.module.scss";
import { Link } from "react-router-dom";
import Chart from "../Chart/Chart";
import AnalysisHeader from "../AnalysisHeader/AnalysisHeader";
import finEfficient from "../../img/studyIcons/2.svg";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import TestResultTabs from "../TestResultTabs/TestResultTabs";
import Testing from "../Testing/Testing";
import Me from "../AnalysisCharts/MatrixCharts/ME";
import Med from "../AnalysisCharts/MatrixCharts/MED";

function FinAnalysisEfficiencyBody(props) {
  return (
    <div className={styles.MyResultsBody}>
      <h2 className={styles.result_head}>Финансовый анализ</h2>
      <AnalysisHeader activeLink="" />
      <div className={styles.cashFlowBody}>
        <div className={styles.cashFlowNav}>
          <div className={styles.cashFlowChartLink}>
            <img src={finEfficient} alt="" />
            Финансовая эффективность (комплексная оценка)
          </div>
          <Link to="/FinResults" className={styles.cashFlowLink}>
            Финансовые результаты
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
          <Link to="/FinConditions" className={styles.cashFlowLink}>
            Финансовое состояние
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
          <Tabs>
            <TabList>
              <Tab>Оценка</Tab>
              <Tab>Динамика</Tab>
            </TabList>
            <TabPanel className="AnalysisTabPanel">
              <Me />
            </TabPanel>
            <TabPanel className="AnalysisTabPanel">
              <Med />
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default FinAnalysisEfficiencyBody;
