import React from 'react';
import styles from './Header.module.scss'
import logo from '../../img/logo.svg'
import icon__notification from '../../img/icon__notification.svg'
import icon__user from '../../img/icon_user.svg'
import icon__logout from '../../img/icon__logout.svg'

function Header() {
    return (
        <>
            <div className={styles.Header}>
                <a href="/#" className={styles.logo}><img src={logo} alt="логотип"/></a>
                <div className={styles.links}>
                    <a href="/#">О проекте</a>
                    <a href="/#">Курсы</a>
                    <a href="/#">Проверь себя</a>
                    <a href="/#">Возможности</a>
                </div>
                <div className={styles.profileLinks}>
                    <div className={styles.mybonus}>Мои баллы: 132</div>
                    <a href="/#" className={styles.profileNav}><img src={icon__notification} alt="логотип"/></a>
                    <a href="/#" className={styles.profileNav}><img src={icon__user} alt="логотип"/></a>
                    <a href="/#" className={styles.profileNav}><img src={icon__logout} alt="логотип"/></a>
                </div>
            </div>
        </>
    );
}
export default Header;