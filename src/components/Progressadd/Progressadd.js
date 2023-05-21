import React, { useState } from "react";
import styles from "./Progressadd.module.scss";
import Mybtn from "../Mybtn/Mybtn";
import IncomesLine from "../IncomesLine/IncomesLine";
import pocket from "../../img/pocket.svg";
import Modal from "../Modal/Modal";

function Progressadd(props) {
  let titleName = "Заработная плата";
  let titleNameType = "Фиксированная";
  let incomesValue = "+55000.00";
  const [addModalActive, SetAddModalActive] = useState(false);
  return (
    <>
      <div className={styles.progressTitle}>{props.progressTitle}</div>
      <div className={styles.barLineBlock}>
        <div
          className={styles.barLine}
          style={{ background: `${props.barcolor}` }}
        >
          {props.progressValue}
        </div>
        <div
          onClick={() => {
            SetAddModalActive(true);
          }}
        >
          <Mybtn btnTitle="Добавить" />
        </div>
      </div>
      <IncomesLine
        ttTitle="Это подсказка"
        titleImg={pocket}
        titleName={titleName}
        titleNameType={titleNameType}
        incomesValue={incomesValue}
        valueColor="#0DA46F"
        commentToltTitle="Это комментарий - бла бла"
      />
      <Modal
        modalTitle="Доходы"
        active={addModalActive}
        SetActive={SetAddModalActive}
      ></Modal>
    </>
  );
}

export default Progressadd;
