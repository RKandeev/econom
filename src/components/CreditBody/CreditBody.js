import React from "react";
import styles from "./CreditBody.module.scss";
import { Link } from "react-router-dom";
import DoubleProgressadd from "../DoubleProgressadd/DoubleProgressadd";
import Selectblue from "../Selectblue/Selectblue";

function CreditBody(props) {
  let CurrentDate = "Сентябрь 2022";
  let statusTitle = "Планирование не завершено";
  let statusDate = "";
  let progressValue = "77 276,12";
  let availableValue = "112 385,20";
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
            <li>Платежи по кредитам</li>
          </ul>
        </div>
        <div className={styles.headblock}>
          <h3>Платежи по кредитам</h3>
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
                      index == selectedMonth ? "month select" : "month"
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
        <DoubleProgressadd
          barcolor="#EE2B49"
          progressTitle="Запланировано"
          progressValue={progressValue}
          availableValue={availableValue}
          btnTitle="Добавить"
          barwidth="807rem"
          expensesBlock="none"
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

export default CreditBody;
