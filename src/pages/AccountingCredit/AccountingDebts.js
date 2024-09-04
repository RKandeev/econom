import React from "react";
import Header from "../../components/Header/Header";
import styles from "../AccountingIncomes/AccountingIncomes.module.scss";
import Accountingleftnav from "../../components/Accountingleftnav/Accountingleftnav";
import InlineCalendar from "../../components/InlineCalendar/InlineCalendar";
import { Link } from "react-router-dom";
import credit from "../../img/crediticon.svg";
import IncomesLine from "../../components/IncomesLine/IncomesLine";
import MobileNav from "../../components/MobileNav/MobileNav";
import AccountingProgressadd from "../../components/Progressadd/AccountingProgressadd";

function AccountingDebts(props) {
  let progressValue = "77 276,12";
  let availableValue = "112 385,20";
  let titleName = "Погашение долгов";
  let titleNameType = "долги за NOTCOIN";
  let incomesValue = "-8500.00";
  return (
    <>
      <Header />
      <MobileNav />
      <div className={styles.sitebody}>
        <Accountingleftnav />
        <div className={styles.accountingBody}>
          <h2 className={styles.result_head}>
            Финансовый учет
            <div className={styles.breadcrumb}>
              <ul>
                <li>
                  <Link to={"/accounting"}>Денежные потоки</Link>
                </li>
                <li>Погашение долгов</li>
              </ul>
            </div>
          </h2>
          <AccountingProgressadd
            barcolor="#EE2B49"
            progressTitle="Учтено"
            progressValue={progressValue}
            availableValue={availableValue}
            btnTitle="Добавить"
            barwidth="627rem"
            SelectHeader1="Категория заимствований"
            SelectHeader2="Статья заимствований"
            // SelectHeader3="Тип расходов"
            modalTitle="Погашение долгов"
            commentHeight="346rem"
            selectModalVis="hidden"
          />
          <IncomesLine
            ttTitle="Это подсказка"
            titleImg={credit}
            titleName={titleName}
            titleNameType={titleNameType}
            incomesValue={incomesValue}
            valueColor="#0DA46F"
            commentToltTitle="Это комментарий - бла бла"
            notificDisplay="none"
          />
        </div>
        <InlineCalendar />
      </div>
    </>
  );
}

export default AccountingDebts;
