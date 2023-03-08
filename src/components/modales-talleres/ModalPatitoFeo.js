import React from 'react';
import Button from '@mui/material/Button';
import '../Button.css'

function ModalPatitoFeo() {
  return (
    <>
    <div className='modalOrangeBox'>
      <div>
        <p>Este cuento habla sobre la pertenencia biológica y álmica; psicológica y espiritual.

Si tuviste una infancia precaria o doliente, tu “yo“ sufrió una herida y tu yo niño sigue allí. Si fue así, tenemos una buena noticia… Aunque estés herida y capturada podés recuperar tu vida. Siempre hay una fuerza que te ayuda a salir adelante.

Si te sentís a veces rechazada. Si intentás  encajar en algún molde y no lo conseguiste, estás de suerte! Estás exiliada pero protegiste tu alma.<br></br><br></br>
¿Sabías que hay regalos en el exilio?<br></br>
-habilita la aguda percepción<br></br>
-acrecienta la intuición.<br></br>
-agudiza la observación penetrante.<br></br>
Este  cuento permitirá encontrarte con tu luz sin huir , ser capaz de aprender y sostenerte con un corazón dispuesto a morir y volver a vivir.
No pierdas el tiempo en llorar el fracaso; adquirí este Taller para aprender, escuchar, resurgir y seguir adelante.
<br></br><br></br>
Te esperamos en este re-nacer.

  </p>


      </div>
      <div className='infoModal'>
        <p className='p-info'>
        El taller completo cuenta con 7 grabaciones. Cada una de ellas corresponde a un encuentro.<br></br>
La duración de cada grabación es de 3 hs y media aproximadamente.
</p>
      <Button href='https://wa.me/541125300610' target="_blank" style={{ backgroundColor: '#cfab2e', borderRadius: "10px", color: 'white', margin: 0}}>Inscribirse</Button>
      </div>
    </div>
    </>
  )
}

export default ModalPatitoFeo