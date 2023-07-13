import { React, useState, useEffect} from 'react';
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
// import vinculos2 from './components/images/vinculos2modal.jpg'
import { Button } from '@mui/material';
// import videoHome from './components/images/home.mp4'
import homosapiens from './components/images/homosapiens.jpeg'
import videoHomosapiens from './components/images/video-homosapiens.mp4'


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

  useEffect(() => {
  
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        handleCloseModal();
        handleCloseSecondModal();
      }
    };
  
    document.addEventListener('keydown', handleEscapeKey);
  
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
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
            <div className="modal" style={{ position: "fixed", zIndex: 999, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <button className='btn--primary btnModalHome'
                style={{
                  cursor: 'pointer',
                  borderRadius: '10px',
                  backgroundColor: '#588290',
                  color: 'fff',
                  padding: '5px',
                  fontWeight: 'bold',
                  width: '80px',
                  margin: '0 0 0px 78%'
                }} onClick={() => handleCloseModal()}>Cerrar</button>
               <h2 className='textoModalHome'>Atención Rosario, presentamos Vínculos II y tenemos taller de constelaciones familiares</h2> 
              <img className='imgModalHome'
                style={{
                  minWidth: '50px',
                  maxWidth: '310px',
                  paddingTop: '0px',
                  margin: '0 auto',
                  paddingBottom: '20px'
                }} src={homosapiens} alt='Vinculos II Presentación' />
              {/* <video className='videoModalHome' width="80%" height="300px" autoplay="autoplay" muted loop controls>
                <source src={videoHome} type="video/mp4"></source>
                Tu navegador no admite el elemento de video.
              </video> */}

              <span>
                <Button style={{ backgroundColor: '#cfab2e', borderRadius: "10px", color: 'white', margin: 0 }} onClick={() => handleOpenSecondModal()}
                >
                  Ver más</Button>
              </span>
            </div>
          </div>
        )}


        {showSecondModal && (
          <div className="modal-wrapper">
            <div className="modal second-modal">
            <button className='btn--primary btnModalHome'
                style={{
                  cursor: 'pointer',
                  borderRadius: '10px',
                  backgroundColor: '#588290',
                  color: 'fff',
                  padding: '5px',
                  fontWeight: 'bold',
                  width: '80px',
                  margin: '0 0 0px 78%'
                }} onClick={() => handleCloseSecondModal()}>Cerrar</button>
              <video className='videoModalConstelaciones' width="100%" height="400px" autoplay="autoplay" loop controls>
                <source src={videoHomosapiens} type="video/mp4"></source>
                Tu navegador no admite el elemento de video.
              </video>
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