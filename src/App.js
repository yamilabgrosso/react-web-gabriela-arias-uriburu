import React from 'react';
import './App.css';
// React Router 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Components
import Talleres from './components/pages/Talleres';
import Home from './components/pages/Home';
import Navbar from './components/Navbar';


function App() {


  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/talleres' element={<Talleres />} />          
        </Routes>
      </Router>

    </>
  );
}

export default App;
