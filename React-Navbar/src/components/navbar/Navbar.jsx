import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import React, { useState } from 'react'
import "./Navbar.css"

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const toggleMenu = () => {
    setOpenMenu(!openMenu)
  }
  return (
    <>

      
      
      <nav className='nav-wrapper'>
        <div className="nav-content">
          <img src="./src/assets/Code-logo.svg" alt="" className='logo'/>
          <ul>
            <li>
              <a href="" className='menu-item'>Home</a>
            </li>
            <li>
              <a href="" className='menu-item'>Skills</a>
            </li>
            <li>
              <a href="" className='menu-item'>Work experience</a>
            </li>
            <li>
              <a href="" className='menu-item'>Contacte Me</a>
            </li>
            <button className='contact-btn'>Here
            </button>
          </ul>
          <button className='menu-btn' onClick={toggleMenu}>
            <MenuIcon style={{ fontSize: "1.8rem" }} />
            <CloseIcon style={{ fontSize: "1.8rem" }} />
            {/* {openMenu ? "close": "menu"} */}
          </button>
        </div>
      </nav>
    </>
  )
}

export default Navbar
