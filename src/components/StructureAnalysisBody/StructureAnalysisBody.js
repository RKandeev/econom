import React from "react";
import styles from "./ActualAnalysisBody.module.scss";
import { Link } from "react-router-dom";
import AnalysisHeader from "../AnalysisHeader/AnalysisHeader";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "./ActualAnalysisBody.scss";
import Srp from "../AnalysisCharts/PieCharts/SRP";
import Srk from "../AnalysisCharts/PieCharts/SRK";
import Rpk from "../AnalysisCharts/PieCharts/RPK";
import Rek from "../AnalysisCharts/BarCharts/REK";
import Res from "../AnalysisCharts/BarCharts/RES";
import Ksk from "../AnalysisCharts/BarCharts/KSK";
import Kss from "../AnalysisCharts/BarCharts/KSS";

function StructureAnalysisBody(props) {
  return (
    <>
      <div className={styles.MyResultsBody}>
        <h2 className={styles.result_head}>
          Финансовый анализ
          <div className={styles.breadcrumb}>
            <ul>
              <li>
                <Link to={"/FinAnalys"}>Денежные потоки</Link>
              </li>
              <li>Структурный анализ расходов</li>
            </ul>
          </div>
        </h2>
        <AnalysisHeader activeLink="true" />

        <Tabs className="react-tabs firstTestsTabs studyingTabs CashFlowTabs AnalysisTabs">
          <div className="left_tabs myResultLeftTabs">
            <h4 className="mobileHeader4">Структурный анализ расходов</h4>
            <TabList className="react-tabs__tab-list firstTestsTabList CashFlowTabList">
              <h4>
                Структурный анализ расходов
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.5 6C6.358 6 3 9.358 3 13.5C3 17.642 6.358 21 10.5 21C14.642 21 18 17.642 18 13.5H10.5V6Z"
                    stroke="#464e5f"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M21 10C21 6.134 17.866 3 14 3V10H21Z"
                    stroke="#464e5f"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </h4>
              <Tab>
                <span>Расходы – по приоритетности</span>
              </Tab>
              <Tab>
                <span>Расходы – по критичности</span>
              </Tab>
              <Tab>
                <span>Расходы – по приоритетности и критичности</span>
              </Tab>
              <Tab>
                <span>Резерв для экономии: по категориям расходов</span>
              </Tab>
              <Tab>
                <span>Резерв для экономии: по статьям расходов</span>
              </Tab>
              <Tab>
                <span>Кандидаты на сокращение: по категориям расходов</span>
              </Tab>
              <Tab>
                <span>Кандидаты на сокращение: по статьям расходов</span>
              </Tab>
            </TabList>
          </div>

          <TabPanel className="AnalysisTabPanel">
            <Srp />
          </TabPanel>
          <TabPanel className="AnalysisTabPanel">
            <Srk />
          </TabPanel>
          <TabPanel className="AnalysisTabPanel">
            <Rpk />
          </TabPanel>
          <TabPanel className="AnalysisTabPanel">
            <Rek />
          </TabPanel>
          <TabPanel className="AnalysisTabPanel">
            <Res />
          </TabPanel>
          <TabPanel className="AnalysisTabPanel">
            <Ksk />
          </TabPanel>
          <TabPanel className="AnalysisTabPanel">
            <Kss />
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
}

export default StructureAnalysisBody;
