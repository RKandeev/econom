import React from "react";
import Header from "../../components/Header/Header";
import Finplanleftnav from "../../components/Finplanleftnav/Finplanleftnav";
import styles from "./Incomes.module.scss";
import IncomesBody from "../../components/IncomesBody/IncomesBody";
import MobileNav from "../../components/MobileNav/MobileNav";

function Incomes(props) {
  return (
    <>
      <Header />
      <MobileNav />
      <div className={styles.sitebody}>
        <Finplanleftnav />
        <IncomesBody />
      </div>
    </>
  );
}

export default Incomes;
