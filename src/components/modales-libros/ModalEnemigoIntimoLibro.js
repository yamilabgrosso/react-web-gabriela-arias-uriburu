import React from 'react';
import Button from '@mui/material/Button';
import '../Button.css'

function ModalEnemigoIntimoLibro() {
  return (
    <>
    <div className='modalOrangeBox'>
      <div>
        <p>La vida en general, y las historias de cada uno de nosotros en particular, consisten en encuentros. 
        Algunos agradables, otros que parecen serlo y, de pronto, nos tropezamos con el horror. Entonces 
        nos preguntamos: “¿por qué me encontré yo con esto?”. Cuando esto sucede debiéramos indagar 
        qué está sucediendo en nuestro interior que nos lleva a conectarnos con esa persona que nos 
        consume, nos limita, nos depreda: Nuestro “Enemigo intimo”. La consigna es convertirnos en lectores de nuestro inconsciente, y para ello tenemos que entrar en una parte de él, que nos es desconocida y, a la vez, es nuestra. No es precisamente una zona bonita, pero es necesario conocer ese territorio si queremos transformarnos en seres fuertes y reales. 


  </p>


      </div>
      <div>
      <a href='https://www.kier.com.ar/Papel/9789501729986/Enemigo+Intimo' target='blank' style={{textDecoration: 'none'}}>
        <Button style={{ backgroundColor: '#cfab2e', borderRadius: "10px", color: 'white', margin: 0}}>Comprar</Button>
      </a>
      </div>
    </div>
    </>
  )
}

export default ModalEnemigoIntimoLibro