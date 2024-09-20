import React from 'react';

import AccountingBody from '../../components/AccountingBody/AccountingBody';
import Accountingleftnav from '../../components/Accountingleftnav/Accountingleftnav';
import Header from '../../components/Header/Header';
import InlineCalendar from '../../components/InlineCalendar/InlineCalendar';
import MobileNav from '../../components/MobileNav/MobileNav';

import styles from './Accounting.module.scss';

function Finplan() {
  return (
    <>
      <Header />
      <MobileNav />
      <div className={styles.sitebody}>
        <Accountingleftnav />
        <AccountingBody />
        <InlineCalendar />
      </div>
    </>
  );
}

export default Finplan;
