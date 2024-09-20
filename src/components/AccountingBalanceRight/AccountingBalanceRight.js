import React from 'react';

import Diagrambtn from '../Diagrambtn/Diagrambtn';

import copyico from '../../img/icon/icon__copy.svg';

import styles from './AccountingBalanceRight.module.scss';

function AccountingBalanceRight(props) {
  return (
    <>
      <div className={styles.accountingright}>
        <h4>ДЕЙСТВИЯ</h4>
        <div className={styles.rightblocks}>
          <div className={styles.diagramblock}>
            <Diagrambtn
              diagramImg={copyico}
              diagramTitle="Скопировать записи предыдущего месяца"
              modalTitle="Записи скопированы"
            ></Diagrambtn>
          </div>
        </div>
      </div>
    </>
  );
}

export default AccountingBalanceRight;
