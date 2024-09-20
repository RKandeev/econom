import React from 'react';

import Header from '../../components/Header/Header';
import MobileNav from '../../components/MobileNav/MobileNav';
import Modelingleftnav from '../../components/Modelingleftnav/Modelingleftnav';
import MySolutions from '../../components/MySolutions/MySolutions';
import Solutions from '../../components/Solutions/Solutions';

import styles from './Finmodel.module.scss';

function Finmodel(props) {
  return (
    <>
      <Header />
      <MobileNav />
      <div className={styles.sitebody}>
        <Modelingleftnav />
        <div className={styles.modelingBody}>
          <h3 className={styles.modelingHeader}>Финансовое моделирование</h3>
          <div className={styles.modelingBlock}>
            <Solutions />
            <div className={styles.mySolutionComponent}>
              <MySolutions />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Finmodel;
