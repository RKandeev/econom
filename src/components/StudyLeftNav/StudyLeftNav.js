import React from "react";
import styles from "./StudyLeftNav.module.scss";
import Menulink from "../Menulink/Menulink";
import myresults from "../../img/icon__test.svg";
import mycourse from "../../img/icon__course.svg";
import finplan from "../../img/icon__fin-plan.svg";
import finuchet from "../../img/icon__fin-uchet.svg";
import finanalys from "../../img/icon__fin-analiz.svg";
import finchoice from "../../img/icon__fin-reshenia.svg";
import profile from "../../img/icon_user.svg";
import compass from "../../img/studyIcons/8.svg";
import help from "../../img/icon/icon__help_black.svg";

function StudyLeftNav(props) {
  return (
    <>
      <div className={styles.sitebody}>
        <div className={styles.leftbody}>
          <div className={styles.bar}>
            <div className={styles.barblock}>
              <Menulink
                img={myresults}
                txt="Мои результаты"
                linksAdress="/MyResults"
              />
            </div>
            <div className={`${styles.activeblock} `}>
              <Menulink img={mycourse} txt="Обучение" linksAdress="/Study" />
            </div>
            <div className={styles.lineblock2}></div>
          </div>
          <div className={styles.bar}>
            <h3>Панель управления</h3>
            <div className={styles.barblock}>
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
            <div className={`${styles.barblock} `}>
              <Menulink
                img={finchoice}
                txt="Финансовое моделирование"
                linksAdress="/finmodeling"
              />
            </div>
            <div className={styles.lineblock}></div>
          </div>
          <div className={styles.bar}>
            <div className={styles.barblock}>
              <Menulink
                img={compass}
                txt="Навигатор возможностей"
                linksAdress="/Possibilities"
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

export default StudyLeftNav;
