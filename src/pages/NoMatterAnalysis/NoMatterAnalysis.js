import React from 'react';

import FinAnalysisLeftNav from '../../components/FinAnalysisLeftNav/FinAnalysisLeftNav';
import Header from '../../components/Header/Header';
import MobileNav from '../../components/MobileNav/MobileNav';
import NoMatterAnalysisBody from '../../components/NoMatterAnalysisBody/NoMatterAnalysisBody';

import styles from './NoMatterAnalysis.module.scss';

function NoMatterAnalysis(props) {
  return (
    <>
      <Header />
      <MobileNav />
      <div className={styles.sitebody}>
        <FinAnalysisLeftNav />
        <NoMatterAnalysisBody />
      </div>
    </>
  );
}

export default NoMatterAnalysis;
