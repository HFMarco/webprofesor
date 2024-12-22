// src/pages/Login.js
import React from 'react';

const Login = () => {
  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <form>
        <div>
          <label htmlFor="email">Correo electrónico:</label>
          <input type="email" id="email" placeholder="Ingresa tu correo" />
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input type="password" id="password" placeholder="Ingresa tu contraseña" />
        </div>
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
};

export default Login;
