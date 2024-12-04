import React from 'react';
import Header from '../../components/Header/Header';
import MobileNav from '../../components/MobileNav/MobileNav';
import styles from './NotFound.module.scss';
import Lottie from 'react-lottie';
import animationData from '../../img/json/404.json';
import { Link } from 'react-router-dom';

function NotFound(props) {
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
      <div className={styles.notFoundPage}>
        <div className={styles.anim404}>
          <Lottie options={defaultOptions}></Lottie>
        </div>
        <div className={styles.text404}>
          <h3>Ваша финансовая эффективность вышла за рамки реальности!</h3>
          <p>
            Вы можете пока перейти на <Link to='/'>Главную страницу</Link> для
            оценки Ваших результатов{' '}
          </p>
        </div>
      </div>
    </>
  );
}

export default NotFound;
