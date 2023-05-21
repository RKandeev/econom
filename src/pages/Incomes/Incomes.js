import React from "react";
import Header from "../../components/Header/Header";
import Finplanleftnav from "../../components/Finplanleftnav/Finplanleftnav";
import styles from "./Incomes.module.scss";
import IncomesBody from "../../components/IncomesBody/IncomesBody";

function Incomes(props) {
  return (
    <>
      <Header />
      <div className={styles.sitebody}>
        <Finplanleftnav />
        <IncomesBody />
      </div>
    </>
  );
}

export default Incomes;
