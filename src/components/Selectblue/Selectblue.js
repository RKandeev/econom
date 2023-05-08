import React from "react";
import "./Selectblue.module.scss";

function Selectblue(props) {
  return (
    <select>
      {props.selectArr.map((el) => (
        <option key={el}>{el}</option>
      ))}
    </select>
  );
}

export default Selectblue;
