import React from "react";
import { styled, Tooltip, tooltipClasses } from "@mui/material";
import styles from "./NumberTolt.module.scss";

function NumberTolt(props) {
  const MyTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "#464E5F",
      color: "#ffffff",
      padding: "20rem",
      boxShadow: theme.shadows[1],
      fontSize: "12rem",
      maxWidth: "216rem",
    },
  }));
  return (
    <div className={styles.myTooltipNum}>
      <MyTooltip
        title={props.tooltipTitle}
        placement="top"
        TransitionProps={{ timeout: 400 }}
        arrow
        disableInteractive
      >
        <div className={styles.toltNumber}>{props.children}</div>
      </MyTooltip>
    </div>
  );
}

export default NumberTolt;
