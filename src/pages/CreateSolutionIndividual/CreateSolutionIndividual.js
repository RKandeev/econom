import React from "react";
import Header from "../../components/Header/Header";
import styles from "./CreateSolutionIndividual.module.scss";
import Modelingleftnav from "../../components/Modelingleftnav/Modelingleftnav";
import { Link } from "react-router-dom";
import FinModelingRight from "../../components/FinModelingRight/FinModelingRight";
import MobileNav from "../../components/MobileNav/MobileNav";
import developimg from "../../img/developing-marketing-outline-svgrepo-com.svg";
function CreateSolutionIndividual(props) {
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
            <img src={developimg} alt="" />
          </div>
        </div>
        {/*<FinModelingRight />*/}
      </div>
    </>
  );
}

export default CreateSolutionIndividual;
