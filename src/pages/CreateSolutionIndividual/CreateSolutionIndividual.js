import React from "react";
import Header from "../../components/Header/Header";
import styles from "./CreateSolutionIndividual.module.scss";
import Modelingleftnav from "../../components/Modelingleftnav/Modelingleftnav";
import { Link } from "react-router-dom";
import MobileNav from "../../components/MobileNav/MobileNav";
import Lottie from "react-lottie";
import animationData from "../../img/json/screw.json";
function CreateSolutionIndividual(props) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    renderer: "svg",
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
                <Link to={"/finmodeling"}>Финансовое моделирование</Link>
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
