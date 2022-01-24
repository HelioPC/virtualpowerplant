import React from "react";

import './header.css';

import logo from '../../assets/img/logo.png';

export default function Header({color}){
    return(
        <header className={color ? 'black' : ''}>
          <div className="logo--img">
            <a href="/">
              <img src={logo} alt="logo" />
            </a>
          </div>

          <div className="links--list">
            <ul>
              <li><a href="/">About</a></li>
              <li><a href="/">Solutions</a></li>
              <li><a href="/">Buy</a></li>
              <li><a href="/">Sign in</a></li>
            </ul>
          </div>
        </header>
    );
}