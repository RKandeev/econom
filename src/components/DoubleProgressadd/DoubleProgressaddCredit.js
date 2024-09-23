import React, { useState } from "react";
import styles from "./DoubleProgressadd.module.scss";
import Mybtn from "../Mybtn/Mybtn";
import IncomesLine from "../IncomesLine/IncomesLine";
import credit from "../../img/crediticon.svg";
import notification from "../../img/icon/icon__notification.svg";
import trash from "../../img/icon/icon__trash.svg";
import Modal from "../Modal/Modal";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import SelectModal from "../SelectModal/SelectModal";
import Editsum from "../Editsum/Editsum";
import CommentArea from "../CommentArea/CommentArea";
import Calendars from "../Calendars/Calendars";

function DoubleProgressaddCredit(props) {
  let titleName = "Основной долг";
  let titleNameType = "Подраздел";
  let incomesValue = "-8500.00";
  let selectArr1 = ["Проценты", "Ипотека", "Лотерея"];
  let selectArr2 = ["Ипотека", "Проценты", "Лотерея"];
  let sumValue = "25 159,15";
  let availableBalance = "15000.00";
  let lastMonthExpensesValue = "15000.00";
  let latYearExpensesValue = "15000.00";
  let notificValue = "20 563";
  let notificDate = "12 сентября";
  const onSubmit = (e) => {
    e.preventDefault();
  };
  const [addModalActive, SetAddModalActive] = useState(false);
  const [addNotification, SetAddNotification] = useState(false);
  return (
    <>
      <div className={styles.progressTitle}>{props.progressTitle}</div>
      <div className={styles.barLineBlock}>
        <div className={styles.availableBar}>{props.availableValue}</div>
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
          className={styles.mybtn}
          onClick={() => {
            SetAddModalActive(true);
          }}
        >
          <Mybtn btnTitle="Добавить" />
        </div>
      </div>
      <Modal
        modalTitle="Платежи по кредитам"
        active={addModalActive}
        SetActive={SetAddModalActive}
      >
        <h4 className={styles.HeaderDate}>Сентябрь 2022</h4>
        <div className={styles.availableBlock}>
          <div className={styles.AvBlockTitle}>Доступно:</div>
          <div className={styles.AvBlockValue}>{availableBalance} &#8381;</div>
        </div>
        <Tabs>
          <TabList>
            <Tab>Запись</Tab>
            <Tab>Напоминания</Tab>
            <Tab>Комментарий</Tab>
          </TabList>
          <TabPanel>
            <div className={styles.tabHeaderBlock}>
              <form id="newIncomeForm">
                <SelectModal
                  selectArr={selectArr2}
                  SelectHeader="Вид кредита"
                />
                <div
                  className={styles.expensesBlock}
                  style={{
                    display: `${props.expensesBlock}`,
                  }}
                >
                  <div className={styles.lastExpenses}>
                    <h5>Фактические расходы за&nbsp;предыдущий месяц</h5>
                    <div className={styles.expensesValue}>
                      {lastMonthExpensesValue} &#8381;
                    </div>
                  </div>
                  <div className={styles.lastExpenses}>
                    <h5>
                      Фактические расходы за&nbsp;этот же месяц в прошлом году
                    </h5>
                    <div className={styles.expensesValue}>
                      {latYearExpensesValue} &#8381;
                    </div>
                  </div>
                </div>
                <Editsum formTitle="Сумма (Проценты)" sumValue={sumValue} />
                <Editsum
                  formTitle="Сумма (Основной долг)"
                  sumValue={sumValue}
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
            <div
              className={styles.mybtn}
              onClick={() => {
                SetAddNotification(true);
              }}
            >
              <Mybtn btnTitle="Добавить напоминание о выплатах" />
            </div>
            <Modal
              modalTitle="Добавление напоминания"
              active={addNotification}
              SetActive={SetAddNotification}
            >
              <form id="newNotificationForm" onSubmit={onSubmit}>
                <Calendars />
                <Editsum formTitle="Сумма" sumValue={sumValue} />
                <input
                  className={styles.submitBtn}
                  type="submit"
                  value="Сохранить"
                  form="newNotificationForm"
                  onClick={() => SetAddNotification(false)}
                />
              </form>
            </Modal>
            <div className={styles.notificationBlocks}>
              <div className={styles.notificationBlock}>
                <div className={styles.notificImg}>
                  <img src={notification} alt="" />
                </div>
                <div className={styles.notificInfoBlock}>
                  <div className={styles.notificDate}>{notificDate}</div>
                  <div className={styles.notificValue}>
                    {notificValue} &#8381;
                  </div>
                </div>
                <div className={styles.notificDelete}>
                  <img src={trash} alt="" />
                </div>
              </div>
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

export default DoubleProgressaddCredit;
