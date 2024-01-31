import React from "react";
import Header from "../../components/Header/Header";
import Finplanleftnav from "../../components/Finplanleftnav/Finplanleftnav";
import styles from "./Credit.module.scss";
import CreditBody from "../../components/CreditBody/CreditBody";
import MobileNav from "../../components/MobileNav/MobileNav";

function Credit(props) {
  return (
    <>
      <Header />
      <MobileNav />
      <div className={styles.sitebody}>
        <Finplanleftnav />
        <CreditBody />
      </div>
    </>
  );
}

export default Credit;
