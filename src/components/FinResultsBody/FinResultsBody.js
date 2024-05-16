import React from "react";
import styles from "./FinResultsBody.module.scss";
import "./FinResultsBody.scss";
import { Link } from "react-router-dom";
import Chart from "../Chart/Chart";
import AnalysisHeader from "../AnalysisHeader/AnalysisHeader";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import SensorAim from "../SensorModeling/SensorAim";
import mycourse from "../../img/icon__course.svg";
import Tolt from "../Tolt/Tolt";
import NumberTolt from "../NumberTolt/NumberTolt";
import Fro from "../AnalysisCharts/PieCharts/FRO";
import Frd from "../AnalysisCharts/LineCharts/FRD";
import Frf from "../AnalysisCharts/PieCharts/FRF";
import Fdo from "../AnalysisCharts/SensorCharts/FDO";
import Fdd from "../AnalysisCharts/BarCharts/FDD";
import Mdo from "../AnalysisCharts/SensorCharts/MDO";
import Mdd from "../AnalysisCharts/LineCharts/MDD";
import Chsd from "../AnalysisCharts/BarCharts/CHSD";
import Sdv from "../AnalysisCharts/BarCharts/SDV";
import Prr from "../AnalysisCharts/BarCharts/PRR";
import Dps from "../AnalysisCharts/PieCharts/DPS";
import Ssd from "../AnalysisCharts/PieCharts/SSD";
import Dko from "../AnalysisCharts/SensorCharts/DKO";
import Dkd from "../AnalysisCharts/LineCharts/DKD";
import Sfr from "../AnalysisCharts/PieCharts/SFR";
import Efr from "../AnalysisCharts/SensorCharts/EFR";
import Pda from "../AnalysisCharts/BarCharts/PDA";
import Sds from "../AnalysisCharts/BarCharts/SDS";
import Nao from "../AnalysisCharts/SensorCharts/NAO";
import Nad from "../AnalysisCharts/LineCharts/NAD";
import Rnp from "../AnalysisCharts/PieCharts/RNP";
import Szhn from "../AnalysisCharts/PieCharts/SZHN";
import Ino from "../AnalysisCharts/SensorCharts/INO";
import Ind from "../AnalysisCharts/LineCharts/IND";
import Rna from "../AnalysisCharts/PieCharts/RNA";

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
          <li>Финансовые результаты</li>
        </ul>
      </div>
      <Tabs className="react-tabs firstTestsTabs studyingTabs CashFlowTabs AnalysisTabs">
        <div className="left_tabs myResultLeftTabs">
          <h4 className="mobileHeader4">Финансовые результаты</h4>
          <TabList className="react-tabs__tab-list firstTestsTabList CashFlowTabList">
            <h4>Финансовые результаты</h4>
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
              <Tab>Оценка</Tab>
              <Tab className=" react-tabs__tab analysisDynamicTab">
                Динамика
              </Tab>
              <Tab>Аналитика</Tab>
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
              <Tab>Оценка</Tab>
              <Tab className=" react-tabs__tab analysisDynamicTab">
                Динамика
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
              <Tab>Оценка</Tab>
              <Tab className=" react-tabs__tab analysisDynamicTab">
                Динамика
              </Tab>
              <Tab>Аналитика</Tab>
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
                      <NumberTolt tooltipTitle="Собственные доходы (выполнение плана)">
                        2
                      </NumberTolt>
                    </div>
                  </Tab>
                  <Tab className="myTab">
                    <div>
                      <NumberTolt tooltipTitle="Покрытие Расходов Регулярными доходами">
                        3
                      </NumberTolt>
                    </div>
                  </Tab>
                  <Tab className="myTab">
                    <div>
                      <NumberTolt tooltipTitle="Доля Процентов по кредитам в Собственных доходах">
                        4
                      </NumberTolt>
                    </div>
                  </Tab>
                  <Tab className="myTab">
                    <div>
                      <NumberTolt tooltipTitle="Структура Собственных доходов: по категориям">
                        5
                      </NumberTolt>
                    </div>
                  </Tab>
                </TabList>
                <TabPanel>
                  <Chsd />
                </TabPanel>
                <TabPanel>
                  <Sdv />
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
                      <NumberTolt tooltipTitle="Покрытие Процентов по кредитам Доходами от Активов">
                        3
                      </NumberTolt>
                    </div>
                  </Tab>
                  <Tab className="myTab">
                    <div>
                      <NumberTolt tooltipTitle="Сравнение Доходности Собственного Капитала и Стоимости Заёмного Капитала">
                        4
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
                  <Pda />
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
              <Tab>Оценка</Tab>
              <Tab className=" react-tabs__tab analysisDynamicTab">
                Динамика
              </Tab>
              <Tab>Аналитика</Tab>
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
              <Tab>Оценка</Tab>
              <Tab className=" react-tabs__tab analysisDynamicTab">
                Динамика
              </Tab>
              <Tab>Аналитика</Tab>
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
