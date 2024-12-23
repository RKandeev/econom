import React, { useState } from 'react';

import { styled, Tooltip, tooltipClasses } from '@mui/material';
import { Link } from 'react-router-dom';

import Modal from '../Modal/Modal';
import Tolt from '../Tolt/Tolt';

import 'react-tabs/style/react-tabs.css';
import '../Tabunique/Tabunique.scss';
import styles from './AccountingLine.module.scss';

function AccountingLine(props) {
  const [chartModalActive, SetChartModalActive] = useState(false);
  let color;

  let currentEntr;

  function declensionOfWord(count) {
    const cases = [2, 0, 1, 1, 1, 2];
    const titles = ['запись', 'записи', 'записей'];
    const mod = count % 100;
    const caseIndex = (mod > 4 && mod < 20) ? 2 : cases[Math.min(mod % 10, 5)];

    currentEntr = `${count} ${titles[caseIndex]}`;
  }

  declensionOfWord(props.entriesNum);

  if (props.value > 0) {
    color = '#0DA46F';
  } else if (props.value < 0) {
    color = '#EE2B49';
  } else {
    color = '#ABB0C3';
  }
  let modalTitle = 'Заголовок (попап с диаграммой)';
  let years = ['2022', '2023'];
  let months = ['Январь', 'Февраль'];
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
  let notificDate = '12 сентября';
  let notificValue = '- 20 563';
  let notific;

  return (
    <>
      <div
        className={styles.finline}
        style={{
          width: `${props.lineWidth}`,
        }}
      >
        <div
          className={styles.finlinestatus}
          style={{
            display: `${props.checkDisplay}`,
          }}
        >
          <Tolt tooltipTitle1='1232132'>
            <img alt='' src={props.checkImg} />
          </Tolt>
        </div>
        <div className={styles.finlinetitle}>
          <div className={styles.titleimg}>
            <img alt='' src={props.titleimg} />
          </div>
          <div className={styles.titlename}>{props.titlename}</div>
          {/*<div className={styles.titleabout}>*/}
          {/*  <Tolt tooltipTitle1="ddsasd">*/}
          {/*    <img src={help} alt="" />*/}
          {/*  </Tolt>*/}
          {/*</div>*/}
        </div>
        <div className={styles.finlineinfo}>{currentEntr}</div>
        <Link to={props.linkway}>
          <div className={styles.finlinevalue} style={{ color }}>
            {props.value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')}
          </div>
        </Link>
      </div>
      <Modal
        active={chartModalActive}
        modalTitle={props.modalTitle}
        SetActive={SetChartModalActive}
      >
        {props.children}
      </Modal>
    </>
  );
}

export default AccountingLine;
