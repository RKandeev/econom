import React from 'react';

import { Link } from 'react-router-dom';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

import Me from '../AnalysisCharts/MatrixCharts/ME';
import Med from '../AnalysisCharts/MatrixCharts/MED';
import AnalysisHeader from '../AnalysisHeader/AnalysisHeader';

import dynamic from '../../img/analysisicons/dynamic.png';
import fincondition from '../../img/analysisicons/fincondition.png';
import finresult from '../../img/analysisicons/finresult.png';
import point from '../../img/analysisicons/point.png';
import finEfficient from '../../img/studyIcons/2.svg';

import './FinAnalysisBody.scss';
import styles from './FinAnalysisBody.module.scss';
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
        firsttitle="Денежные потоки"
        secondlink="/AnalysisEfficiency"
        secondtitle="Финансовая эффективность"
      />
      <div className={styles.cashFlowBody}>
        <div className={styles.cashFlowNav}>
          <div className={styles.cashFlowChartLink}>
            Финансовая эффективность (комплексная оценка)
            <img alt="" src={finEfficient} />
          </div>
          <Link className={styles.cashFlowLink} to="/FinResults">
            Финансовые результаты
            <img alt="" src={finresult} />
          </Link>
          <Link className={styles.cashFlowLink} to="/FinConditions">
            Финансовое состояние
            <img alt="" src={fincondition} />
          </Link>
        </div>
        <div className={styles.borderRight}></div>
        <div className={styles.cashFlowChart}>
          <Tabs>
            <TabList>
              <Tab>
                <div className="img_tab">
                  <img alt="" src={point} />
                  <div className="tabTitle">Оценка</div>
                </div>
              </Tab>
              <Tab>
                <div className="img_tab">
                  <img alt="" src={dynamic} />
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
