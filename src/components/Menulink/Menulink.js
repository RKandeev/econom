import React from 'react';

import { Link } from 'react-router-dom';

import styles from './Menulink.module.scss';

function Menulink(props) {
  return (
    <Link
      to={props.linksAdress}
      className={styles.blockImg}
      target={props.target}
    >
      <div className={styles.image}>
        <img alt="" src={props.img} />
      </div>
      <div className={styles.category}>{props.txt}</div>
    </Link>
  );
}

export default Menulink;
