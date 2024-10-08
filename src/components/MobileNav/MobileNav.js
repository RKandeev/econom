import React, { useState } from "react";

import Mobilelink from "../Mobilelink/Mobilelink";

import help from "../../img/icon/icon__help_black.svg";
import mycourse from "../../img/icon__course.svg";
import finanalys from "../../img/icon__fin-analiz.svg";
import finplan from "../../img/icon__fin-plan.svg";
import finchoice from "../../img/icon__fin-reshenia.svg";
import finuchet from "../../img/icon__fin-uchet.svg";
import myresults from "../../img/icon__test.svg";
import profile from "../../img/icon_user.svg";
import compass from "../../img/studyIcons/8.svg";

import styles from "./MobileNav.module.scss";

function MobileNav(props) {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <>
      <nav>
        <div className={styles.mobileNav}>
          <div
            className={styles.burgerBtn}
            disabled={menuActive}
            onClick={() => setMenuActive(!menuActive)}
          >
            <div className={styles.topBar}></div>
            <div className={styles.middleBar}></div>
            <div className={styles.bottomBar}></div>
          </div>
        </div>
        <div className={styles.mobileNavLinks} disabled={menuActive}>
          <Mobilelink
            img={myresults}
            linksAdress="/MyResults"
            txt="Мои результаты"
          />
          <Mobilelink img={mycourse} linksAdress="/Study" txt="Обучение" />
          <h4>Панель управления</h4>
          <Mobilelink
            img={finplan}
            linksAdress="/finplan"
            txt="Финансовое планирование"
          />
          <Mobilelink
            img={finuchet}
            linksAdress="/accounting"
            txt="Финансовый учёт"
          />
          <Mobilelink
            img={finanalys}
            linksAdress="/FinAnalys"
            txt="Финансовый анализ"
          />
          <Mobilelink
            img={finchoice}
            linksAdress="/finmodeling"
            txt="Финансовое моделирование"
          />
          <div className={styles.myProfile}>
            <Mobilelink
              img={compass}
              linksAdress="/Possibilities"
              txt="Навигатор возможностей"
            />
          </div>
          <Mobilelink img={profile} linksAdress="/#" txt="Мой профиль" />
          <Mobilelink
            img={help}
            linksAdress="https://t.me/R_Kandeev"
            target="_blank"
            txt="Задать вопрос"
          />
        </div>
      </nav>
    </>
  );
}

export default MobileNav;
