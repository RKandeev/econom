import React from "react";
import styles from "./MyResultsBody.module.scss";
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";
import TestResultTabs from "../TestResultTabs/TestResultTabs";
import Testing from "../Testing/Testing";

function MyResultsBody(props) {
  return (
    <div className={styles.MyResultsBody}>
      <h2 className={styles.result_head}>Мои результаты</h2>
      <Tabs className={styles.result_tabs}>
        <TabList>
          <Tab>Стартовое тестирование</Tab>
          <Tab>Контрольное тестирование</Tab>
        </TabList>

        <TabPanel className={styles.result_panel}>
          <TestResultTabs />
        </TabPanel>
        <TabPanel className={styles.result_panel}>
          <Testing />
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default MyResultsBody;
