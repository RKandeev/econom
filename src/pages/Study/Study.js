import React from 'react';

import Header from '../../components/Header/Header';
import MobileNav from '../../components/MobileNav/MobileNav';
import StudyBody from '../../components/StudyBody/StudyBody';
import StudyLeftNav from '../../components/StudyLeftNav/StudyLeftNav';

import styles from '../MyResults/MyResults.module.scss';

function Study(props) {
  return (
    <>
      <Header />
      <MobileNav />
      <div className={styles.sitebody}>
        <StudyLeftNav />
        <StudyBody />
      </div>
    </>
  );
}

export default Study;
