// src/App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importar Router, Route, y Routes
import Header from './components/Header.';
import Footer from './components/Footer.';
import Home from './pages/Home';
import Cursos from './pages/Cursos';
import Login from './pages/Login';

function App() {
  return (
    <Router> {/* Envolver todo en el Router */}
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />        {/* Ruta para la página de inicio */}
            <Route path="/cursos" element={<Cursos />} /> {/* Ruta para la página de cursos */}
            <Route path="/login" element={<Login />} />  {/* Ruta para la página de login */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
