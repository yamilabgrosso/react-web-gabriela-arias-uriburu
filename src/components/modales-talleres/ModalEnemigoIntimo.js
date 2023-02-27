import React from 'react';
import Button from '@mui/material/Button';
import '../Button.css'



function ModalEnemigoIntimo() {
  return (
    <>
    <div className='modalOrangeBox'>
      <div>
        <p>Todo lo que te sucede te empuja, te lleva al encuentro con vos misma. Ya no hay que salvar a nadie, ni nadie viene a rescatarte.<br></br>
  Una mujer valiente es la que cultiva la peor parte de su ser. “Me pregunto, entonces... cuántas veces en la vida ejercemos violencia sobre nosotros mismos: ese viaje que no hicimos, ese sueño sin cumplir, esa profesión que nunca llegamos a tener, eso que nos hubiera hecho más plenos y felices si no fuera por nuestros miedos, manías, tabúes, egoísmos, dependencias” <br></br>

  ¿Estás dispuesta a tomar tu energía vital, tu poder? 
  ¿Estás dispuesta a dejar que muera esa vida donde te estaban o estás depredando y hacer lo que tenes que hacer? 
  <br></br>
  No se trata de una lucha contra nadie sino de comprender quienes somos, cuál es nuestro valor, cuáles son las cosas que nos importan y de no dejar que ni el depredador interior ni nadie nos convenza de lo contrario” 
  En este taller te vas a dar vida y vas a saber cómo lograr la resiliencia.
  </p>


      </div>
      <div className='infoModal'>
        <p className='p-info'>
      Son 5 encuentros vía Zoom de 3hs. y 30 mins. cada uno. <br></br>Además contarás con un grupo de Whatsapp de apoyo</p>
      <Button href='https://wa.me/541125300610' target="_blank" style={{ backgroundColor: '#cfab2e', borderRadius: "10px", color: 'white', margin: 0}}>Inscribirse</Button>
      </div>
    </div>
    </>
  )
}

export default ModalEnemigoIntimo