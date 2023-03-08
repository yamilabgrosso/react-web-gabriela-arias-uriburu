import React from 'react';
import '../Button.css'
import Button from '@mui/material/Button';

function ModalLaHerida() {
  return (
    <>
    <div className='modalOrangeBox'>
      <div>
        <p>Ponernos en labor con este Taller nos conducirá a abrirnos, a mirar nuestras heridas, a integrarlas, comprenderlas, abrazarlas, liberarlas y devolverlas a la vida.

Estamos llamados a buscar lo herido, lo dañado, lo muerto, y así entregárselo a la vida para su resurrección.

A lo largo de cada encuentro de este maravilloso taller irás encontrando los dones  y potencialidades que trae consigo tu herida. Ellas no se pueden evitar, pero tienen remedio y pueden ser sanadas. Juntos lo veremos en cada grabación .

Recordá que de tu herida provendrá tu fuerza, tu paz.
<br></br>
¡Te esperamos!

  </p>


      </div>
      <div className='infoModal'>
        <p className='p-info'>
        Este taller consta de 5 grabaciones correspondientes a 5 encuentros.<br></br>
La duración de cada uno es de 3hs y media aprox.
</p>
      <Button href='https://wa.me/541125300610' target="_blank" style={{ backgroundColor: '#cfab2e', borderRadius: "10px", color: 'white', margin: 0}}>Inscribirse</Button>
      </div>
    </div>
    </>
  )
}

export default ModalLaHerida