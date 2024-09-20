import React from 'react';

import FincashoutBody from '../../components/FincashoutBody/FincashoutBody';
import Finplanleftnav from '../../components/Finplanleftnav/Finplanleftnav';
import Header from '../../components/Header/Header';
import MobileNav from '../../components/MobileNav/MobileNav';

import newcheck from '../../img/Ellipse 1.svg';
import checkedIco from '../../img/icon/icon__check.svg';
import lockedIco from '../../img/icon/icon__lock.svg';

import styles from './Credit.module.scss';

function Fincashout(props) {
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

  return (
    <>
      <Header />
      <MobileNav />
      <div className={styles.sitebody}>
        <Finplanleftnav />
        <FincashoutBody months={months} />
      </div>
    </>
  );
}

export default Fincashout;
