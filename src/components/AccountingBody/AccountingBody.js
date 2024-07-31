import React from "react";
import styles from "./AccountingBody.module.scss";
import Moneyline from "../Moneyline/Moneyline";
import pocket from "../../img/pocket.svg";
import crediticon from "../../img/crediticon.svg";
import AnalysisHeader from "../AnalysisHeader/AnalysisHeader";
import AccountingLine from "../AccountingLine/AccountingLine";
import moneyback from "../../img/moneyback.svg";
import borrowings from "../../img/borrowings.svg";
import fincashout from "../../img/fincashout.svg";
import attachment from "../../img/attachment.svg";
import back from "../../img/back.svg";
import debts from "../../img/debts.svg";
import lifestyle from "../../img/lifestyle.svg";

function AccountingBody(props) {
  let accountingDate = "12 сентября 2023";
  let incomes = "Доходы";
  let credit = "Кредиты";
  return (
    <>
      <div className={styles.accountingBody}>
        <div className={styles.accountingHead}>
          <h2 className={styles.result_head}>
            Финансовый учет
            <div className={styles.breadcrumb}>
              <ul>
                <li className={styles.onlyOneBreadcrumb}>Денежные потоки</li>
              </ul>
            </div>
          </h2>
        </div>
        <AnalysisHeader
          activeLink="true"
          firstlink="/accounting"
          secondlink="/AccountingBalance"
          firsttitle="Денежные потоки"
          secondtitle="Финансовый баланс"
        />
        <Moneyline interval="дня" modalTitle="Остаток на начало дня" />
        <AccountingLine
          linkway={"/AccountingIncomes"}
          titleimg={pocket}
          titlename="Доходы"
          value={"+55000.00"}
          entriesNum="13 записей"
          checkDisplay="none"
        />
        <AccountingLine
          linkway={"/AccountingCredit"}
          titleimg={crediticon}
          titlename="Платежи по кредитам"
          checkDisplay="none"
          value={"-12446.20"}
          entriesNum="1 запись"
        />
        <AccountingLine
          linkway={"/AccountingBasicNeeds"}
          titleimg={back}
          titlename="Расходы «Базовые потребности»"
          checkDisplay="none"
          value={"-12446.20"}
          entriesNum="1 запись"
        />
        <AccountingLine
          linkway={"/AccountingLifestyle"}
          titleimg={lifestyle}
          titlename="Расходы «Образ жизни»"
          checkDisplay="none"
          value={"-12446.20"}
          entriesNum="1 запись"
        />
        <AccountingLine
          linkway={"/AccountingCachout"}
          titleimg={fincashout}
          titlename="Финансовые расходы"
          checkDisplay="none"
          value={"-12446.20"}
          entriesNum="1 запись"
        />
        <AccountingLine
          linkway={"/AccountingCashReturn"}
          titleimg={moneyback}
          titlename="Возврат вложений"
          value={"+55000.00"}
          checkDisplay="none"
          entriesNum="13 записей"
        />
        <AccountingLine
          linkway={"/AccountingBorrowings"}
          titleimg={borrowings}
          titlename="Заимствования"
          value={"+55000.00"}
          checkDisplay="none"
          entriesNum="13 записей"
        />

        <AccountingLine
          linkway={"/AccountingAttachment"}
          titleimg={attachment}
          titlename="Вложения"
          value={"-12446.20"}
          checkDisplay="none"
          entriesNum="1 запись"
        />
        <AccountingLine
          linkway={"/AccountingDebts"}
          titleimg={debts}
          titlename="Погашение долгов"
          checkDisplay="none"
          value={"-12446.20"}
          entriesNum="1 запись"
        />
      </div>
    </>
  );
}

export default AccountingBody;
