import React from "react";
import Header from "../../components/Header/Header";
import styles from "./Finmodel.module.scss";
import Modelingleftnav from "../../components/Modelingleftnav/Modelingleftnav";
import Solutions from "../../components/Solutions/Solutions";
import MySolutions from "../../components/MySolutions/MySolutions";

function Finmodel(props) {
  return (
    <>
      <Header />
      <div className={styles.sitebody}>
        <Modelingleftnav />
        <Solutions />
        <div className={styles.mySolutionComponent}>
          <MySolutions />
        </div>
      </div>
    </>
  );
}

export default Finmodel;
