import React from 'react';
import Header from "../../components/Header/Header";
import styles from "./Finplan.module.scss";
import Menulink from "../../components/Menulink/Menulink";
import myresults from "../../img/icon__test.svg";
import mycourse from "../../img/icon__course.svg";
import finplan from "../../img/icon__fin-plan.svg"
import finuchet from "../../img/icon__fin-uchet.svg"
import finanalys from "../../img/icon__fin-analiz.svg"
import finchoice from "../../img/icon__fin-reshenia.svg"
import profile from "../../img/icon_user.svg"

function Finplan() {
    return (
        <>
            <Header/>
            <div className={styles.bar}>
                <div className={styles.barblock}>
                    <Menulink img={myresults} txt="Мои результаты" linksAdress="/#"/>
                </div>
                <div className={`${styles.barblock} ${styles.lastblock}`}>
                    <Menulink img={mycourse} txt="Мои курсы" linksAdress="/#"/>
                </div>
            </div>
            <div className={styles.bar}>
                <h3>Мой финансист</h3>
                <div className={`${styles.barblock} ${styles.activeblock}`}>
                    <Menulink img={finplan} txt="Финансовое планирование" linksAdress="/#"/>
                </div>
                <div className={styles.barblock}>
                    <Menulink img={finuchet} txt="Финансовый учёт" linksAdress="/#"/>
                </div>
                <div className={styles.barblock}>
                    <Menulink img={finanalys} txt="Финансовый анализ" linksAdress="/#"/>
                </div>
                <div className={`${styles.barblock} ${styles.lastblock}`}>
                    <Menulink img={finchoice} txt="Финансовые решения" linksAdress="/#"/>
                </div>
            </div><div className={styles.bar}>
                <div className={styles.barblock}>
                    <Menulink img={profile} txt="Мой профиль" linksAdress="/#"/>
                </div>
            </div>

        </>
    );
}

export default Finplan;