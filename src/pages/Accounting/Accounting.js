import React from "react";
import Header from "../../components/Header/Header";
import styles from "./Accounting.module.scss";
import Accountingleftnav from "../../components/Accountingleftnav/Accountingleftnav";
import AccountingBody from "../../components/AccountingBody/AccountingBody";
import InlineCalendar from "../../components/InlineCalendar/InlineCalendar";
import MobileNav from "../../components/MobileNav/MobileNav";

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
