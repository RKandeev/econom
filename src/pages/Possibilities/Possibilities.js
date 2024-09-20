import React from 'react';

import Header from '../../components/Header/Header';
import MobileNav from '../../components/MobileNav/MobileNav';
import PossibilitiesBody from '../../components/PossibilitiesBody/PossibilitiesBody';
import Possibilitiesleftnav from '../../components/Possibilitiesleftnav/Possibilitiesleftnav';

import styles from '../MyResults/MyResults.module.scss';

function Possibilities(props) {
  return (
    <>
      <Header />
      <MobileNav />
      <div className={styles.sitebody}>
        <Possibilitiesleftnav />
        <PossibilitiesBody />
      </div>
    </>
  );
}

export default Possibilities;
