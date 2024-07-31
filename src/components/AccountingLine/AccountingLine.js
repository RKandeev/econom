import React, { useState } from "react";
import "react-tabs/style/react-tabs.css";
import "../Tabunique/Tabunique.scss";
import styles from "./AccountingLine.module.scss";
import check from "../../img/check.svg";
import graph from "../../img/icon/icon__bars.svg";
import notification from "../../img/icon/icon__notification.svg";
import Modal from "../Modal/Modal";
import icon_calendar from "../../img/icon/icon__calendar.svg";
import { Link } from "react-router-dom";
import Tolt from "../Tolt/Tolt";
import {
  ClickAwayListener,
  styled,
  Tooltip,
  tooltipClasses,
} from "@mui/material";

function AccountingLine(props) {
  const [chartModalActive, SetChartModalActive] = useState(false);
  let color;
  if (props.value > 0) {
    color = "#0DA46F";
  } else if (props.value < 0) {
    color = "#EE2B49";
  } else {
    color = "#ABB0C3";
  }
  let modalTitle = "Заголовок (попап с диаграммой)";
  let years = ["2022", "2023"];
  let months = ["Январь", "Февраль"];
  const MyTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "#464E5F",
      color: "#ffffff",
      boxShadow: theme.shadows[1],
      fontSize: "12rem",
      maxWidth: "320rem",
      padding: "16rem",
    },
  }));
  const [open, setOpen] = React.useState(false);
  const handleTooltipClose = () => {
    setOpen(false);
  };
  const handleTooltipOpen = () => {
    setOpen(true);
  };
  let notificDate = "12 сентября";
  let notificValue = "- 20 563";
  let notific;

  return (
    <>
      <div className={styles.finline}>
        <div
          className={styles.finlinestatus}
          style={{ display: `${props.checkDisplay}` }}
        >
          <Tolt tooltipTitle1="1232132">
            <img src={props.checkImg} alt="" />
          </Tolt>
        </div>
        <div className={styles.finlinetitle}>
          <div className={styles.titleimg}>
            <img src={props.titleimg} alt="" />
          </div>
          <div className={styles.titlename}>{props.titlename}</div>
          {/*<div className={styles.titleabout}>*/}
          {/*  <Tolt tooltipTitle1="ddsasd">*/}
          {/*    <img src={help} alt="" />*/}
          {/*  </Tolt>*/}
          {/*</div>*/}
        </div>
        <div className={styles.finlineinfo}>{props.entriesNum}</div>
        <Link to={props.linkway}>
          <div className={styles.finlinevalue} style={{ color }}>
            {props.value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ")}
          </div>
        </Link>
      </div>
      <Modal
        active={chartModalActive}
        SetActive={SetChartModalActive}
        modalTitle={props.modalTitle}
      >
        {props.children}
      </Modal>
    </>
  );
}

export default AccountingLine;
