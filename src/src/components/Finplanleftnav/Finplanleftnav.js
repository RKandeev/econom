import React from "react";
import styles from "./Finplanleftnav.module.scss";
import Menulink from "../Menulink/Menulink";
import myresults from "../../img/icon__test.svg";
import mycourse from "../../img/icon__course.svg";
import finplan from "../../img/icon__fin-plan.svg";
import finuchet from "../../img/icon__fin-uchet.svg";
import finanalys from "../../img/icon__fin-analiz.svg";
import finchoice from "../../img/icon__fin-reshenia.svg";
import profile from "../../img/icon_user.svg";
import help from "../../../img/icon/icon__help_black.svg";

function Finplanleftnav(props) {
  return (
    <>
      <div className={styles.sitebody}>
        <div className={styles.leftbody}>
          <div className={styles.bar}>
            <div className={styles.barblock}>
              <Menulink img={myresults} txt="Мои результаты" linksAdress="/#" />
            </div>
            <div className={`${styles.barblock} ${styles.lastblock}`}>
              <Menulink img={mycourse} txt="Обучение" linksAdress="/#" />
            </div>
          </div>
          <div className={styles.bar}>
            <h3>Мой финансист</h3>
            <div className={styles.activeblock}>
              <Menulink
                img={finplan}
                txt="Финансовое планирование"
                linksAdress="/finplan"
              />
            </div>
            <div className={styles.barblock}>
              <Menulink
                img={finuchet}
                txt="Финансовый учёт"
                linksAdress="/accounting"
              />
            </div>
            <div className={styles.barblock}>
              <Menulink
                img={finanalys}
                txt="Финансовый анализ"
                linksAdress="/FinAnalys"
              />
            </div>
            <div className={`${styles.barblock} ${styles.lastblock}`}>
              <Menulink
                img={finchoice}
                txt="Финансовые решения"
                linksAdress="/finmodeling"
              />
            </div>
          </div>
          <div className={styles.bar}>
            <div className={styles.barblock}>
              <Menulink img={profile} txt="Мой профиль" linksAdress="/#" />
            </div>
          </div>
          <div className={styles.bar}>
            <div className={styles.barblock}>
              <Menulink
                img={help}
                txt="Задать вопрос"
                linksAdress="https://t.me/R_Kandeev"
                target="_blank"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Finplanleftnav;
