import { React } from 'react';

import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

import Finline from '../Finline/Finline';
import Ddpl from '../FinPlanCharts/LineCharts/DDPL';
import Dfrp from '../FinPlanCharts/LineCharts/DFRP';
import Dozhp from '../FinPlanCharts/LineCharts/DOZHP';
import Dpdp from '../FinPlanCharts/LineCharts/DPDP';
import Dpkp from '../FinPlanCharts/LineCharts/DPKP';
import Dppp from '../FinPlanCharts/LineCharts/DPPP';
import Dvp from '../FinPlanCharts/LineCharts/DVP';
import Dvvp from '../FinPlanCharts/LineCharts/DVVP';
import Dzp from '../FinPlanCharts/LineCharts/DZP';
import Sdpl from '../FinPlanCharts/PieCharts/SDPL';
import Sfrp from '../FinPlanCharts/PieCharts/SFRP';
import Sozhp from '../FinPlanCharts/PieCharts/SOZHP';
import Spdp from '../FinPlanCharts/PieCharts/SPDP';
import Spkp from '../FinPlanCharts/PieCharts/SPKP';
import Sppp from '../FinPlanCharts/PieCharts/SPPP';
import Svp from '../FinPlanCharts/PieCharts/SVP';
import Svvp from '../FinPlanCharts/PieCharts/SVVP';
import Szp from '../FinPlanCharts/PieCharts/SZP';
import Moneyline from '../Moneyline/Moneyline';
import Selectblue from '../Selectblue/Selectblue';

import dynamic from '../../img/analysisicons/dynamic.png';
import attachment from '../../img/attachment.svg';
import back from '../../img/back.svg';
import borrowings from '../../img/borrowings.svg';
import crediticon from '../../img/crediticon.svg';
import debts from '../../img/debts.svg';
import fincashout from '../../img/fincashout.svg';
import lifestyle from '../../img/lifestyle.svg';
import moneyback from '../../img/moneyback.svg';
import pocket from '../../img/pocket.svg';

import './Finplanbody.scss';
import styles from './Finplanbody.module.scss';

function Finplanbody(props) {
  const years = ['2022', '2023'];
  let selectedMonth = 4;
  let months = ['Январь', 'Февраль'];
  let incomes = 'Доходы';
  let credit = 'Платежи по кредитам';

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
              key={elem.id}
              className={index == selectedMonth ? 'month select' : 'month'}
            >
              <div className="monthimg">
                <img alt="" src={elem.checkStatus} />
              </div>
              <div className="monthtitle">{elem.title}</div>
            </div>
          ))}
        </div>
      </div>
      <Moneyline interval="месяца" modalTitle="Остаток на начало месяца" />
      <Finline
        linkway="/incomes"
        modalTitle="Структура доходов"
        notificBolean="true"
        titleimg={pocket}
        titlename={incomes}
        value="+550000000.00"
      >
        <Tabs className="finPlanTabs">
          <TabList>
            <Tab>
              <div className="img_tab">
                <svg
                  fill="none"
                  height="16rem"
                  viewBox="0 0 24 24"
                  width="16rem"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    d="M10.5 6C6.358 6 3 9.358 3 13.5C3 17.642 6.358 21 10.5 21C14.642 21 18 17.642 18 13.5H10.5V6Z"
                    fillRule="evenodd"
                    stroke="#464e5f"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                  <path
                    clipRule="evenodd"
                    d="M21 10C21 6.134 17.866 3 14 3V10H21Z"
                    fillRule="evenodd"
                    stroke="#464e5f"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                </svg>
                <div className="tabTitle">Структура</div>
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
            <Sdpl />
          </TabPanel>
          <TabPanel>
            <Ddpl />
          </TabPanel>
        </Tabs>
      </Finline>
      <Finline
        linkway="/credit"
        modalTitle="Платежи по кредитам"
        titleimg={crediticon}
        titlename={credit}
        value="-12446.20"
      >
        <Tabs className="finPlanTabs">
          <TabList>
            <Tab>
              <div className="img_tab">
                <svg
                  fill="none"
                  height="16rem"
                  viewBox="0 0 24 24"
                  width="16rem"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    d="M10.5 6C6.358 6 3 9.358 3 13.5C3 17.642 6.358 21 10.5 21C14.642 21 18 17.642 18 13.5H10.5V6Z"
                    fillRule="evenodd"
                    stroke="#464e5f"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                  <path
                    clipRule="evenodd"
                    d="M21 10C21 6.134 17.866 3 14 3V10H21Z"
                    fillRule="evenodd"
                    stroke="#464e5f"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                </svg>
                <div className="tabTitle">Структура</div>
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
            <Spkp />
          </TabPanel>
          <TabPanel>
            <Dpkp />
          </TabPanel>
        </Tabs>
      </Finline>
      <Finline
        linkway="/BasicNeeds"
        modalTitle="Расходы «Базовые потребности»"
        titleimg={back}
        titlename="Расходы «Базовые потребности»"
        value="-12446.20"
      >
        <Tabs className="finPlanTabs">
          <TabList>
            <Tab>
              <div className="img_tab">
                <svg
                  fill="none"
                  height="16rem"
                  viewBox="0 0 24 24"
                  width="16rem"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    d="M10.5 6C6.358 6 3 9.358 3 13.5C3 17.642 6.358 21 10.5 21C14.642 21 18 17.642 18 13.5H10.5V6Z"
                    fillRule="evenodd"
                    stroke="#464e5f"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                  <path
                    clipRule="evenodd"
                    d="M21 10C21 6.134 17.866 3 14 3V10H21Z"
                    fillRule="evenodd"
                    stroke="#464e5f"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                </svg>
                <div className="tabTitle">Структура</div>
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
            <Sppp />
          </TabPanel>
          <TabPanel>
            <Dppp />
          </TabPanel>
        </Tabs>
      </Finline>
      <Finline
        linkway="/Lifestyle"
        modalTitle="Расходы «Образ жизни»"
        notificBolean="true"
        titleimg={lifestyle}
        titlename="Расходы «Образ жизни»"
        value="-12446.20"
      >
        <Tabs className="finPlanTabs">
          <TabList>
            <Tab>
              <div className="img_tab">
                <svg
                  fill="none"
                  height="16rem"
                  viewBox="0 0 24 24"
                  width="16rem"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    d="M10.5 6C6.358 6 3 9.358 3 13.5C3 17.642 6.358 21 10.5 21C14.642 21 18 17.642 18 13.5H10.5V6Z"
                    fillRule="evenodd"
                    stroke="#464e5f"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                  <path
                    clipRule="evenodd"
                    d="M21 10C21 6.134 17.866 3 14 3V10H21Z"
                    fillRule="evenodd"
                    stroke="#464e5f"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                </svg>
                <div className="tabTitle">Структура</div>
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
            <Sozhp />
          </TabPanel>
          <TabPanel>
            <Dozhp />
          </TabPanel>
        </Tabs>
      </Finline>
      <Finline
        linkway="/Fincashout"
        modalTitle="Финансовые расходы"
        titleimg={fincashout}
        titlename="Финансовые расходы"
        value="-12446.20"
      >
        <Tabs className="finPlanTabs">
          <TabList>
            <Tab>
              <div className="img_tab">
                <svg
                  fill="none"
                  height="16rem"
                  viewBox="0 0 24 24"
                  width="16rem"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    d="M10.5 6C6.358 6 3 9.358 3 13.5C3 17.642 6.358 21 10.5 21C14.642 21 18 17.642 18 13.5H10.5V6Z"
                    fillRule="evenodd"
                    stroke="#464e5f"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                  <path
                    clipRule="evenodd"
                    d="M21 10C21 6.134 17.866 3 14 3V10H21Z"
                    fillRule="evenodd"
                    stroke="#464e5f"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                </svg>
                <div className="tabTitle">Структура</div>
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
            <Sfrp />
          </TabPanel>
          <TabPanel>
            <Dfrp />
          </TabPanel>
        </Tabs>
      </Finline>
      <Finline
        linkway="/Refund"
        modalTitle="Возврат вложений"
        titleimg={moneyback}
        titlename="Возврат вложений"
        value="+12446.20"
      >
        <Tabs className="finPlanTabs">
          <TabList>
            <Tab>
              <div className="img_tab">
                <svg
                  fill="none"
                  height="16rem"
                  viewBox="0 0 24 24"
                  width="16rem"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    d="M10.5 6C6.358 6 3 9.358 3 13.5C3 17.642 6.358 21 10.5 21C14.642 21 18 17.642 18 13.5H10.5V6Z"
                    fillRule="evenodd"
                    stroke="#464e5f"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                  <path
                    clipRule="evenodd"
                    d="M21 10C21 6.134 17.866 3 14 3V10H21Z"
                    fillRule="evenodd"
                    stroke="#464e5f"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                </svg>
                <div className="tabTitle">Структура</div>
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
            <Svvp />
          </TabPanel>
          <TabPanel>
            <Dvvp />
          </TabPanel>
        </Tabs>
      </Finline>
      <Finline
        linkway="/Borrow"
        modalTitle="Заимствования"
        titleimg={borrowings}
        titlename="Заимствования"
        value="+12446.20"
      >
        <Tabs className="finPlanTabs">
          <TabList>
            <Tab>
              <div className="img_tab">
                <svg
                  fill="none"
                  height="16rem"
                  viewBox="0 0 24 24"
                  width="16rem"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    d="M10.5 6C6.358 6 3 9.358 3 13.5C3 17.642 6.358 21 10.5 21C14.642 21 18 17.642 18 13.5H10.5V6Z"
                    fillRule="evenodd"
                    stroke="#464e5f"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                  <path
                    clipRule="evenodd"
                    d="M21 10C21 6.134 17.866 3 14 3V10H21Z"
                    fillRule="evenodd"
                    stroke="#464e5f"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                </svg>
                <div className="tabTitle">Структура</div>
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
            <Szp />
          </TabPanel>
          <TabPanel>
            <Dzp />
          </TabPanel>
        </Tabs>
      </Finline>
      <Finline
        linkway="/Attachment"
        modalTitle="Вложения"
        titleimg={attachment}
        titlename="Вложения"
        value="-12446.20"
      >
        <Tabs className="finPlanTabs">
          <TabList>
            <Tab>
              <div className="img_tab">
                <svg
                  fill="none"
                  height="16rem"
                  viewBox="0 0 24 24"
                  width="16rem"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    d="M10.5 6C6.358 6 3 9.358 3 13.5C3 17.642 6.358 21 10.5 21C14.642 21 18 17.642 18 13.5H10.5V6Z"
                    fillRule="evenodd"
                    stroke="#464e5f"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                  <path
                    clipRule="evenodd"
                    d="M21 10C21 6.134 17.866 3 14 3V10H21Z"
                    fillRule="evenodd"
                    stroke="#464e5f"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                </svg>
                <div className="tabTitle">Структура</div>
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
            <Svp />
          </TabPanel>
          <TabPanel>
            <Dvp />
          </TabPanel>
        </Tabs>
      </Finline>
      <Finline
        linkway="/Debts"
        modalTitle="Погашение долгов"
        titleimg={debts}
        titlename="Погашение долгов"
        value="-12446.20"
      >
        <Tabs className="finPlanTabs">
          <TabList>
            <Tab>
              <div className="img_tab">
                <svg
                  fill="none"
                  height="16rem"
                  viewBox="0 0 24 24"
                  width="16rem"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    d="M10.5 6C6.358 6 3 9.358 3 13.5C3 17.642 6.358 21 10.5 21C14.642 21 18 17.642 18 13.5H10.5V6Z"
                    fillRule="evenodd"
                    stroke="#464e5f"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                  <path
                    clipRule="evenodd"
                    d="M21 10C21 6.134 17.866 3 14 3V10H21Z"
                    fillRule="evenodd"
                    stroke="#464e5f"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                </svg>
                <div className="tabTitle">Структура</div>
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
