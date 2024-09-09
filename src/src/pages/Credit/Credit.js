import React from "react";
import Header from "../../components/Header/Header";
import Finplanleftnav from "../../components/Finplanleftnav/Finplanleftnav";
import styles from "./Credit.module.scss";
import CreditBody from "../../components/CreditBody/CreditBody";

function Credit(props) {
  return (
    <>
      <Header />
      <div className={styles.sitebody}>
        <Finplanleftnav />
        <CreditBody />
      </div>
    </>
  );
}

export default Credit;
