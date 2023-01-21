import React from 'react';
import { useState, useEffect } from 'react';
import '../../App.css';
import axios from 'axios';
import '../Cards.css';
import CardItem from '../CardItem';
import Footer from '../Footer';
import { AnimatePresence } from 'framer-motion';
import Modal from '../Modal';
//import Cards from '../Cards';



function Talleres() {
  const [items, setItems] = useState([]);

 useEffect(() => {
   axios('../data-talleres.json').then((res) => setItems (res.data));
   
  }, []);

  return (

  <AnimatePresence mode="wait">
    
    <div className='gabriela-intro' style={{ paddingTop: '1rem'}}>
        <h1>Talleres</h1>
        <h2>Te proponemos un viaje al encuentro de tu<br>
        </br> esencia con herramientas propias para dejar de<br></br> ser víctima y convertirte en protagonista de tu propia vida.</h2>
        </div>
    <div className='cards' style={{ paddingTop: '.2rem'}}>

      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items' >
          { 
            items.map(({ id, imagen, nombre, texto, textoModal }) => (
              <CardItem 
              key={id}
              imagen={imagen}
              nombre={nombre}
              texto={texto}
              textoModal={textoModal}
              >
              </CardItem>
            ))
          }

              </ul>
     
        </div>
      </div>
    </div>

      <Footer />
    </AnimatePresence>

  );
}



export default Talleres;