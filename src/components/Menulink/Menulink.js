import React from "react";
import styles from "./Menulink.module.scss";
import { Link } from "react-router-dom";

function Menulink(props) {
  return (
    <Link to={props.linksAdress} className={styles.blockImg}>
      <div className={styles.image}>
        <img src={props.img} alt="" />
      </div>
      <div className={styles.category}>{props.txt}</div>
    </Link>
  );
}

export default Menulink;
