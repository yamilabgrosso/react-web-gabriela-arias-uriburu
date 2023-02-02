import React, { useEffect, useState } from 'react';
import '../../App.css';
import axios from 'axios';
import '../Cards.css';
import Footer from '../Footer';
import CardItem from '../CardItem';

function MisLibros() {

    const [items, setItems] = useState([]);

    useEffect(() => {
      axios('../data-libros.json').then((res) => setItems (res.data));
      
     }, []);


  return (
    <>
    <div className="gabriela-intro">
        <h1 style={{color: "#c38820"}}>Mis Libros</h1>
        <h2>Te invito a un recorrido por mi bibliografía, para que juntas podamos seguir creciendo y sanando.</h2>
    </div>
     <div className='cards__container'>
            <div className='cards__wrapper'>
            <ul className='cards__items' >
            { 
                items.map(({ id, imagen, titulo, texto, path, textoBoton }) => (
                <CardItem
                key={id}
                imagen={imagen}
                titulo={titulo}
                texto={texto}
                path={path}
                textoBoton={textoBoton}
                >
                </CardItem>
                ))
            }
        </ul>
        </div>
   </div>
   <Footer />
   </>
  )
}

export default MisLibros;