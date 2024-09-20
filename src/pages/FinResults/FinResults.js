import React from 'react';

import FinAnalysisLeftNav from '../../components/FinAnalysisLeftNav/FinAnalysisLeftNav';
import FinResultsBody from '../../components/FinResultsBody/FinResultsBody';
import Header from '../../components/Header/Header';
import MobileNav from '../../components/MobileNav/MobileNav';

import styles from './ActualAnalysis.module.scss';

function FinResults(props) {
  return (
    <>
      <Header />
      <MobileNav />
      <div className={styles.sitebody}>
        <FinAnalysisLeftNav />
        <FinResultsBody />
      </div>
    </>
  );
}

export default FinResults;
