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

function AccountingDebts(props) {
  let progressValue = '77 276,12';
  let availableValue = '112 385,20';
  let titleName = 'Погашение долгов';
  let titleNameType = 'долги за NOTCOIN';
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
                <li>Погашение долгов</li>
              </ul>
            </div>
          </h2>
          <AccountingProgressadd
            availableValue={availableValue}
            barcolor="#EE2B49"
            barwidth="627rem"
            btnTitle="Добавить"
            commentHeight="346rem"
            progressTitle="Учтено"
            progressValue={progressValue}
            SelectHeader1="Категория заимствований"
            selectModalVis="hidden"
            SelectHeader2="Статья заимствований"
            // SelectHeader3="Тип расходов"
            modalTitle="Погашение долгов"
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

export default AccountingDebts;
