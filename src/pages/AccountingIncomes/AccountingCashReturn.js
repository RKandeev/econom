import React from "react";
import styles from "./AccountingIncomes.module.scss";
import Header from "../../components/Header/Header";
import Accountingleftnav from "../../components/Accountingleftnav/Accountingleftnav";
import InlineCalendar from "../../components/InlineCalendar/InlineCalendar";
import { Link } from "react-router-dom";
import pocket from "../../img/pocket.svg";
import IncomesLine from "../../components/IncomesLine/IncomesLine";
import MobileNav from "../../components/MobileNav/MobileNav";
import AccountingProgressadd from "../../components/Progressadd/AccountingProgressadd";

function AccountingCashReturn(props) {
  let progressValue = "77 276,12";
  let titleName = "Возврат вложений";
  let titleNameType = "Фиксированная";
  let incomesValue = "+55000.00";
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
                <li>Возврат вложений</li>
              </ul>
            </div>
          </h2>

          <AccountingProgressadd
            barcolor="#0DA46F"
            progressTitle="Учтено"
            progressValue={progressValue}
            btnTitle="Добавить"
            barwidth="627rem"
            SelectHeader1="Категория вложений"
            SelectHeader2="Статья вложений"
            modalTitle="Возврат вложений"
            selectModalVis="hidden"
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

export default AccountingCashReturn;
