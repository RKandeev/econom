import React from "react";
import styles from "./PossibilitiesBody.module.scss";
import animationData from "../../img/json/screw.json";
import Lottie from "react-lottie";
function PossibilitiesBody(props) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    renderer: "svg",
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
