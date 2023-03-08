import React from 'react';
import Button from '@mui/material/Button';
import '../Button.css'

function ModalMadrePareja() {
  return (
    <>
    <div className='modalOrangeBox'>
      <div>
        <p>La pareja es el espacio de mayor intimidad de nuestras vidas y la primera relación de amor la vivimos con mamá, es con ella que aprendemos a amar.

  </p>


      </div>
      <div className='infoModal'>
        <p className='p-info'>
        Grabación del zoom que dura 3.5hs. Cada taller cuenta con un grupo de WhatsApp para consultas. </p>
      <Button href='https://wa.me/541125300610' target="_blank" style={{ backgroundColor: '#cfab2e', borderRadius: "10px", color: 'white', margin: 0}}>Inscribirse</Button>
      </div>
    </div>
    </>
  )
}

export default ModalMadrePareja