import React from 'react';

import ActualAnalysisBody from '../../components/ActualAnalysisBody/ActualAnalysisBody';
import FinAnalysisLeftNav from '../../components/FinAnalysisLeftNav/FinAnalysisLeftNav';
import Header from '../../components/Header/Header';
import MobileNav from '../../components/MobileNav/MobileNav';

import styles from './ActualAnalysis.module.scss';

function ActualAnalysis(props) {
  return (
    <>
      <Header />
      <MobileNav />
      <div className={styles.sitebody}>
        <FinAnalysisLeftNav />
        <div className={styles.siteBodyRight}>
          <ActualAnalysisBody />
        </div>
      </div>
    </>
  );
}

export default ActualAnalysis;
