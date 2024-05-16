import React from "react";
import styles from "./ActualAnalysisBody.module.scss";
import { Link } from "react-router-dom";
import AnalysisHeader from "../AnalysisHeader/AnalysisHeader";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import mycourse from "../../img/icon__course.svg";
import StudySecond from "../StudySecond/StudySecond";
import "./ActualAnalysisBody.scss";
import Chart from "../Chart/Chart";
import Pnr from "../AnalysisCharts/BarCharts/PNR";
import Pkr from "../AnalysisCharts/BarCharts/PKR";
import Psr from "../AnalysisCharts/BarCharts/PSR";

function ActualAnalysisBody(props) {
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
            <li>План-Факт Анализ</li>
          </ul>
        </div>
        <Tabs className="react-tabs firstTestsTabs studyingTabs CashFlowTabs">
          <div className="left_tabs myResultLeftTabs">
            <h4 className="mobileHeader4">План-Факт Анализ</h4>
            <TabList className="react-tabs__tab-list firstTestsTabList CashFlowTabList">
              <h4>План-Факт Анализ</h4>
              <Tab>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 11H11"
                    stroke="#3156A6"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7.5 3V6"
                    stroke="#3156A6"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16.5 3V6"
                    stroke="#3156A6"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9 21H6C4.34315 21 3 19.6569 3 18V7.5C3 5.84315 4.34315 4.5 6 4.5H18C19.6569 4.5 21 5.84315 21 7.5V11"
                    stroke="#3156A6"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.5 17H14.5C14.7761 17 15 17.2239 15 17.5V21H12V17.5C12 17.2239 12.2239 17 12.5 17Z"
                    stroke="#3156A6"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.5 13H17.5C17.7761 13 18 13.2239 18 13.5V21H15V13.5C15 13.2239 15.2239 13 15.5 13Z"
                    stroke="#3156A6"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M18.5 15H20.5C20.7761 15 21 15.2239 21 15.5V21H18V15.5C18 15.2239 18.2239 15 18.5 15Z"
                    stroke="#3156A6"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7 15H8"
                    stroke="#3156A6"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span>Перерасход по Направлениям расходов</span>
              </Tab>
              <Tab>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 21L15 17"
                    stroke="#3156A6"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8 21L9 17"
                    stroke="#3156A6"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M18.925 17H5.075C3.929 17 3 16.071 3 14.925V5.075C3 3.929 3.929 3 5.075 3H18.924C20.071 3 21 3.929 21 5.075V14.924C21 16.071 20.071 17 18.925 17Z"
                    stroke="#3156A6"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7.5 13V10.27"
                    stroke="#3156A6"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.5 13V7"
                    stroke="#3156A6"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M13.5 13.0002V9.68018"
                    stroke="#3156A6"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16.5 12.9998V7.5498"
                    stroke="#3156A6"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span>Перерасход по Категориям расходов</span>
              </Tab>
              <Tab>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="3"
                    rx="1"
                    stroke="#3156A6"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <rect
                    x="4"
                    y="6"
                    width="16"
                    height="11"
                    stroke="#3156A6"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M21 17H3"
                    stroke="#3156A6"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 17V19"
                    stroke="#3156A6"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <circle
                    cx="12"
                    cy="20.5"
                    r="1.5"
                    stroke="#3156A6"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.5 11L8 13"
                    stroke="#3156A6"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16 10L13 13"
                    stroke="#3156A6"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M13 13L10.5 11"
                    stroke="#3156A6"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16 12V10H14"
                    stroke="#3156A6"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span>Перерасход по Статьям расходов</span>
              </Tab>
            </TabList>
          </div>

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
