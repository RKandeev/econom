import React from "react";
import Header from "../../components/Header/Header";
import MobileNav from "../../components/MobileNav/MobileNav";
import styles from "./FinConditionsBody.module.scss";
import FinAnalysisLeftNav from "../../components/FinAnalysisLeftNav/FinAnalysisLeftNav";
import FinResultsBody from "../../components/FinResultsBody/FinResultsBody";
import FinConditionsBody from "../../components/FinConditionsBody/FinConditionsBody";

function FinConditions(props) {
  return (
    <>
      <Header />
      <MobileNav />
      <div className={styles.sitebody}>
        <FinAnalysisLeftNav />
        <FinConditionsBody />
      </div>
    </>
  );
}

export default FinConditions;
