import React from "react";
import styles from "./ActualAnalysisBody.module.scss";
import { Link } from "react-router-dom";
import AnalysisHeader from "../AnalysisHeader/AnalysisHeader";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import mycourse from "../../img/icon__course.svg";
import StudySecond from "../StudySecond/StudySecond";
import "./ActualAnalysisBody.scss";
import Chart from "../Chart/Chart";
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
        <h2 className={styles.result_head}>Финансовый анализ</h2>
        <AnalysisHeader activeLink="true" />
        <div className={styles.breadcrumb}>
          <ul>
            <li>
              <Link to={"/FinAnalys"}>Денежные потоки</Link>
            </li>
            <li>Структурный анализ</li>
          </ul>
        </div>
        <Tabs className="react-tabs firstTestsTabs studyingTabs CashFlowTabs AnalysisTabs">
          <div className="left_tabs myResultLeftTabs">
            <h4 className="mobileHeader4">Структурный анализ</h4>
            <TabList className="react-tabs__tab-list firstTestsTabList CashFlowTabList">
              <h4>Структурный анализ</h4>
              <Tab>
                <span>Структура Расходов: по приоритетности</span>
              </Tab>
              <Tab>
                <span>Структура Расходов: по критичности</span>
              </Tab>
              <Tab>
                <span>
                  Ранжирование Расходов: по приоритетности и критичности
                </span>
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
