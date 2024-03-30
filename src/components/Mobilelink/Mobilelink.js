import React from "react";
import styles from "./Mobilelink.scss";
import { Link, NavLink } from "react-router-dom";

function Mobilelink(props) {
  return (
    <NavLink
      to={props.linksAdress}
      className={(navData) =>
        navData.isActive ? "blockImg activeLink" : "blockImg"
      }
    >
      <div className="image">
        <img src={props.img} alt="" />
      </div>
      <div className="category">{props.txt}</div>
    </NavLink>
  );
}

export default Mobilelink;
