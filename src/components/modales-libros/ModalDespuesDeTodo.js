import React from 'react';
import Button from '@mui/material/Button';
import '../Button.css'

function ModalDespuesDeTodo() {
  return (
    <>
    <div className='modalOrangeBox'>
      <div>
        <p>Éste es un valioso y excepcional libro. El testimonio vivo de la historia de una familia desgarrada por la diferencia entre dos culturas.
            Gabriela recorrió regiones distantes y atravesó trayectos extensos entre los continentes, soportando los obstáculos y tolerando las dificultades, una y otra y otra vez, impulsada por el amor y la intuición materna, con el objetivo de poder, aunque sea por unas horas, ver a sus niños e intercambiar con ellos el calor y la ternura del abrazo y las caricias.
            No sólo aprendió a vincularse a la distancia, sino también, a buscar y encontrar dentro de ella los elementos a partir de los cuales sanar su historia. Pudo además mantener sanos y salvos sus sentidos del humor y del amor, lo cual fue de capital importancia para el resultado alcanzado.

    </p>


      </div>
      <div>
      <a href='https://www.kier.com.ar/Papel/9789501737035/Despu%C3%A9s+De+Todo++++El+Amor+Lo+Hizo+Posible' target='blank' style={{textDecoration: 'none'}}>
      <Button style={{ backgroundColor: '#cfab2e', borderRadius: "10px", color: 'white', margin: 0}}>Comprar</Button>
      </a>
      </div>
    </div>
    </>
  )
}

export default ModalDespuesDeTodo