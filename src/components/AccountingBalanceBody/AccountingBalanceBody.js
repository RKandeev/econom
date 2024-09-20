import React from 'react';

import AccountingLine from '../AccountingLine/AccountingLine';
import AnalysisHeader from '../AnalysisHeader/AnalysisHeader';
import Selectblue from '../Selectblue/Selectblue';

import fincashout from '../../img/fincashout.svg';
import pocket from '../../img/pocket.svg';

import styles from './AccountingBalanceBody.module.scss';

function AccountingBalanceBody(props) {
  const years = ['2022', '2023'];
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
          firsttitle="Денежные потоки"
          secondlink="/AccountingBalance"
          secondtitle="Финансовый баланс"
        />
        <div className={styles.monthslist}>
          <div className={styles.monthblock}>
            {props.months.map((elem, index) => (
              <div
                key={elem.id}
                className={index == selectedMonth ? 'month select' : 'month'}
              >
                <div className="monthimg">
                  <img alt="" src={elem.checkStatus} />
                </div>
                <div className="monthtitle">{elem.title}</div>
              </div>
            ))}
          </div>
        </div>
        <AccountingLine
          checkDisplay="none"
          entriesNum="13 записей"
          linkway="/AccountingBalanceIncomes"
          titleimg={pocket}
          titlename="Активы"
          value="+55000.00"
        />

        <AccountingLine
          checkDisplay="none"
          entriesNum="1 запись"
          linkway="/AccountingBalanceDebts"
          titleimg={fincashout}
          titlename="Долги"
          value="-12446.20"
        />
      </div>
    </>
  );
}

export default AccountingBalanceBody;
