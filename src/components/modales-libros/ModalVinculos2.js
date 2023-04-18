import React from 'react';
import Button from '@mui/material/Button';
import '../Button.css'

function ModalVinculos2() {
  return (
    <>
    <div className='modalOrangeBox'>
      <div>
        <p>Este libro está enfocado en generar conciencia: en que te hagas consciente en todo tu existir, comiences a vincularte con tu soplo divino y decidas si quieres o no ponerte en labor contigo y con tu historia. No hay más tiempo, el tiempo es ahora.
    </p>


      </div>
      <div >
        <a href='https://www.kier.com.ar/Papel/9789501760644/V%C3%ADnculos+Ii+-+Preventa+-+Disponible+A+Partir+Del+24+De+Abril' target='blank' style={{textDecoration: 'none'}}>
        <Button style={{ backgroundColor: '#cfab2e', borderRadius: "10px", color: 'white', margin: 0}}>Comprar</Button>
      </a>
      </div>
    </div>
    </>
  )
}

export default ModalVinculos2