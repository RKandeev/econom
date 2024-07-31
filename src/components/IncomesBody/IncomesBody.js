import React from "react";
import styles from "./IncomesBody.module.scss";
import { Link } from "react-router-dom";
import Progressadd from "../Progressadd/Progressadd";
import Selectblue from "../Selectblue/Selectblue";

function IncomesBody(props) {
  let statusTitle = "Планирование завершено";
  let statusDate = "32 марта 2023 года, в 16:21";
  let progressValue = "77 276,12";
  const years = ["2022", "2023"];
  let selectedMonth = 4;
  return (
    <>
      <div className={styles.IncomesBody}>
        <div className={styles.breadcrumb}>
          <ul>
            <li>
              <Link to={"/finplan"}>Финансовое планирование</Link>
            </li>
            <li>Доходы</li>
          </ul>
        </div>
        <div className={styles.headblock}>
          <h3>Доходы</h3>
          <Selectblue selectArr={years} />
        </div>
        <div className={styles.monthslist}>
          <div className={styles.monthblock}>
            {props.months.map(
              (elem, index) => (
                console.log(index),
                (
                  <div
                    className={
                      index === selectedMonth ? "month select" : "month"
                    }
                    key={elem.id}
                  >
                    <div className="monthimg">
                      <img src={elem.checkStatus} alt="" />
                    </div>
                    <div className="monthtitle">{elem.title}</div>
                  </div>
                )
              )
            )}
          </div>
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
          barwidth="931rem"
        />
        <div className={styles.planDone}>
          <input
            className={styles.submitBtn}
            type="submit"
            value="Завершить планирование"
          />
        </div>
      </div>
    </>
  );
}

export default IncomesBody;
