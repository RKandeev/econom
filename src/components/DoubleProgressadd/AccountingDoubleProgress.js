import React, { useState } from 'react';

import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

import CommentArea from '../CommentArea/CommentArea';
import Editsum from '../Editsum/Editsum';
import Modal from '../Modal/Modal';
import Mybtn from '../Mybtn/Mybtn';
import SelectModal from '../SelectModal/SelectModal';

import styles from './DoubleProgressadd.module.scss';

function AccountingDoubleProgress(props) {
  let titleName = 'Основной долг';
  let titleNameType = 'Подраздел';
  let incomesValue = '-8500.00';
  let selectArr1 = ['Проценты', 'Ипотека', 'Лотерея'];
  let selectArr2 = ['Ипотека', 'Проценты', 'Лотерея'];
  let sumValue = '25 159,15';
  let availableBalance = '15000.00';
  let lastMonthExpensesValue = '15000.00';
  let latYearExpensesValue = '15000.00';
  let notificValue = '20 563';
  let notificDate = '12 сентября';
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
        active={addModalActive}
        modalTitle="Расходы"
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
                <div className={styles.editSum}>
                  <Editsum formTitle="Сумма" sumValue={sumValue} />
                </div>
                <SelectModal
                  selectArr={selectArr1}
                  SelectHeader="Направление расходов"
                />
                <SelectModal
                  selectArr={selectArr1}
                  SelectHeader="Категория ДП"
                />
                <SelectModal selectArr={selectArr1} SelectHeader="Статья ДП" />
                <SelectModal
                  selectArr={selectArr2}
                  SelectHeader="Тип доходов"
                />
                <input
                  className={styles.submitBtn}
                  form="newIncomeForm"
                  type="submit"
                  value="Сохранить"
                />
              </form>
            </div>
          </TabPanel>
          <TabPanel>
            <CommentArea placeHolderTitle="Текст комментария" />
            <input
              className={styles.submitBtn}
              form="newIncomeForm"
              type="submit"
              value="Сохранить"
            />
          </TabPanel>
        </Tabs>
      </Modal>
    </>
  );
}

export default AccountingDoubleProgress;
