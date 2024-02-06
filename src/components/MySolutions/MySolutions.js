import React from "react";
import styles from "./MySolutions.module.scss";
import MySolution from "../MySolution/MySolution";

function MySolutions(props) {
  return (
    <>
      <div className={styles.solutionsBlock}>
        <h3>Мои расчеты</h3>
        <div className={styles.solutionList}>
          <MySolution
            solutionTitle="Название расчета"
            solutionType="Досрочное погашение кредитов: целесообразность"
          />
          <MySolution
            solutionTitle="Название расчета"
            solutionType="Досрочное погашение кредитов: приоритет"
          />
        </div>
      </div>
    </>
  );
}

export default MySolutions;
