import React from 'react';
import Button from '@mui/material/Button';
import './Button.css'

function ModalPatitoFeo() {
  return (
    <>
    <div className='modalOrangeBox'>
      <div>
        <p>Patito Feo Info
  </p>


      </div>
      <div className='infoModal'>
        <p className='p-info'>
        Grabación del zoom que dura 3. 5 hs ! Cada taller cuánta con un grupo de WhatsApp para consultas. </p>
      <Button style={{ backgroundColor: '#cfab2e', borderRadius: "10px", color: 'white', margin: 0}}>Inscribirse</Button>
      </div>
    </div>
    </>
  )
}

export default ModalPatitoFeo