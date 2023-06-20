import React from 'react';
import { useState, useEffect } from 'react';
import '../../App.css';
import axios from 'axios';
import '../Cards.css';
import CardItemTalleres from '../CardItemTalleres';
import Footer from '../Footer';
import { AnimatePresence } from 'framer-motion';
//import Cards from '../Cards';


function Talleres() {
  const [items, setItems] = useState([]);
  const [filtro, setFiltro] = useState('');

  useEffect(() => {
    axios('../data-talleres.json').then((res) => setItems(res.data));
  }, []);

  const handleFiltroChange = (event) => {
    setFiltro(event.target.value);
  };

  const talleresFiltrados = filtro ? items.filter(item => item.tipo === filtro) : items;

  return (
    <AnimatePresence mode="wait">
      <div className='gabriela-intro'>
        <h1 style={{ color: "#c38820" }}>Talleres</h1>
        <h2>Te proponemos un viaje al encuentro de tu esencia con herramientas propias para dejar de ser víctima y convertirte en protagonista de tu propia vida.</h2>
      </div>
      <div className='filter-container'>
        <label htmlFor="filtro">Filtrar taller por:</label>
        <select id="filtro" value={filtro} onChange={handleFiltroChange}>
          <option value="">Todos</option>
          <option value="Virtuales">Virtuales</option>
          <option value="Presenciales">Presenciales</option>
          <option value="Seminarios">Seminarios</option>
          <option value="Grabaciones">Grabaciones</option>
          <option value="Constelaciones-familiares">Constelaciones familiares</option>
          <option value="Basados-en-libros">Basados en libros</option>
          <option value="Proximos-talleres">Próximos talleres</option>
          {/* Agrega más opciones según los tipos de talleres que tengas */}
        </select>
      </div>
      <div className='cards' style={{ paddingTop: '.2rem' }}>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              {talleresFiltrados.map(({ id, imagen, nombre, texto, textoModal }) => (
                <CardItemTalleres
                  key={id}
                  imagen={imagen}
                  nombre={nombre}
                  texto={texto}
                  textoModal={textoModal}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </AnimatePresence>
  );
}

export default Talleres;