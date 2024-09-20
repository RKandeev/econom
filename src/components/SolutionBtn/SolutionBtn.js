import React from 'react';

import {Link} from 'react-router-dom';

import styles from './SolutionBtn.module.scss';

function SolutionBtn(props) {
  return (
    <>
      <Link className={styles.btnBlock} to={props.linkAdress}>
        <img alt="" className={styles.solutionLogo} src={props.solutionLogo}/>
        <div className={styles.solutionTitle}>{props.solutionTitle}</div>
      </Link>
    </>
  );
}

export default SolutionBtn;