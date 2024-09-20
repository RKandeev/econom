import React from 'react';

import { styled, Tooltip, tooltipClasses } from '@mui/material';

function Tolt(props) {
  const MyTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: '#464E5F',
      boxShadow: theme.shadows[1],
      color: '#ffffff',
      fontSize: '12rem',
      maxWidth: '216rem',
    },
  }));

  return (
    <MyTooltip
      arrow
      disableInteractive
      placement="top"
      title={props.tooltipTitle1}
      TransitionProps={{ timeout: 400 }}
    >
      {props.children}
    </MyTooltip>
  );
}

export default Tolt;
