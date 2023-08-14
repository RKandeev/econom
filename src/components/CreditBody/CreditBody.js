import React from "react";
import styles from "./CreditBody.module.scss";
import { Link } from "react-router-dom";
import DoubleProgressadd from "../DoubleProgressadd/DoubleProgressadd";

function CreditBody(props) {
  let CurrentDate = "Сентябрь 2022";
  let statusTitle = "Планирование не завершено";
  let statusDate = "";
  let progressValue = "77 276,12";
  let availableValue = "112 385,20";
  return (
    <>
      <div className={styles.IncomesBody}>
        <div className={styles.breadcrumb}>
          <ul>
            <li>
              <Link to={"*"}>Финансовое планирование</Link>
            </li>
            <li>Платежи по кредитам</li>
          </ul>
        </div>
        <div className={styles.infoBread}>
          <ul>
            <li>Платежи по кредитам</li>
            <li>{CurrentDate}</li>
          </ul>
        </div>
        <div className={styles.planStatus}>
          <div className={styles.statusTitle}>{statusTitle}</div>
          <div className={styles.statusDate}>{statusDate}</div>
        </div>
        <DoubleProgressadd
          barcolor="#EE2B49"
          progressTitle="Запланировано"
          progressValue={progressValue}
          availableValue={availableValue}
          btnTitle="Добавить"
          barwidth="807rem"
        />
      </div>
    </>
  );
}

export default CreditBody;
