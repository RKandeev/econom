import React from "react";
import styles from "./IncomesBody.module.scss";
import { Link } from "react-router-dom";
import Progressadd from "../Progressadd/Progressadd";

function IncomesBody(props) {
  let CurrentDate = "Сентябрь 2022";
  let statusTitle = "Планирование завершено";
  let statusDate = "32 марта 2023 года, в 16:21";
  let progressValue = "77 276,12";
  return (
    <>
      <div className={styles.IncomesBody}>
        <div className={styles.breadcrumb}>
          <ul>
            <li>
              <Link to={"*"}>Финансовое планирование</Link>
            </li>
            <li>Доходы</li>
          </ul>
        </div>
        <div className={styles.infoBread}>
          <ul>
            <li>Доходы</li>
            <li>{CurrentDate}</li>
          </ul>
        </div>
        <div className={styles.planStatus}>
          <div className={styles.statusTitle}>{statusTitle}</div>
          <div className={styles.statusDate}>{statusDate}</div>
        </div>
        <Progressadd
          barcolor="#0DA46F"
          progressTitle="Запланировано"
          progressValue={progressValue}
          btnTitle="Добавить"
          barwidth="971rem"
        />
      </div>
    </>
  );
}

export default IncomesBody;
