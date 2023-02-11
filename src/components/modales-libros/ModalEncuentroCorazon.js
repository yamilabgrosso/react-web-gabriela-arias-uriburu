import React from 'react';
import Button from '@mui/material/Button';
import '../Button.css'

function ModalEncuentroCorazon() {
  return (
    <>
    <div className='modalOrangeBox'>
      <div>
        <p>Al encuentro del corazón se sumerge en lo más profundo de nuestras relaciones, allí donde el hombre y la mujer necesitan comprender que para llegar al  amor hay ciclos que atravesar. 
Inspirado en un antiguo cuento de origen esquimal, este libro-taller se convierte en una herramienta que posee el extraordinario valor testimonial de su autora, invitándonos al camino donde es posible encontrarnos y sanar nuestros vínculos. 

    </p>


      </div>
      <div>
      <a href='https://www.kier.com.ar/Papel/9789501729276/Al+Encuentro+Del+Corazon' target='blank' style={{textDecoration: 'none'}}>
      <Button style={{ backgroundColor: '#cfab2e', borderRadius: "10px", color: 'white', margin: 0}}>Comprar</Button>
      </a>
      </div>
    </div>
    </>
  )
}

export default ModalEncuentroCorazon