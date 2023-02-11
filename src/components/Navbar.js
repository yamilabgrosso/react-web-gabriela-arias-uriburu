import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from './images/logo.png'

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img className="logo" src={logo} alt="logo gabriela arias uriburu" height="80px"></img>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
{/*             <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Talleres
              </Link>
            </li> */}
            <li className='nav-item'>
              <Link
                to='/talleres'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Talleres
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/mislibros'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Mis Libros
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/encuentros'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Encuentros
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/prensa'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Prensa
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/nosotras'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Nosotras
              </Link>
              </li>
              <li className='nav-item'>
              <a
                href='https://klouser.app/group/gabriela-arias-uriburu' 
                target='blank'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Comunidad
              </a>
            </li>
      
          </ul>
        
        </div>
      </nav>
    </>
  );
}

export default Navbar;
