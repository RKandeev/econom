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
            solutionType='Досрочное погашение кредитов: целесообразность'
          />
          <MySolution
            solutionTitle='Название расчета'
            solutionType='Досрочное погашение кредитов: приоритет'
          />
        </div>
      </div>
    </>
  );
}

export default MySolutions;
