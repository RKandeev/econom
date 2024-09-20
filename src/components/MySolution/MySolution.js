import React from 'react';

import {
  ClickAwayListener,
  styled,
  Tooltip,
  tooltipClasses,
} from '@mui/material';

import dots from '../../img/icon/icon__menu.svg';

import styles from './MySolution.module.scss';

function MySolution(props) {
  const MyTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: '#464E5F',
      boxShadow: theme.shadows[1],
      color: '#ffffff',
      fontSize: '12rem',
      maxWidth: '320rem',
      padding: '16rem',
    },
  }));
  const [open, setOpen] = React.useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <div className={styles.mysolution}>
        <div className={styles.solutionBlock}>
          <div className={styles.solutionTitle}>{props.solutionTitle}</div>
          <div className={styles.solutionType}>{props.solutionType}</div>
        </div>
        <ClickAwayListener onClickAway={handleTooltipClose}>
          <div>
            <MyTooltip
              arrow
              disableFocusListener
              disableHoverListener
              disableTouchListener
              open={open}
              placement="bottom-end"
              TransitionProps={{ timeout: 400 }}
              PopperProps={{
                disablePortal: true,
              }}
              title={
                <React.Fragment>
                  <div className={styles.solutionManage}>
                    <div className={styles.manageBlock}>
                      <svg
                        fill="none"
                        height="16"
                        viewBox="0 0 16 16"
                        width="16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          clipRule="evenodd"
                          d="M3.52865 10.4127L10.4126 3.52868C10.6726 3.26868 11.0946 3.26868 11.3546 3.52868L12.472 4.64601C12.732 4.90601 12.732 5.32801 12.472 5.58801L5.58731 12.4713C5.46265 12.5967 5.29331 12.6667 5.11665 12.6667H3.33331V10.8833C3.33331 10.7067 3.40331 10.5373 3.52865 10.4127Z"
                          fillRule="evenodd"
                          stroke="white"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M9.16669 4.77332L11.2267 6.83332"
                          stroke="white"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                        />
                      </svg>
                      <div className={styles.manageTitle}>Редактировать</div>
                    </div>
                    <div className={styles.manageBlock}>
                      <svg
                        fill="none"
                        height="16"
                        viewBox="0 0 16 16"
                        width="16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          clipRule="evenodd"
                          d="M10.3619 14.0025H5.63805C4.85392 14.0025 4.20198 13.3988 4.14184 12.6169L3.49811 4.24841H12.5019L11.8581 12.6169C11.798 13.3988 11.146 14.0025 10.3619 14.0025V14.0025Z"
                          fillRule="evenodd"
                          stroke="white"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M13.3355 4.24845H2.66443"
                          stroke="white"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                        />
                        <path
                          clipRule="evenodd"
                          d="M6.12421 1.9975H9.87578C10.2902 1.9975 10.6261 2.33342 10.6261 2.74781V4.24844H5.3739V2.74781C5.3739 2.54881 5.45295 2.35797 5.59366 2.21726C5.73437 2.07655 5.92522 1.9975 6.12421 1.9975Z"
                          fillRule="evenodd"
                          stroke="white"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M6.66614 11.3347H9.33392"
                          stroke="white"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                        />
                      </svg>
                      <div className={styles.manageTitle}>Удалить</div>
                    </div>
                  </div>
                </React.Fragment>
              }
              onClose={handleTooltipClose}
            >
              <img alt="логотип" src={dots} onClick={handleTooltipOpen} />
            </MyTooltip>
          </div>
        </ClickAwayListener>
      </div>
    </>
  );
}

export default MySolution;
