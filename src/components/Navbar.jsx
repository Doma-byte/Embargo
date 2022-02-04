import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../images/logo.png"
import "../App.css";

function Navbar({ sticky }) {
  const [isActive, setIsActive] = useState(false);
  const toggleClass = () => {
    setIsActive(!isActive);
  }
  return (
    <>
      <div className="page-wrapper">
        <div className="nav-wrapper">
          <div className="grad-bar"></div>
          <nav className={sticky ? "navbar navbar-sticky" : "navbar"}>
            <div className='logo'>
              <a href='/'>
                <img src={logo} alt='Embargo icon' id="log" loading='lazy' />
              </a>
            </div>
            <div className={isActive ? 'toggle active' : 'toggle menu-toggle'} id="mobile-menu" onClick={toggleClass}>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
            <div className='link-background'>
              <ul className="nav no-search">
                <li className="nav-item home left special">
                  <NavLink exact="true" to="/" id='underline'>Home</NavLink>
                </li>
                <li className="nav-item left special">
                  <NavLink exact="true" to="/aboutCo" id='underline'>About Co.</NavLink>
                </li>
                <li className="nav-item left special">
                  <NavLink exact="true" to="/careers" id='underline'>Careers</NavLink>
                </li>
                <li className="nav-item left special">
                  <a href='https://embargo-69468.web.app' id='underline'>ChitChat</a>
                </li>
                <li className="nav-item left special">
                  <NavLink exact="true" to="/contactUs" id='underline'>Contact Us</NavLink>
                </li>
                <li className="nav-item left"><NavLink exact="true" to="/ride"><button className='buttona'>Ride with Embargo</button></NavLink></li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
export default React.memo(Navbar);