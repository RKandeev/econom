import React from 'react';

import { Link } from 'react-router-dom';

import CreditBlockPriority from '../../components/CreditBlockPriority/CreditBlockPriority';
import FinModelingRight from '../../components/FinModelingRight/FinModelingRight';
import Header from '../../components/Header/Header';
import MobileNav from '../../components/MobileNav/MobileNav';
import Modelingleftnav from '../../components/Modelingleftnav/Modelingleftnav';

import styles from './CreateSolutionPriority.module.scss';

function CreateSolutionPriority(props) {
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
              <li>Досрочное погашение кредитов: приоритет</li>
            </ul>
          </div>
          <h2>Создание расчета</h2>
          <CreditBlockPriority />
        </div>
        <FinModelingRight />
      </div>
    </>
  );
}

export default CreateSolutionPriority;
