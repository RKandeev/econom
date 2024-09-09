import React from "react";
import Header from "../../components/Header/Header";
import Finplanleftnav from "../../components/Finplanleftnav/Finplanleftnav";
import styles from "./Finplan.module.scss";
import Finplanbody from "../../components/Finplanbody/Finplanbody";
import Finplanright from "../../components/Finplanright/Finplanright";

function Finplan() {
  const months = [
    {
      id: 1,
      title: "ЯНВ",
      img: "../../img/Ellipse 1.svg",
    },
    {
      id: 2,
      title: "ФЕВ",
      img: "../../img/Ellipse 1.svg",
    },
  ];
  return (
    <>
      <Header />
      <div className={styles.sitebody}>
        <Finplanleftnav />
        <Finplanbody months={months} />
        <Finplanright />
      </div>
    </>
  );
}

export default Finplan;
