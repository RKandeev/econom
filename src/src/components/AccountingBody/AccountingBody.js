import React from "react";
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";
import styles from "./AccountingBody.module.scss";
import Moneyline from "../Moneyline/Moneyline";
import pocket from "../../img/pocket.svg";
import Finline from "../Finline/Finline";
import crediticon from "../../img/crediticon.svg";

function AccountingBody(props) {
  let accountingDate = "12 сентября 2023";
  let incomes = "Доходы";
  let credit = "Кредиты";
  return (
    <>
      <div className={styles.accountingBody}>
        <div className={styles.accountingHead}>
          <h3>Финансовый учёт</h3>
          <div className={styles.dot}>•</div>
          <div className={styles.accountingDate}>{accountingDate}</div>
        </div>
        <Tabs>
          <TabList>
            <Tab>Денежные потоки</Tab>
            <Tab>Финансовый баланс</Tab>
          </TabList>
          <TabPanel>
            <Moneyline />
            <Finline
              linkway={"/AccountingIncomes"}
              titleimg={pocket}
              titlename={incomes}
              value={"+55000.00"}
            />
            <Finline
              linkway={"/AccountingCredit"}
              titleimg={crediticon}
              titlename={credit}
              value={"-12446.20"}
            />
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
}

export default AccountingBody;
