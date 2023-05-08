import React, { useState } from "react";
import "react-tabs/style/react-tabs.css";
import "../Tabunique/Tabunique.scss";
import styles from "./Finline.module.scss";
import check from "../../img/check.svg";
import help from "../../img/icon/icon__help.svg";
import graph from "../../img/icon/icon__bars.svg";
import notification from "../../img/icon/icon__notification.svg";
import Modal from "../Modal/Modal";
import Chart from "../Chart/Chart";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Selectblue from "../Selectblue/Selectblue";
import Checkcustom from "../Checkcustom/Checkcustom";

function Finline(props) {
  const [chartModalActive, SetChartModalActive] = useState(false);
  let modalTitle = "Заголовок (попап с диаграммой)";
  let years = ["2022", "2023"];
  let months = ["Январь", "Февраль"];
  return (
    <>
      <div className={styles.finline}>
        <div className={styles.finlinestatus}>
          <img src={check} alt="" />
        </div>
        <div className={styles.finlinetitle}>
          <div className={styles.titleimg}>
            <img src={props.titleimg} alt="" />
          </div>
          <div className={styles.titlename}>{props.titlename}</div>
          <div className={styles.titleabout}>
            <img src={help} alt="" />
          </div>
        </div>
        <div className={styles.finlineinfo}>
          <div className={styles.graph}>
            <img src={graph} alt="" />
          </div>
          <div className={styles.notifications}>
            <img src={notification} alt="" />
          </div>
        </div>
        <div
          className={styles.finlinevalue}
          onClick={() => SetChartModalActive(true)}
        >
          {props.value}
        </div>
      </div>
      <Modal
        active={chartModalActive}
        SetActive={SetChartModalActive}
        modalTitle={modalTitle}
      >
        <Tabs>
          <TabList>
            <Tab>Диаграмма 1</Tab>
            <Tab>Диаграмма 2</Tab>
            <Tab>Диаграмма 3</Tab>
          </TabList>
          <TabPanel>
            <div className={styles.tabHeaderBlock}>
              <Selectblue selectArr={years} />
              <Selectblue selectArr={months} />
              <Checkcustom label="Нарастающий итог с начала года" />
            </div>
            <Chart
              chartH3="Длинное название диаграммы, возможно даже в две строки"
              chartH4="Подзаголовок"
            />
          </TabPanel>
          <TabPanel>
            <div className={styles.tabHeaderBlock}>
              <Selectblue selectArr={years} />
              <Selectblue selectArr={months} />
              <Checkcustom label="Нарастающий итог с начала года" />
            </div>
            <Chart
              chartH3="Длинное название диаграммы, возможно даже в две строки"
              chartH4="Подзаголовок"
            />
          </TabPanel>
          <TabPanel>
            <div className={styles.tabHeaderBlock}>
              <Selectblue selectArr={years} />
              <Selectblue selectArr={months} />
              <Checkcustom label="Нарастающий итог с начала года" />
            </div>
            <Chart
              chartH3="Длинное название диаграммы, возможно даже в две строки"
              chartH4="Подзаголовок"
            />
          </TabPanel>
        </Tabs>
      </Modal>
    </>
  );
}

export default Finline;
