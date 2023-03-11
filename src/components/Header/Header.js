import React from 'react';
import styles from './Header.module.scss'

function Header() {
    return (
        <>
            <div className={styles.Header}>
                <a href="/#" className={styles.logo}><img src="/img/logo.svg" alt="логотип"/></a>
                <div className={styles.links}>
                    <a href="/#">О проекте</a>
                    <a href="/#">Курсы</a>
                    <a href="/#">Проверь себя</a>
                    <a href="/#">Возможности</a>
                </div>
                <div className={styles.profileLinks}>
                    <div className={styles.mybonus}>Мои баллы: 132</div>
                    <a href="/#" className={styles.profileNav}><img src="/img/icon__notification.svg" alt="логотип"/></a>
                    <a href="/#" className={styles.profileNav}><img src="/img/icon__user.svg" alt="логотип"/></a>
                    <a href="/#" className={styles.profileNav}><img src="/img/icon__logout.svg" alt="логотип"/></a>
                </div>
            </div>
        </>
    );
}
export default Header;