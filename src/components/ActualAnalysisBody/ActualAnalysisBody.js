import React from 'react';

import { Link } from 'react-router-dom';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

import Dkat from '../AnalysisCharts/BarCharts/DKAT';
import Pkr from '../AnalysisCharts/BarCharts/PKR';
import Pnr from '../AnalysisCharts/BarCharts/PNR';
import Prv2 from '../AnalysisCharts/BarCharts/PRV2';
import Psr from '../AnalysisCharts/BarCharts/PSR';
import Sdv from '../AnalysisCharts/BarCharts/SDV';
import AnalysisHeader from '../AnalysisHeader/AnalysisHeader';

import factimg from '../../img/analysisicons/fact.png';

import './ActualAnalysisBody.scss';
import styles from './ActualAnalysisBody.module.scss';

function ActualAnalysisBody(props) {
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
              <li>План-Факт Анализ</li>
            </ul>
          </div>
        </h2>
        <AnalysisHeader activeLink="true" />

        <Tabs className="react-tabs firstTestsTabs studyingTabs CashFlowTabs">
          <div className="left_tabs myResultLeftTabs">
            <h4 className="mobileHeader4">План-Факт Анализ</h4>
            <TabList className="react-tabs__tab-list firstTestsTabList CashFlowTabList">
              <h4>
                План-Факт Анализ
                <img alt="" src={factimg} />
              </h4>
              <Tab>
                <span>Доходы (Всего)</span>
              </Tab>
              <Tab>
                <span>Доходы по Категориям</span>
              </Tab>
              <Tab>
                <span>Расходы (Всего)</span>
              </Tab>
              <Tab>
                <span>Расходы по Направлениям</span>
              </Tab>
              <Tab>
                <span>Расходы по Категориям</span>
              </Tab>
              <Tab>
                <span>Расходы по Статьям</span>
              </Tab>
            </TabList>
          </div>
          <TabPanel>
            <Sdv />
          </TabPanel>
          <TabPanel>
            <Dkat />
          </TabPanel>
          <TabPanel>
            <Prv2 />
          </TabPanel>
          <TabPanel>
            <Pnr />
          </TabPanel>
          <TabPanel>
            <Pkr />
          </TabPanel>
          <TabPanel>
            <Psr />
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
}

export default ActualAnalysisBody;
