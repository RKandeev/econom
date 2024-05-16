import React from "react";
import Header from "../../components/Header/Header";
import MobileNav from "../../components/MobileNav/MobileNav";
import styles from "./NoMatterAnalysis.module.scss";
import FinAnalysisLeftNav from "../../components/FinAnalysisLeftNav/FinAnalysisLeftNav";
import NoMatterAnalysisBody from "../../components/NoMatterAnalysisBody/NoMatterAnalysisBody";

function NoMatterAnalysis(props) {
  return (
    <>
      <Header />
      <MobileNav />
      <div className={styles.sitebody}>
        <FinAnalysisLeftNav />
        <NoMatterAnalysisBody />
      </div>
    </>
  );
}

export default NoMatterAnalysis;
