import React, {useState } from 'react';

import Modal from '../Modal/Modal';

import styles from './Diagrambtn.module.scss';

function Diagrambtn(props) {
  const [chartModalActive, SetChartModalActive] = useState(false);
  const [seed, setSeed] = useState(1);
  const reset = () => {
    setSeed(Math.random());
  };

  return (
    <>
      <div
        className={styles.diagramBtn}
        onClick={() => {
          SetChartModalActive(true);
          reset();
        }}
      >
        <div className={styles.diagramImg}>
          <img
            alt=""
            className={styles.diagramImgActive}
            src={props.diagramImg}
          />
        </div>
        <div className={styles.diagramTitle}>{props.diagramTitle}</div>
      </div>
      <Modal
        key={seed}
        active={chartModalActive}
        modalTitle={props.modalTitle}
        SetActive={SetChartModalActive}
      >
        {props.children}
      </Modal>
    </>
  );
}

export default Diagrambtn;
