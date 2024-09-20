import React from 'react';

import FinAnalysisLeftNav from '../../components/FinAnalysisLeftNav/FinAnalysisLeftNav';
import Header from '../../components/Header/Header';
import MobileNav from '../../components/MobileNav/MobileNav';
import StructureAnalysisBody from '../../components/StructureAnalysisBody/StructureAnalysisBody';

import styles from './ActualAnalysis.module.scss';

function StructureAnalysis(props) {
  return (
    <>
      <Header />
      <MobileNav />
      <div className={styles.sitebody}>
        <FinAnalysisLeftNav />
        <div className={styles.siteBodyRight}>
          <StructureAnalysisBody />
        </div>
      </div>
    </>
  );
}

export default StructureAnalysis;
