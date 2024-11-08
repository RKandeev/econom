import React from 'react';
import styles from './Spinner.module.scss';
import Lottie from 'react-lottie';
import animationData from '../../img/json/spinner.json';

function Spinner(props) {
  const defaultOptions = {
    animationData: animationData,
    autoplay: true,
    loop: true,
    renderer: 'svg',
  };
  return (
    <div>
      <div className={styles.spinner}>
        <p className={styles.spinnerAnim}>
          <Lottie options={defaultOptions}></Lottie>
        </p>
        <p className={styles.spinnerText}>Рассчитываем эффективность...</p>
      </div>
    </div>
  );
}

export default Spinner;
