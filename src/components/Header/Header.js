import React from 'react';

import { Link } from 'react-router-dom';

import icon__logout from '../../img/icon__logout.svg';
import icon__user from '../../img/icon_user.svg';
import logo from '../../img/logo.svg';

import styles from './Header.module.scss';

function Header() {
  return (
    <>
      <div className={styles.Header}>
        <Link className={styles.logo} to="/#">
          <img alt="логотип" className={styles.desktop} src={logo} />
          <img alt="логотип" className={styles.mobile} src={logo} />
        </Link>
        <div className={styles.links}>
          <Link href="/#">О проекте</Link>
          <Link href="/#">Проверь себя</Link>
        </div>
        <div className={styles.profileLinks}>
          <Link className={styles.profileNav} href="/#"></Link>
          <Link className={styles.profileNav} to="/SignUp">
            <img alt="логотип" src={icon__user} />
          </Link>
          <Link className={`${styles.profileNav} ${styles.logout}`} href="/#">
            <img alt="логотип" src={icon__logout} />
          </Link>
        </div>
      </div>
    </>
  );
}
export default Header;
