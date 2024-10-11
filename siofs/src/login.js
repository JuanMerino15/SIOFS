import React, { useState } from 'react';
import './login.css'; // Importar estilos personalizados

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Lógica de autenticación (llamada a la API, etc.)
    console.log('Username:', username, 'Password:', password);
  };

  return (
    <div className="login-container">
      <div className="image-panel">
        <img src="login_image.png" alt="Imagen" />
      </div>

      <div className="form-panel">
        <div className="logo">
          <img src="logo.png" alt="SIOFS Logo" />
        </div>
        <h1>SIOFS</h1>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="username">Usuario</label>
            <input
              type="text"
              id="username"
              placeholder="Usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">INGRESAR</button>
        </form>
        <a href="/forgot-password" className="forgot-link">¿Olvidó su contraseña?</a>
      </div>
    </div>
  );
};

export default Login;
