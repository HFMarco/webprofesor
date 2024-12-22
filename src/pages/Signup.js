// src/pages/Signup.js
import React, { useState } from 'react';

const Signup = () => {
  // Estados para almacenar los valores de los campos del formulario
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevenir el comportamiento predeterminado del formulario (recarga de página)

    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    // Aquí normalmente iría el código para enviar los datos a un backend
    console.log('Registrado con éxito', { email, password });
  };

  return (
    <div>
      <h2>Registrarse</h2>
      <form onSubmit={handleSubmit}> {/* Evitar recarga de página al enviar el formulario */}
        <div>
          <label htmlFor="email">Correo electrónico:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Actualizar el estado con el valor del campo
            placeholder="Ingresa tu correo"
          />
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Actualizar el estado con el valor del campo
            placeholder="Ingresa tu contraseña"
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirmar Contraseña:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)} // Actualizar el estado con el valor del campo
            placeholder="Confirma tu contraseña"
          />
        </div>
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default Signup;
