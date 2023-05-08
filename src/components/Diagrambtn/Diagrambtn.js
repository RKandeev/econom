import React from "react";
import styles from "./Diagrambtn.module.scss";

function Diagrambtn(props) {
  return (
    <a href="/" className={styles.diagramBtn}>
      <div className={styles.diagramImg}>
        <img src={props.diagramImg} alt="" />
      </div>
      <div className={styles.diagramTitle}>{props.diagramTitle}</div>
    </a>
  );
}

export default Diagrambtn;
