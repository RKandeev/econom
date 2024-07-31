import React from "react";
import Header from "../../components/Header/Header";
import Finplanleftnav from "../../components/Finplanleftnav/Finplanleftnav";
import styles from "./Credit.module.scss";
import MobileNav from "../../components/MobileNav/MobileNav";
import lockedIco from "../../img/icon/icon__lock.svg";
import checkedIco from "../../img/icon/icon__check.svg";
import newcheck from "../../img/Ellipse 1.svg";
import LifestyleBody from "../../components/LifestyleBody/LifestyleBody";

function Lifestyle(props) {
  const months = [
    {
      id: 1,
      title: "ЯНВ",
      img: "../../img/Ellipse 1.svg",
      checkStatus: lockedIco,
    },
    {
      id: 2,
      title: "ФЕВ",
      img: "../../img/Ellipse 1.svg",
      checkStatus: lockedIco,
    },
    {
      id: 3,
      title: "МАР",
      img: "../../img/Ellipse 1.svg",
      checkStatus: checkedIco,
    },
    {
      id: 4,
      title: "АПР",
      img: "../../img/Ellipse 1.svg",
      checkStatus: checkedIco,
    },
    {
      id: 5,
      title: "МАЙ",
      img: "../../img/Ellipse 1.svg",
      checkStatus: newcheck,
    },
    {
      id: 6,
      title: "ИЮН",
      img: "../../img/Ellipse 1.svg",
      checkStatus: newcheck,
    },
    {
      id: 7,
      title: "ИЮЛ",
      img: "../../img/Ellipse 1.svg",
      checkStatus: newcheck,
    },
    {
      id: 8,
      title: "АВГ",
      img: "../../img/Ellipse 1.svg",
      checkStatus: newcheck,
    },
    {
      id: 9,
      title: "СЕН",
      img: "../../img/Ellipse 1.svg",
      checkStatus: newcheck,
    },
    {
      id: 10,
      title: "ОКТ",
      img: "../../img/Ellipse 1.svg",
      checkStatus: newcheck,
    },
    {
      id: 11,
      title: "НОЯ",
      img: "../../img/Ellipse 1.svg",
      checkStatus: newcheck,
    },
    {
      id: 12,
      title: "ДЕК",
      img: "../../img/Ellipse 1.svg",
      checkStatus: newcheck,
    },
  ];
  return (
    <>
      <Header />
      <MobileNav />
      <div className={styles.sitebody}>
        <Finplanleftnav />
        <LifestyleBody months={months} />
      </div>
    </>
  );
}

export default Lifestyle;
