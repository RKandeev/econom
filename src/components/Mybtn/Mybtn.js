import React from 'react';

import styles from './Mybtn.module.scss';

function Mybtn(props) {
  return <div className={styles.addBtn}>{props.btnTitle}</div>;
}

export default Mybtn;
