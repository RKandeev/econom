import React, { useState } from 'react';

import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

import CommentArea from '../CommentArea/CommentArea';
import Editsum from '../Editsum/Editsum';
import Modal from '../Modal/Modal';
import Mybtn from '../Mybtn/Mybtn';
import SelectModal from '../SelectModal/SelectModal';

import styles from './Progressadd.module.scss';

function Progressadd(props) {
  // let titleName = "Заработная плата";
  // let titleNameType = "Фиксированная";
  // let incomesValue = "+55000.00";
  let selectArr1 = ['Заработная плата', 'Шабашка', 'Лотерея'];
  let selectArr2 = ['Заработная плата', 'Шабашка', 'Лотерея'];
  let sumValue = '25 159,15';
  const [addModalActive, SetAddModalActive] = useState(false);

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
            SetAddModalActive(true);
          }}
        >
          <Mybtn btnTitle="Добавить" />
        </div>
      </div>
      <Modal
        active={addModalActive}
        modalTitle="Доходы"
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

export default Progressadd;
