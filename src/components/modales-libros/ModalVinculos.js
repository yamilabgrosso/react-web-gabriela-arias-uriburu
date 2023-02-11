import React from 'react';
import Button from '@mui/material/Button';
import '../Button.css'

function ModalVinculos() {
  return (
    <>
    <div className='modalOrangeBox'>
      <div>
        <p>Es una obra práctica y testimonial, que sugiere pautas y hábitos sanadores, orienta en las situaciones límite y focaliza en el autoconocimiento, para ayudarnos a hacer de nuestra vida una experiencia digna, vinculados en plenitud y especialmente, en libertad.
        Es una guía de superación para quienes buscan la armonía personal, la paz familiar y el amor incondicional. 

    </p>


      </div>
      <div >
        <a href='https://www.kier.com.ar/Papel/9789871853076/Vinculos' target='blank' style={{textDecoration: 'none'}}>
            <Button style={{ backgroundColor: '#cfab2e', borderRadius: "10px", color: 'white', margin: 0}}>Comprar</Button>
      </a>
      </div>
    </div>
    </>
  )
}

export default ModalVinculos