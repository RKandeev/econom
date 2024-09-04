import React, { useState } from "react";
import styles from "./Progressadd.module.scss";
import Mybtn from "../Mybtn/Mybtn";
import Modal from "../Modal/Modal";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import SelectModal from "../SelectModal/SelectModal";
import Editsum from "../Editsum/Editsum";
import CommentArea from "../CommentArea/CommentArea";

function AccountingProgressadd(props) {
  // let titleName = "Заработная плата";
  // let titleNameType = "Фиксированная";
  // let incomesValue = "+55000.00";
  let selectArr1 = ["Заработная плата", "Шабашка", "Лотерея"];
  let selectArr2 = ["Заработная плата", "Шабашка", "Лотерея"];
  let sumValue = "25 159,15";
  const [accountingAddModalActive, SetAccountingAddModalActive] =
    useState(false);
  return (
    <>
      <div className={styles.progressTitle}>{props.progressTitle}</div>
      <div className={styles.barLineBlock}>
        <div
          className={styles.barLine}
          style={{
            background: `${props.barcolor}`,
            width: `${props.barwidth}`,
          }}
        >
          {props.progressValue}
        </div>
        <div
          onClick={() => {
            SetAccountingAddModalActive(true);
          }}
        >
          <Mybtn btnTitle="Добавить" />
        </div>
      </div>
      <Modal
        modalTitle={props.modalTitle}
        active={accountingAddModalActive}
        SetActive={SetAccountingAddModalActive}
      >
        <Tabs>
          <TabList>
            <Tab>Запись</Tab>
            <Tab>Комментарий</Tab>
          </TabList>
          <TabPanel>
            <div className={styles.tabHeaderBlock}>
              <form id="newIncomeForm">
                <div className={styles.editSum}>
                  <Editsum formTitle="Сумма" sumValue={sumValue} />
                </div>
                <SelectModal
                  selectArr={selectArr1}
                  SelectHeader={props.SelectHeader1}
                />
                <SelectModal
                  selectArr={selectArr2}
                  SelectHeader={props.SelectHeader2}
                />
                <SelectModal
                  selectArr={selectArr2}
                  SelectHeader={props.SelectHeader3}
                  selectModalVis={props.selectModalVis}
                />
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
            <CommentArea
              placeHolderTitle="Текст комментария"
              commentHeight={props.commentHeight}
            />
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

export default AccountingProgressadd;
