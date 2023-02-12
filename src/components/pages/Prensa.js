import React, { useEffect, useState } from 'react';
import '../../App.css';
import axios from 'axios';
import '../Cards.css';
import Footer from '../Footer';
import CardItemPrensa from '../CardItemPrensa';

function Prensa() {

    const [items, setItems] = useState([]);

    useEffect(() => {
      axios('../data-prensa.json').then((res) => setItems (res.data));
      
     }, []);
  return (
    <>
      <div className="gabriela-intro">
        <h1>Prensa</h1>
        <h2>En esta sección encontrarás algunos momentos compartidos en distintos
        medios de comunicación</h2>
      </div>
      <div className='cards__container'>
            <div className='cards__wrapper'>
            <ul className='cards__items' >
            { 
                items.map(({ id, imagen, titulo, path, textoBoton, ytb, subtitulo }) => (
                <CardItemPrensa
                key={id}
                imagen={imagen}
                titulo={titulo}
                subtitulo={subtitulo}
                path={path}
                ytb={ytb}
                textoBoton={textoBoton}
                >
                </CardItemPrensa>
                ))
            }
        </ul>
        </div>
   </div>
   <Footer />
    </>
  );
}

export default Prensa;
