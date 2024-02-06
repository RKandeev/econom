import React from "react";
import Header from "../../components/Header/Header";
import styles from "./CreateSolutionPriority.module.scss";
import Modelingleftnav from "../../components/Modelingleftnav/Modelingleftnav";
import { Link } from "react-router-dom";
import FinModelingRight from "../../components/FinModelingRight/FinModelingRight";
import MobileNav from "../../components/MobileNav/MobileNav";
import CreditBlockPriority from "../../components/CreditBlockPriority/CreditBlockPriority";

function CreateSolutionPriority(props) {
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
              <li>Досрочное погашение кредитов: приоритет</li>
            </ul>
          </div>
          <h2>Создание расчета</h2>
          <CreditBlockPriority />
        </div>
        <FinModelingRight />
      </div>
    </>
  );
}

export default CreateSolutionPriority;
