import React, { useEffect, useState } from 'react';
import '../../App.css';
import axios from 'axios';
import '../Cards.css';
import Footer from '../Footer';
import CardItemLibros from '../CardItemLibros';

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
                items.map(({ id, imagen, titulo, texto, path, textoModal, textoBoton }) => (
                <CardItemLibros
                key={id}
                imagen={imagen}
                titulo={titulo}
                texto={texto}
                path={path}
                textoModal={textoModal}
                textoBoton={textoBoton}
                >
                </CardItemLibros>
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