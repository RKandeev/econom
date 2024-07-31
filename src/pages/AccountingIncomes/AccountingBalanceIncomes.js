import React from "react";
import styles from "./AccountingIncomes.module.scss";
import Header from "../../components/Header/Header";
import Accountingleftnav from "../../components/Accountingleftnav/Accountingleftnav";
import { Link } from "react-router-dom";
import pocket from "../../img/pocket.svg";
import IncomesLine from "../../components/IncomesLine/IncomesLine";
import MobileNav from "../../components/MobileNav/MobileNav";
import AccountingProgressadd from "../../components/Progressadd/AccountingProgressadd";
import lockedIco from "../../img/icon/icon__lock.svg";
import checkedIco from "../../img/icon/icon__check.svg";
import newcheck from "../../img/Ellipse 1.svg";
import AccountingBalanceRight from "../../components/AccountingBalanceRight/AccountingBalanceRight";

function AccountingBalanceIncomes(props) {
  let progressValue = "77 276,12";
  let titleName = "Ограбил банк взаймы";
  let titleNameType = "Фиксированная";
  let selectedMonth = 4;
  let incomesValue = "+55000.00";
  const months = [
    {
      id: 1,
      title: "ЯНВ",
      img: "../../img/Ellipse 1.svg",
      checkStatus: lockedIco,
    },
    {
      id: 2,
      title: "ФЕВ",
      img: "../../img/Ellipse 1.svg",
      checkStatus: lockedIco,
    },
    {
      id: 3,
      title: "МАР",
      img: "../../img/Ellipse 1.svg",
      checkStatus: checkedIco,
    },
    {
      id: 4,
      title: "АПР",
      img: "../../img/Ellipse 1.svg",
      checkStatus: checkedIco,
    },
    {
      id: 5,
      title: "МАЙ",
      img: "../../img/Ellipse 1.svg",
      checkStatus: newcheck,
    },
    {
      id: 6,
      title: "ИЮН",
      img: "../../img/Ellipse 1.svg",
      checkStatus: newcheck,
    },
    {
      id: 7,
      title: "ИЮЛ",
      img: "../../img/Ellipse 1.svg",
      checkStatus: newcheck,
    },
    {
      id: 8,
      title: "АВГ",
      img: "../../img/Ellipse 1.svg",
      checkStatus: newcheck,
    },
    {
      id: 9,
      title: "СЕН",
      img: "../../img/Ellipse 1.svg",
      checkStatus: newcheck,
    },
    {
      id: 10,
      title: "ОКТ",
      img: "../../img/Ellipse 1.svg",
      checkStatus: newcheck,
    },
    {
      id: 11,
      title: "НОЯ",
      img: "../../img/Ellipse 1.svg",
      checkStatus: newcheck,
    },
    {
      id: 12,
      title: "ДЕК",
      img: "../../img/Ellipse 1.svg",
      checkStatus: newcheck,
    },
  ];
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
                  <Link to={"/AccountingBalance"}>Финансовый баланс</Link>
                </li>
                <li>Активы</li>
              </ul>
            </div>
          </h2>
          <div className={styles.monthslist}>
            <div className={styles.monthblock}>
              {months.map((elem, index) => (
                <div
                  className={index === selectedMonth ? "month select" : "month"}
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
          <AccountingProgressadd
            barcolor="#0DA46F"
            progressTitle="Сумма активов"
            progressValue={progressValue}
            btnTitle="Добавить"
            barwidth="627rem"
            SelectHeader1="Категория активов"
            SelectHeader2="Статья активов"
            SelectHeader3="Назначение"
            modalTitle="Активы"
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
        <AccountingBalanceRight />
      </div>
    </>
  );
}

export default AccountingBalanceIncomes;
