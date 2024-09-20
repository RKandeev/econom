import React, { useState } from 'react';

import Editsum from '../Editsum/Editsum';
import Modal from '../Modal/Modal';

import editicon from '../../img/icon__edit.png';

import styles from './Moneyline.module.scss';

function Moneyline(props) {
  const [editModalActive, SetEditModalActive] = useState(false);
  let sumValue = '20 150,20';

  return (
    <div className={styles.moneyline}>
      <div className={styles.moneylineblock}>
        <h5>Остаток на начало {props.interval}</h5>
        <div className={`${styles.moneyblock} ${styles.grey}`}>
          <div className={styles.sum}>
            {sumValue}
            <span>&#8381;</span>
          </div>
          <img alt="" src={editicon} onClick={() => SetEditModalActive(true)} />
        </div>
      </div>
      <div className={styles.moneylineblock}>
        <h5>Поступления</h5>
        <div className={`${styles.moneyblock} ${styles.green}`}>
          <div className={styles.sum}>
            20 150,20<span>&#8381;</span>
          </div>
        </div>
      </div>
      <div className={styles.moneylineblock}>
        <h5>Выплаты</h5>
        <div className={`${styles.moneyblock} ${styles.red}`}>
          <div className={styles.sum}>
            {sumValue}
            <span>&#8381;</span>
          </div>
        </div>
      </div>
      <div className={styles.moneylineblock}>
        <h5>Остаток на конец {props.interval}</h5>
        <div className={`${styles.moneyblock} ${styles.black}`}>
          <div className={styles.sum}>
            20 150,20<span>&#8381;</span>
          </div>
        </div>
      </div>
      <Modal
        active={editModalActive}
        modalTitle={props.modalTitle}
        SetActive={SetEditModalActive}
      >
        <div className={styles.modalBody}>
          <h4>Сентябрь 2022</h4>
          <div className={styles.modalInfoBlock}>
            <div className={styles.infoBlockTitle}>Расчетный остаток:</div>
            <div className={styles.infoBlockValue}>
              {sumValue}
              <span>&nbsp;&#8381;</span>
            </div>
          </div>
          <p className={styles.infoHelp}>
            Если рассчитанная сумма остатка средств отличается от реальной
            суммы, измените её ниже
          </p>
          <Editsum
            formId="editModalForm"
            formTitle="Сумма остатка"
            sumValue={sumValue}
          />
          <input
            className={styles.submitBtn}
            form="editModalForm"
            type="submit"
            value="Сохранить"
          />
        </div>
      </Modal>
    </div>
  );
}

export default Moneyline;
