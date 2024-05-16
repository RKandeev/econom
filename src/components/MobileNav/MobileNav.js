import React, { useState } from "react";
import styles from "./MobileNav.module.scss";
import myresults from "../../img/icon__test.svg";
import mycourse from "../../img/icon__course.svg";
import finplan from "../../img/icon__fin-plan.svg";
import finuchet from "../../img/icon__fin-uchet.svg";
import finanalys from "../../img/icon__fin-analiz.svg";
import finchoice from "../../img/icon__fin-reshenia.svg";
import profile from "../../img/icon_user.svg";
import compass from "../../img/studyIcons/8.svg";
import Mobilelink from "../Mobilelink/Mobilelink";

function MobileNav(props) {
  const [menuActive, setMenuActive] = useState(false);
  console.log(menuActive);
  return (
    <>
      <nav>
        <div className={styles.mobileNav}>
          <div
            className={styles.burgerBtn}
            onClick={() => setMenuActive(!menuActive)}
            disabled={menuActive}
          >
            <div className={styles.topBar}></div>
            <div className={styles.middleBar}></div>
            <div className={styles.bottomBar}></div>
          </div>
        </div>
        <div disabled={menuActive} className={styles.mobileNavLinks}>
          <Mobilelink
            img={myresults}
            txt="Мои результаты"
            linksAdress="/MyResults"
          />
          <Mobilelink img={mycourse} txt="Обучение" linksAdress="/Study" />
          <h4>Панель управления</h4>
          <Mobilelink
            img={finplan}
            txt="Финансовое планирование"
            linksAdress="/finplan"
          />
          <Mobilelink
            img={finuchet}
            txt="Финансовый учёт"
            linksAdress="/accounting"
          />
          <Mobilelink
            img={finanalys}
            txt="Финансовый анализ"
            linksAdress="/FinAnalys"
          />
          <Mobilelink
            img={finchoice}
            txt="Финансовое моделирование"
            linksAdress="/finmodeling"
          />
          <div className={styles.myProfile}>
            <Mobilelink
              img={compass}
              txt="Навигатор возможностей"
              linksAdress="/Possibilities"
            />
          </div>
          <Mobilelink img={profile} txt="Мой профиль" linksAdress="/#" />
        </div>
      </nav>
    </>
  );
}

export default MobileNav;
