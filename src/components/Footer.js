import React from 'react';
import './Footer.css';
//import { Button } from './Button';
import { Link } from 'react-router-dom';
import logo from './images/logo.png';

function Footer() {
  return (
    <div className='footer-container'>

      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
                <img className="logo" src={logo} alt="logo gabriela arias uriburu" height="80px"></img>
            </Link>
          </div>
          <h3 className='website-rights'>email...</h3>
 
          <div className='social-icons'>
            <Link
              className='social-icon-link facebook'
              to='https://es-la.facebook.com/GabrielaAriasUriburuOficial/'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='https://twitter.com/ariasuriburu'
              target='_blank'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </Link>
            <Link
              className='social-icon-link instagram'
              to='https://www.instagram.com/gabrielaariasuriburu/?hl=es'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>
            <Link
              className='social-icon-link youtube'
              to='https://www.youtube.com/c/gabrielaariasuriburu'
              target='_blank'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </Link>
         
     
          </div>
        </div>
      </section>
      <section>        
      
       <h3 className='website-rights'>© Todos los derechos reservados</h3>

      </section>
    </div>
  );
}

export default Footer;
