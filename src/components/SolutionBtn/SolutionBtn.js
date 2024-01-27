import React from 'react';
import styles from './SolutionBtn.module.scss'
import {Link} from "react-router-dom";

function SolutionBtn(props) {
    return (
        <>
            <Link to={props.linkAdress} className={styles.btnBlock}>
                <img className={styles.solutionLogo} src={props.solutionLogo} alt=""/>
                <div className={styles.solutionTitle}>{props.solutionTitle}</div>
            </Link>
        </>
    );
}

export default SolutionBtn;