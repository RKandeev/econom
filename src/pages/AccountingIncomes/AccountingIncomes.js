import React from "react";
import styles from "./AccountingIncomes.module.scss";
import Header from "../../components/Header/Header";
import Accountingleftnav from "../../components/Accountingleftnav/Accountingleftnav";
import InlineCalendar from "../../components/InlineCalendar/InlineCalendar";
import { Link } from "react-router-dom";
import Progressadd from "../../components/Progressadd/Progressadd";
import pocket from "../../img/pocket.svg";
import IncomesLine from "../../components/IncomesLine/IncomesLine";

function AccountingIncomes(props) {
  let accountingDate = "12 сентября 2023";
  let progressValue = "77 276,12";
  let titleName = "Заработная плата";
  let titleNameType = "Фиксированная";
  let incomesValue = "+55000.00";
  return (
    <>
      <Header />
      <div className={styles.sitebody}>
        <Accountingleftnav />
        <div className={styles.accountingBody}>
          <div className={styles.breadcrumb}>
            <ul>
              <li>
                <Link to={"/accounting"}>Финансовый учет</Link>
              </li>
              <li>Доходы</li>
            </ul>
          </div>
          <div className={styles.accountingHead}>
            <h3>Доходы</h3>
            <div className={styles.dot}>•</div>
            <div className={styles.accountingDate}>{accountingDate}</div>
          </div>
          <Progressadd
            barcolor="#0DA46F"
            progressTitle="Учтено"
            progressValue={progressValue}
            btnTitle="Добавить"
            barwidth="627rem"
          />
          <IncomesLine
            ttTitle="Это подсказка"
            titleImg={pocket}
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

export default AccountingIncomes;
