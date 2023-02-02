import React from 'react';
import './App.css';
// React Router 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Components
import Talleres from './components/pages/Talleres';
import Home from './components/pages/Home';
import Navbar from './components/Navbar';
import Encuentros from './components/pages/Encuentros';
import Libros from './components/pages/Libros';


function App() {


  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/talleres' element={<Talleres />} />    
          <Route path='/encuentros' element={<Encuentros />}/>    
          <Route path='/mislibros' element={<Libros />}/>      
        </Routes>
      </Router>

    </>
  );
}

export default App;
