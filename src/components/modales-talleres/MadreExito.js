import React from 'react';
import Button from '@mui/material/Button';
import '../Button.css'

function MadreExito() {
  return (
    <>
    <div className='modalOrangeBox'>
      <div>
        <p>El éxito: Nuestro mayor éxito es nuestro nacimiento , ese es nuestro primer acto voluntario . El éxito en nuestras vidas está íntimamente relacionado con nuestro vínculo con Mamá. 
  </p>


      </div>
      <div className='infoModal'>
        <p className='p-info'>
        Grabación del zoom que dura 3.5hs. Cada taller cuánta con un grupo de WhatsApp para consultas.</p>
      <Button href='https://wa.me/541125300610' target="_blank" style={{ backgroundColor: '#cfab2e', borderRadius: "10px", color: 'white', margin: 0}}>Inscribirse</Button>
      </div>
    </div>
    </>
  )
}

export default MadreExito