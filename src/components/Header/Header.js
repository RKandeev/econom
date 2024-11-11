import React, { useContext } from 'react';

import { Link, useNavigate } from 'react-router-dom';

import { Context } from '../../Context';

import icon__logout from '../../img/icon__logout.svg';
import logo from '../../img/logo.svg';

import styles from './Header.module.scss';

function Header() {
  const { userInfo } = useContext(Context);
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem('token');
    navigate('/SignIn');
  };

  return (
    <>
      <div className={styles.Header}>
        <Link className={styles.logo} to='/#'>
          <img alt='логотип' className={styles.desktop} src={logo} />
          <img alt='логотип' className={styles.mobile} src={logo} />
        </Link>
        <div className={styles.links}>
          <Link
            className={styles.donateBtn}
            to='https://www.donationalerts.com/r/rustsoft16'
            target='_blank'
          >
            Поддержать проект
          </Link>
          <Link href='/index.html'>О проекте</Link>
          <Link href='/check.html'>Проверь себя</Link>
        </div>
        <div className={styles.profileLinks}>
          <Link className={styles.profileNav} href='/#'></Link>
          <Link className={styles.profileNav} to='/'>
            {userInfo && userInfo.name}
          </Link>
          <button
            className={`${styles.profileNav} ${styles.logout}`}
            onClick={logoutHandler}
          >
            <img alt='логотип' src={icon__logout} />
          </button>
        </div>
      </div>
    </>
  );
}
export default Header;
