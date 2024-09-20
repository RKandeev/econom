import React from 'react';

import Lottie from 'react-lottie';

import animationData from '../../img/json/screw.json';

import styles from './PossibilitiesBody.module.scss';
function PossibilitiesBody(props) {
  const defaultOptions = {
    animationData: animationData,
    autoplay: true,
    loop: true,
    renderer: 'svg',
  };

  return (
    <div className={styles.possibilitiesBlock}>
      <h2>Навигатор возможностей</h2>
      <h3>Этот раздел находится на этапе разработки. Скоро все заработает!</h3>
      <div className={styles.animationBlock}>
        <Lottie options={defaultOptions} />
      </div>
    </div>
  );
}

export default PossibilitiesBody;
