import React from 'react';
import Button from '@mui/material/Button';
import '../Button.css'

function ModalLaPareja() {
  return (
    <>
    <div className='modalOrangeBox'>
      <div>
        <p>La Pareja es el espacio de mayor desafío de nuestras vidas, nos invita a crear un sistema propio, dándole lugar a la intimidad. Es en la pareja donde reúno lo distinto a mí.
  </p>


      </div>
      <div className='infoModal'>
        <p className='p-info'>
        Grabación del zoom que dura 3. 5 hs ! Cada taller cuánta con un grupo de WhatsApp para consultas. </p>
      <Button href='https://wa.me/541125300610' target="_blank" style={{ backgroundColor: '#cfab2e', borderRadius: "10px", color: 'white', margin: 0}}>Inscribirse</Button>
      </div>
    </div>
    </>
  )
}

export default ModalLaPareja