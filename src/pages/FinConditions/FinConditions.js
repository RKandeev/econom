import React from 'react';

import FinAnalysisLeftNav from '../../components/FinAnalysisLeftNav/FinAnalysisLeftNav';
import FinConditionsBody from '../../components/FinConditionsBody/FinConditionsBody';
import Header from '../../components/Header/Header';
import MobileNav from '../../components/MobileNav/MobileNav';

import styles from './FinConditionsBody.module.scss';

function FinConditions(props) {
  return (
    <>
      <Header />
      <MobileNav />
      <div className={styles.sitebody}>
        <FinAnalysisLeftNav />
        <FinConditionsBody />
      </div>
    </>
  );
}

export default FinConditions;
