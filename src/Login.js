import React, { useState } from 'react';
import './Login.css'; // Arquivo de estilos separado

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Lógica de autenticação aqui
    console.log('Usuário:', username, 'Senha:', password);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Madereira Jurema</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <input
              type="text"
              placeholder="Usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="Senha"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="options">
            <label>
              <input type="checkbox" />
              Lembrar-me
            </label>
            <a href="#Esqueceu sua senha">Esqueceu sua senha?</a>
          </div>
          <button type="submit" className="login-btn">Entrar</button>
        </form>
        <p>
          Não possui uma conta? <a href="#Register">Registrar</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
