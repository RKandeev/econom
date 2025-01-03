import React from 'react';

import { Link } from 'react-router-dom';

import AccountingBalanceRight from '../../components/AccountingBalanceRight/AccountingBalanceRight';
import Accountingleftnav from '../../components/Accountingleftnav/Accountingleftnav';
import Header from '../../components/Header/Header';
import IncomesLine from '../../components/IncomesLine/IncomesLine';
import MobileNav from '../../components/MobileNav/MobileNav';
import AccountingProgressadd from '../../components/Progressadd/AccountingProgressadd';
import Selectblue from '../../components/Selectblue/Selectblue';

import credit from '../../img/crediticon.svg';
import newcheck from '../../img/Ellipse 1.svg';
import checkedIco from '../../img/icon/icon__check.svg';
import lockedIco from '../../img/icon/icon__lock.svg';

import styles from '../AccountingIncomes/AccountingIncomes.module.scss';

function AccountingBalanceDebts(props) {
  let progressValue = '-77 276,12';
  let availableValue = '112 385,20';
  let titleName = 'Задолжал хомяку';
  let titleNameType = 'Скин в кредит';
  let selectedMonth = 4;

  let incomesValue = '-8500.00';
  const months = [
    {
      checkStatus: lockedIco,
      id: 1,
      img: '../../img/Ellipse 1.svg',
      title: 'ЯНВ',
    },
    {
      checkStatus: lockedIco,
      id: 2,
      img: '../../img/Ellipse 1.svg',
      title: 'ФЕВ',
    },
    {
      checkStatus: checkedIco,
      id: 3,
      img: '../../img/Ellipse 1.svg',
      title: 'МАР',
    },
    {
      checkStatus: checkedIco,
      id: 4,
      img: '../../img/Ellipse 1.svg',
      title: 'АПР',
    },
    {
      checkStatus: newcheck,
      id: 5,
      img: '../../img/Ellipse 1.svg',
      title: 'МАЙ',
    },
    {
      checkStatus: newcheck,
      id: 6,
      img: '../../img/Ellipse 1.svg',
      title: 'ИЮН',
    },
    {
      checkStatus: newcheck,
      id: 7,
      img: '../../img/Ellipse 1.svg',
      title: 'ИЮЛ',
    },
    {
      checkStatus: newcheck,
      id: 8,
      img: '../../img/Ellipse 1.svg',
      title: 'АВГ',
    },
    {
      checkStatus: newcheck,
      id: 9,
      img: '../../img/Ellipse 1.svg',
      title: 'СЕН',
    },
    {
      checkStatus: newcheck,
      id: 10,
      img: '../../img/Ellipse 1.svg',
      title: 'ОКТ',
    },
    {
      checkStatus: newcheck,
      id: 11,
      img: '../../img/Ellipse 1.svg',
      title: 'НОЯ',
    },
    {
      checkStatus: newcheck,
      id: 12,
      img: '../../img/Ellipse 1.svg',
      title: 'ДЕК',
    },
  ];
  const years = ['2022', '2023'];

  return (
    <>
      <Header />
      <MobileNav />
      <div className={styles.sitebody}>
        <Accountingleftnav />
        <div className={styles.accountingBody}>
          <div className={styles.accountingHead}>
            <h2 className={styles.result_head}>
              Финансовый учет
              <div className={styles.breadcrumb}>
                <ul>
                  <li>
                    <Link to='/AccountingBalance'>Финансовый баланс</Link>
                  </li>
                  <li>Долги</li>
                </ul>
              </div>
            </h2>
            <Selectblue selectArr={years} />
          </div>
          <div className={styles.monthslist}>
            <div className={styles.monthblock}>
              {months.map((elem, index) => (
                <div
                  key={elem.id}
                  className={index === selectedMonth ? 'month select' : 'month'}
                >
                  <div className='monthimg'>
                    <img alt='' src={elem.checkStatus} />
                  </div>
                  <div className='monthtitle'>{elem.title}</div>
                </div>
              ))}
            </div>
          </div>
          <AccountingProgressadd
            availableValue={availableValue}
            barcolor='#EE2B49'
            barwidth='627rem'
            btnTitle='Добавить'
            progressTitle='Учтено'
            progressValue={progressValue}
            SelectHeader1='Категория заимствований'
            SelectHeader2='Статья заимствований'
            SelectHeader3='Характер задолженности'
            modalTitle='Долги'
            selectModalVis3='none'
            secondSumVis='none'
            firstSum='Сумма'
          />
          <IncomesLine
            commentToltTitle='Это комментарий - бла бла'
            incomesValue={incomesValue}
            notificDisplay='none'
            titleImg={credit}
            titleName={titleName}
            titleNameType={titleNameType}
            ttTitle='Это подсказка'
            valueColor='#0DA46F'
          />
        </div>
        <AccountingBalanceRight />
      </div>
    </>
  );
}

export default AccountingBalanceDebts;
