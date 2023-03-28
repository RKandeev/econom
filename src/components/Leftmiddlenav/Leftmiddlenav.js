import React from 'react';
import styles from './Leftmiddlenav.module.scss'
import Menulink from "../Menulink/Menulink";
import myresults from "../../img/icon__test.svg";
import mycourse from "../../img/icon__course.svg";

function Leftmiddlenav(props) {
    return (
        <>
            <div className={styles.bar}>
                <div className={styles.barblock}>
                    <Menulink img={myresults} txt="Финансовое планирование" linksAdress="/#"/>
                </div>
                <div className={styles.barblock}>
                    <Menulink img={mycourse} txt="Финансовый учёт"/>
                </div>
                <div className={styles.barblock}>
                    <Menulink img={myresults} txt="Финансовый анализ" linksAdress="/#"/>
                </div>
                <div className={styles.barblock}>
                    <Menulink img={myresults} txt="Финансовые решения" linksAdress="/#"/>
                </div>
            </div>
        </>
    );
}

export default Leftmiddlenav;