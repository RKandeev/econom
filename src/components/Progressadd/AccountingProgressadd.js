import React, { useState } from 'react';

import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

import CommentArea from '../CommentArea/CommentArea';
import Editsum from '../Editsum/Editsum';
import Modal from '../Modal/Modal';
import Mybtn from '../Mybtn/Mybtn';
import SelectModal from '../SelectModal/SelectModal';

import styles from './Progressadd.module.scss';

function AccountingProgressadd(props) {
  // let titleName = "Заработная плата";
  // let titleNameType = "Фиксированная";
  // let incomesValue = "+55000.00";
  let selectArr1 = ['Заработная плата', 'Шабашка', 'Лотерея'];
  let selectArr2 = ['Необходимость', 'Желание'];
  let sumValue = '25 159,15';
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
          <Mybtn btnTitle='Добавить' />
        </div>
      </div>
      <Modal
        active={accountingAddModalActive}
        modalTitle={props.modalTitle}
        SetActive={SetAccountingAddModalActive}
      >
        <Tabs>
          <TabList>
            <Tab>Запись</Tab>
            <Tab>Комментарий</Tab>
          </TabList>
          <TabPanel>
            <div className={styles.tabHeaderBlock}>
              <form id='newIncomeForm'>
                <div
                  className={styles.editSum}
                  style={{ display: `${props.firstSumVis}` }}
                >
                  <Editsum formTitle={props.firstSum} sumValue={sumValue} />
                </div>
                <div
                  className={styles.editSum}
                  style={{ display: `${props.secondSumVis}` }}
                >
                  <Editsum formTitle={props.secondSum} sumValue={sumValue} />
                </div>
                <SelectModal
                  selectArr={selectArr1}
                  SelectHeader={props.SelectHeader1}
                  selectModalVis={props.selectModalVis1}
                />
                <SelectModal
                  selectArr={selectArr2}
                  SelectHeader={props.SelectHeader2}
                  selectModalVis={props.selectModalVis2}
                />
                <SelectModal
                  selectArr={selectArr2}
                  SelectHeader={props.SelectHeader3}
                  selectModalVis={props.selectModalVis3}
                />
                <input
                  className={styles.submitBtn}
                  form='newIncomeForm'
                  type='submit'
                  value='Сохранить'
                />
              </form>
            </div>
          </TabPanel>
          <TabPanel>
            <CommentArea
              commentHeight={props.commentHeight}
              placeHolderTitle='Текст комментария'
            />
            <input
              className={styles.submitBtn}
              form='newIncomeForm'
              type='submit'
              value='Сохранить'
            />
          </TabPanel>
        </Tabs>
      </Modal>
    </>
  );
}

export default AccountingProgressadd;
