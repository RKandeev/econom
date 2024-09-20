import React from 'react';

import { Link } from 'react-router-dom';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

import Chsd from '../AnalysisCharts/BarCharts/CHSD';
import Fdd from '../AnalysisCharts/BarCharts/FDD';
import Prr from '../AnalysisCharts/BarCharts/PRR';
import Sds from '../AnalysisCharts/BarCharts/SDS';
import Dkd from '../AnalysisCharts/LineCharts/DKD';
import Frd from '../AnalysisCharts/LineCharts/FRD';
import Ind from '../AnalysisCharts/LineCharts/IND';
import Mdd from '../AnalysisCharts/LineCharts/MDD';
import Nad from '../AnalysisCharts/LineCharts/NAD';
import Dps from '../AnalysisCharts/PieCharts/DPS';
import Frf from '../AnalysisCharts/PieCharts/FRF';
import Fro from '../AnalysisCharts/PieCharts/FRO';
import Rna from '../AnalysisCharts/PieCharts/RNA';
import Rnp from '../AnalysisCharts/PieCharts/RNP';
import Sfr from '../AnalysisCharts/PieCharts/SFR';
import Ssd from '../AnalysisCharts/PieCharts/SSD';
import Szhn from '../AnalysisCharts/PieCharts/SZHN';
import Dko from '../AnalysisCharts/SensorCharts/DKO';
import Dkr from '../AnalysisCharts/SensorCharts/DKR';
import Efr from '../AnalysisCharts/SensorCharts/EFR';
import Fdo from '../AnalysisCharts/SensorCharts/FDO';
import Ino from '../AnalysisCharts/SensorCharts/INO';
import Mdo from '../AnalysisCharts/SensorCharts/MDO';
import Nao from '../AnalysisCharts/SensorCharts/NAO';
import AnalysisHeader from '../AnalysisHeader/AnalysisHeader';
import NumberTolt from '../NumberTolt/NumberTolt';

import analysis from '../../img/analysisicons/analysis.png';
import dynamic from '../../img/analysisicons/dynamic.png';
import finresult from '../../img/analysisicons/finresult.png';
import point from '../../img/analysisicons/point.png';

import './FinResultsBody.scss';
import styles from './FinResultsBody.module.scss';

function FinResultsBody(props) {
  return (
    <div className={styles.MyResultsBody}>
      <h2 className={styles.result_head}>
        Финансовый анализ
        <div className={styles.breadcrumb}>
          <ul>
            <li>
              <Link to="/AnalysisEfficiency">Финансовая эффективность</Link>
            </li>
            <li>Финансовые результаты</li>
          </ul>
        </div>
      </h2>
      <AnalysisHeader activeLink="" />
      <Tabs className="react-tabs firstTestsTabs studyingTabs CashFlowTabs AnalysisTabs">
        <div className="left_tabs myResultLeftTabs">
          <h4 className="mobileHeader4">Финансовые результаты</h4>
          <TabList className="react-tabs__tab-list firstTestsTabList CashFlowTabList">
            <h4>
              Финансовые результаты
              <img alt="" src={finresult} />
            </h4>

            <Tab>
              <span>Комплексная Оценка</span>
            </Tab>
            <Tab>
              <span>Финансовая Дисциплина</span>
            </Tab>
            <Tab>
              <span>Моя Доходность</span>
            </Tab>
            <Tab>
              <span>Доходность Собственного Капитала</span>
            </Tab>
            <Tab>
              <span>Накопление Активов</span>
            </Tab>
            <Tab>
              <span>Инвестирование Накоплений</span>
            </Tab>
          </TabList>
        </div>

        <TabPanel className="AnalysisTabPanel">
          <Tabs>
            <TabList>
              <Tab>
                <div className="img_tab">
                  <img alt="" src={point} />
                  <div className="tabTitle">Оценка</div>
                </div>
              </Tab>
              <Tab className=" react-tabs__tab analysisDynamicTab">
                <div className="img_tab">
                  <img alt="" src={dynamic} />
                  <div className="tabTitle">Динамика</div>
                </div>
              </Tab>
              <Tab>
                <div className="img_tab">
                  <img alt="" src={analysis} />
                  <div className="tabTitle">Аналитика</div>
                </div>
              </Tab>
            </TabList>
            <TabPanel>
              <Fro />
            </TabPanel>
            <TabPanel>
              <Frd />
            </TabPanel>
            <TabPanel>
              <Frf />
            </TabPanel>
          </Tabs>
        </TabPanel>
        <TabPanel className="AnalysisTabPanel">
          <Tabs>
            <TabList>
              <Tab>
                <div className="img_tab">
                  <img alt="" src={point} />
                  <div className="tabTitle">Оценка</div>
                </div>
              </Tab>
              <Tab className=" react-tabs__tab analysisDynamicTab">
                <div className="img_tab">
                  <img alt="" src={dynamic} />
                  <div className="tabTitle">Динамика</div>
                </div>
              </Tab>
            </TabList>
            <TabPanel>
              <Fdo />
            </TabPanel>
            <TabPanel>
              <Fdd />
            </TabPanel>
          </Tabs>
        </TabPanel>
        <TabPanel className="AnalysisTabPanel">
          <Tabs>
            <TabList>
              <Tab>
                <div className="img_tab">
                  <img alt="" src={point} />
                  <div className="tabTitle">Оценка</div>
                </div>
              </Tab>
              <Tab className=" react-tabs__tab analysisDynamicTab">
                <div className="img_tab">
                  <img alt="" src={dynamic} />
                  <div className="tabTitle">Динамика</div>
                </div>
              </Tab>
              <Tab>
                <div className="img_tab">
                  <img alt="" src={analysis} />
                  <div className="tabTitle">Аналитика</div>
                </div>
              </Tab>
            </TabList>
            <TabPanel>
              <Mdo />
            </TabPanel>
            <TabPanel>
              <Mdd />
            </TabPanel>
            <TabPanel>
              <Tabs>
                <TabList className="analysTabs">
                  <Tab className="myTab">
                    <div>
                      <NumberTolt tooltipTitle="Чистый собственный доход">
                        1
                      </NumberTolt>
                    </div>
                  </Tab>

                  <Tab className="myTab">
                    <div>
                      <NumberTolt tooltipTitle="Покрытие Расходов Регулярными доходами">
                        2
                      </NumberTolt>
                    </div>
                  </Tab>
                  <Tab className="myTab">
                    <div>
                      <NumberTolt tooltipTitle="Доля Процентов по кредитам в Собственных доходах">
                        3
                      </NumberTolt>
                    </div>
                  </Tab>
                  <Tab className="myTab">
                    <div>
                      <NumberTolt tooltipTitle="Структура Собственных доходов: по категориям">
                        4
                      </NumberTolt>
                    </div>
                  </Tab>
                  <Tab className="myTab">
                    <div>
                      <NumberTolt tooltipTitle="Доля кэшбеков в расходах">
                        5
                      </NumberTolt>
                    </div>
                  </Tab>
                </TabList>
                <TabPanel>
                  <Chsd />
                </TabPanel>

                <TabPanel>
                  <Prr />
                </TabPanel>
                <TabPanel>
                  <Dps />
                </TabPanel>
                <TabPanel>
                  <Ssd />
                </TabPanel>
                <TabPanel>
                  <Dkr />
                </TabPanel>
              </Tabs>
            </TabPanel>
          </Tabs>
        </TabPanel>
        <TabPanel className="AnalysisTabPanel">
          <Tabs>
            <TabList>
              <Tab>
                <div className="img_tab">
                  <img alt="" src={point} />
                  <div className="tabTitle">Оценка</div>
                </div>
              </Tab>
              <Tab className=" react-tabs__tab analysisDynamicTab">
                <div className="img_tab">
                  <img alt="" src={dynamic} />
                  <div className="tabTitle">Динамика</div>
                </div>
              </Tab>
              <Tab>
                <div className="img_tab">
                  <img alt="" src={analysis} />
                  <div className="tabTitle">Аналитика</div>
                </div>
              </Tab>
            </TabList>
            <TabPanel>
              <Dko />
            </TabPanel>
            <TabPanel>
              <Dkd />
            </TabPanel>
            <TabPanel>
              <Tabs>
                <TabList className="analysTabs">
                  <Tab className="myTab">
                    <div>
                      <NumberTolt tooltipTitle="Сила Финансового рычага">
                        1
                      </NumberTolt>
                    </div>
                  </Tab>
                  <Tab className="myTab">
                    <div>
                      <NumberTolt tooltipTitle="Эффект Финансового рычага">
                        2
                      </NumberTolt>
                    </div>
                  </Tab>
                  <Tab className="myTab">
                    <div>
                      <NumberTolt tooltipTitle="Сравнение доходности собственного капитала и стоимости долгов">
                        3
                      </NumberTolt>
                    </div>
                  </Tab>
                </TabList>
                <TabPanel>
                  <Sfr />
                </TabPanel>
                <TabPanel>
                  <Efr />
                </TabPanel>
                <TabPanel>
                  <Sds />
                </TabPanel>
              </Tabs>
            </TabPanel>
          </Tabs>
        </TabPanel>
        <TabPanel className="AnalysisTabPanel">
          <Tabs>
            <TabList>
              <Tab>
                <div className="img_tab">
                  <img alt="" src={point} />
                  <div className="tabTitle">Оценка</div>
                </div>
              </Tab>
              <Tab className=" react-tabs__tab analysisDynamicTab">
                <div className="img_tab">
                  <img alt="" src={dynamic} />
                  <div className="tabTitle">Динамика</div>
                </div>
              </Tab>
              <Tab>
                <div className="img_tab">
                  <img alt="" src={analysis} />
                  <div className="tabTitle">Аналитика</div>
                </div>
              </Tab>
            </TabList>
            <TabPanel>
              <Nao />
            </TabPanel>
            <TabPanel>
              <Nad />
            </TabPanel>
            <TabPanel>
              <Tabs>
                <TabList className="analysTabs">
                  <Tab className="myTab">
                    <div>
                      <NumberTolt tooltipTitle="Соотношение Расходов, Накоплений и Погашения долгов">
                        1
                      </NumberTolt>
                    </div>
                  </Tab>
                  <Tab className="myTab">
                    <div>
                      <NumberTolt tooltipTitle="Соотношение Желаний и Накоплений">
                        2
                      </NumberTolt>
                    </div>
                  </Tab>
                </TabList>
                <TabPanel>
                  <Rnp />
                </TabPanel>
                <TabPanel>
                  <Szhn />
                </TabPanel>
              </Tabs>
            </TabPanel>
          </Tabs>
        </TabPanel>
        <TabPanel className="AnalysisTabPanel">
          <Tabs>
            <TabList>
              <Tab>
                <div className="img_tab">
                  <img alt="" src={point} />
                  <div className="tabTitle">Оценка</div>
                </div>
              </Tab>
              <Tab className=" react-tabs__tab analysisDynamicTab">
                <div className="img_tab">
                  <img alt="" src={dynamic} />
                  <div className="tabTitle">Динамика</div>
                </div>
              </Tab>
              <Tab>
                <div className="img_tab">
                  <img alt="" src={analysis} />
                  <div className="tabTitle">Аналитика</div>
                </div>
              </Tab>
            </TabList>
            <TabPanel>
              <Ino />
            </TabPanel>
            <TabPanel>
              <Ind />
            </TabPanel>
            <TabPanel>
              <Rna />
            </TabPanel>
          </Tabs>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default FinResultsBody;
