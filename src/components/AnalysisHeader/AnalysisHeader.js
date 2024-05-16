import React from "react";
import styles from "./AnalysisHeader.module.scss";
import { Link } from "react-router-dom";

function AnalysisHeader(props) {
  return (
    <div className={styles.analysisCategoryLinks}>
      <Link
        to={"/FinAnalys"}
        className={
          props.activeLink ? styles.analysisLinkActive : styles.analysisLink
        }
      >
        Денежные потоки
      </Link>
      <Link
        to={"/AnalysisEfficiency"}
        className={
          props.activeLink ? styles.analysisLink : styles.analysisLinkActive
        }
      >
        Финансовая эффективность
      </Link>
    </div>
  );
}

export default AnalysisHeader;
