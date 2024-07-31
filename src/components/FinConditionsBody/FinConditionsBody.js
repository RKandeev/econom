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
import LAD from "../AnalysisCharts/LineCharts/LAD";
import Dva from "../AnalysisCharts/PieCharts/DVA";
import Fuo from "../AnalysisCharts/SensorCharts/FUO";
import Fud from "../AnalysisCharts/LineCharts/FUD";
import Fba from "../AnalysisCharts/BarCharts/FBA";
import Dk from "../AnalysisCharts/LineCharts/DK";
import Iao from "../AnalysisCharts/SensorCharts/IAO";
import Iad from "../AnalysisCharts/LineCharts/IAD";
import Dia from "../AnalysisCharts/PieCharts/DIA";
import Dno from "../AnalysisCharts/SensorCharts/DNO";
import Dnd from "../AnalysisCharts/LineCharts/DND";
import Spk from "../AnalysisCharts/PieCharts/SPK";
import Szk from "../AnalysisCharts/PieCharts/SZK";
import Fpo from "../AnalysisCharts/SensorCharts/FPO";
import Fpd from "../AnalysisCharts/LineCharts/FPD";
import Prd from "../AnalysisCharts/PieCharts/PRD";
import fincondition from "../../img/analysisicons/fincondition.png";
import point from "../../img/analysisicons/point.png";
import dynamic from "../../img/analysisicons/dynamic.png";
import analysis from "../../img/analysisicons/analysis.png";

function FinResultsBody(props) {
  return (
    <div className={styles.MyResultsBody}>
      <h2 className={styles.result_head}>
        Финансовый анализ
        <div className={styles.breadcrumb}>
          <ul>
            <li>
              <Link to={"/AnalysisEfficiency"}>Финансовая эффективность</Link>
            </li>
            <li>Финансовое состояние</li>
          </ul>
        </div>
      </h2>
      <AnalysisHeader activeLink="" />

      <Tabs className="react-tabs firstTestsTabs studyingTabs CashFlowTabs AnalysisTabs">
        <div className="left_tabs myResultLeftTabs">
          <h4 className="mobileHeader4">Финансовое состояние</h4>
          <TabList className="react-tabs__tab-list firstTestsTabList CashFlowTabList">
            <h4>
              Финансовое состояние
              <img src={fincondition} alt="" />
            </h4>
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
              <Tab>
                <div className="img_tab">
                  <img src={point} alt="" />
                  <div className="tabTitle">Оценка</div>
                </div>
              </Tab>
              <Tab className=" react-tabs__tab analysisDynamicTab">
                <div className="img_tab">
                  <img src={dynamic} alt="" />
                  <div className="tabTitle">Динамика</div>
                </div>
              </Tab>
              <Tab>
                <div className="img_tab">
                  <img src={analysis} alt="" />
                  <div className="tabTitle">Аналитика</div>
                </div>
              </Tab>
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
              <Tab>
                <div className="img_tab">
                  <img src={point} alt="" />
                  <div className="tabTitle">Оценка</div>
                </div>
              </Tab>
              <Tab className=" react-tabs__tab analysisDynamicTab">
                <div className="img_tab">
                  <img src={dynamic} alt="" />
                  <div className="tabTitle">Динамика</div>
                </div>
              </Tab>
              <Tab>
                <div className="img_tab">
                  <img src={analysis} alt="" />
                  <div className="tabTitle">Аналитика</div>
                </div>
              </Tab>
            </TabList>
            <TabPanel>
              <Lao />
            </TabPanel>
            <TabPanel>
              <LAD />
            </TabPanel>
            <TabPanel>
              <Dva />
            </TabPanel>
          </Tabs>
        </TabPanel>
        <TabPanel className="AnalysisTabPanel">
          <Tabs>
            <TabList>
              <Tab>
                <div className="img_tab">
                  <img src={point} alt="" />
                  <div className="tabTitle">Оценка</div>
                </div>
              </Tab>
              <Tab className=" react-tabs__tab analysisDynamicTab">
                <div className="img_tab">
                  <img src={dynamic} alt="" />
                  <div className="tabTitle">Динамика</div>
                </div>
              </Tab>
              <Tab>
                <div className="img_tab">
                  <img src={analysis} alt="" />
                  <div className="tabTitle">Аналитика</div>
                </div>
              </Tab>
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
                  <Dk />
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
                  <img src={point} alt="" />
                  <div className="tabTitle">Оценка</div>
                </div>
              </Tab>
              <Tab className=" react-tabs__tab analysisDynamicTab">
                <div className="img_tab">
                  <img src={dynamic} alt="" />
                  <div className="tabTitle">Динамика</div>
                </div>
              </Tab>
              <Tab>
                <div className="img_tab">
                  <img src={analysis} alt="" />
                  <div className="tabTitle">Аналитика</div>
                </div>
              </Tab>
            </TabList>
            <TabPanel>
              <Iao />
            </TabPanel>
            <TabPanel>
              <Iad />
            </TabPanel>
            <TabPanel>
              <Dia />
            </TabPanel>
          </Tabs>
        </TabPanel>
        <TabPanel className="AnalysisTabPanel">
          <Tabs>
            <TabList>
              <Tab>
                <div className="img_tab">
                  <img src={point} alt="" />
                  <div className="tabTitle">Оценка</div>
                </div>
              </Tab>
              <Tab className=" react-tabs__tab analysisDynamicTab">
                <div className="img_tab">
                  <img src={dynamic} alt="" />
                  <div className="tabTitle">Динамика</div>
                </div>
              </Tab>
              <Tab>
                <div className="img_tab">
                  <img src={analysis} alt="" />
                  <div className="tabTitle">Аналитика</div>
                </div>
              </Tab>
            </TabList>
            <TabPanel>
              <Dno />
            </TabPanel>
            <TabPanel>
              <Dnd />
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
                  <Spk />
                </TabPanel>
                <TabPanel>
                  <Szk />
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
                  <img src={point} alt="" />
                  <div className="tabTitle">Оценка</div>
                </div>
              </Tab>
              <Tab className=" react-tabs__tab analysisDynamicTab">
                <div className="img_tab">
                  <img src={dynamic} alt="" />
                  <div className="tabTitle">Динамика</div>
                </div>
              </Tab>
              <Tab>
                <div className="img_tab">
                  <img src={analysis} alt="" />
                  <div className="tabTitle">Аналитика</div>
                </div>
              </Tab>
            </TabList>
            <TabPanel>
              <Fpo />
            </TabPanel>
            <TabPanel>
              <Fpd />
            </TabPanel>
            <TabPanel>
              <Prd />
            </TabPanel>
          </Tabs>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default FinResultsBody;
