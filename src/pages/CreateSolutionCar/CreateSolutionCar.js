import React from 'react';

import { Link } from 'react-router-dom';

import CreditBlockCar from '../../components/CreditBlockCar/CreditBlockCar';
import FinModelingRight from '../../components/FinModelingRight/FinModelingRight';
import Header from '../../components/Header/Header';
import MobileNav from '../../components/MobileNav/MobileNav';
import Modelingleftnav from '../../components/Modelingleftnav/Modelingleftnav';

import styles from './CreateSolutionCar.module.scss';

function CreateSolutionCar(props) {
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
              <li>Покупка автомобиля: оценка финансовых последствий</li>
            </ul>
          </div>
          <h2>Создание расчета</h2>
          <CreditBlockCar />
        </div>
        <FinModelingRight />
      </div>
    </>
  );
}

export default CreateSolutionCar;
