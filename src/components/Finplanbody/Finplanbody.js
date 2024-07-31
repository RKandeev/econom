import { React, useState } from "react";
import styles from "./Finplanbody.module.scss";
import Moneyline from "../Moneyline/Moneyline";
import Finline from "../Finline/Finline";
import pocket from "../../img/pocket.svg";
import crediticon from "../../img/crediticon.svg";
import "./Finplanbody.scss";
import Selectblue from "../Selectblue/Selectblue";
import back from "../../img/back.svg";
import lifestyle from "../../img/lifestyle.svg";
import fincashout from "../../img/fincashout.svg";
import moneyback from "../../img/moneyback.svg";
import borrowings from "../../img/borrowings.svg";
import debts from "../../img/debts.svg";
import attachment from "../../img/attachment.svg";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import dynamic from "../../img/analysisicons/dynamic.png";
import Sdpl from "../FinPlanCharts/PieCharts/SDPL";
import Ddpl from "../FinPlanCharts/LineCharts/DDPL";
import Spkp from "../FinPlanCharts/PieCharts/SPKP";
import Dpkp from "../FinPlanCharts/LineCharts/DPKP";
import Sppp from "../FinPlanCharts/PieCharts/SPPP";
import Sozhp from "../FinPlanCharts/PieCharts/SOZHP";
import Dppp from "../FinPlanCharts/LineCharts/DPPP";
import Dozhp from "../FinPlanCharts/LineCharts/DOZHP";
import Sfrp from "../FinPlanCharts/PieCharts/SFRP";
import Dfrp from "../FinPlanCharts/LineCharts/DFRP";
import Svvp from "../FinPlanCharts/PieCharts/SVVP";
import Dvvp from "../FinPlanCharts/LineCharts/DVVP";
import Szp from "../FinPlanCharts/PieCharts/SZP";
import Dzp from "../FinPlanCharts/LineCharts/DZP";
import Svp from "../FinPlanCharts/PieCharts/SVP";
import Dvp from "../FinPlanCharts/LineCharts/DVP";
import Spdp from "../FinPlanCharts/PieCharts/SPDP";
import Dpdp from "../FinPlanCharts/LineCharts/DPDP";

function Finplanbody(props) {
  const years = ["2022", "2023"];
  let selectedMonth = 4;
  let months = ["Январь", "Февраль"];
  let incomes = "Доходы";
  let credit = "Платежи по кредитам";

  return (
    <div className={styles.finalbody}>
      <div className={styles.headblock}>
        <h3>Финансовое планирование</h3>
        <Selectblue selectArr={years} />
      </div>
      <div className={styles.monthslist}>
        <div className={styles.monthblock}>
          {props.months.map((elem, index) => (
            <div
              className={index == selectedMonth ? "month select" : "month"}
              key={elem.id}
            >
              <div className="monthimg">
                <img src={elem.checkStatus} alt="" />
              </div>
              <div className="monthtitle">{elem.title}</div>
            </div>
          ))}
        </div>
      </div>
      <Moneyline interval="месяца" modalTitle="Остаток на начало месяца" />
      <Finline
        notificBolean="true"
        linkway={"/incomes"}
        titleimg={pocket}
        titlename={incomes}
        modalTitle="Структура доходов"
        value={"+550000000.00"}
      >
        <Tabs className="finPlanTabs">
          <TabList>
            <Tab>
              <div className="img_tab">
                <svg
                  width="16rem"
                  height="16rem"
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
                <div className="tabTitle">Структура</div>
              </div>
            </Tab>
            <Tab className=" react-tabs__tab analysisDynamicTab">
              <div className="img_tab">
                <img src={dynamic} alt="" />
                <div className="tabTitle">Динамика</div>
              </div>
            </Tab>
          </TabList>
          <TabPanel>
            <Sdpl />
          </TabPanel>
          <TabPanel>
            <Ddpl />
          </TabPanel>
        </Tabs>
      </Finline>
      <Finline
        linkway={"/credit"}
        titleimg={crediticon}
        titlename={credit}
        value={"-12446.20"}
        modalTitle="Платежи по кредитам"
      >
        <Tabs className="finPlanTabs">
          <TabList>
            <Tab>
              <div className="img_tab">
                <svg
                  width="16rem"
                  height="16rem"
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
                <div className="tabTitle">Структура</div>
              </div>
            </Tab>
            <Tab className=" react-tabs__tab analysisDynamicTab">
              <div className="img_tab">
                <img src={dynamic} alt="" />
                <div className="tabTitle">Динамика</div>
              </div>
            </Tab>
          </TabList>
          <TabPanel>
            <Spkp />
          </TabPanel>
          <TabPanel>
            <Dpkp />
          </TabPanel>
        </Tabs>
      </Finline>
      <Finline
        linkway={"/BasicNeeds"}
        titleimg={back}
        titlename="Расходы «Базовые потребности»"
        value={"-12446.20"}
        modalTitle="Расходы «Базовые потребности»"
      >
        <Tabs className="finPlanTabs">
          <TabList>
            <Tab>
              <div className="img_tab">
                <svg
                  width="16rem"
                  height="16rem"
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
                <div className="tabTitle">Структура</div>
              </div>
            </Tab>
            <Tab className=" react-tabs__tab analysisDynamicTab">
              <div className="img_tab">
                <img src={dynamic} alt="" />
                <div className="tabTitle">Динамика</div>
              </div>
            </Tab>
          </TabList>
          <TabPanel>
            <Sppp />
          </TabPanel>
          <TabPanel>
            <Dppp />
          </TabPanel>
        </Tabs>
      </Finline>
      <Finline
        notificBolean="true"
        linkway={"/Lifestyle"}
        titleimg={lifestyle}
        titlename="Расходы «Образ жизни»"
        modalTitle="Расходы «Образ жизни»"
        value={"-12446.20"}
      >
        <Tabs className="finPlanTabs">
          <TabList>
            <Tab>
              <div className="img_tab">
                <svg
                  width="16rem"
                  height="16rem"
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
                <div className="tabTitle">Структура</div>
              </div>
            </Tab>
            <Tab className=" react-tabs__tab analysisDynamicTab">
              <div className="img_tab">
                <img src={dynamic} alt="" />
                <div className="tabTitle">Динамика</div>
              </div>
            </Tab>
          </TabList>
          <TabPanel>
            <Sozhp />
          </TabPanel>
          <TabPanel>
            <Dozhp />
          </TabPanel>
        </Tabs>
      </Finline>
      <Finline
        linkway={"/Fincashout"}
        titleimg={fincashout}
        titlename="Финансовые расходы"
        modalTitle="Финансовые расходы"
        value={"-12446.20"}
      >
        <Tabs className="finPlanTabs">
          <TabList>
            <Tab>
              <div className="img_tab">
                <svg
                  width="16rem"
                  height="16rem"
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
                <div className="tabTitle">Структура</div>
              </div>
            </Tab>
            <Tab className=" react-tabs__tab analysisDynamicTab">
              <div className="img_tab">
                <img src={dynamic} alt="" />
                <div className="tabTitle">Динамика</div>
              </div>
            </Tab>
          </TabList>
          <TabPanel>
            <Sfrp />
          </TabPanel>
          <TabPanel>
            <Dfrp />
          </TabPanel>
        </Tabs>
      </Finline>
      <Finline
        linkway={"/Refund"}
        titleimg={moneyback}
        titlename="Возврат вложений"
        modalTitle="Возврат вложений"
        value={"+12446.20"}
      >
        <Tabs className="finPlanTabs">
          <TabList>
            <Tab>
              <div className="img_tab">
                <svg
                  width="16rem"
                  height="16rem"
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
                <div className="tabTitle">Структура</div>
              </div>
            </Tab>
            <Tab className=" react-tabs__tab analysisDynamicTab">
              <div className="img_tab">
                <img src={dynamic} alt="" />
                <div className="tabTitle">Динамика</div>
              </div>
            </Tab>
          </TabList>
          <TabPanel>
            <Svvp />
          </TabPanel>
          <TabPanel>
            <Dvvp />
          </TabPanel>
        </Tabs>
      </Finline>
      <Finline
        linkway={"/Borrow"}
        titleimg={borrowings}
        titlename="Заимствования"
        modalTitle="Заимствования"
        value={"+12446.20"}
      >
        <Tabs className="finPlanTabs">
          <TabList>
            <Tab>
              <div className="img_tab">
                <svg
                  width="16rem"
                  height="16rem"
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
                <div className="tabTitle">Структура</div>
              </div>
            </Tab>
            <Tab className=" react-tabs__tab analysisDynamicTab">
              <div className="img_tab">
                <img src={dynamic} alt="" />
                <div className="tabTitle">Динамика</div>
              </div>
            </Tab>
          </TabList>
          <TabPanel>
            <Szp />
          </TabPanel>
          <TabPanel>
            <Dzp />
          </TabPanel>
        </Tabs>
      </Finline>
      <Finline
        linkway={"/Attachment"}
        titleimg={attachment}
        titlename="Вложения"
        modalTitle="Вложения"
        value={"-12446.20"}
      >
        <Tabs className="finPlanTabs">
          <TabList>
            <Tab>
              <div className="img_tab">
                <svg
                  width="16rem"
                  height="16rem"
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
                <div className="tabTitle">Структура</div>
              </div>
            </Tab>
            <Tab className=" react-tabs__tab analysisDynamicTab">
              <div className="img_tab">
                <img src={dynamic} alt="" />
                <div className="tabTitle">Динамика</div>
              </div>
            </Tab>
          </TabList>
          <TabPanel>
            <Svp />
          </TabPanel>
          <TabPanel>
            <Dvp />
          </TabPanel>
        </Tabs>
      </Finline>
      <Finline
        linkway={"/Debts"}
        titleimg={debts}
        titlename="Погашение долгов"
        modalTitle="Погашение долгов"
        value={"-12446.20"}
      >
        <Tabs className="finPlanTabs">
          <TabList>
            <Tab>
              <div className="img_tab">
                <svg
                  width="16rem"
                  height="16rem"
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
                <div className="tabTitle">Структура</div>
              </div>
            </Tab>
            <Tab className=" react-tabs__tab analysisDynamicTab">
              <div className="img_tab">
                <img src={dynamic} alt="" />
                <div className="tabTitle">Динамика</div>
              </div>
            </Tab>
          </TabList>
          <TabPanel>
            <Spdp />
          </TabPanel>
          <TabPanel>
            <Dpdp />
          </TabPanel>
        </Tabs>
      </Finline>
    </div>
  );
}

export default Finplanbody;
