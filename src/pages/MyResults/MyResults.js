import React from "react";
import Header from "../../components/Header/Header";
import MobileNav from "../../components/MobileNav/MobileNav";
import styles from "./MyResults.module.scss";
import MyResultsBody from "../../components/MyResultsBody/MyResultsBody";
import MyResultsLeftNav from "../../components/MyResultsleftnav/MyResultsLeftNav";

function MyResults(props) {
  return (
    <>
      <Header />
      <MobileNav />
      <div className={styles.sitebody}>
        <MyResultsLeftNav />
        <MyResultsBody />
      </div>
    </>
  );
}

export default MyResults;
