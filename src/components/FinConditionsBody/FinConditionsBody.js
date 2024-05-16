import React from "react";
import styles from "./FinConditionsBody.module.scss";
import "./FinConditionsBody.scss";
import { Link } from "react-router-dom";
import Chart from "../Chart/Chart";
import AnalysisHeader from "../AnalysisHeader/AnalysisHeader";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import NumberTolt from "../NumberTolt/NumberTolt";
import Fso from "../AnalysisCharts/PieCharts/FSO";
import Fsd from "../AnalysisCharts/LineCharts/FSD";
import Fsf from "../AnalysisCharts/PieCharts/FSF";
import Lao from "../AnalysisCharts/SensorCharts/LAO";
import Rad from "../AnalysisCharts/LineCharts/RAD";
import Dva from "../AnalysisCharts/PieCharts/DVA";
import Fuo from "../AnalysisCharts/SensorCharts/FUO";
import Fud from "../AnalysisCharts/LineCharts/FUD";
import Fba from "../AnalysisCharts/BarCharts/FBA";

function FinResultsBody(props) {
  return (
    <div className={styles.MyResultsBody}>
      <h2 className={styles.result_head}>Финансовый анализ</h2>
      <AnalysisHeader activeLink="" />
      <div className={styles.breadcrumb}>
        <ul>
          <li>
            <Link to={"/AnalysisEfficiency"}>Финансовая эффективность</Link>
          </li>
          <li>Финансовое состояние</li>
        </ul>
      </div>
      <Tabs className="react-tabs firstTestsTabs studyingTabs CashFlowTabs AnalysisTabs">
        <div className="left_tabs myResultLeftTabs">
          <h4 className="mobileHeader4">Финансовое состояние</h4>
          <TabList className="react-tabs__tab-list firstTestsTabList CashFlowTabList">
            <h4>Финансовое состояние</h4>
            <Tab>
              <span>Комплексная Оценка</span>
            </Tab>
            <Tab>
              <span>Ликвидность Активов</span>
            </Tab>
            <Tab>
              <span>Финансовая Устойчивость</span>
            </Tab>
            <Tab>
              <span>Инвестиционные Активы</span>
            </Tab>
            <Tab>
              <span>Долговая Нагрузка</span>
            </Tab>
            <Tab>
              <span>Финансовая Прочность</span>
            </Tab>
          </TabList>
        </div>

        <TabPanel className="AnalysisTabPanel">
          <Tabs>
            <TabList>
              <Tab>Оценка</Tab>
              <Tab className=" react-tabs__tab analysisDynamicTab">
                Динамика
              </Tab>
              <Tab>Аналитика</Tab>
            </TabList>
            <TabPanel>
              <Fso />
            </TabPanel>
            <TabPanel>
              <Fsd />
            </TabPanel>
            <TabPanel>
              <Fsf />
            </TabPanel>
          </Tabs>
        </TabPanel>
        <TabPanel className="AnalysisTabPanel">
          <Tabs>
            <TabList>
              <Tab>Оценка</Tab>
              <Tab className=" react-tabs__tab analysisDynamicTab">
                Динамика
              </Tab>
              <Tab>Аналитика</Tab>
            </TabList>
            <TabPanel>
              <Lao />
            </TabPanel>
            <TabPanel>
              <Rad />
            </TabPanel>
            <TabPanel>
              <Dva />
            </TabPanel>
          </Tabs>
        </TabPanel>
        <TabPanel className="AnalysisTabPanel">
          <Tabs>
            <TabList>
              <Tab>Оценка</Tab>
              <Tab className=" react-tabs__tab analysisDynamicTab">
                Динамика
              </Tab>
              <Tab>Аналитика</Tab>
            </TabList>
            <TabPanel>
              <Fuo />
            </TabPanel>
            <TabPanel>
              <Fud />
            </TabPanel>
            <TabPanel>
              <Tabs>
                <TabList className="analysTabs">
                  <Tab className="myTab">
                    <div>
                      <NumberTolt tooltipTitle="Финансовый Баланс">
                        1
                      </NumberTolt>
                    </div>
                  </Tab>
                  <Tab className="myTab">
                    <div>
                      <NumberTolt tooltipTitle="Динамика Капитала">
                        2
                      </NumberTolt>
                    </div>
                  </Tab>
                </TabList>
                <TabPanel>
                  <Fba />
                </TabPanel>
                <TabPanel>
                  <Chart />
                </TabPanel>
              </Tabs>
            </TabPanel>
          </Tabs>
        </TabPanel>
        <TabPanel className="AnalysisTabPanel">
          <Tabs>
            <TabList>
              <Tab>Оценка</Tab>
              <Tab className=" react-tabs__tab analysisDynamicTab">
                Динамика
              </Tab>
              <Tab>Аналитика</Tab>
            </TabList>
            <TabPanel>
              <Chart />
            </TabPanel>
            <TabPanel>
              <Chart />
            </TabPanel>
            <TabPanel>
              <Tabs>
                <TabList className="analysTabs">
                  <Tab className="myTab">
                    <div>
                      <NumberTolt tooltipTitle="Доля Инвестиционных активов">
                        1
                      </NumberTolt>
                    </div>
                  </Tab>
                </TabList>
                <TabPanel>
                  <Chart />
                </TabPanel>
              </Tabs>
            </TabPanel>
          </Tabs>
        </TabPanel>
        <TabPanel className="AnalysisTabPanel">
          <Tabs>
            <TabList>
              <Tab>Оценка</Tab>
              <Tab className=" react-tabs__tab analysisDynamicTab">
                Динамика
              </Tab>
              <Tab>Аналитика</Tab>
            </TabList>
            <TabPanel>
              <Chart />
            </TabPanel>
            <TabPanel>
              <Chart />
            </TabPanel>
            <TabPanel>
              <Tabs>
                <TabList className="analysTabs">
                  <Tab className="myTab">
                    <div>
                      <NumberTolt tooltipTitle="Структура Платежей по кредитам">
                        1
                      </NumberTolt>
                    </div>
                  </Tab>
                  <Tab className="myTab">
                    <div>
                      <NumberTolt tooltipTitle="Стоимость Заёмного капитала">
                        2
                      </NumberTolt>
                    </div>
                  </Tab>
                </TabList>
                <TabPanel>
                  <Chart />
                </TabPanel>
                <TabPanel>
                  <Chart />
                </TabPanel>
              </Tabs>
            </TabPanel>
          </Tabs>
        </TabPanel>
        <TabPanel className="AnalysisTabPanel">
          <Tabs>
            <TabList>
              <Tab>Оценка</Tab>
              <Tab className=" react-tabs__tab analysisDynamicTab">
                Динамика
              </Tab>
              <Tab>Аналитика</Tab>
            </TabList>
            <TabPanel>
              <Chart />
            </TabPanel>
            <TabPanel>
              <Chart />
            </TabPanel>
            <TabPanel>
              <Tabs>
                <TabList className="analysTabs">
                  <Tab className="myTab">
                    <div>
                      <NumberTolt tooltipTitle="Покрытие Расходов и выплат по кредитам Доходами от Активов">
                        1
                      </NumberTolt>
                    </div>
                  </Tab>
                </TabList>
                <TabPanel>
                  <Chart />
                </TabPanel>
              </Tabs>
            </TabPanel>
          </Tabs>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default FinResultsBody;
