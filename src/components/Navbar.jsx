import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar(props) {
  const [isActive, setIsActive] = useState(false);
  const toggleClass = () => {
    setIsActive(!isActive);
  }
  const logo = "logo.png";
  return (
    <>
      <div className="page-wrapper">
        <div className="nav-wrapper">
          <div className="grad-bar"></div>
          <nav className="navbar">
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
              <ul className="nav no-search" >
                <li className="nav-item home left special"><NavLink exact="true" to="/" id='underline'>Home</NavLink></li>
                <li className="nav-item left special"><NavLink exact="true" to="/aboutMe" id='underline'>About Me</NavLink></li>
                <li className="nav-item left special"><NavLink exact="true" to="/careers" id='underline1'>Careers</NavLink></li>
                <li className="nav-item left special"><NavLink exact="true" to="/contactMe" id='underline1'>Contact Me</NavLink></li>
                <li className="nav-item left"><NavLink exact="true" to="/ride"><button className='buttona'>Ride with Embargo</button></NavLink></li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
export default Navbar;