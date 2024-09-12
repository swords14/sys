import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importando useNavigate para navegação
import './Login.css'; // Arquivo de estilos separado

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Hook para navegação

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
              type="password" // Corrigi o tipo de input para "password"
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
            <button
              type="button"
              className="link-button"
              onClick={() => navigate('/password-recovery')} // Navegação para a tela de recuperação de senha
            >
              Esqueceu sua senha?
            </button>
          </div>
          <button type="submit" className="login-btn">Entrar</button>
        </form>
        <p>
          Não possui uma conta?{' '}
          <button
            type="button"
            className="link-button"
            onClick={() => navigate('/create-account')} // Navegação para a tela de registro
          >
            Registrar
          </button>
        </p>
      </div>
    </div>
  );
}

export default Login;
