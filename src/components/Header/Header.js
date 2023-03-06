import React from 'react';
import styles from './Header.module.scss'

function Header(props) {
    return (
        <div className={styles.Header}>
            <a href="/#"><img src="/img/logo.svg" alt="логотип"/></a>
        </div>
    );
}

export default Header;