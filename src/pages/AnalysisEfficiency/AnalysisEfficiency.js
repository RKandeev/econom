import React from 'react';

import FinAnalysisEfficiencyBody from '../../components/FinAnalysisEfficiencyBody/FinAnalysisEfficiencyBody';
import FinAnalysisLeftNav from '../../components/FinAnalysisLeftNav/FinAnalysisLeftNav';
import Header from '../../components/Header/Header';
import MobileNav from '../../components/MobileNav/MobileNav';

import styles from '../AnalysisCashFlow/AnalysisCashFlow.module.scss';

function AnalysisEfficiency(props) {
  return (
    <>
      <Header />
      <MobileNav />
      <div className={styles.sitebody}>
        <FinAnalysisLeftNav />
        <div className={styles.siteBodyRight}>
          <FinAnalysisEfficiencyBody />
        </div>
      </div>
    </>
  );
}

export default AnalysisEfficiency;
