import React from 'react';

import FinAnalysisBody from '../../components/FinAnalysisBody/FinAnalysisBody';
import FinAnalysisLeftNav from '../../components/FinAnalysisLeftNav/FinAnalysisLeftNav';
import Header from '../../components/Header/Header';
import MobileNav from '../../components/MobileNav/MobileNav';

import styles from './AnalysisCashFlow.module.scss';

function AnalysisCashFlow(props) {
  return (
    <>
      <Header />
      <MobileNav />
      <div className={styles.sitebody}>
        <FinAnalysisLeftNav />
        <FinAnalysisBody />
      </div>
    </>
  );
}

export default AnalysisCashFlow;
