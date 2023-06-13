import React from 'react';
import Button from '@mui/material/Button';
import '../Button.css';
import video from '../images/vinculos.mp4'


function ModalVinculos2() {
  return (
    <>
      <div className='modalOrangeBox'>
        <video className='videoModalVinculos2' width="80%" height="300px"  autoplay="autoplay" loop controls>
          <source src={video} type="video/mp4"></source>
            Tu navegador no admite el elemento de video.
        </video>
        <div>
          <p>Este libro está enfocado en generar conciencia: en que te hagas consciente en todo tu existir, comiences a vincularte con tu soplo divino y decidas si quieres o no ponerte en labor contigo y con tu historia. No hay más tiempo, el tiempo es ahora.
          </p>
        </div>
        <div >
          <a href='https://www.kier.com.ar/Papel/9789501760644/Vinculos+Ii' target='blank' style={{ textDecoration: 'none' }}>
            <Button style={{ backgroundColor: '#cfab2e', borderRadius: "10px", color: 'white', margin: 0 }}>Comprar</Button>
          </a>
        </div>
      </div>
    </>
  )
}

export default ModalVinculos2