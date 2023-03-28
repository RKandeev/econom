import React from 'react';
import styles from './Lefttopnav.module.scss'
import Menulink from "../Menulink/Menulink";
import myresults from "../../img/icon__test.svg";
import mycourse from "../../img/icon__course.svg";

function Lefttopnav(props) {
    return (
        <>
            <div className={styles.bar}>
                <div className={styles.barblock}>
                    <Menulink img={myresults} txt="Мои результаты" linksAdress="/#"/>
                </div>
                <div className={`${styles.barblock} ${styles.lastblock}`}>
                    <Menulink img={mycourse} txt="Мои курсы"/>
                </div>
            </div>
        </>
    );
}

export default Lefttopnav;