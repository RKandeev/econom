import React from 'react';

import styles from './SelectModal.module.scss';

function SelectModal(props) {
  return (
    <div
      className={styles.SelectModal}
      style={{ visibility: `${props.selectModalVis}` }}
    >
      <h5>{props.SelectHeader}</h5>
      <select>
        {props.selectArr.map((el) => (
          <option key={el}>{el}</option>
        ))}
      </select>
    </div>
  );
}

export default SelectModal;
