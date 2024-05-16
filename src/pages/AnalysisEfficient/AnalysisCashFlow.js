import React from "react";
import Header from "../../components/Header/Header";
import MobileNav from "../../components/MobileNav/MobileNav";
import styles from "./AnalysisCashFlow.module.scss";
import FinAnalysisLeftNav from "../../components/FinAnalysisLeftNav/FinAnalysisLeftNav";
import FinAnalysisBody from "../../components/FinAnalysisBody/FinAnalysisBody";

function AnalysisCashFlow(props) {
  return (
    <>
      <Header />
      <MobileNav />
      <div className={styles.sitebody}>
        <FinAnalysisLeftNav />
        <FinAnalysisBody />
      </div>
    </>
  );
}

export default AnalysisCashFlow;
