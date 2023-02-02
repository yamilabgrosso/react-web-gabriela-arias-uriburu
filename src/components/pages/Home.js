import React, { useEffect, useState } from 'react';
import '../../App.css';
import Footer from '../Footer';
import ImgSection from '../ImgSection';
import axios from 'axios';
import CardItemHome from '../CardItemHome';

function Home() {

  const [items, setItems] = useState([]);

  useEffect(() => {
    axios('../data-cards-home.json').then((res) => setItems (res.data));
    
   }, []);
  return (
    <>
      <ImgSection />
      <div className='gabriela-intro'>
      <h1>Soy Gabriela Arias Uriburu</h1>
      <h2>y desde mi historia de vida es que comencé todo
       un camino de resiliencia y transformación que
       quiero<span style={{fontWeight: 600}}> compartir con vos</span>
        </h2>
      </div>
      <div className='cards__container'>
        <div className='cards__wrapper'>
        <ul className='cards__items' >
        { 
            items.map(({ id, imagen, titulo, texto, path, textoBoton }) => (
              <CardItemHome 
              key={id}
              imagen={imagen}
              titulo={titulo}
              texto={texto}
              path={path}
              textoBoton={textoBoton}
              >
              </CardItemHome>
            ))
          }
      </ul>
      </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
