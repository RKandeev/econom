import React from "react";
import styles from "./FinAnalysisBody.module.scss";
import { Link } from "react-router-dom";
import AnalysisHeader from "../AnalysisHeader/AnalysisHeader";
import finEfficient from "../../img/studyIcons/2.svg";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Me from "../AnalysisCharts/MatrixCharts/ME";
import Med from "../AnalysisCharts/MatrixCharts/MED";
import finresult from "../../img/analysisicons/finresult.png";
import fincondition from "../../img/analysisicons/fincondition.png";
import point from "../../img/analysisicons/point.png";
import analysis from "../../img/analysisicons/analysis.png";
import dynamic from "../../img/analysisicons/dynamic.png";
import "./FinAnalysisBody.scss";
function FinAnalysisEfficiencyBody(props) {
  return (
    <div className={styles.MyResultsBody}>
      <h2 className={styles.result_head}>
        Финансовый анализ
        <div className={styles.breadcrumb}>
          <ul>
            <li className={styles.onlyOneBreadcrumb}>
              Финансовая эффективность
            </li>
          </ul>
        </div>
      </h2>
      <AnalysisHeader
        activeLink=""
        firstlink="/FinAnalys"
        secondlink="/AnalysisEfficiency"
        firsttitle="Денежные потоки"
        secondtitle="Финансовая эффективность"
      />
      <div className={styles.cashFlowBody}>
        <div className={styles.cashFlowNav}>
          <div className={styles.cashFlowChartLink}>
            Финансовая эффективность (комплексная оценка)
            <img src={finEfficient} alt="" />
          </div>
          <Link to="/FinResults" className={styles.cashFlowLink}>
            Финансовые результаты
            <img src={finresult} alt="" />
          </Link>
          <Link to="/FinConditions" className={styles.cashFlowLink}>
            Финансовое состояние
            <img src={fincondition} alt="" />
          </Link>
        </div>
        <div className={styles.borderRight}></div>
        <div className={styles.cashFlowChart}>
          <Tabs>
            <TabList>
              <Tab>
                <div className="img_tab">
                  <img src={point} alt="" />
                  <div className="tabTitle">Оценка</div>
                </div>
              </Tab>
              <Tab>
                <div className="img_tab">
                  <img src={dynamic} alt="" />
                  <div className="tabTitle">Динамика</div>
                </div>
              </Tab>
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
