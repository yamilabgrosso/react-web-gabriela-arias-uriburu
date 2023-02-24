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
            <a
              className='social-icon-link facebook'
              href='https://es-la.facebook.com/GabrielaAriasUriburuOficial/'
              target='_blank'
              aria-label='Facebook'
              rel='noreferrer'
            >
              <i className='fab fa-facebook-f' />
            </a>
            <a
              className='social-icon-link twitter'
              href='https://twitter.com/ariasuriburu'
              target='_blank'
              aria-label='Twitter'
              rel='noreferrer'
            >
              <i className='fab fa-twitter' />
            </a>
            <a
              className='social-icon-link instagram'
              href='https://www.instagram.com/gabrielaariasuriburu/?hl=es'
              target='_blank'
              aria-label='Instagram'
              rel='noreferrer'
            >
              <i className='fab fa-instagram' />
            </a>
            <a
              className='social-icon-link youtube'
              href='https://www.youtube.com/c/gabrielaariasuriburu'
              target='_blank'
              aria-label='Youtube'
              rel='noreferrer'
            >
              <i className='fab fa-youtube' />
            </a>
         
     
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
