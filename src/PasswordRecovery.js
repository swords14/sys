import React from 'react';
import './PasswordRecovery.css'; // Estilos separados

function PasswordRecovery() {
  return (
    <div className="password-recovery-container">
      <div className="step-box">
        <h2>Password Recovery</h2>
        <ol className="steps-list">
          <h1>Para recuperar sua senha em caso de perda solicite ao administrador da loja ou entre em contato com o suporte</h1>
          
        </ol>
        <p>Precisa de mais ajuda? <a href="#support">Contate nosso suporte</a></p>
      </div>
    </div>
  );
}

export default PasswordRecovery;
