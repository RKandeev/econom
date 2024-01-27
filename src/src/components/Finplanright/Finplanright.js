import React from "react";
import styles from "./Finplanright.module.scss";
import Diagrambtn from "../Diagrambtn/Diagrambtn";
import diagimg from "../../img/icon/icon__chart.svg";

function Finplanright(props) {
  return (
    <div className={styles.finplanright}>
      <h4>Сводные диаграммы</h4>
      <div className={styles.rightblocks}>
        <div className={styles.diagramblock}></div>
      </div>
      <Diagrambtn diagramImg={diagimg} diagramTitle="Свод Денежных потоков" />
    </div>
  );
}

export default Finplanright;
