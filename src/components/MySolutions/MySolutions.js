import React from 'react';

import MySolution from '../MySolution/MySolution';

import styles from './MySolutions.module.scss';

function MySolutions(props) {
  return (
    <>
      <div className={styles.solutionsBlock}>
        <h3>история</h3>
        <div className={styles.solutionList}>
          <MySolution
            solutionTitle='Название расчета'
            solutionDate='18 мая 2024'
          />
          <MySolution
            solutionTitle='Название расчета'
            solutionDate='18 ноября 2024'
          />
        </div>
      </div>
    </>
  );
}

export default MySolutions;
