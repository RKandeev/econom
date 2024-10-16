import React from 'react';

import { Link } from 'react-router-dom';

import Accountingleftnav from '../../components/Accountingleftnav/Accountingleftnav';
import Header from '../../components/Header/Header';
import IncomesLine from '../../components/IncomesLine/IncomesLine';
import InlineCalendar from '../../components/InlineCalendar/InlineCalendar';
import MobileNav from '../../components/MobileNav/MobileNav';
import AccountingProgressadd from '../../components/Progressadd/AccountingProgressadd';

import credit from '../../img/crediticon.svg';

import styles from '../AccountingIncomes/AccountingIncomes.module.scss';

function AccountingCredit() {
  let progressValue = '77 276,12';
  let availableValue = '112 385,20';
  let titleName = 'Основной долг';
  let titleNameType = 'Подраздел';
  let incomesValue = '-8500.00';

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
                  <Link to="/accounting">Денежные потоки</Link>
                </li>
                <li>Платежи по кредитам</li>
              </ul>
            </div>
          </h2>
          <AccountingProgressadd
            availableValue={availableValue}
            barcolor="#EE2B49"
            barwidth="627rem"
            btnTitle="Добавить"
            commentHeight="346rem"
            modalTitle="Платежи по кредитам"
            SelectHeader2="Вид кредита"
            // SelectHeader1="Основной долг / Проценты"
            progressValue={progressValue}
            // SelectHeader3="Тип дохода"
            progressTitle="Учтено"
          />
          <IncomesLine
            commentToltTitle="Это комментарий - бла бла"
            incomesValue={incomesValue}
            notificDisplay="none"
            titleImg={credit}
            titleName={titleName}
            titleNameType={titleNameType}
            ttTitle="Это подсказка"
            valueColor="#0DA46F"
          />
        </div>
        <InlineCalendar />
      </div>
    </>
  );
}

export default AccountingCredit;
