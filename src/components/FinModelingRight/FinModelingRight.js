import React from 'react';

import Diagrambtn from '../Diagrambtn/Diagrambtn';

import diagimg from '../../img/icon/icon__chart.svg';

import styles from './FinModelingRight.module.scss';

function FinpModelingRight(props) {
  return (
    <div className={styles.finplanright}>
      <div className={styles.rightblocks}>
        <div className={styles.diagramblock}></div>
      </div>
      <Diagrambtn diagramImg={diagimg} diagramTitle="Результат расчета" />
    </div>
  );
}

export default FinpModelingRight;
