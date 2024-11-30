import React from 'react';

import { Link } from 'react-router-dom';

import Accountingleftnav from '../../components/Accountingleftnav/Accountingleftnav';
import Header from '../../components/Header/Header';
import IncomesLine from '../../components/IncomesLine/IncomesLine';
import InlineCalendar from '../../components/InlineCalendar/InlineCalendar';
import MobileNav from '../../components/MobileNav/MobileNav';
import AccountingProgressadd from '../../components/Progressadd/AccountingProgressadd';

import pocket from '../../img/pocket.svg';

import styles from './AccountingIncomes.module.scss';

function AccountingCashReturn(props) {
  let progressValue = '77 276,12';
  let titleName = 'Возврат вложений';
  let titleNameType = 'Фиксированная';
  let incomesValue = '+55000.00';

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
                  <Link to='/accounting'>Денежные потоки</Link>
                </li>
                <li>Возврат вложений</li>
              </ul>
            </div>
          </h2>

          <AccountingProgressadd
            barcolor='#0DA46F'
            barwidth='627rem'
            btnTitle='Добавить'
            commentHeight='346rem'
            modalTitle='Возврат вложений'
            progressTitle='Учтено'
            progressValue={progressValue}
            SelectHeader1='Категория вложений'
            SelectHeader2='Статья вложений'
            selectModalVis3='none'
            secondSumVis='none'
            firstSum='Сумма'
          />
          <IncomesLine
            commentToltTitle='Это комментарий - бла бла'
            incomesValue={incomesValue}
            notificDisplay='none'
            titleImg={pocket}
            titleName={titleName}
            titleNameType={titleNameType}
            ttTitle='Это подсказка'
            valueColor='#0DA46F'
          />
        </div>
        <InlineCalendar />
      </div>
    </>
  );
}

export default AccountingCashReturn;
