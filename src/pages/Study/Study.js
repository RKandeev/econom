import React from "react";
import Header from "../../components/Header/Header";
import MobileNav from "../../components/MobileNav/MobileNav";
import styles from "../MyResults/MyResults.module.scss";
import StudyLeftNav from "../../components/StudyLeftNav/StudyLeftNav";
import StudyBody from "../../components/StudyBody/StudyBody";

function Study(props) {
  return (
    <>
      <Header />
      <MobileNav />
      <div className={styles.sitebody}>
        <StudyLeftNav />
        <StudyBody />
      </div>
    </>
  );
}

export default Study;
