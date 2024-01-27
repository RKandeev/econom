import React from "react";
import dots from "../../img/icon/icon__menu.svg";
import Tolt from "../Tolt/Tolt";

function MySolution(props) {
  return (
    <>
      <div className={styles.solutionBlock}>
        <div className={styles.solutionTitle}>{props.solutionTitle}</div>
        <div className={styles.solutionType}>{props.solutionType}</div>
      </div>
      <Tolt tooltipTitle1={props.ttTitle}>
        <img src={dots} alt="" />
      </Tolt>
    </>
  );
}

export default MySolution;
