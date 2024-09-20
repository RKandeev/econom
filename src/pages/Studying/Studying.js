import React from 'react';

import Header from '../../components/Header/Header';
import MobileNav from '../../components/MobileNav/MobileNav';
import StudyingBody from '../../components/StudyingBody/StudyingBody';
import StudyLeftNav from '../../components/StudyLeftNav/StudyLeftNav';

import styles from '../MyResults/MyResults.module.scss';

function Studying(props) {
  return (
    <>
      <Header />
      <MobileNav />
      <div className={styles.sitebody}>
        <StudyLeftNav />
        <StudyingBody />
      </div>
    </>
  );
}

export default Studying;
