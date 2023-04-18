import { React, useState, useEffect } from 'react';
import './App.css';
// React Router 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Components
import Talleres from './components/pages/Talleres';
import Home from './components/pages/Home';
import Navbar from './components/Navbar';
import Encuentros from './components/pages/Encuentros';
import MisLibros from './components/pages/MisLibros';
import Nosotras from './components/pages/Nosotras';
import Prensa from './components/pages/Prensa';
import vinculos2 from './components/images/vinculos2modal.jpg'
import { Button } from '@mui/material';

function App() {

    const [showModal, setShowModal] = useState(false);
    
  
    useEffect(() => {
      setShowModal(true);
      document.body.classList.add('modal-background'); // Agregar la clase modal-background al body
      
      return () => {
        document.body.classList.remove('modal-background'); // Eliminar la clase modal-background del body
      };
    }, []);
  
    const handleCloseModal = () => {
      document.body.classList.remove('modal-background'); // Eliminar la clase modal-background del body
      setShowModal(false);
    };

  return (
    <>
        <div>
          {showModal && (
            <div className="modal-wrapper">
              <div className="modal" style={{ position: "fixed", zIndex: 999 }}>
              <button className='btn--primary'
                    style={{
                    cursor: 'pointer',
                    borderRadius: '10px',
                    backgroundColor: '#588290',
                    color: 'fff',
                    padding: '5px',
                    fontWeight:'bold',
                    width: '80px',
                    margin: '0 0 0px 75%'
                  }} onClick={() => handleCloseModal()}>Cerrar</button> 
                <img
                    style={{
                      width: '550px',
                      maxWidth: '300px',
                      margin: '0 auto',
                      paddingBottom: '30px'
                    }} src={vinculos2} alt='Vinculos II'/>
                <a href='https://www.kier.com.ar/Papel/9789501760644/V%C3%ADnculos+Ii+-+Preventa+-+Disponible+A+Partir+Del+24+De+Abril' target='blank' style={{textDecoration: 'none'}}>
                    <Button style={{ backgroundColor: '#cfab2e', borderRadius: "10px", color: 'white', margin: 0}}>Comprar</Button>
                    </a>
              </div>
            </div>
          )}
        </div>
      <Router >
        <Navbar />
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/talleres' element={<Talleres />} />    
            <Route path='/encuentros' element={<Encuentros />}/>    
            <Route path='/mislibros' element={<MisLibros />}/>      
            <Route path='/nosotras' element={<Nosotras />} />
            <Route path='/prensa' element={<Prensa />} />
          </Routes>
        </Router>

    </>
  );
}

export default App;
