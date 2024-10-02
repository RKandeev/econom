import React from "react";

import { Link } from "react-router-dom";

import DoubleProgressaddCredit from "../DoubleProgressadd/DoubleProgressaddCredit";
import Selectblue from "../Selectblue/Selectblue";

import styles from "./CreditBody.module.scss";

function CreditBody(props) {
  let CurrentDate = 'Сентябрь 2022';
  let statusTitle = 'Планирование не завершено';
  let statusDate = '';
  let progressValue = '77 276,12';
  let availableValue = '112 385,20';
  const years = ['2022', '2023'];
  let selectedMonth = 4;

  return (
    <>
      <div className={styles.IncomesBody}>
        <div className={styles.breadcrumb}>
          <ul>
            <li>
              <Link to="/finplan">Финансовое планирование</Link>
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
                    key={elem.id}
                    className={
                      index == selectedMonth ? 'month select' : 'month'
                    }
                  >
                    <div className="monthimg">
                      <img alt="" src={elem.checkStatus} />
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
        <DoubleProgressaddCredit
          barcolor="#EE2B49"
          barwidth="807rem"
          btnTitle="Добавить"
          expensesBlock="none"
          progressTitle="Запланировано"
          progressValue={progressValue}
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
