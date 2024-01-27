import React from "react";
import styles from "./MySolutions.module.scss";
import MySolution from "../MySolution/MySolution";

function MySolutions(props) {
  return (
    <>
      <h3>Мои решения</h3>
      <MySolution solutionTitle="Название решения" solutionType="" />
    </>
  );
}

export default MySolutions;
