import React from 'react';

import Lottie from 'react-lottie';
import { Link } from 'react-router-dom';

import Header from '../../components/Header/Header';
import MobileNav from '../../components/MobileNav/MobileNav';
import Modelingleftnav from '../../components/Modelingleftnav/Modelingleftnav';
import animationData from '../../img/json/screw.json';

import styles from './CreateSolutionIndividual.module.scss';
function CreateSolutionIndividual(props) {
  const defaultOptions = {
    animationData: animationData,
    autoplay: true,
    loop: true,
    renderer: 'svg',
  };

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
              <li>Конструктор индивидуальных ситуаций</li>
            </ul>
          </div>
          <h2>Данный раздел находится на этапе разработки</h2>
          <div className={styles.develope}>
            <Lottie options={defaultOptions} />
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateSolutionIndividual;
