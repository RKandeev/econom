import React from "react";
import styles from "./Editsum.module.scss";

function Editsum(props) {
  return (
    <>
      <form id={props.formId} action="">
        <h5 className={styles.formTitle}>{props.formTitle}</h5>
        <div className={styles.editValueForm}>
          <input type="number" placeholder={props.sumValue} />
          <span>&#8381;</span>
        </div>
      </form>
    </>
  );
}

export default Editsum;
