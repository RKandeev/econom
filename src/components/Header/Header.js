import React from "react";
import styles from "./Header.module.scss";
import logo from "../../img/logo.svg";
import icon__notification from "../../img/icon__notification.svg";
import icon__user from "../../img/icon_user.svg";
import icon__logout from "../../img/icon__logout.svg";
import { Link } from "react-router-dom";
import Finplan from "../../pages/Finplan/Finplan";

function Header() {
  return (
    <>
      <div className={styles.Header}>
        <Link to="/#" className={styles.logo}>
          <img src={logo} alt="логотип" />
        </Link>
        <div className={styles.links}>
          <Link href="/#">О проекте</Link>
          <Link to={Finplan}>Курсы</Link>
          <Link href="/#">Проверь себя</Link>
          <Link href="/#">Возможности</Link>
        </div>
        <div className={styles.profileLinks}>
          <div className={styles.mybonus}>Мои баллы: 132</div>
          <Link href="/#" className={styles.profileNav}>
            <img src={icon__notification} alt="логотип" />
          </Link>
          <Link href="/#" className={styles.profileNav}>
            <img src={icon__user} alt="логотип" />
          </Link>
          <Link href="/#" className={styles.profileNav}>
            <img src={icon__logout} alt="логотип" />
          </Link>
        </div>
      </div>
    </>
  );
}
export default Header;
