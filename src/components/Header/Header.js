import React from "react";
import styles from "./Header.module.scss";
import logo from "../../img/logo.svg";
import icon__notification from "../../img/icon__notification.svg";
import icon__user from "../../img/icon_user.svg";
import icon__logout from "../../img/icon__logout.svg";
import icon_calendar from "../../img/icon/icon__calendar.svg";
import { Link } from "react-router-dom";
import Finplan from "../../pages/Finplan/Finplan";
import {
  ClickAwayListener,
  styled,
  Tooltip,
  tooltipClasses,
} from "@mui/material";

function Header() {
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
  let bonusPoints = "777";
  return (
    <>
      <div className={styles.Header}>
        <Link to="/#" className={styles.logo}>
          <img src={logo} alt="логотип" />
        </Link>
        <div className={styles.links}>
          <Link href="/#">О проекте</Link>
          <Link to={Finplan}>Курсы</Link>
          <Link href="/#">Проверь себя</Link>
          <Link href="/#">Возможности</Link>
        </div>
        <div className={styles.profileLinks}>
          <div className={styles.mybonus}>
            Мои баллы: <span>{bonusPoints}</span>
          </div>
          <Link href="/#" className={styles.profileNav}>
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
                  <img
                    src={icon__notification}
                    alt="логотип"
                    onClick={handleTooltipOpen}
                  />
                </MyTooltip>
              </div>
            </ClickAwayListener>
          </Link>
          <Link href="/#" className={styles.profileNav}>
            <img src={icon__user} alt="логотип" />
          </Link>
          <Link href="/#" className={styles.profileNav}>
            <img src={icon__logout} alt="логотип" />
          </Link>
        </div>
      </div>
    </>
  );
}
export default Header;
