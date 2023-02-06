import React from 'react';
import Button from '@mui/material/Button';
import './Button.css'

function ModalPapaMama() {
  return (
    <>
    <div className='modalOrangeBox'>
      <div>
        <p>Somos la reunión de dos distintos, Mamá y Papá, es a través de ellos que tomamos la vida. Cuando reconocemos a Mamá y Papá como dos seres ordinarios y aceptamos esto podemos pararnos con fuerza ante la vida.

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

export default ModalPapaMama