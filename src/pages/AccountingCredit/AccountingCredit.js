import React from "react";
import Header from "../../components/Header/Header";
import styles from "../AccountingIncomes/AccountingIncomes.module.scss";
import Accountingleftnav from "../../components/Accountingleftnav/Accountingleftnav";
import InlineCalendar from "../../components/InlineCalendar/InlineCalendar";
import { Link } from "react-router-dom";
import DoubleProgressadd from "../../components/DoubleProgressadd/DoubleProgressadd";
import credit from "../../img/crediticon.svg";
import IncomesLine from "../../components/IncomesLine/IncomesLine";
import MobileNav from "../../components/MobileNav/MobileNav";

function AccountingCredit(props) {
  let accountingDate = "12 сентября 2023";
  let progressValue = "77 276,12";
  let availableValue = "112 385,20";
  let titleName = "Основной долг";
  let titleNameType = "Подраздел";
  let incomesValue = "-8500.00";
  return (
    <>
      <Header />
      <MobileNav />
      <div className={styles.sitebody}>
        <Accountingleftnav />
        <div className={styles.accountingBody}>
          <div className={styles.breadcrumb}>
            <ul>
              <li>
                <Link to={"/accounting"}>Финансовый учет</Link>
              </li>
              <li>Платежи по кредитам</li>
            </ul>
          </div>
          <div className={styles.accountingHead}>
            <h3>Платежи по кредитам</h3>
            <div className={styles.dot}>•</div>
            <div className={styles.accountingDate}>{accountingDate}</div>
          </div>
          <DoubleProgressadd
            barcolor="#EE2B49"
            progressTitle="Запланировано"
            progressValue={progressValue}
            availableValue={availableValue}
            btnTitle="Добавить"
            barwidth="450rem"
          />
          <IncomesLine
            ttTitle="Это подсказка"
            titleImg={credit}
            titleName={titleName}
            titleNameType={titleNameType}
            incomesValue={incomesValue}
            valueColor="#0DA46F"
            commentToltTitle="Это комментарий - бла бла"
            notificDisplay="block"
          />
        </div>
        <InlineCalendar />
      </div>
    </>
  );
}

export default AccountingCredit;
