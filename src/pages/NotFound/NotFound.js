import React from 'react';
import Header from '../../components/Header/Header';
import MobileNav from '../../components/MobileNav/MobileNav';
import styles from './NotFound.module.scss';
import Lottie from 'react-lottie';
import animationData from '../../img/json/404.json';

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
      <div className={styles.anim404}>
        <Lottie options={defaultOptions}></Lottie>
      </div>
    </>
  );
}

export default NotFound;
