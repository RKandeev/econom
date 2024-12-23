import React, { useContext } from 'react';

import { Context } from '../../Context';
import AccountingLine from '../AccountingLine/AccountingLine';
import AnalysisHeader from '../AnalysisHeader/AnalysisHeader';
import Moneyline from '../Moneyline/Moneyline';

import attachment from '../../img/attachment.svg';
import back from '../../img/back.svg';
import borrowings from '../../img/borrowings.svg';
import crediticon from '../../img/crediticon.svg';
import debts from '../../img/debts.svg';
import fincashout from '../../img/fincashout.svg';
import lifestyle from '../../img/lifestyle.svg';
import moneyback from '../../img/moneyback.svg';
import pocket from '../../img/pocket.svg';

import styles from './AccountingBody.module.scss';

function AccountingBody(props) {
  let accountingDate = '12 сентября 2023';
  let incomes = 'Доходы';
  let credit = 'Кредиты';

  const {accountingData, setAccountingData} = useContext(Context);

  const moneyLineData = {
    end: accountingData.end,
    income: accountingData.income,
    outcome: accountingData.outcome,
    start: accountingData.start,
  };

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
          activeLink='true'
          firstlink='/accounting'
          firsttitle='Денежные потоки'
          secondlink='/AccountingBalance'
          secondtitle='Финансовый баланс'
        />
        <Moneyline data={moneyLineData} interval='дня' modalTitle='Остаток на начало дня'/>
        <AccountingLine
          checkDisplay='none'
          entriesNum='13'
          lineWidth='97%'
          linkway='/AccountingIncomes'
          titleimg={pocket}
          titlename='Доходы'
          value= "123"
        />
        <AccountingLine
          checkDisplay='none'
          entriesNum='1'
          lineWidth='97%'
          linkway='/AccountingCredit'
          titleimg={crediticon}
          titlename='Платежи по кредитам'
          value='-12446.20'
        />
        <AccountingLine
          checkDisplay='none'
          entriesNum='1'
          lineWidth='97%'
          linkway='/AccountingBasicNeeds'
          titleimg={back}
          titlename='Расходы «Базовые потребности»'
          value='-12446.20'
        />
        <AccountingLine
          checkDisplay='none'
          entriesNum='1'
          lineWidth='97%'
          linkway='/AccountingLifestyle'
          titleimg={lifestyle}
          titlename='Расходы «Образ жизни»'
          value='-12446.20'
        />
        <AccountingLine
          checkDisplay='none'
          entriesNum='1'
          lineWidth='97%'
          linkway='/AccountingCachout'
          titleimg={fincashout}
          titlename='Финансовые расходы'
          value='-12446.20'
        />
        <AccountingLine
          checkDisplay='none'
          entriesNum='13'
          lineWidth='97%'
          linkway='/AccountingCashReturn'
          titleimg={moneyback}
          titlename='Возврат вложений'
          value='+55000.00'
        />
        <AccountingLine
          checkDisplay='none'
          entriesNum='13'
          lineWidth='97%'
          linkway='/AccountingBorrowings'
          titleimg={borrowings}
          titlename='Заимствования'
          value='+55000.00'
        />
        <AccountingLine
          checkDisplay='none'
          entriesNum='1'
          lineWidth='97%'
          linkway='/AccountingAttachment'
          titleimg={attachment}
          titlename='Вложения'
          value='-12446.20'
        />
        <AccountingLine
          checkDisplay='none'
          entriesNum='194'
          lineWidth='97%'
          linkway='/AccountingDebts'
          titleimg={debts}
          titlename='Погашение долгов'
          value='-12446.20'
        />
      </div>
    </>
  );
}

export default AccountingBody;
