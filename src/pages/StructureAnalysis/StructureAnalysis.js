import React from "react";
import Header from "../../components/Header/Header";
import MobileNav from "../../components/MobileNav/MobileNav";
import styles from "./ActualAnalysis.module.scss";
import FinAnalysisLeftNav from "../../components/FinAnalysisLeftNav/FinAnalysisLeftNav";
import StructureAnalysisBody from "../../components/StructureAnalysisBody/StructureAnalysisBody";

function StructureAnalysis(props) {
  return (
    <>
      <Header />
      <MobileNav />
      <div className={styles.sitebody}>
        <FinAnalysisLeftNav />
        <div className={styles.siteBodyRight}>
          <StructureAnalysisBody />
        </div>
      </div>
    </>
  );
}

export default StructureAnalysis;
