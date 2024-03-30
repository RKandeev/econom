import React from "react";
import styles from "./Header.module.scss";
import logo from "../../img/logo.svg";
import icon__user from "../../img/icon_user.svg";
import icon__logout from "../../img/icon__logout.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className={styles.Header}>
        <Link to="/#" className={styles.logo}>
          <img src={logo} alt="логотип" className={styles.desktop} />
          <img src={logo} alt="логотип" className={styles.mobile} />
        </Link>
        <div className={styles.links}>
          <Link href="/#">О проекте</Link>
          <Link href="/#">Проверь себя</Link>
        </div>
        <div className={styles.profileLinks}>
          <Link href="/#" className={styles.profileNav}></Link>
          <Link href="/#" className={styles.profileNav}>
            <img src={icon__user} alt="логотип" />
          </Link>
          <Link href="/#" className={`${styles.profileNav} ${styles.logout}`}>
            <img src={icon__logout} alt="логотип" />
          </Link>
        </div>
      </div>
    </>
  );
}
export default Header;
