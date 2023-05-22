import React, { useState } from "react";
import styles from "./Progressadd.module.scss";
import Mybtn from "../Mybtn/Mybtn";
import IncomesLine from "../IncomesLine/IncomesLine";
import pocket from "../../img/pocket.svg";
import Modal from "../Modal/Modal";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import SelectModal from "../SelectModal/SelectModal";
import Editsum from "../Editsum/Editsum";
import CommentArea from "../CommentArea/CommentArea";

function Progressadd(props) {
  let titleName = "Заработная плата";
  let titleNameType = "Фиксированная";
  let incomesValue = "+55000.00";
  let selectArr1 = ["Заработная плата", "Шабашка", "Лотерея"];
  let selectArr2 = ["Заработная плата", "Шабашка", "Лотерея"];
  let sumValue = "25 159,15";
  const [addModalActive, SetAddModalActive] = useState(false);
  return (
    <>
      <div className={styles.progressTitle}>{props.progressTitle}</div>
      <div className={styles.barLineBlock}>
        <div
          className={styles.barLine}
          style={{ background: `${props.barcolor}` }}
        >
          {props.progressValue}
        </div>
        <div
          onClick={() => {
            SetAddModalActive(true);
          }}
        >
          <Mybtn btnTitle="Добавить" />
        </div>
      </div>
      <IncomesLine
        ttTitle="Это подсказка"
        titleImg={pocket}
        titleName={titleName}
        titleNameType={titleNameType}
        incomesValue={incomesValue}
        valueColor="#0DA46F"
        commentToltTitle="Это комментарий - бла бла"
        notificDisplay="none"
      />
      <Modal
        modalTitle="Доходы"
        active={addModalActive}
        SetActive={SetAddModalActive}
      >
        <Tabs>
          <TabList>
            <Tab>Запись</Tab>
            <Tab>Комментарий</Tab>
          </TabList>
          <TabPanel>
            <div className={styles.tabHeaderBlock}>
              <form id="newIncomeForm">
                <SelectModal selectArr={selectArr1} SelectHeader="Категория" />
                <SelectModal selectArr={selectArr2} SelectHeader="Статья" />
                <Editsum formTitle="Сумма" sumValue={sumValue} />
                <input
                  className={styles.submitBtn}
                  type="submit"
                  value="Сохранить"
                  form="newIncomeForm"
                />
              </form>
            </div>
          </TabPanel>
          <TabPanel>
            <CommentArea placeHolderTitle="Текст комментария" />
            <input
              className={styles.submitBtn}
              type="submit"
              value="Сохранить"
              form="newIncomeForm"
            />
          </TabPanel>
        </Tabs>
      </Modal>
    </>
  );
}

export default Progressadd;
