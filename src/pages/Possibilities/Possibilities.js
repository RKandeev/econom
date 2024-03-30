import React from "react";
import Header from "../../components/Header/Header";
import MobileNav from "../../components/MobileNav/MobileNav";
import styles from "../MyResults/MyResults.module.scss";
import MyResultsBody from "../../components/MyResultsBody/MyResultsBody";
import Possibilitiesleftnav from "../../components/Possibilitiesleftnav/Possibilitiesleftnav";
import PossibilitiesBody from "../../components/PossibilitiesBody/PossibilitiesBody";

function Possibilities(props) {
  return (
    <>
      <Header />
      <MobileNav />
      <div className={styles.sitebody}>
        <Possibilitiesleftnav />
        <PossibilitiesBody />
      </div>
    </>
  );
}

export default Possibilities;
