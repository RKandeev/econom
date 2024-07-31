import React, { useState, lazy } from "react";
import styles from "./Diagrambtn.module.scss";
import Modal from "../Modal/Modal";

function Diagrambtn(props) {
  const [chartModalActive, SetChartModalActive] = useState(false);
  const [seed, setSeed] = useState(1);
  const reset = () => {
    setSeed(Math.random());
  };
  return (
    <>
      <div
        className={styles.diagramBtn}
        onClick={() => {
          SetChartModalActive(true);
          reset();
        }}
      >
        <div className={styles.diagramImg}>
          <img
            src={props.diagramImg}
            className={styles.diagramImgActive}
            alt=""
          />
        </div>
        <div className={styles.diagramTitle}>{props.diagramTitle}</div>
      </div>
      <Modal
        key={seed}
        active={chartModalActive}
        SetActive={SetChartModalActive}
        modalTitle={props.modalTitle}
      >
        {props.children}
      </Modal>
    </>
  );
}

export default Diagrambtn;
