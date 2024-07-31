import React, { useState } from "react";
import "react-tabs/style/react-tabs.css";
import "../Tabunique/Tabunique.scss";
import styles from "./Finline.module.scss";
import check from "../../img/check.svg";
import graph from "../../img/icon/icon__bars.svg";
import notification from "../../img/icon/icon__notification.svg";
import Modal from "../Modal/Modal";
import icon_calendar from "../../img/icon/icon__calendar.svg";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { Link } from "react-router-dom";
import Tolt from "../Tolt/Tolt";
import {
  ClickAwayListener,
  styled,
  Tooltip,
  tooltipClasses,
} from "@mui/material";

function Finline(props) {
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

  if (props.notificBolean) {
    notific = (
      <ClickAwayListener onClickAway={handleTooltipClose}>
        <div>
          <MyTooltip
            TransitionProps={{ timeout: 400 }}
            placement="bottom-end"
            arrow
            PopperProps={{
              disablePortal: true,
            }}
            onClose={handleTooltipClose}
            open={open}
            disableFocusListener
            disableHoverListener
            disableTouchListener
            title={
              <React.Fragment>
                <div className={styles.notificBlocks}>
                  <div className={styles.notificTooltip}>
                    <h4>Платежи по кредитам / Проценты / Ипотека</h4>
                    <div className={styles.notificBottom}>
                      <div className={styles.notificDate}>
                        <img src={icon_calendar} alt="icon_calendar" />
                        <div>{notificDate}</div>
                      </div>
                      <div className={styles.notificValue}>
                        {notificValue} &#8381;
                      </div>
                    </div>
                  </div>
                  <div className={styles.notificTooltip}>
                    <h4>Платежи по кредитам / Проценты / Ипотека</h4>
                    <div className={styles.notificBottom}>
                      <div className={styles.notificDate}>
                        <img src={icon_calendar} alt="icon_calendar" />
                        <div>{notificDate}</div>
                      </div>
                      <div className={styles.notificValue}>
                        {notificValue} &#8381;
                      </div>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            }
          >
            <svg
              onClick={handleTooltipOpen}
              cursor="pointer"
              width="16rem"
              height="16rem"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.99601 8.66667V6C3.99601 3.79067 5.78868 2 8.00001 2C10.2113 2 12.004 3.79067 12.004 6V8.66667C12.004 9.324 12.3027 9.946 12.8153 10.358L13.0213 10.5233C13.6327 11.014 13.2853 12 12.5013 12H3.49867C2.71467 12 2.36734 11.014 2.97867 10.5233L3.18467 10.358C3.69801 9.946 3.99601 9.324 3.99601 8.66667Z"
                stroke="#3156A6"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7 14H9"
                stroke="#3156A6"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </MyTooltip>
        </div>
      </ClickAwayListener>
    );
  } else {
    notific = <img src={notification} alt="" />;
  }
  return (
    <>
      <div className={styles.finline}>
        <div className={styles.finlinestatus}>
          <Tolt tooltipTitle1="1232132">
            <img src={check} alt="" />
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
        <div className={styles.finlineinfo}>
          <div
            className={styles.graph}
            onClick={() => SetChartModalActive(true)}
          >
            <img src={graph} alt="" />
          </div>
          <div className={styles.notifications}>{notific}</div>
        </div>
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

export default Finline;
