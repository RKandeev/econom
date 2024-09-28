import React from "react";

import Menulink from "../Menulink/Menulink";

import help from "../../img/icon/icon__help_black.svg";
import mycourse from "../../img/icon__course.svg";
import finanalys from "../../img/icon__fin-analiz.svg";
import finplan from "../../img/icon__fin-plan.svg";
import finchoice from "../../img/icon__fin-reshenia.svg";
import finuchet from "../../img/icon__fin-uchet.svg";
import myresults from "../../img/icon__test.svg";
import profile from "../../img/icon_user.svg";
import compass from "../../img/studyIcons/8.svg";

import styles from "./StudyLeftNav.module.scss";

function StudyLeftNav(props) {
  return (
    <>
      <div className={styles.sitebody}>
        <div className={styles.leftbody}>
          <div className={styles.bar}>
            <div className={styles.barblock}>
              <Menulink
                img={myresults}
                linksAdress="/MyResults"
                txt="Мои результаты"
              />
            </div>
            <div className={`${styles.activeblock} `}>
              <Menulink img={mycourse} linksAdress="/Study" txt="Обучение" />
            </div>
            <div className={styles.lineblock2}></div>
          </div>
          <div className={styles.bar}>
            <h3>Панель управления</h3>
            <div className={styles.barblock}>
              <Menulink
                img={finplan}
                linksAdress="/finplan"
                txt="Финансовое планирование"
              />
            </div>
            <div className={styles.barblock}>
              <Menulink
                img={finuchet}
                linksAdress="/accounting"
                txt="Финансовый учёт"
              />
            </div>
            <div className={styles.barblock}>
              <Menulink
                img={finanalys}
                linksAdress="/FinAnalys"
                txt="Финансовый анализ"
              />
            </div>
            <div className={`${styles.barblock} `}>
              <Menulink
                img={finchoice}
                linksAdress="/finmodeling"
                txt="Финансовое моделирование"
              />
            </div>
            <div className={styles.lineblock}></div>
          </div>
          <div className={styles.bar}>
            <div className={styles.barblock}>
              <Menulink
                img={compass}
                linksAdress="/Possibilities"
                txt="Навигатор возможностей"
              />
            </div>
          </div>
          <div className={styles.bar}>
            <div className={styles.barblock}>
              <Menulink img={profile} linksAdress="/#" txt="Мой профиль" />
            </div>
          </div>
          <div className={styles.bar}>
            <div className={styles.barblock}>
              <Menulink
                img={help}
                linksAdress="https://t.me/R_Kandeev"
                target="_blank"
                txt="Задать вопрос"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StudyLeftNav;
