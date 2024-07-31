import React from "react";
import styles from "./NoMatterAnalysisBody.module.scss";
import { Link } from "react-router-dom";
import AnalysisHeader from "../AnalysisHeader/AnalysisHeader";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "./NoMatterAnalysisBody.scss";
import Knr1 from "../AnalysisCharts/BarCharts/KNR1";
import hrcontrol from "../../img/analysisicons/HRcontrol.png";
import Knr2 from "../AnalysisCharts/SensorCharts/KNR2";

function NoMatterAnalysisBody(props) {
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
                <img src={hrcontrol} alt="" />
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
