import React from "react";
import { styled, Tooltip, tooltipClasses } from "@mui/material";

function Tolt(props) {
  const MyTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "#464E5F",
      color: "#ffffff",
      boxShadow: theme.shadows[1],
      fontSize: "12rem",
      maxWidth: "216rem",
    },
  }));
  return (
    <MyTooltip
      title={props.tooltipTitle1}
      placement="top"
      TransitionProps={{ timeout: 400 }}
      arrow
      disableInteractive
    >
      {props.children}
    </MyTooltip>
  );
}

export default Tolt;
