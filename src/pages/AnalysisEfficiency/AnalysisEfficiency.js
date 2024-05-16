import React from "react";
import Header from "../../components/Header/Header";
import MobileNav from "../../components/MobileNav/MobileNav";
import styles from "../AnalysisCashFlow/AnalysisCashFlow.module.scss";
import FinAnalysisLeftNav from "../../components/FinAnalysisLeftNav/FinAnalysisLeftNav";
import FinAnalysisEfficiencyBody from "../../components/FinAnalysisEfficiencyBody/FinAnalysisEfficiencyBody";

function AnalysisEfficiency(props) {
  return (
    <>
      <Header />
      <MobileNav />
      <div className={styles.sitebody}>
        <FinAnalysisLeftNav />
        <div className={styles.siteBodyRight}>
          <FinAnalysisEfficiencyBody />
        </div>
      </div>
    </>
  );
}

export default AnalysisEfficiency;
