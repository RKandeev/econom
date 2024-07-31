import React from "react";
import styles from "./AccountingBalanceBody.module.scss";
import AnalysisHeader from "../AnalysisHeader/AnalysisHeader";
import AccountingLine from "../AccountingLine/AccountingLine";
import pocket from "../../img/pocket.svg";
import fincashout from "../../img/fincashout.svg";
import Selectblue from "../Selectblue/Selectblue";

function AccountingBalanceBody(props) {
  const years = ["2022", "2023"];
  let selectedMonth = 4;
  return (
    <>
      <div className={styles.accountingBody}>
        <div className={styles.accountingHead}>
          <h2 className={styles.result_head}>
            Финансовый учет
            <div className={styles.breadcrumb}>
              <ul>
                <li className={styles.onlyOneBreadcrumb}>Финансовый баланс</li>
              </ul>
            </div>
          </h2>
          <Selectblue selectArr={years} />
        </div>
        <AnalysisHeader
          activeLink=""
          firstlink="/accounting"
          secondlink="/AccountingBalance"
          firsttitle="Денежные потоки"
          secondtitle="Финансовый баланс"
        />
        <div className={styles.monthslist}>
          <div className={styles.monthblock}>
            {props.months.map((elem, index) => (
              <div
                className={index == selectedMonth ? "month select" : "month"}
                key={elem.id}
              >
                <div className="monthimg">
                  <img src={elem.checkStatus} alt="" />
                </div>
                <div className="monthtitle">{elem.title}</div>
              </div>
            ))}
          </div>
        </div>
        <AccountingLine
          checkDisplay="none"
          linkway={"/AccountingBalanceIncomes"}
          titleimg={pocket}
          titlename="Активы"
          value={"+55000.00"}
          entriesNum="13 записей"
        />

        <AccountingLine
          checkDisplay="none"
          linkway={"/AccountingBalanceDebts"}
          titleimg={fincashout}
          titlename="Долги"
          value={"-12446.20"}
          entriesNum="1 запись"
        />
      </div>
    </>
  );
}

export default AccountingBalanceBody;
