import React from 'react';

import { Link } from 'react-router-dom';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

import Knr1 from '../AnalysisCharts/BarCharts/KNR1';
import Knr2 from '../AnalysisCharts/SensorCharts/KNR2';
import AnalysisHeader from '../AnalysisHeader/AnalysisHeader';

import hrcontrol from '../../img/analysisicons/HRcontrol.png';

import './NoMatterAnalysisBody.scss';
import styles from './NoMatterAnalysisBody.module.scss';

function NoMatterAnalysisBody(props) {
  return (
    <>
      <div className={styles.MyResultsBody}>
        <h2 className={styles.result_head}>
          Финансовый анализ
          <div className={styles.breadcrumb}>
            <ul>
              <li>
                <Link to="/FinAnalys">Денежные потоки</Link>
              </li>
              <li>Контроль необязательных расходов</li>
            </ul>
          </div>
        </h2>
        <AnalysisHeader activeLink="true" />

        <Tabs className="react-tabs firstTestsTabs studyingTabs CashFlowTabs">
          <div className="left_tabs myResultLeftTabs">
            <h4 className="mobileHeader4">Контроль необязательных расходов</h4>
            <TabList className="react-tabs__tab-list firstTestsTabList CashFlowTabList">
              <h4>
                Контроль необязательных расходов
                <img alt="" src={hrcontrol} />
              </h4>
              <Tab>
                <span>Абсолютная величина</span>
              </Tab>
              <Tab>
                <span>Доля в доходах</span>
              </Tab>
            </TabList>
          </div>

          <TabPanel>
            <Knr1 />
          </TabPanel>
          <TabPanel>
            <Knr2 />
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
}

export default NoMatterAnalysisBody;
