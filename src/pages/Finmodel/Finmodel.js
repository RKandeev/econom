import React from 'react';

import Header from '../../components/Header/Header';
import MobileNav from '../../components/MobileNav/MobileNav';
import Modelingleftnav from '../../components/Modelingleftnav/Modelingleftnav';
import MySolutions from '../../components/MySolutions/MySolutions';
import Solutions from '../../components/Solutions/Solutions';

import styles from './Finmodel.module.scss';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import factimg from '../../img/analysisicons/fact.png';
import Sdv from '../../components/AnalysisCharts/BarCharts/SDV';
import Dkat from '../../components/AnalysisCharts/BarCharts/DKAT';
import Prv2 from '../../components/AnalysisCharts/BarCharts/PRV2';
import Pnr from '../../components/AnalysisCharts/BarCharts/PNR';
import Pkr from '../../components/AnalysisCharts/BarCharts/PKR';
import Psr from '../../components/AnalysisCharts/BarCharts/PSR';

function Finmodel(props) {
  return (
    <>
      <Header />
      <MobileNav />
      <div className={styles.sitebody}>
        <Modelingleftnav />
        <div className={styles.modelingBody}>
          <h3 className={styles.modelingHeader}>Финансовое моделирование</h3>
          <div className={styles.modelingWrapper}>
            <div className={styles.modelingBlock}>
              <Solutions />
            </div>
            <div className={styles.mySolutionComponent}>
              <div className={styles.mySolutionComponentCalcList}></div>
              <Tabs className='react-tabs firstTestsTabs studyingTabs CashFlowTabs '>
                <div className='left_tabs myResultLeftTabs finModelHistory'>
                  <h3>Мои расчеты</h3>
                  <TabList className='react-tabs__tab-list firstTestsTabList CashFlowTabList finModelHistoryList'>
                    <Tab>
                      <span>
                        Досрочное погашение кредитов: целесообразность
                      </span>
                    </Tab>
                    <Tab>
                      <span>Досрочное погашение кредитов: приоритет</span>
                    </Tab>
                    <Tab>
                      <span>Рефинансирование кредитов: целесообразность</span>
                    </Tab>
                    <Tab>
                      <span>Жилищный вопрос: покупка или аренда</span>
                    </Tab>
                    <Tab>
                      <span>
                        Покупка автомобиля: оценка финансовых последствий
                      </span>
                    </Tab>
                    <Tab>
                      <span>Квартира для сдачи в аренду: оценка выгод</span>
                    </Tab>
                  </TabList>
                </div>
                <TabPanel>
                  <MySolutions historyUrl='/fin-model/rationality-history' deleteHistoryUrl='/fin-model/rationality-delete'/>
                </TabPanel>
                <TabPanel>
                  <MySolutions />
                </TabPanel>
                <TabPanel>
                  <MySolutions />
                </TabPanel>
                <TabPanel>
                  <MySolutions />
                </TabPanel>
                <TabPanel>
                  <MySolutions />
                </TabPanel>
                <TabPanel>
                  <MySolutions />
                </TabPanel>
                <TabPanel>
                  <MySolutions />
                </TabPanel>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Finmodel;
