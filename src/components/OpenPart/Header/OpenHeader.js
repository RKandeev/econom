import React from 'react';

import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

import logo1 from '../../../img/logo1.svg';

import '../OpenPart.scss';

function OpenHeader() {
  const navigate = useNavigate();

  const authHandler = () => {
    const token = localStorage.getItem('token');

    if (token){
      navigate('/');
    } else {
      toast('Для начала необходимо авторизоваться');
    }
  };

  return (
    <>
      <header className="wrapper">
        <div className="header_logo">
          <img alt="" src={logo1} />
        </div>
        <div className="mobile_nav mobile">
          <input
            className="burger_checkbox"
            id="burger_checkbox"
            type="checkbox"
          />
          <label className="burger" htmlFor="burger_checkbox"></label>
          <ul className="menu_list">
            <li>
              <a className="menu_item" href="/index.html">
                О проекте
              </a>
            </li>
            <li>
              <a className="menu_item " href="/check.html">
                Проверь себя
              </a>
            </li>
            <li>
              <a className="menu_item" href="/sign-up.html">
                Личный кабинет
              </a>
            </li>
          </ul>
        </div>
        <nav className="desktop">
          <a className="nav-link active" href="/index.html">
            О проекте
          </a>
          <a className="nav-link " href="/check.html">
            Проверь себя
          </a>
          <a className="nav-link link-personal cursor_pointer" onClick={authHandler}>
            Личный кабинет
          </a>
        </nav>
      </header>
    </>
  );
}

export default OpenHeader;
