import React from "react";
import Header from "../../components/Header/Header";
import MobileNav from "../../components/MobileNav/MobileNav";
import styles from "./ActualAnalysis.module.scss";
import FinAnalysisLeftNav from "../../components/FinAnalysisLeftNav/FinAnalysisLeftNav";
import FinResultsBody from "../../components/FinResultsBody/FinResultsBody";

function FinResults(props) {
  return (
    <>
      <Header />
      <MobileNav />
      <div className={styles.sitebody}>
        <FinAnalysisLeftNav />
        <FinResultsBody />
      </div>
    </>
  );
}

export default FinResults;
