import React from "react";
import styles from "./IncomesLine.module.scss";
import help from "../../img/icon/icon__help.svg";
import Tolt from "../Tolt/Tolt";
import comment from "../../img/icon/icon__comment.svg";
import notification from "../../img/icon/icon__notification.svg";
import dots from "../../img/icon/icon__menu.svg";

function IncomesLine(props) {
  let color;
  if (props.incomesValue > 0) {
    color = "#0DA46F";
  } else if (props.incomesValue < 0) {
    color = "#EE2B49";
  } else {
    color = "#ABB0C3";
  }
  return (
    <>
      <div className={styles.IncomesLine}>
        <div className={styles.rightside}>
          <div className={styles.titleImg}>
            <img src={props.titleImg} alt="titleImg" />
          </div>
          <div className={styles.titleBlock}>
            <div className={styles.titleNameBlock}>
              <div className={styles.titleName}> {props.titleName}</div>
              <Tolt tooltipTitle1={props.ttTitle}>
                <img src={help} alt="" />
              </Tolt>
            </div>
            <div className={styles.titleNameType}>{props.titleNameType}</div>
          </div>
        </div>
        <div className={styles.leftside}>
          <div className={styles.axuillaryBlocks}>
            <div className={styles.comments}>
              <Tolt tooltipTitle1={props.commentToltTitle}>
                <img src={comment} alt="comment" />
              </Tolt>
            </div>
            <div
              className={styles.notifications}
              style={{ display: `${props.notificDisplay}` }}
            >
              <img src={notification} alt="notification" />
            </div>
          </div>
          <div className={styles.incomesValue} style={{ color }}>
            {props.incomesValue}
          </div>
          <div className={styles.incomesLineEdit}>
            <Tolt tooltipTitle1={props.ttTitle}>
              <img src={dots} alt="" />
            </Tolt>
          </div>
        </div>
      </div>
    </>
  );
}

export default IncomesLine;
