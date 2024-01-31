import React, { useState } from "react";
import styles from "./MobileNav.module.scss";
import Menulink from "../Menulink/Menulink";
import myresults from "../../img/icon__test.svg";
import mycourse from "../../img/icon__course.svg";
import finplan from "../../img/icon__fin-plan.svg";
import finuchet from "../../img/icon__fin-uchet.svg";
import finanalys from "../../img/icon__fin-analiz.svg";
import finchoice from "../../img/icon__fin-reshenia.svg";
import profile from "../../img/icon_user.svg";
import course from "../../img/icon__course.svg";
import opportunities from "../../img/icon/icon__opportunities.svg";

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
          <Menulink img={myresults} txt="Мои результаты" linksAdress="/#" />
          <Menulink img={mycourse} txt="Мои курсы" linksAdress="/#" />
          <h4>Мой финансист</h4>
          <Menulink
            img={finplan}
            txt="Финансовое планирование"
            linksAdress="/finplan"
          />
          <Menulink
            img={finuchet}
            txt="Финансовый учёт"
            linksAdress="/accounting"
          />
          <Menulink img={finanalys} txt="Финансовый анализ" linksAdress="/#" />
          <Menulink
            img={finchoice}
            txt="Финансовые решения"
            linksAdress="/finmodeling"
          />
          <div className={styles.myProfile}>
            <Menulink img={profile} txt="Мой профиль" linksAdress="/#" />
          </div>
          <Menulink img={course} txt="Курсы" linksAdress="/#" />
          <Menulink img={myresults} txt="Проверь себя" linksAdress="/#" />
          <Menulink img={opportunities} txt="Возможности" linksAdress="/#" />
        </div>
      </nav>
    </>
  );
}

export default MobileNav;
