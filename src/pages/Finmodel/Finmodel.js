import React from "react";
import Header from "../../components/Header/Header";
import styles from "./Finmodel.module.scss";
import Modelingleftnav from "../../components/Modelingleftnav/Modelingleftnav";
import Solutions from "../../components/Solutions/Solutions";
import MySolutions from "../../components/MySolutions/MySolutions";
import MobileNav from "../../components/MobileNav/MobileNav";

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
