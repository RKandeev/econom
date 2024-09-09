import React from "react";
import logo1 from "../../../img/logo1.svg";
import "../OpenPart.scss";

function OpenHeader(props) {
  return (
    <>
      <header className="wrapper">
        <div className="header_logo">
          <img src={logo1} alt="" />
        </div>
        <div className="mobile_nav mobile">
          <input
            type="checkbox"
            id="burger_checkbox"
            className="burger_checkbox"
          />
          <label className="burger" htmlFor="burger_checkbox"></label>
          <ul className="menu_list">
            <li>
              <a href="./index.html" className="menu_item">
                О проекте
              </a>
            </li>
            <li>
              <a href="./check.html" className="menu_item ">
                Проверь себя
              </a>
            </li>
            <li>
              <a href="./sign-up.html" className="menu_item">
                Личный кабинет
              </a>
            </li>
          </ul>
        </div>
        <nav className="desktop">
          <a href="./index.html" className="nav-link active">
            О проекте
          </a>
          <a href="./check.html" className="nav-link ">
            Проверь себя
          </a>
          <a href="./sign-up.html" className="nav-link link-personal">
            Личный кабинет
          </a>
        </nav>
      </header>
    </>
  );
}

export default OpenHeader;
