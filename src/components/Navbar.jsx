import React, { useState } from 'react';
import * as FaIcons from "react-icons/fa";
import * as LuIcons from "react-icons/lu";

import { Link } from "react-router-dom";
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons';
import './Navbar.css';

export const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ className: 'icon-bar' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <span className='text'>
                PSP
              </span>
              <Link to='#' className='menu-bars'>
                <FaIcons.FaBars />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
            <li className='navbar-footer'>
              <Link to='/login' >
                <button className='test'>
                  log out
                  <LuIcons.LuLogOut  />
                </button>      
              </Link>
            </li>
          </ul>


        </nav>
      </IconContext.Provider>
    </>

  );
}



export default Navbar