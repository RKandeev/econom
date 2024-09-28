import React from "react";
import { NavLink } from "react-router-dom";
import "./Mobilelink.scss";

function Mobilelink(props) {
  return (
    <NavLink
      to={props.linksAdress}
      target={props.target}
      className={(navData) =>
        navData.isActive ? 'blockImg activeLink' : 'blockImg'
      }
    >
      <div className="image">
        <img alt="" src={props.img} />
      </div>
      <div className="category">{props.txt}</div>
    </NavLink>
  );
}

export default Mobilelink;
