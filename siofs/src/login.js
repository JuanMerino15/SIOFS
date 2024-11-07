import React, { useState } from 'react';
import './login.css';

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
        <img src="/images/login-image.png" alt="Imagen" />
      </div>

      <div className="form-panel">
        <div className="form-content"> {/* Área blanca */}
          <div className="logo">
            <img src="/images/logo.png" alt="SIOFS Logo" />
          </div>
          <h1>SIOFS</h1>
          <form onSubmit={handleLogin}>
            <div className="input-group">
              <img src="/images/Profile.png" alt="Profile" style={{ marginRight: '10px', width: '20px', height: '20px' }} />
              <input
                type="text"
                id="username"
                placeholder="USUARIO"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <img src="/images/Lock.png" alt="Lock" style={{ marginRight: '10px', width: '20px', height: '20px' }} />
              <input
                type="password"
                id="password"
                placeholder="CONTRASEÑA"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="login-button">INGRESAR</button>
          </form>
          <a href="/forgot-password" className="forgot-link">¿Olvidó su contraseña?</a>
        </div> {/* Fin del área blanca */}
      </div>
    </div>
  );
};

export default Login;
