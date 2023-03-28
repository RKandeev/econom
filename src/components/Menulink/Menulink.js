import React from 'react';
import styles from './Menulink.module.scss'

function Menulink(props) {
    return (
        <a href={props.linksAdress} className={styles.blockImg}>
            <div className={styles.image}><img src={props.img} alt=""/></div>
            <div className={styles.category}>{props.txt}</div>
        </a>
    );
}

export default Menulink;