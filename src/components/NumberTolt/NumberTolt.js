import React from 'react';

import { styled, Tooltip, tooltipClasses } from '@mui/material';

import styles from './NumberTolt.module.scss';

function NumberTolt(props) {
  const MyTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: '#464E5F',
      boxShadow: theme.shadows[1],
      color: '#ffffff',
      fontSize: '12rem',
      maxWidth: '216rem',
      padding: '20rem',
    },
  }));

  return (
    <div className={styles.myTooltipNum}>
      <MyTooltip
        arrow
        disableInteractive
        placement="top"
        title={props.tooltipTitle}
        TransitionProps={{ timeout: 400 }}
      >
        <div className={styles.toltNumber}>{props.children}</div>
      </MyTooltip>
    </div>
  );
}

export default NumberTolt;
