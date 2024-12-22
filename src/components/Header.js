// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom'; // Importar el componente Link

const Header = () => {
  return (
    <header>
      <nav>
        <h1>Curso de Matemáticas</h1>
        <ul>
          <li><Link to="/">Inicio</Link></li>   {/* Usar Link en lugar de <a> */}
          <li><Link to="/cursos">Cursos</Link></li>
          <li><Link to="/login">Iniciar sesión</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
