import React from 'react';
import Header from "../../components/Header/Header";
import styles from "../Accounting/Accounting.module.scss";
import Modelingleftnav from "../../components/Modelingleftnav/Modelingleftnav";
import Solutions from "../../components/Solutions/Solutions";

function Finmodel(props) {
    return (
        <>
            <Header/>
            <div className={styles.sitebody}>
                <Modelingleftnav />
                <Solutions/>
            </div>
        </>
    );
}

export default Finmodel;