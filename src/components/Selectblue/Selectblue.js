import React from "react";
import styles from "./Selectblue.module.scss";

function Selectblue(props) {
  return (
    <div className={styles.Selectblue}>
      <select>
        {props.selectArr.map((el) => (
          <option key={el}>{el}</option>
        ))}
      </select>
    </div>
  );
}

export default Selectblue;
