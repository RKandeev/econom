import React from 'react';

import { Link } from 'react-router-dom';

import styles from './AnalysisHeader.module.scss';

function AnalysisHeader(props) {
  return (
    <div className={styles.analysisCategoryLinks}>
      <Link
        to={props.firstlink}
        className={
          props.activeLink ? styles.analysisLinkActive : styles.analysisLink
        }
      >
        {props.firsttitle}
      </Link>
      <Link
        to={props.secondlink}
        className={
          props.activeLink ? styles.analysisLink : styles.analysisLinkActive
        }
      >
        {props.secondtitle}
      </Link>
    </div>
  );
}

export default AnalysisHeader;
