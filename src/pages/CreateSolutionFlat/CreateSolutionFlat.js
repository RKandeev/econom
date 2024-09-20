import React from 'react';

import { Link } from 'react-router-dom';

import CreditBlockFlat from '../../components/CreditBlockFlat/CreditBlockFlat';
import FinModelingRight from '../../components/FinModelingRight/FinModelingRight';
import Header from '../../components/Header/Header';
import MobileNav from '../../components/MobileNav/MobileNav';
import Modelingleftnav from '../../components/Modelingleftnav/Modelingleftnav';

import styles from './CreateSolutionFlat.module.scss';

function CreateSolutionFlat(props) {
  return (
    <>
      <Header />
      <MobileNav />
      <div className={styles.sitebody}>
        <div className={styles.leftNav}>
          <Modelingleftnav />
        </div>
        <div className={styles.CreateSolution}>
          <div className={styles.breadcrumb}>
            <ul>
              <li>
                <Link to="/finmodeling">Финансовое моделирование</Link>
              </li>
              <li>Квартира для сдачи в аренду: оценка выгод</li>
            </ul>
          </div>
          <h2>Создание расчета</h2>
          <CreditBlockFlat />
        </div>
        <FinModelingRight />
      </div>
    </>
  );
}

export default CreateSolutionFlat;
