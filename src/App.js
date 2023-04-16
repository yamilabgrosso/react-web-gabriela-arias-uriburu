import React from 'react';
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

function App() {

  return (
    <>
      <Router>
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
