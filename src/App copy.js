import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Talleres from './components/pages/Talleres';
import Home from './components/pages/Home';
import Navbar from './components/Navbar';
import Encuentros from './components/pages/Encuentros';
import MisLibros from './components/pages/MisLibros';
import Nosotras from './components/pages/Nosotras';
import Prensa from './components/pages/Prensa';
import { Button } from '@mui/material';
import constelaciones from './components/images/constelaciones.jpeg';
import './App.css';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showSecondModal, setShowSecondModal] = useState(false);

  useEffect(() => {
    setShowModal(true);
    document.body.classList.add('modal-background');

    return () => {
      document.body.classList.remove('modal-background');
    };
  }, []);

  const handleCloseModal = () => {
    document.body.classList.remove('modal-background');
    setShowModal(false);
  };

  const handleOpenSecondModal = () => {
    setShowSecondModal(true);
  };

  const handleCloseSecondModal = () => {
    setShowSecondModal(false);
  };

  return (
    <>
      <div>
        {showModal && (
          <div className="modal-wrapper">
            <div className="modal">
              <button
                className="btn--primary btnModalHome"
                onClick={() => handleCloseModal()}
              >
                Cerrar
              </button>
              <img
                className="imgModalHome"
                src={constelaciones}
                alt="Constelaciones"
              />
              <a
                href="https://tienda.ladoh.com/producto/entradas-evento-%C2%A8nuevas-constelaciones-familiares-cuanticas"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', paddingBottom: '10px' }}
              >
                <Button
                  style={{
                    backgroundColor: '#cfab2e',
                    borderRadius: '10px',
                    color: 'white',
                    margin: 0,
                  }}
                >
                  Comprar entradas
                </Button>
              </a>
              <Button
                onClick={() => handleOpenSecondModal()}
                style={{
                  backgroundColor: '#cfab2e',
                  borderRadius: '10px',
                  color: 'white',
                  margin: 0,
                }}
              >
                Ver más
              </Button>
            </div>
          </div>
        )}

        {showSecondModal && (
          <div className="modal-wrapper">
            <div className="modal second-modal">
              <button
                className="btn--primary btnModalHome"
                onClick={() => handleCloseSecondModal()}
              >
                Cerrar
              </button>
              <p>Contenido del segundo modal</p>
            </div>
          </div>
        )}
      </div>
      <Router >
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/talleres' element={<Talleres />} />
          <Route path='/encuentros' element={<Encuentros />} />
          <Route path='/mislibros' element={<MisLibros />} />
          <Route path='/nosotras' element={<Nosotras />} />
          <Route path='/prensa' element={<Prensa />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;