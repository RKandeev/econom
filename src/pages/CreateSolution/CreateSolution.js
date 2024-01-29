import React from "react";
import Header from "../../components/Header/Header";
import styles from "./CreateSolution.module.scss";
import Modelingleftnav from "../../components/Modelingleftnav/Modelingleftnav";
import { Link } from "react-router-dom";
import CreditBlock from "../../components/CreditBlock/CreditBlock";

function CreateSolution(props) {
  return (
    <>
      <Header />
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
              <li>Рефинансирование кредитов: целесообразность</li>
            </ul>
          </div>
          <h2>Создание решения</h2>
          <CreditBlock />
        </div>
      </div>
    </>
  );
}

export default CreateSolution;
