import React from "react";

import './header.css';

import logo from '../../../../assets/img/logo.png'

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
              <li><a href="/" style={ color ? {} : {fontWeight: 'bold'}} >About</a></li>
              <li><a href="/" style={ color ? {} : {fontWeight: 'bold'}} >Solutions</a></li>
              <li><a href="/" style={ color ? {} : {fontWeight: 'bold'}} >Buy</a></li>
              <li><a href="/login" style={ color ? {} : {fontWeight: 'bold'}} >Sign in</a></li>
            </ul>
          </div>
        </header>
    );
}