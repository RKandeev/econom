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
                <Link to='/finmodeling'>Финансовое моделирование</Link>
              </li>
              <li>Индивидуальные финансовые модели</li>
            </ul>
          </div>
          <h2>Разработка индивидуальной финансовой модели</h2>
          <h4 className={styles.individualModel}>
            Если ваша ситуация требует разработки индивидуальной финансовой
            модели, мы можем помочь:
          </h4>
          <Link
            className={styles.individualBtn}
            target='_blank'
            to='https://t.me/m/9JXdCiCKZDgy'
          >
            <div className={styles.develope}>
              <Lottie options={defaultOptions} />
            </div>
            <div className={styles.individualTitle}>Заказать разработку</div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default CreateSolutionIndividual;
