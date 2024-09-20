import React from 'react';

import styles from './Editsum.module.scss';

function Editsum(props) {
  return (
    <>
      <form action="" id={props.formId}>
        <h5 className={styles.formTitle}>{props.formTitle}</h5>
        <div className={styles.editValueForm}>
          <input placeholder={props.sumValue} type="number" />
          <span>&#8381;</span>
        </div>
      </form>
    </>
  );
}

export default Editsum;
