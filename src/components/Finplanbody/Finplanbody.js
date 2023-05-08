import React from "react";
import styles from "./Finplanbody.module.scss";
import Moneyline from "../Moneyline/Moneyline";
import Finline from "../Finline/Finline";
import pocket from "../../img/pocket.svg";
import newcheck from "../../img/Ellipse 1.svg";
import Selectblue from "../Selectblue/Selectblue";

function Finplanbody(props) {
  const years = ["2022", "2023"];
  let incomes = "Доходы";
  return (
    <div className={styles.finalbody}>
      <div className={styles.headblock}>
        <h3>Финансовое планирование</h3>
        <Selectblue selectArr={years} />
      </div>
      <div className={styles.monthslist}>
        <div className={styles.monthblock}>
          {props.months.map((elem) => (
            <div className={styles.month} key={elem.id}>
              <div className={styles.monthimg}>
                <img src={newcheck} alt="" />
              </div>
              <div className={styles.monthtitle}>{elem.title}</div>
            </div>
          ))}
        </div>
      </div>
      <Moneyline />
      <Finline titleimg={pocket} titlename={incomes} value={"+55000.00"} />
    </div>
  );
}

export default Finplanbody;
