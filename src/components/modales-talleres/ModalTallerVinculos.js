import React from 'react';
import Button from '@mui/material/Button';
import '../Button.css'

function ModalTallerVInculos() {
  return (
    <>
    <div className='modalOrangeBox'>
      <div>
        <p>Un viaje de exploración, donde descubrirás cómo se expresa tu universo vincular.

La tarea será despertar el VER; sensibilizar la escucha; observar los símbolos; activar el corazón … y comenzar a traer a la conciencia del cotidiano el lenguaje de las almas.

Cómo investigadores pondremos una lupa en las formas en que el amor se expresa y hurgaremos en los hilos de nuestra trama.

El Seminario comienza desde el momento que decidís inscribirte y seguramente una vez finalizado seguiremos intercomunicados en el viaje vincular.

Dirigido a todas las personas que estén reformulando sus vínculos o quieren mejorar sus relaciones; a padres y madres que estén atravesando una situación conflictiva con sus hijos , a padres y madres que necesiten herramientas para vincularse con hijos que viven en el extranjero, y a toda aquella persona que quiera vincularse en plenitud y en libertad.


  </p>


      </div>
      <div className='infoModal'>
     {/*    <p className='p-info'>
        Grabación del zoom que dura 3. 5 hs ! Cada taller cuenta con un grupo de WhatsApp para consultas. </p> */}
      <Button href='https://wa.me/541125300610' target="_blank" style={{ backgroundColor: '#cfab2e', borderRadius: "10px", color: 'white', margin: 0}}>Inscribirse</Button>
      </div>
    </div>
    </>
  )
}

export default ModalTallerVInculos