import React from 'react'
import { Button } from '../Button';
import Footer from '../Footer';
import '../ImgSection.css';
import encuentros from '../images/encuentros.png'

function Encuentros() {
  return (
    <>    <div className='gabriela-intro'>
        <h1 style={{color: "#c38820", paddingBottom: '30px'}}>Encuentros</h1>
        <img  src={encuentros} alt="gabriela arias uriburu" style={{  width: '80vw', paddingBottom: '30px'}}></img>

        <div style={{ paddingBottom: '0.5rem'}}>
        <h2>La vida nos encuentra de diferentes maneras, en este espacio las invitamos a compartir y disfrutar de un lugar en común. </h2>
        </div>
        <div>
        <h2>Viajes, eventos, conferencias y mucho más. Donde vos elijas, te proponemos que nos encontremos para potenciar nuestro ser interior,  y atravesar juntas las historias que nos definen.</h2>
        </div>
        <Button href='https://wa.me/541125300610' target="_blank">Esperamos tu invitación</Button>
    </div>
          <Footer />
          </>

  )
}

export default Encuentros